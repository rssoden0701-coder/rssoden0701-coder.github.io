(function () {
  const reservationUrl = 'https://www.tablecheck.com/ja/mutsuki-miyakojima/reserve/menu?menu_lists=6a86b0498e978b06dd73fd0b';
  const labels = {
    ja: 'このステーキを予約',
    en: 'Reserve this steak',
    it: 'Prenota questa bistecca',
    ko: '이 스테이크 예약',
    'zh-Hant': '預約此牛排',
    zh: '預約此牛排',
  };
  const label = labels[document.documentElement.lang] || 'Reserve';

  document.querySelectorAll('.steak .c .bd').forEach(function (card) {
    if (card.querySelector('.sbtn')) return;
    const button = document.createElement('a');
    button.href = reservationUrl;
    button.target = '_blank';
    button.rel = 'noopener';
    button.className = 'sbtn';
    button.textContent = label;
    button.setAttribute('aria-label', label);
    button.style.cssText = 'display:block;margin-top:16px;padding:10px 12px;border:1px solid rgba(201,169,97,.62);color:#e0c88a;text-align:center;font-family:var(--sans);font-size:12px;letter-spacing:.08em;transition:.25s';
    button.addEventListener('mouseenter', function () { button.style.background = '#c9a961'; button.style.color = '#0f1829'; });
    button.addEventListener('mouseleave', function () { button.style.background = 'transparent'; button.style.color = '#e0c88a'; });
    button.addEventListener('click', function () { if (typeof gtag === 'function') gtag('event', 'reserve_click'); });
    card.appendChild(button);
  });
})();
