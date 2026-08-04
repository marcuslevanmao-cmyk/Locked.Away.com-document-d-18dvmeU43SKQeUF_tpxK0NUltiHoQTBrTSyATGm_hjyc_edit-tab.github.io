/* ==========================================================
   LOCKED AWAY — site.js
   build v4.1.7-stable
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- combination dial & countdown anomaly ---- */
  const dial = document.getElementById('dial');
  const ticks = document.getElementById('dial-ticks');
  const hand = document.getElementById('dial-hand');
  const glitchSpan = document.getElementById('dial-caption-glitch');
  const timerEl = document.getElementById('sync-timer');
  
  // Standard dial numbers
  const NUMS = ['0','5','10','15','20','25','30','35','40','45','50','55'];
  
  // Glitched dial numbers revealing the Caesar cipher keys (3, 7, 14)
  const GLYPHS = ['3','7','14','3','7','14','3','7','14','3','7','14'];

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

  // The 45-second countdown timer logic
  let timeLeft = 45;
  setInterval(() => {
    timeLeft--;
    
    // Update the tiny timer in the bottom right corner
    if (timerEl) {
      timerEl.textContent = timeLeft.toString().padStart(2, '0');
    }

    // When the timer hits 0, trigger the anomaly
    if (timeLeft <= 0) {
      drawTicks(GLYPHS);
      if (glitchSpan) glitchSpan.textContent = 'it unlocks everything.';
      
      // Reset the dial back to normal after exactly 1.5 seconds
      setTimeout(() => {
        drawTicks(NUMS);
        if (glitchSpan) glitchSpan.textContent = '';
      }, 1500);

      // Restart the countdown clock
      timeLeft = 45;
    }
  }, 1000);

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
  // One of the numeric keys (7) appears when the user tabs away
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

/* ==========================================================
   for whoever is reading this file directly —
   client file 0700 is not something we'd normally leave in
   a production build. it wasn't removed before this went
   live. that was on purpose. check index.html — every
   section has something in it that isn't quite corporate
   copy. the last one is in a comment near the closing
   </body> tag, and it isn't in plain text.
   ========================================================== */
console.log('%cLOCKED AWAY', 'font-family:monospace;font-size:20px;color:#17296B;font-weight:bold;');
console.log('%cbuild v4.1.7-stable — estate archive access logged', 'font-family:monospace;color:#9FADC4;');
console.log('%cclient file 0700 is still open. read the page slowly.', 'font-family:monospace;color:#B4182B;');
