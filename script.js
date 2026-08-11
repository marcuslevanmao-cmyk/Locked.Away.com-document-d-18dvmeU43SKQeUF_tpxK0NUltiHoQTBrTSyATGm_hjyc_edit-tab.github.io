/* =========================================================
   LOCKED AWAY
   ========================================================= */
:root{
  --navy-950:#0B1229;
  --navy-900:#101B3D;
  --navy-800:#152252;
  --navy-700:#17296B;
  --navy-500:#2C4A9E;
  --steel-300:#9FADC4;
  --steel-200:#C9D2DC;
  --steel-100:#EDEFF3;
  --paper:#F6F5F1;
  --ink:#12141C;
  --ink-soft:#4B5266;
  --red-600:#B4182B;
  --glitch-green:#39FF88;

  /* these three only ever get used inside .shrine. they don't belong
     anywhere else on the site, and neither does that section. */
  --gold:#B99A4E;
  --gold-dim:#7A6534;
  --shrine-bg:#050506;

  --font-display:'Oswald', sans-serif;
  --font-body:'IBM Plex Sans', sans-serif;
  --font-mono:'IBM Plex Mono', monospace;

  --radius:10px;
  --shadow-soft:0 12px 30px -14px rgba(11,18,41,.35);
}

*,*::before,*::after{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:var(--font-body);
  color:var(--ink);
  background:var(--paper);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;}
a{color:inherit;}
.wrap{max-width:1140px;margin:0 auto;padding:0 28px;}
.wrap-narrow{max-width:760px;}

.skiplink a{
  position:absolute;left:-9999px;top:0;background:var(--navy-900);color:#fff;
  padding:10px 16px;z-index:200;
}
.skiplink a:focus{left:12px;top:12px;}

:focus-visible{outline:3px solid var(--red-600);outline-offset:2px;}

/* quality: standard visually-hidden utility for icon-only controls */
.sr-only{
  position:absolute;width:1px;height:1px;padding:0;margin:-1px;
  overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;
}

/* reduced motion */
@media (prefers-reduced-motion: reduce){
  *{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;scroll-behavior:auto !important;}
}

.eyebrow{
  font-family:var(--font-mono);
  text-transform:uppercase;
  letter-spacing:.14em;
  font-size:.75rem;
  color:var(--navy-500);
  margin:0 0 10px;
}
.eyebrow.center{text-align:center;}
.section-title{
  font-family:var(--font-display);
  font-weight:600;
  font-size:clamp(1.7rem,3vw,2.4rem);
  margin:0 0 20px;
  color:var(--navy-900);
  letter-spacing:.01em;
}
.section-title.center{text-align:center;}

