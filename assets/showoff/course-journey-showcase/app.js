// Theme + language toggle for the course journey showcase
(function () {
  'use strict';

  const root = document.documentElement;

  // ---------- Theme: system | light | dark ----------
  const themeButtons = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('mx-theme') || 'system';
  applyTheme(savedTheme);

  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.themeSet;
      applyTheme(next);
      localStorage.setItem('mx-theme', next);
    });
  });

  function applyTheme(mode) {
    root.setAttribute('data-theme', mode);
    themeButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.themeSet === mode);
    });
  }

  // ---------- Language: vi | en (toggle) ----------
  const langBtn = document.getElementById('lang-toggle');
  const savedLang = localStorage.getItem('mx-lang') || 'vi';
  applyLang(savedLang);

  langBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-lang');
    const next = current === 'vi' ? 'en' : 'vi';
    applyLang(next);
    localStorage.setItem('mx-lang', next);
  });

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    // Swap text content for nodes that have data-vi/data-en
    document.querySelectorAll('[data-vi][data-en]').forEach((el) => {
      const value = el.dataset[lang];
      if (value !== undefined) el.textContent = value;
    });

    // Update toggle label
    const labelEl = langBtn.querySelector('.lang-text');
    if (labelEl) labelEl.textContent = lang === 'vi' ? 'VI / EN' : 'EN / VI';
  }
})();
