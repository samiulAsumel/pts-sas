const TRACK_CODES = ['W', 'L', 'N', 'AU', 'TOS', 'PY'];
const TRACK_COLOR = { W: 'var(--track-w)', L: 'var(--track-l)', N: 'var(--track-n)', AU: 'var(--track-au)', TOS: 'var(--track-tos)', PY: 'var(--track-py)' };

const KEY = 'pts_global_v3';
const THEME_KEY = 'pts_theme';

// LESSONS: code ("W47", "TOS12") -> { track, num, topic }
const LESSONS = {};
const TRACK_TOTAL = {};
TRACK_CODES.forEach((code) => {
  let n = 0;
  CURRICULUM[code].modules.forEach((mod) => {
    mod.topics.forEach((topic) => {
      n += 1;
      LESSONS[code + n] = { track: code, num: n, topic: cleanTopic(topic) };
    });
  });
  TRACK_TOTAL[code] = n;
});
const TOTAL_LESSONS = Object.values(TRACK_TOTAL).reduce((a, b) => a + b, 0);

function cleanTopic(t) {
  return t.replace(/`/g, '');
}

let done = new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
let sel = null;
let activeTrack = 'all';
let statusFilter = 'all';
let searchQuery = '';

function save() {
  localStorage.setItem(KEY, JSON.stringify([...done]));
}

function matchesSearch(code, track, topic) {
  if (!searchQuery) return true;
  return code.toLowerCase().includes(searchQuery) ||
    track.toLowerCase().includes(searchQuery) ||
    topic.toLowerCase().includes(searchQuery);
}
