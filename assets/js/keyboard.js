function visibleTiles() {
  return Array.from(document.querySelectorAll('.lbtn')).filter((el) => {
    if (el.classList.contains('hidden')) return false;
    const section = el.closest('.track-section');
    return section && !section.classList.contains('hidden');
  });
}

document.addEventListener('keydown', (e) => {
  const activeTagName = (document.activeElement.tagName || '').toLowerCase();
  const typing = activeTagName === 'input' || activeTagName === 'textarea';

  if (e.key === '/' && !typing) {
    e.preventDefault();
    document.getElementById('search').focus();
    return;
  }
  if (e.key === 'Escape') {
    if (document.getElementById('reset-confirm').classList.contains('show')) { hideReset(); return; }
    if (typing && document.activeElement.id === 'search') {
      document.activeElement.value = '';
      searchQuery = '';
      applyFilter();
      document.activeElement.blur();
      return;
    }
  }
  if (typing) return;

  if (document.activeElement.classList.contains('lbtn')) {
    const tiles = visibleTiles();
    const idx = tiles.indexOf(document.activeElement);
    if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && idx > -1) {
      e.preventDefault();
      tiles[Math.min(idx + 1, tiles.length - 1)].focus();
      return;
    }
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && idx > -1) {
      e.preventDefault();
      tiles[Math.max(idx - 1, 0)].focus();
      return;
    }
  }
  if ((e.key === 'c' || e.key === 'C') && sel && !done.has(sel)) {
    e.preventDefault();
    markDone();
    return;
  }
  if (e.key === 'Enter' && sel && !document.activeElement.classList.contains('lbtn') && document.getElementById('btn-start').style.display !== 'none') {
    startLesson();
  }
});
