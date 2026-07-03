const ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>',
};

function setTrackFilter(track, btn) {
  activeTrack = track;
  document.querySelectorAll('.track-tabs .filter-btn').forEach((b) => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  applyFilter();
}

function setStatusFilter(status, btn) {
  statusFilter = status;
  document.querySelectorAll('.status-filters .filter-btn').forEach((b) => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  applyFilter();
}

function pick(lessonCode) {
  sel = lessonCode;
  document.getElementById('sel-info').innerHTML = selInfoHTML(lessonCode);
  document.getElementById('btn-start').style.display = '';
  document.getElementById('btn-complete').style.display = done.has(lessonCode) ? 'none' : '';
  document.getElementById('btn-undo').style.display = done.has(lessonCode) ? '' : 'none';
  refreshTiles();
}

function startLesson() {
  if (!sel) return;
  const { topic } = LESSONS[sel];
  const prompt = `jump ${sel} — ${topic}`;
  navigator.clipboard.writeText(prompt)
    .then(() => showToast('Prompt copied! Paste in your Claude project.'))
    .catch(() => {
      document.getElementById('sel-info').innerHTML = `<strong>Copy this prompt:</strong> ${prompt}`;
    });
}

function markDone() {
  if (!sel) return;
  done.add(sel);
  save();
  document.getElementById('sel-info').innerHTML = selInfoHTML(sel);
  document.getElementById('btn-complete').style.display = 'none';
  document.getElementById('btn-undo').style.display = '';
  refreshTiles();
  updateStats();
  showToast('Lesson ' + sel + ' marked complete!');
}

function undoDone() {
  if (!sel) return;
  done.delete(sel);
  save();
  document.getElementById('sel-info').innerHTML = selInfoHTML(sel);
  document.getElementById('btn-complete').style.display = '';
  document.getElementById('btn-undo').style.display = 'none';
  refreshTiles();
  updateStats();
}

function showReset() {
  document.getElementById('btn-trigger').style.display = 'none';
  document.getElementById('reset-confirm').classList.add('show');
}
function hideReset() {
  document.getElementById('btn-trigger').style.display = '';
  document.getElementById('reset-confirm').classList.remove('show');
}
function clearSelectionUI() {
  sel = null;
  document.getElementById('sel-info').textContent = 'Select a lesson below to begin';
  document.getElementById('btn-start').style.display = 'none';
  document.getElementById('btn-complete').style.display = 'none';
  document.getElementById('btn-undo').style.display = 'none';
}
function doReset() {
  done.clear();
  save();
  hideReset();
  const searchEl = document.getElementById('search');
  searchEl.value = '';
  searchQuery = '';
  clearSelectionUI();
  refreshTiles();
  updateStats();
  showToast('All progress reset.');
}

function exportProgress() {
  const data = { version: 2, exportedAt: new Date().toISOString(), done: [...done] };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pts-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Progress exported.');
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const arr = Array.isArray(parsed.done) ? parsed.done : Array.isArray(parsed) ? parsed : null;
      if (!arr) throw new Error('Invalid file');
      const valid = arr.filter((code) => typeof code === 'string' && LESSONS[code]);
      done = new Set(valid);
      save();
      clearSelectionUI();
      refreshTiles();
      updateStats();
      showToast(`Imported ${valid.length} completed lessons.`);
    } catch (e) {
      showToast('Import failed: invalid file.');
    }
  };
  reader.readAsText(file);
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* ignore */ }
  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', t === 'light' ? '#f1f5f9' : '#0f172a');
  document.getElementById('theme-icon').innerHTML = t === 'light' ? ICONS.moon : ICONS.sun;
  document.getElementById('theme-label').textContent = t === 'light' ? 'Dark' : 'Light';
  document.getElementById('theme-toggle').setAttribute('aria-label', `Switch to ${t === 'light' ? 'dark' : 'light'} theme`);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('search').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  applyFilter();
});

buildAllTracks();
refreshTiles();
updateStats();
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');
