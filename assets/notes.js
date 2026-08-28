// 話者用 原稿パネル: 右下ボタン または N キーで開閉、Esc で閉じる
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var notes = document.querySelector('.notes');
    if (!notes) return;

    var btn = document.createElement('button');
    btn.className = 'notes-toggle';
    btn.type = 'button';
    btn.textContent = '原稿 (N)';
    document.body.appendChild(btn);

    function toggle(force) {
      var open = force !== undefined ? force : notes.dataset.open !== 'true';
      notes.dataset.open = open ? 'true' : 'false';
      btn.textContent = open ? '原稿を隠す (N)' : '原稿 (N)';
    }

    btn.addEventListener('click', function () { toggle(); });
    document.addEventListener('keydown', function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'n' || e.key === 'N') toggle();
      if (e.key === 'Escape') toggle(false);
    });
  });
})();
