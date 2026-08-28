// Chirius analytics — event queue + batched send to track-event Edge Function
(function () {
  const QUEUE_KEY = 'p131-analytics-queue';
  const MAX_QUEUE = 500;
  const FLUSH_THRESHOLD = 10;
  const FLUSH_INTERVAL_MS = 30000;

const TRACK_URL = AUTH_CONFIG.supabaseUrl + '/functions/v1/track-event';
const ANON_KEY = AUTH_CONFIG.anonKey;

  function loadQueue() {
    try {
      const raw = localStorage.getItem(QUEUE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveQueue(queue) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-MAX_QUEUE)));
    } catch {
      // storage full or unavailable — drop silently, analytics is non-critical
    }
  }

  function track(eventName, properties) {
    const auth = getStoredAuth();
    if (!auth) return; // not logged in, nothing to attribute this to

    const queue = loadQueue();
    queue.push({
      event_name: eventName,
      properties: properties || {},
      occurred_at: new Date().toISOString(),
    });
    saveQueue(queue);

    if (queue.length >= FLUSH_THRESHOLD) {
      flush();
    }
  }

  async function flush() {
    const auth = getStoredAuth();
    if (!auth) return;

    const queue = loadQueue();
    if (queue.length === 0) return;

    try {
      const res = await fetch(TRACK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': ANON_KEY,
        },
        body: JSON.stringify({
          staff_id: auth.staffId,
          restaurant_id: auth.restaurantId,
          events: queue,
        }),
      });

      if (res.ok) {
        saveQueue([]); // sent successfully, clear
      }
      // on failure, leave queue intact — will retry next flush
    } catch {
      // offline or network error — leave queue intact
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush();
  });

  setInterval(flush, FLUSH_INTERVAL_MS);

  window.ChiriusAnalytics = { track, flush };
})();
