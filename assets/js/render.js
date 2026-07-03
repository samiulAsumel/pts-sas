function buildTrackSection(code) {
  const t = CURRICULUM[code];
  const wrap = document.createElement('section');
  wrap.className = 'track-section';
  wrap.id = 'track-' + code;
  wrap.dataset.track = code;

  const header = document.createElement('div');
  header.className = 'track-section-header';
  header.style.setProperty('--tc', TRACK_COLOR[code]);
  header.innerHTML = `<h2>${code} — ${t.name}</h2><span>${t.sub} · ${TRACK_TOTAL[code]} lessons</span>`;
  wrap.appendChild(header);

  let running = 0;
  t.modules.forEach((mod, mi) => {
    const modStart = running + 1;
    const modEnd = running + mod.topics.length;
    running = modEnd;

    const label = document.createElement('div');
    label.className = 'phase-label';
    label.id = `phase-${code}-${mi}`;
    label.innerHTML = `${mod.title} <span>${code}${modStart}–${code}${modEnd}</span>`;
    wrap.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-labelledby', label.id);

    mod.topics.forEach((topic, ti) => {
      const num = modStart + ti;
      const lessonCode = code + num;
      const isCap = !!CAPSTONES[lessonCode];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lbtn';
      btn.id = 'lb-' + lessonCode;
      btn.dataset.code = lessonCode;
      btn.dataset.track = code;
      btn.title = `${lessonCode} — ${cleanTopic(topic)}`;
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = `<span class="lnum">${num}</span><span class="ltag">${code}</span>` +
        (isCap ? '<span class="cap-star" aria-hidden="true">★</span>' : '');
      btn.onclick = () => pick(lessonCode);
      grid.appendChild(btn);
    });
    wrap.appendChild(grid);
  });
  return wrap;
}

function buildAllTracks() {
  const container = document.getElementById('tracks');
  container.innerHTML = '';
  TRACK_CODES.forEach((code) => container.appendChild(buildTrackSection(code)));
}

function applyFilter() {
  TRACK_CODES.forEach((code) => {
    const section = document.getElementById('track-' + code);
    const trackVisible = activeTrack === 'all' || activeTrack === code;
    section.classList.toggle('hidden', !trackVisible);
    if (!trackVisible) return;

    let anyVisibleInTrack = false;
    section.querySelectorAll('.phase-label').forEach((label) => {
      const grid = label.nextElementSibling;
      let anyVisibleInPhase = false;
      grid.querySelectorAll('.lbtn').forEach((el) => {
        const lessonCode = el.dataset.code;
        const { topic } = LESSONS[lessonCode];
        const isDone = done.has(lessonCode);
        let show = true;
        if (statusFilter === 'done') show = isDone;
        else if (statusFilter === 'todo') show = !isDone;
        if (show) show = matchesSearch(lessonCode, code, topic);
        el.classList.toggle('hidden', !show);
        if (show) anyVisibleInPhase = true;
      });
      label.classList.toggle('hidden', !anyVisibleInPhase);
      grid.classList.toggle('hidden', !anyVisibleInPhase);
      if (anyVisibleInPhase) anyVisibleInTrack = true;
    });
    section.classList.toggle('hidden', !anyVisibleInTrack);
  });
}

function refreshTiles() {
  Object.keys(LESSONS).forEach((lessonCode) => {
    const el = document.getElementById('lb-' + lessonCode);
    if (!el) return;
    const isDone = done.has(lessonCode);
    const isSel = lessonCode === sel;
    el.classList.toggle('sel', isSel);
    el.classList.toggle('done', isDone && !isSel);
    el.setAttribute('aria-pressed', String(isSel));
    const { track, topic } = LESSONS[lessonCode];
    el.setAttribute('aria-label', `Lesson ${lessonCode}, ${track} track, ${topic}, ${isDone ? 'completed' : 'not started'}${isSel ? ', selected' : ''}`);
  });
  applyFilter();
}

function selInfoHTML(lessonCode) {
  const { track, topic } = LESSONS[lessonCode];
  const isDone = done.has(lessonCode);
  const cap = CAPSTONES[lessonCode];
  let html = `<strong>Lesson ${lessonCode} (${track}/${TRACK_TOTAL[track]}):</strong> ${topic}`;
  if (isDone) html += ' <span class="done-tag">(completed ✓)</span>';
  if (cap) html += ` <span class="capstone-tag">★ Capstone: ${cap}</span>`;
  return html;
}

function updateStats() {
  const counts = {};
  TRACK_CODES.forEach((c) => { counts[c] = 0; });
  done.forEach((code) => {
    const entry = LESSONS[code];
    if (entry) counts[entry.track] += 1;
  });
  const totalDone = done.size;
  const pct = TOTAL_LESSONS ? Math.round((totalDone / TOTAL_LESSONS) * 100) : 0;

  document.getElementById('s-done').textContent = `${totalDone} / ${TOTAL_LESSONS}`;
  document.getElementById('s-pct').textContent = pct + '%';
  document.getElementById('pbar').style.width = pct + '%';
  document.getElementById('pbar-wrap').setAttribute('aria-valuenow', String(pct));

  TRACK_CODES.forEach((code) => {
    const total = TRACK_TOTAL[code];
    const d = counts[code];
    const trackPct = total ? Math.round((d / total) * 100) : 0;
    document.getElementById('tc-val-' + code).textContent = `${d} / ${total}`;
    document.getElementById('tc-bar-' + code).style.width = trackPct + '%';
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