.btn{
  display:inline-block;
  font-family:var(--font-display);
  letter-spacing:.03em;
  text-decoration:none;
  padding:13px 26px;
  border-radius:6px;
  font-size:1rem;
  font-weight:500;
  border:2px solid transparent;
  cursor:pointer;
  transition:transform .15s ease, background .2s ease, border-color .2s ease;
}
.btn:hover{transform:translateY(-1px);}
.btn-primary{background:var(--red-600);color:#fff;}
.btn-primary:hover{background:#94101F;}
.btn-ghost{background:transparent;border-color:var(--steel-200);color:var(--navy-900);}
.btn-ghost:hover{border-color:var(--navy-700);}

/* =========================================================
   HEADER
   ========================================================= */
.site-header{
  background:var(--navy-900);
  color:var(--steel-100);
  position:sticky;top:0;z-index:100;
  border-bottom:1px solid rgba(255,255,255,.08);
}
.header-row{display:flex;align-items:center;justify-content:space-between;height:72px;}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:#fff;}
.logo-mark{color:var(--steel-200);display:flex;}
.logo-word{font-family:var(--font-display);font-size:1.15rem;letter-spacing:.05em;font-weight:600;}
.logo-word-thin{font-weight:400;color:var(--steel-300);margin-left:4px;}
.main-nav{display:flex;align-items:center;gap:26px;font-size:.92rem;}
.main-nav a{text-decoration:none;color:var(--steel-200);}
.main-nav a:hover{color:#fff;}
.nav-cta{
  background:var(--red-600);color:#fff !important;padding:9px 16px;border-radius:5px;
}

/* quality: hidden on desktop, this is the mobile menu button.
   the old CSS just hid .main-nav at 820px with nothing to open it back up —
   once you were locked out of the nav, you stayed locked out. */
.nav-toggle{
  display:none;
  flex-direction:column;
  justify-content:center;
  gap:5px;
  width:38px;height:38px;
  background:transparent;border:none;cursor:pointer;padding:0;
}
.nav-toggle-bar{
  display:block;width:22px;height:2px;background:var(--steel-100);
  transition:transform .2s ease, opacity .2s ease;
}
.nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(1){transform:translateY(7px) rotate(45deg);}
.nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(2){opacity:0;}
.nav-toggle[aria-expanded="true"] .nav-toggle-bar:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

@media (max-width:820px){
  .nav-toggle{display:flex;}
  .main-nav{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:0;
    position:absolute;
    top:72px;left:0;right:0;
    background:var(--navy-900);
    border-bottom:1px solid rgba(255,255,255,.08);
    max-height:0;
    overflow:hidden;
    transition:max-height .25s ease;
  }
  .main-nav.is-open{max-height:360px;}
  .main-nav a{width:100%;padding:14px 28px;border-top:1px solid rgba(255,255,255,.06);}
  .main-nav .nav-cta{margin:14px 28px;}
}

/* =========================================================
   HERO
   ========================================================= */
.hero{background:linear-gradient(180deg,var(--navy-950),var(--navy-900) 70%);color:var(--steel-100);padding:76px 0 60px;}
.hero-row{display:flex;align-items:center;gap:48px;flex-wrap:wrap;}
.hero-copy{flex:1 1 420px;}
.hero h1{
  font-family:var(--font-display);
  font-size:clamp(2.2rem,4.4vw,3.4rem);
  line-height:1.08;
  margin:8px 0 18px;
  font-weight:600;
}
.hero-asterisk{color:var(--red-600);}
.hero-lede{color:var(--steel-300);font-size:1.08rem;max-width:44ch;margin:0 0 28px;}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;}
.hero-footnote{font-family:var(--font-mono);font-size:.75rem;color:var(--steel-300);margin-top:14px;opacity:.7;}

.hero-dial-wrap{flex:0 0 300px;text-align:center;}
.hero-dial-plate{
  border-radius:50%;
  box-shadow:var(--shadow-soft), inset 0 0 0 8px rgba(255,255,255,.03);
  display:inline-block;
}
#dial{cursor:grab;}
#dial-hand{transition:transform .5s cubic-bezier(.2,.8,.2,1);}
.dial-caption{font-family:var(--font-mono);font-size:.78rem;color:var(--steel-300);margin-top:14px;}
#dial-caption-glitch{color:var(--glitch-green);}

/* =========================================================
   TRUST BAR
   ========================================================= */
.trustbar{background:var(--steel-100);border-bottom:1px solid #E1E4EA;padding:22px 0;}
.trustbar-row{display:flex;align-items:center;gap:26px;flex-wrap:wrap;justify-content:space-between;}
.trustbar-label{font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--ink-soft);margin:0;}
.trustbar-logos{display:flex;gap:32px;flex-wrap:wrap;font-family:var(--font-display);font-size:.95rem;color:#7C859B;letter-spacing:.02em;}

/* =========================================================
   STATS
   ========================================================= */
.stats{background:var(--navy-700);color:#fff;padding:40px 0;}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;}
.stat-num{display:block;font-family:var(--font-mono);font-size:clamp(1.6rem,3vw,2.3rem);font-weight:600;}
.stat-label{font-size:.8rem;color:var(--steel-300);text-transform:uppercase;letter-spacing:.08em;}
@media (max-width:700px){.stats-row{grid-template-columns:repeat(2,1fr);}}

/* =========================================================
   PRODUCTS
   ========================================================= */
.products{padding:84px 0;}
.product-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:36px;}
.product-card{
  background:#fff;border:1px solid #E4E6EC;border-radius:var(--radius);
  padding:28px 26px;display:flex;flex-direction:column;gap:14px;
}
.product-card.featured{border-color:var(--navy-700);box-shadow:var(--shadow-soft);position:relative;}
.product-card.featured::before{
  content:'MOST TRUSTED';font-family:var(--font-mono);font-size:.65rem;letter-spacing:.1em;
  position:absolute;top:-11px;left:26px;background:var(--navy-700);color:#fff;padding:4px 10px;border-radius:4px;
}
.product-card-top{display:flex;align-items:baseline;gap:10px;}
.product-tag{font-family:var(--font-mono);font-size:.7rem;text-transform:uppercase;color:var(--red-600);letter-spacing:.08em;}
.product-card h3{font-family:var(--font-display);font-size:1.35rem;margin:0;color:var(--navy-900);}
.product-card p{color:var(--ink-soft);margin:0;font-size:.94rem;}
.product-specs{list-style:none;padding:0;margin:0;font-family:var(--font-mono);font-size:.8rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:4px;}
.product-price{margin-top:auto;font-family:var(--font-display);font-size:1.1rem;color:var(--navy-900);}
@media (max-width:880px){.product-grid{grid-template-columns:1fr;}}

/* =========================================================
   SHRINE
   ========================================================= */
.shrine{
  background:var(--shrine-bg);
  color:var(--gold);
  padding:110px 0 100px;
  text-align:center;
  border-top:1px solid var(--gold-dim);
  border-bottom:1px solid var(--gold-dim);
}
.shrine-wrap{max-width:640px;margin:0 auto;padding:0 28px;}
.shrine-eyebrow{
  font-family:var(--font-mono);letter-spacing:.3em;text-transform:uppercase;
  font-size:.68rem;color:var(--gold-dim);margin:0 0 40px;
}
.shrine-name-block{display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:10px;}
.shrine-name-bar{
  display:block;width:220px;height:26px;background:var(--gold);
  opacity:.92;border-radius:2px;
}
.shrine-name-caption{
  font-family:var(--font-mono);font-size:.68rem;color:var(--gold-dim);letter-spacing:.04em;
}
.shrine-role{
  font-family:'Cormorant Garamond', serif;font-style:italic;font-size:1.2rem;
  color:var(--gold);margin:18px 0 34px;letter-spacing:.02em;
}
.shrine-bio{
  font-family:var(--font-body);font-size:.92rem;line-height:1.7;color:#8A754A;
  max-width:48ch;margin:0 auto 44px;
}
.shrine-wreath{color:var(--gold-dim);display:flex;justify-content:center;margin-bottom:44px;}
.shrine-inscriptions{display:flex;flex-direction:column;gap:34px;margin-bottom:52px;}
.shrine-inscriptions blockquote{
  margin:0;font-family:'Cormorant Garamond', serif;font-weight:500;
  font-size:1.4rem;line-height:1.45;color:var(--gold);
}
.shrine-inscriptions cite{
  display:block;font-family:var(--font-mono);font-style:normal;font-size:.65rem;
  letter-spacing:.1em;text-transform:uppercase;color:var(--gold-dim);margin-top:12px;
}
.shrine-note{
  font-family:var(--font-mono);font-size:.72rem;color:var(--gold-dim);
  border-top:1px solid var(--gold-dim);padding-top:24px;
}

/* =========================================================
   SECURITY
   ========================================================= */
.security{background:var(--steel-100);padding:84px 0;}
.security-row{display:flex;gap:56px;flex-wrap:wrap;}
.security-copy{flex:1 1 340px;}
.security-copy p{color:var(--ink-soft);max-width:46ch;}
.security-features{flex:1 1 380px;list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:18px;}
.security-features li{padding-left:20px;position:relative;color:var(--ink-soft);font-size:.96rem;}
.security-features li::before{
  content:'';position:absolute;left:0;top:8px;width:8px;height:8px;background:var(--red-600);border-radius:1px;
}
.security-features strong{color:var(--navy-900);}

/* =========================================================
   TEAM
   ========================================================= */
.team{padding:84px 0;}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:36px;}
.team-card{text-align:center;}
.team-photo{
  width:96px;height:96px;border-radius:50%;margin:0 auto 14px;
  background:var(--navy-700);color:#fff;display:flex;align-items:center;justify-content:center;
  font-family:var(--font-display);font-size:1.2rem;letter-spacing:.04em;
}
.team-photo::before{content:attr(data-initials);}
.team-card h3{font-family:var(--font-display);font-size:1.05rem;margin:0 0 2px;color:var(--navy-900);}
.team-role{font-family:var(--font-mono);font-size:.72rem;color:var(--red-600);margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;}
.team-bio{font-size:.86rem;color:var(--ink-soft);margin:0;}
.team-card--odd .team-photo{background:var(--navy-950);}
.team-card--odd{outline:none;}
.team-card--odd:hover .team-bio,
.team-card--odd:focus .team-bio{color:var(--ink);}
@media (max-width:880px){.team-grid{grid-template-columns:repeat(2,1fr);}}

/* =========================================================
   TESTIMONIALS
   ========================================================= */
.testimonials{background:var(--navy-950);padding:84px 0;color:var(--steel-100);}
.testimonials .eyebrow{color:var(--steel-300);}
.testimonials .section-title{color:#fff;}
.testimonial-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:36px;}
.testimonial{
  margin:0;background:var(--navy-900);border:1px solid rgba(255,255,255,.06);
  border-radius:var(--radius);padding:24px;
}
.testimonial p{margin:0 0 12px;font-size:.98rem;}
.testimonial footer{font-family:var(--font-mono);font-size:.75rem;color:var(--steel-300);}
.testimonial--odd{position:relative;}
.testimonial--odd p{transition:text-shadow .2s ease;}
.testimonial--odd:hover p,
.testimonial--odd:focus p{
  text-shadow:1px 0 var(--red-600), -1px 0 var(--glitch-green);
}
@media (max-width:760px){.testimonial-grid{grid-template-columns:1fr;}}

/* =========================================================
   FAQ
   ========================================================= */
.faq{padding:84px 0;}
.faq-list{display:flex;flex-direction:column;gap:10px;margin-top:32px;}
.faq-list details{
  border:1px solid #E4E6EC;border-radius:8px;padding:16px 20px;background:#fff;
}
.faq-list summary{
  cursor:pointer;font-family:var(--font-display);font-weight:500;font-size:1.02rem;color:var(--navy-900);
  list-style:none;
}
.faq-list summary::-webkit-details-marker{display:none;}
.faq-list summary::after{content:'+';float:right;color:var(--red-600);font-weight:700;}
.faq-list details[open] summary::after{content:'–';}
.faq-list p{color:var(--ink-soft);margin:12px 0 0;font-size:.94rem;}

/* =========================================================
   CONTACT
   ========================================================= */
.contact{background:var(--steel-100);padding:84px 0;}
.contact-row{display:flex;gap:56px;flex-wrap:wrap;}
.contact-row > div{flex:1 1 320px;}
.contact-row p{color:var(--ink-soft);max-width:42ch;}
.contact-form{flex:1 1 360px;display:flex;flex-direction:column;gap:8px;background:#fff;padding:26px;border-radius:var(--radius);border:1px solid #E4E6EC;}
.contact-form label{font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft);margin-top:10px;}
.contact-form input,.contact-form textarea{
  font-family:var(--font-body);font-size:.96rem;padding:11px 12px;border:1px solid #D8DBE2;border-radius:6px;
  background:var(--paper);resize:vertical;
}
.contact-form button{margin-top:14px;align-self:flex-start;}

/* =========================================================
   FOOTER
   ========================================================= */
.site-footer{background:var(--navy-950);color:var(--steel-300);padding:28px 0;font-size:.82rem;}
.footer-row{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;}
.footer-fine{font-family:var(--font-mono);font-size:.72rem;opacity:.55;}

/* end of file.
   the selector count above matches the last commit. it always does,
   right up until someone actually counts. */
