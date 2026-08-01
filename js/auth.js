// Prime 131 — staff auth gate.
// Logs in / registers against the Supabase Edge Functions, stores the
// signed JWT in localStorage (p131- prefix, matching every other saved
// key), and only re-checks validity on app launch -- not mid-session,
// so a staff member's session survives the whole shift on their own phone.

const AUTH_TOKEN_KEY = `${BRAND.storageKeyPrefix}-auth-token`;
const AUTH_USER_KEY = `${BRAND.storageKeyPrefix}-auth-user`;

function decodeJwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

function getStoredAuth() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (!token) return null;
  const payload = decodeJwtPayload(token);
  if (!payload || !payload.exp || payload.exp * 1000 <= Date.now()) {
    clearAuth();
    return null;
  }
  let user = {};
  try { user = JSON.parse(localStorage.getItem(AUTH_USER_KEY)) || {}; } catch (e) {}
  return { token, ...user };
}

function clearAuth() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

function storeAuth(data) {
  localStorage.setItem(AUTH_TOKEN_KEY, data.token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify({
    staffId: data.staff_id, name: data.name, role: data.role
  }));
}

async function callAuthFunction(fnName, body) {
  let res;
  try {
    res = await fetch(`${AUTH_CONFIG.supabaseUrl}/functions/v1/${fnName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: AUTH_CONFIG.anonKey },
      body: JSON.stringify(body)
    });
  } catch (e) {
    throw new Error("Couldn't reach the server. Check your connection.");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Something went wrong. Try again.");
  return data;
}

function renderAuthScreen(onSuccess) {
  app.innerHTML = "";
  app.classList.remove("home-view");

  const wrap = document.createElement("div");
  wrap.className = "auth-screen";
  wrap.innerHTML = `
    <div class="auth-brand">
      <div class="auth-stamp">${BRAND.stampText}</div>
      <div>
        <p class="auth-brand-name">${BRAND.fullName}</p>
        <p class="auth-brand-sub">Staff training</p>
      </div>
    </div>
    <div class="auth-tabs">
      <button type="button" class="auth-tab active" data-tab="login">Log in</button>
      <button type="button" class="auth-tab" data-tab="register">New here?</button>
    </div>
    <form class="auth-panel" id="auth-panel-login" novalidate>
      <label class="auth-label">Your name</label>
      <input class="auth-input" name="name" placeholder="First and last name" autocomplete="name" required>
      <label class="auth-label">4-digit PIN</label>
      <input class="auth-input auth-pin" name="pin" type="password" placeholder="••••" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" autocomplete="current-password" required>
      <p class="auth-error" hidden></p>
      <button type="submit" class="auth-submit">Log in</button>
    </form>
    <form class="auth-panel" id="auth-panel-register" novalidate hidden>
      <label class="auth-label">Join code</label>
      <input class="auth-input" name="join_code" placeholder="Ask your manager" autocomplete="off" required>
      <label class="auth-label">Your name</label>
      <input class="auth-input" name="name" placeholder="First and last name" autocomplete="name" required>
      <label class="auth-label">Choose a 4-digit PIN</label>
      <input class="auth-input auth-pin" name="pin" type="password" placeholder="••••" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" autocomplete="new-password" required>
      <p class="auth-error" hidden></p>
      <button type="submit" class="auth-submit">Create account</button>
    </form>
  `;
  app.appendChild(wrap);

  const tabs = wrap.querySelectorAll(".auth-tab");
  const panels = {
    login: wrap.querySelector("#auth-panel-login"),
    register: wrap.querySelector("#auth-panel-register")
  };
  tabs.forEach((tab) => {
    tab.onclick = () => {
      tabs.forEach((t) => t.classList.toggle("active", t === tab));
      panels.login.hidden = tab.dataset.tab !== "login";
      panels.register.hidden = tab.dataset.tab !== "register";
    };
  });

  function showError(form, message) {
    const err = form.querySelector(".auth-error");
    err.textContent = message;
    err.hidden = false;
  }
  function clearFormError(form) {
    form.querySelector(".auth-error").hidden = true;
  }
  function setLoading(form, loading, idleLabel) {
    const btn = form.querySelector(".auth-submit");
    btn.disabled = loading;
    btn.textContent = loading ? "..." : idleLabel;
  }

  panels.login.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearFormError(panels.login);
    const name = panels.login.querySelector('[name="name"]').value.trim();
    const pin = panels.login.querySelector('[name="pin"]').value.trim();
    if (!/^\d{4}$/.test(pin)) { showError(panels.login, "Enter your 4-digit PIN."); return; }
    setLoading(panels.login, true, "Log in");
    try {
      const data = await callAuthFunction("staff-login", {
        restaurant_slug: AUTH_CONFIG.restaurantSlug, name, pin
      });
      storeAuth(data);
      onSuccess();
    } catch (err) {
      showError(panels.login, err.message);
      setLoading(panels.login, false, "Log in");
    }
  });

  panels.register.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearFormError(panels.register);
    const join_code = panels.register.querySelector('[name="join_code"]').value.trim();
    const name = panels.register.querySelector('[name="name"]').value.trim();
    const pin = panels.register.querySelector('[name="pin"]').value.trim();
    if (!/^\d{4}$/.test(pin)) { showError(panels.register, "Choose a 4-digit PIN."); return; }
    setLoading(panels.register, true, "Create account");
    try {
      const data = await callAuthFunction("staff-register", { join_code, name, pin });
      storeAuth(data);
      onSuccess();
    } catch (err) {
      showError(panels.register, err.message);
      setLoading(panels.register, false, "Create account");
    }
  });
}
