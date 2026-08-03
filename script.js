/* ==========================================================
   LOCKED AWAY — site.js
   build v4.1.7-stable
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- combination dial ---- */
  const dial = document.getElementById('dial');
  const ticks = document.getElementById('dial-ticks');
  const hand = document.getElementById('dial-hand');
  const glitchSpan = document.getElementById('dial-caption-glitch');
  const NUMS = ['0','5','10','15','20','25','30','35','40','45','50','55'];
  const GLYPHS = ['0','5','10','15','20','25','30','35','40','45','50','55','7','?','07'];

  function drawTicks(labels){
    ticks.innerHTML = '';
    labels.forEach((n, i) => {
      const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
      const x = 150 + Math.cos(angle) * 112;
      const y = 150 + Math.sin(angle) * 112 + 5;
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', x);
      t.setAttribute('y', y);
      t.textContent = n;
      ticks.appendChild(t);
    });
  }
  drawTicks(NUMS);

  let rotation = 0;
  if (dial) {
    dial.addEventListener('click', () => {
      rotation += 120 + Math.floor(Math.random() * 240);
      hand.setAttribute('transform', `rotate(${rotation} 150 150)`);
    });
  }

  // every so often, the dial face briefly relabels itself. it relabels back.
  setInterval(() => {
    if (Math.random() < 0.12) {
      drawTicks(GLYPHS);
      if (glitchSpan) glitchSpan.textContent = 'it does something.';
      setTimeout(() => {
        drawTicks(NUMS);
        if (glitchSpan) glitchSpan.textContent = '';
      }, 900);
    }
  }, 6000);

  /* ---- stat counters ---- */
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

  // the "reported breaches" counter is supposed to always read 0.
  // once in a while, for under half a second, it doesn't.
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

  /* ---- footer year, mostly correct ---- */
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

  /* ---- tab title, when you look away ---- */
  const originalTitle = document.title;
  const awayTitles = ['still there?', 'Locked Away', 'come back'];
  let awayIndex = 0;
  window.addEventListener('blur', () => {
    document.title = awayTitles[awayIndex % awayTitles.length];
    awayIndex++;
  });
  window.addEventListener('focus', () => {
    document.title = originalTitle;
  });

});

/* ==========================================================
   for whoever is reading this file directly —
   the maintenance log is in index.html, near the closing
   </body> tag. it wasn't removed before this went live.
   that was on purpose.

   ticket #0007 — audio recovered from Vault 07:
   https://drive.google.com/PASTE_YOUR_SHARE_LINK_HERE
   ========================================================== */
console.log('%cLOCKED AWAY', 'font-family:monospace;font-size:20px;color:#17296B;font-weight:bold;');
console.log('%cbuild v4.1.7-stable — facility sub-level access logged', 'font-family:monospace;color:#9FADC4;');
console.log('%cticket #0007 is still open. check the bottom of index.html.', 'font-family:monospace;color:#B4182B;');
