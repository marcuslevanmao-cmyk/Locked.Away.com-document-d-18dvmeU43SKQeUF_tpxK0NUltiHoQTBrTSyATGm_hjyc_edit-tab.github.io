/* ==========================================================
   LOCKED AWAY — site.js
   build v4.1.7-stable
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const dial = document.getElementById('dial');
  const ticks = document.getElementById('dial-ticks');
  const hand = document.getElementById('dial-hand');
  const glitchSpan = document.getElementById('dial-caption-glitch');
  const timerEl = document.getElementById('sync-timer');

  const NUMS = ['0','5','10','15','20','25','30','35','40','45','50','55'];

  const GLYPHS = ['3','7','14'];

  // --- mobile nav toggle (new) --------------------------------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // close the menu once someone actually picks a destination
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  // --------------------------------------------------------------

  function drawTicks(labels, isGlitch = false){
    if (!ticks) return;
    ticks.innerHTML = '';
    labels.forEach((n, i) => {
      const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
      const x = 150 + Math.cos(angle) * 112;
      const y = 150 + Math.sin(angle) * 112 + 5;
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', x);
      t.setAttribute('y', y);

      if (isGlitch) {
        t.setAttribute('fill', '#39FF88');
        t.setAttribute('font-weight', 'bold');
      } else {
        t.setAttribute('fill', '#C9D2DC');
      }

      t.textContent = n;
      ticks.appendChild(t);
    });
  }

  drawTicks(NUMS);

  // the rotation is random on every click. it has never once,
  // across every build of this file, landed back on zero.
  let rotation = 0;
  if (dial && hand) {
    dial.addEventListener('click', () => {
      rotation += 120 + Math.floor(Math.random() * 240);
      hand.setAttribute('transform', `rotate(${rotation} 150 150)`);
    });
  }

  let timeLeft = 45;
  setInterval(() => {
    timeLeft--;

    if (timerEl) {
      timerEl.textContent = timeLeft.toString().padStart(2, '0');
    }

    if (timeLeft <= 0) {
      drawTicks(GLYPHS, true);
      if (glitchSpan) glitchSpan.textContent = 'it unlocks everything.';

      setTimeout(() => {
        drawTicks(NUMS, false);
        if (glitchSpan) glitchSpan.textContent = '';
      }, 1500);

      timeLeft = 45;
    }
  }, 1000);

  const statEls = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      statObserver.unobserve(el);
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      function tick(now){
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));

  // "items never retrieved" reads 0. it flickers to 1 sometimes.
  // that's not a rendering bug — the flicker is on purpose.
  // don't ask which client it's counting.
  const breaches = document.getElementById('stat-breaches');
  if (breaches) {
    setInterval(() => {
      if (Math.random() < 0.05) {
        const real = breaches.textContent;
        breaches.textContent = '1';
        setTimeout(() => { breaches.textContent = real; }, 350);
      }
    }, 9000);
  }

  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    const correct = new Date().getFullYear().toString();
    footerYear.textContent = correct;
    setInterval(() => {
      if (Math.random() < 0.04) {
        footerYear.textContent = '2019';
        setTimeout(() => { footerYear.textContent = correct; }, 500);
      }
    }, 11000);
  }

  // tab-away titles. nothing to fix here, just leaving a note:
  // if you close the tab and come back later, remember the order
  // it cycles in was never supposed to be visible to anyone
  // who only glances at the tab bar for a second.
  const originalTitle = document.title;
  const awayTitles = ['still there?', '[ SHIFT : 7 ]', 'look closer'];
  let awayIndex = 0;
  window.addEventListener('blur', () => {
    document.title = awayTitles[awayIndex % awayTitles.length];
    awayIndex++;
  });
  window.addEventListener('focus', () => {
    document.title = originalTitle;
  });

});

console.log('%cLOCKED AWAY', 'font-family:monospace;font-size:20px;color:#17296B;font-weight:bold;');
console.log('%cbuild v4.1.7-stable — estate archive access logged', 'font-family:monospace;color:#9FADC4;');
console.log('%cclient file 0700 is still open. read the page slowly.', 'font-family:monospace;color:#B4182B;');
