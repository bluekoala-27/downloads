/* ============================================================
   Downloads — Mgr. Frencken College
   ============================================================ */

(function () {

  /* ---------- toast ---------- */

  var toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);

  var toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2200);
  }

  /* ---------- download trigger ---------- */

  function triggerDownload(path) {
    var a = document.createElement('a');
    a.href = path;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /* ---------- wire up buttons ---------- */

  var buttons = document.querySelectorAll('.dl-btn');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var file = btn.getAttribute('data-file');
      var label = btn.querySelector('span').textContent.trim();

      if (!file || file === '#') {
        showToast(label + ' — nog geen link');
        return;
      }

      triggerDownload(file);
      showToast('Downloaden: ' + label + '…');

      btn.classList.add('done');
      setTimeout(function () {
        btn.classList.remove('done');
      }, 1200);
    });
  });

})();