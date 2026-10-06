(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LOGOS = { countory: 'img/10-efde5d2f.png', giantfocus: 'img/11-3bd0beba.png', maqsu: 'img/12-cdbd2b8c.png', giantbrother: 'img/13-db2161d0.png', closo: 'img/14-f7f1dab1.png', clickhr: 'img/15-b1669f5d.png' };
  var BIZ = [
    { slug: 'giantfocus', name: 'GIANTFOCUS', logo: 'giantfocus', tall: true, kind: 'Digital marketing agency', url: 'https://www.giantfocus.com/', site: 'giantfocus.com',
      desc: 'Branding, websites, mobile apps, video and digital marketing for Cambodian businesses.',
      tagline: 'Branding, websites, apps and digital marketing that help Cambodian businesses grow online.',
      facts: [['8', 'Years in business'], ['20+', 'Team members'], ['1,000+', 'Finished projects'], ['700+', 'Clients']],
      what: [['Branding & creative', 'Brand strategy, corporate identity, corporate materials and monthly design packages.'], ['Websites & mobile apps', 'Website design and mobile app development that put your business in your customers’ hands.'], ['Digital marketing', 'Facebook, TikTok, Google and YouTube ads, SEO, digital PR and influencer campaigns.']],
      about: 'A digital marketing agency in Phnom Penh where each team member is a specialist, from branding and video to ads, SEO and app development.',
      listLabel: 'Services', list: ['Branding & creative', 'Website design', 'Mobile app development', 'Video & photography', 'Digital marketing', 'Digital PR & influencer', 'CRM software'] },
    { slug: 'giantbrother', name: 'GIANTBROTHER', logo: 'giantbrother', kind: 'Tax and business advisory', url: 'https://www.giantbrother.com/', site: 'giantbrother.com',
      desc: 'Business registration, tax services, bookkeeping and accounting software, from startup to growth.',
      tagline: 'Registration, tax and accounting handled, so you can focus on growing your business.',
      facts: [['10+', 'Years of experience'], ['4', 'Core services'], ['Startup', 'to established company']],
      what: [['Business registration', 'The whole company registration process, handled from scratch.'], ['Tax services', 'Monthly and annual tax compliance that saves time and reduces risk.'], ['Accounting', 'Bookkeeping services and accounting software for income, expenses, payroll and tax.']],
      about: 'Tax consultants, certified accountants and legal specialists working with business owners across retail, restaurants, construction, logistics, real estate and tech.',
      listLabel: 'Services', list: ['Business registration', 'Tax services', 'Accounting services', 'Accounting software', 'Work permit'] },
    { slug: 'closo', name: 'CLOSO', logo: 'closo', kind: 'Business software', url: 'https://closocambodia.com/', site: 'closocambodia.com',
      desc: 'ERP, accounting, inventory, POS, CRM and HR software, with solutions for retail, restaurants, schools, clinics and more.',
      tagline: 'One-stop cloud business software, at a price that fits growing companies.',
      facts: [['16', 'Years of experience'], ['8', 'Core solutions'], ['12', 'Industries served']],
      what: [['ERP & accounting', 'ERP, accounting, inventory and manufacturing systems on the latest cloud technology.'], ['POS, CRM & HRM', 'Point of sale, customer management and HR tools for daily operations.'], ['Industry solutions', 'Ready-made software for retail, restaurants, schools, clinics, workshops and more.']],
      about: 'A software company specialised in cloud business solutions, offering one-stop software and services at an affordable price.',
      listLabel: 'Industries we serve', list: ['Retail & mart', 'Restaurant & café', 'Distribution & trading', 'Manufacturing & factory', 'Education & school', 'Construction', 'Real estate', 'Hospital & clinic', 'Rental', 'Pawn & loan', 'Workshop', 'Service sector'] },
    { slug: 'maqsu', name: 'MAQSU', logo: 'maqsu', kind: 'Cloud ERP and accounting', url: 'https://maqsu.com/', site: 'maqsu.com', demo: 'https://maqsu.com/en/book-demo',
      desc: 'Accounting, sales, inventory, POS, HR and more in one cloud system built for local SMEs, with Khmer support.',
      tagline: 'All-in-one business management on web, mobile and the management dashboard.',
      facts: [['2019', 'Built by our own team since'], ['3', 'Products: Web, Mobile, ONE'], ['200+', 'Completed projects'], ['1,000', 'Active users']],
      what: [['MAQSU Web', 'Accounting, sales, purchase, inventory, manufacturing, POS, HR, CRM, projects, rental billing and loans in the browser.'], ['MAQSU Mobile', 'Take the business with you on iOS and Android, wherever your team works.'], ['MAQSU ONE', 'The management dashboard: see the whole business at a glance and decide faster.']],
      about: 'Designed, developed and maintained by our own team since 2019 for Cambodian SMEs, with Khmer support and everything from invoices to reports in one place.',
      listLabel: 'Industries we serve', list: ['Trading & distribution', 'Retail & mart', 'Food & beverages', 'Construction', 'Tenant & rental management', 'Professional services', 'Manufacturing & factory', 'Pawn & loan'] },
    { slug: 'clickhr', name: 'ClickHR', logo: 'clickhr', kind: 'HR and payroll', url: 'https://www.clickhr.app/', site: 'clickhr.app', demo: 'https://www.clickhr.app/booking-demo/',
      desc: 'Attendance, leave, payroll, NSSF and tax in one HR system, with a mobile app for every employee.',
      tagline: 'Payroll and HR in one simple system, built for Cambodian businesses.',
      facts: [['iOS + Android', 'Employee mobile app'], ['Khmer + English', 'Fully bilingual'], ['NSSF & tax', 'Built in']],
      what: [['People & attendance', 'Employee records, contracts and attendance by mobile app, fingerprint or face.'], ['Leave & overtime', 'Leave requests, approvals and overtime tracked accurately and transparently.'], ['Payroll', 'Full payroll with e-filing and NSSF integration, plus digital payslips.']],
      about: 'Used by SMEs, factories, schools and service providers to cut manual HR work and stay compliant with Cambodian labour law and NSSF rules.',
      listLabel: 'Modules', list: ['Employee management', 'Attendance management', 'Leave management', 'Payroll system', 'ClickHR mobile app'] },
    { slug: 'countory', name: 'Countory', logo: 'countory', kind: 'Stock count and inventory service', site: null,
      desc: 'Stock counting and inventory services that help businesses know exactly what they have.',
      tagline: 'Accurate stock counts and inventory services, so your numbers match what’s on the shelf.',
      facts: [['On-site', 'Counting teams at your location'], ['Barcode', 'Scanning for fast, accurate counts'], ['Same week', 'Variance report delivered']],
      what: [['Stock count', 'Full and cycle counts at your shop, warehouse or factory, done by a trained team with barcode scanners.'], ['Inventory service', 'Ongoing inventory checks and reconciliation, so stock records stay accurate between full counts.'], ['Variance reports', 'Clear reports comparing counted stock with your system, ready for accounting and audit.']],
      about: 'Countory gives businesses an independent, accurate picture of their stock. It works alongside GiantAlliance’s software and accounting teams, so count results can flow straight into MAQSU, CLOSO or GIANTBROTHER’s accounting work.',
      listLabel: 'Industries we serve', list: ['Retail & mart', 'Warehouse & distribution', 'Manufacturing & factory', 'Pharmacy', 'Restaurant & café', 'Construction materials'] }
  ];
  var ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function row(b) {
    var mark = b.logo ? '<img src="' + LOGOS[b.logo] + '" alt="">' : '<span class="biz-name">' + esc(b.name) + '</span>';
    return '<a class="biz reveal" href="#/b/' + b.slug + '" aria-label="' + esc(b.name) + ': ' + esc(b.kind) + '"><span class="biz-logo' + (b.tall ? ' tall' : '') + '">' + mark + '</span><span><span class="biz-kind">' + esc(b.kind) + '</span><span class="biz-desc">' + esc(b.desc) + '</span></span><span class="biz-go">' + ARROW + '</span></a>';
  }
  document.getElementById('bizList').innerHTML = BIZ.map(row).join('');
  document.getElementById('footBiz').innerHTML = BIZ.map(function (b) { return '<li><a href="#/b/' + b.slug + '">' + esc(b.name) + '</a></li>'; }).join('');
  function bySlug(s) { for (var i = 0; i < BIZ.length; i++) if (BIZ[i].slug === s) return BIZ[i]; return null; }
  function renderBiz(b) {
    var ext = b.url ? ' target="_blank" rel="noopener"' : '';
    var visit = b.url ? '<a class="btn" href="' + b.url + '"' + ext + '>Visit ' + esc(b.site) + '</a>' : '<a class="btn" href="#/contact">Ask about ' + esc(b.name) + '</a>';
    var second = b.demo ? '<a class="btn ghost" href="' + b.demo + '"' + ext + '>Book a demo</a>' : '<a class="btn ghost" href="#/contact">Talk to the team</a>';
    var logo = b.logo ? '<span class="b-logo' + (b.tall ? ' tall' : '') + '"><img src="' + LOGOS[b.logo] + '" alt="' + esc(b.name) + ' logo"></span>' : '';
    var html = ''
      + '<section class="wrap b-hero">'
      + '<div class="crumbs">'
      +   '<nav aria-label="Breadcrumb" class="crumb-path">'
      +     '<ol><li><a href="#/" class="crumb-home" aria-label="Home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7"/><path d="M6 9.5V20h4.5v-5.5h3V20H18V9.5"/></svg></a></li><li><a href="#/businesses">Our portfolio</a></li><li><span aria-current="page">' + esc(b.name) + '</span></li></ol>'
      +   '</nav>'
      + '</div>'
      + '<div class="b-grid">'
      +   '<div class="b-main">'
      +     '<p class="hi-kind">' + esc(b.kind) + '</p>'
      +     '<h1 class="b-name"><span class="line"><span>' + esc(b.name) + '</span></span></h1>'
      +     '<p class="b-desc reveal">' + esc(b.tagline) + '</p>'
      +     '<div class="acts reveal">' + visit + second + '</div>'
      +   '</div>'
      +   '<div class="cube-stage" aria-hidden="true"><div class="cube-spin"><div class="cube">'
      +     '<span class="cf front">' + (b.logo ? '<img src="' + LOGOS[b.logo] + '" alt="">' : esc(b.name)) + '</span>'
      +     '<span class="cf right"><b>' + esc(b.facts[0][0]) + '</b><small>' + esc(b.facts[0][1]) + '</small></span>'
      +     '<span class="cf back"><img src="img/02-a43be991.png" alt=""></span>'
      +     '<span class="cf left"><b>' + esc((b.facts[1] || b.facts[0])[0]) + '</b><small>' + esc((b.facts[1] || b.facts[0])[1]) + '</small></span>'
      +     '<span class="cf top"></span><span class="cf bottom"></span>'
      +   '</div></div><span class="cube-shadow"></span></div>'
      + '</div>'
      + '<div class="facts reveal" style="border-top-color: var(--line);">' + b.facts.map(function (f) { return '<div><b' + (/^[\d,]+/.test(f[0]) ? '' : ' class="word"') + '>' + esc(f[0]) + '</b><span>' + esc(f[1]) + '</span></div>'; }).join('') + '</div>'
      + '</section>'
      + '<section class="sec" style="background: var(--surface-2);"><div class="wrap">'
      + '<h2 class="h2 reveal" data-speed="0.1" style="max-width: 14ch;">What ' + esc(b.name) + ' does</h2>'
      + '<div class="prods">' + b.what.map(function (w) { return '<div class="prod reveal tilt"><div class="tilt-in"><h3>' + esc(w[0]) + '</h3><p>' + esc(w[1]) + '</p></div></div>'; }).join('') + '</div>'
      + '</div></section>'
      + '<section class="sec"><div class="wrap split">'
      + '<div class="reveal"><h2 class="h2" style="font-size: clamp(36px, 4vw, 58px);">About ' + esc(b.name) + '</h2><p class="lede">' + esc(b.about) + '</p>'
      + (b.url ? '<a class="b-visit" href="' + b.url + '"' + ext + '>Go to ' + esc(b.site) + ' <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5"/></svg></a>' : '')
      + '</div>'
      + '<div class="reveal"><p class="label">' + esc(b.listLabel) + '</p><div class="lined">' + b.list.map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('') + '</div></div>'
      + '</div></section>'
      + '<section class="wrap" style="padding-bottom: 160px;"><p class="label">More from the hub</p><div class="biz-list">' + BIZ.filter(function (x) { return x !== b; }).map(row).join('') + '</div></section>'
      + '<section class="talk" aria-label="Get in touch"><div class="wrap talk-row"><p>Ready to work with ' + esc(b.name) + '? Visit their website or send us a message.</p>'
      + (b.url ? '<a class="btn white" href="' + b.url + '"' + ext + '>Visit ' + esc(b.site) + '</a>' : '<a class="btn white" href="#/contact">Contact us</a>')
      + '</div><div class="marquee" aria-hidden="true"><span>Go beyond.</span><span>Go beyond.</span><span>Go beyond.</span><span>Go beyond.</span></div></section>';
    document.getElementById('bizView').innerHTML = html;
    document.title = b.name + ' — GiantAlliance';
  }
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* ---------- hero visuals for About, Portfolio, News and Contact ---------- */
  var FACES = ['front', 'right', 'back', 'left', 'top', 'bottom'];
  function cubeHTML(faces, cls) {
    return '<div class="cube-stage" aria-hidden="true"><div class="cube-spin"><div class="cube ' + (cls || '') + '">'
      + faces.map(function (f, i) { return '<span class="cf ' + FACES[i] + '">' + f + '</span>'; }).join('')
      + '</div></div><span class="cube-shadow"></span></div>';
  }
  function fi(d) { return '<svg class="fi-big" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>'; }
  document.getElementById('visAbout').outerHTML = '<div class="mosaic-wrap" aria-hidden="true"><div class="mosaic">'
    + BIZ.map(function (b, i) { return '<a class="tile' + (b.tall ? ' tall' : '') + '" href="#/b/' + b.slug + '" tabindex="-1" style="--d:' + (i * 0.4) + 's"><img src="' + LOGOS[b.logo] + '" alt=""></a>'; }).join('')
    + '</div><div class="spin-badge"><svg viewBox="0 0 200 200"><defs><path id="bp" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"/></defs><text><textPath href="#bp">THINK GIANT · GO BEYOND · THINK GIANT · GO BEYOND ·</textPath></text></svg><span class="sb-core">6</span></div></div>';
  document.getElementById('visContact').outerHTML = '<div class="map-card" aria-hidden="true">'
    + '<svg class="map-svg" viewBox="0 0 460 400" preserveAspectRatio="xMidYMid slice">'
    +   '<path class="river" d="M-20 300 C 80 260, 140 330, 240 290 S 400 220, 480 250"/>'
    +   '<path class="road big" d="M-10 140 L 470 110"/><path class="road big" d="M150 -10 L 210 410"/>'
    +   '<path class="road" d="M-10 220 L 470 200"/><path class="road" d="M320 -10 L 300 410"/><path class="road" d="M60 -10 L 90 410"/><path class="road" d="M-10 60 L 470 40"/>'
    +   '<path class="route" d="M40 380 L 90 300 L 205 210 L 248 170"/>'
    + '</svg>'
    + '<span class="pin"><span class="pin-pulse"></span><svg viewBox="0 0 24 24"><path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="10" r="2.6" fill="#fff"/></svg></span>'
    + '<div class="map-label"><b>GIANTFOCUS office</b><span>No. G190, Street Arata Garden, Sen Sok</span></div>'
    + '</div>';
  document.getElementById('visPortfolio').outerHTML = '<nav class="pf-index" aria-label="Jump to a business"><p class="pf-index-h">In this portfolio</p>'
    + BIZ.map(function (b, i) { return '<button type="button" data-i="' + i + '"><span class="n">' + esc(b.name) + '</span><span class="kd">' + esc(b.kind) + '</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4"/></svg></button>'; }).join('')
    + '</nav>';
  document.querySelector('.pf-index').addEventListener('click', function (e) {
    var bt = e.target.closest('button'); if (!bt) return;
    var sec = document.querySelectorAll('#pfList .pf-sec')[+bt.dataset.i];
    if (sec) window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - 76, behavior: reduce ? 'auto' : 'smooth' });
  });
  document.getElementById('visNews').outerHTML = '<div class="stack-stage" aria-hidden="true"><div class="stack-float"><div class="stack">'
    + '<div class="card3 c3"></div><div class="card3 c2"></div>'
    + '<div class="card3 c1"><span class="bar"><i></i><i></i><i></i></span><span class="k">ClickHR</span><span class="h">Best HR software in Cambodia: a 2026 comparison</span><span class="d">1 Apr 2026</span></div>'
    + '</div></div></div>';

  /* ---------- Portfolio list: each company scrolls past with parallax layers ---------- */
  document.getElementById('pfList').innerHTML = BIZ.map(function (b, i) {
    return '<article class="pf-sec"><div class="wrap pf-row">'
      + '<div class="pf-txt reveal" data-speed="0.06">'
      +   '<p class="k">' + esc(b.kind) + '</p><h2>' + esc(b.name) + '</h2><p class="d">' + esc(b.tagline) + '</p>'
      +   '<ul class="pf-what">' + b.what.map(function (w) { return '<li><b>' + esc(w[0]) + '</b><span>' + esc(w[1]) + '</span></li>'; }).join('') + '</ul>'
      +   '<div class="pf-facts">' + b.facts.slice(0, 3).map(function (f) { return '<div><b>' + esc(f[0]) + '</b><span>' + esc(f[1]) + '</span></div>'; }).join('') + '</div>'
      +   '<div class="pf-acts"><a class="btn" href="#/b/' + b.slug + '">View ' + esc(b.name) + '</a>'
      +   (b.url ? '<a class="pf-site" href="' + b.url + '" target="_blank" rel="noopener">' + esc(b.site) + ' <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5"/></svg></a>' : '')
      +   '</div>'
      + '</div>'
      + '<a class="pf-vis' + (b.tall ? ' tall' : '') + '" href="#/b/' + b.slug + '" tabindex="-1" aria-hidden="true">'
      +   '<span class="pf-word" data-speed="-0.25" aria-hidden="true">' + esc(b.name) + '</span>'
      +   '<span class="pf-logo" data-speed="0.1"><span class="pf-chip"><img src="' + LOGOS[b.logo] + '" alt=""></span></span>'
      +   '<span class="pf-foot"><span>' + esc(b.site || 'Coming soon') + '</span><i><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></i></span>'
      + '</a>'
      + '</div></article>';
  }).join('');
  document.getElementById('toTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- hub orbit ---------- */
  var nodesEl = document.getElementById('nodes'), linesEl = document.getElementById('linkLines');
  var heroLeft = document.getElementById('heroLeft'), core = document.querySelector('.core');
  if (window.matchMedia('(hover: none)').matches) document.getElementById('hiGoText').textContent = 'Tap again or here to see details';
  var infoTimer = null, shown = null;
  function setInfo(b, n) {
    if (b) shown = b;
    clearTimeout(infoTimer);
    nodes.forEach(function (x) { x.line.classList.toggle('on', x === n); });
    core.classList.toggle('focus', !!b);
    if (!b) { infoTimer = setTimeout(function () { heroLeft.classList.remove('show'); }, 120); return; }
    document.getElementById('hiKind').textContent = b.kind;
    var nm = document.getElementById('hiName');
    nm.textContent = b.name;
    var w = heroLeft.clientWidth;
    nm.textContent = b.name;
    document.getElementById('hiDesc').textContent = b.desc;
    heroLeft.classList.remove('show'); void heroLeft.offsetWidth; heroLeft.classList.add('show');
  }
  function fitNames() {
    var nm = document.getElementById('hiName'), keep = nm.textContent, w = heroLeft.clientWidth;
    if (!w) return;
    nm.style.setProperty('--name-size', '150px');
    var widest = 0;
    BIZ.map(function (x) { return x.name; }).concat(['Think Giant.']).forEach(function (s) { nm.textContent = s; widest = Math.max(widest, nm.scrollWidth); });
    nm.textContent = keep; nm.style.removeProperty('--name-size');
    heroLeft.style.setProperty('--name-size', Math.min(150, 150 * (w - 8) / widest).toFixed(1) + 'px');
  }
  fitNames();
  window.addEventListener('resize', fitNames);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNames);
  var nodes = BIZ.map(function (b, i) {
    var wrap = document.createElement('div'); wrap.className = 'node';
    var btn = document.createElement('button'); btn.type = 'button';
    if (b.logo) { btn.className = 'has-logo' + (b.tall ? ' tall' : ''); btn.setAttribute('aria-label', b.name); var im = document.createElement('img'); im.src = LOGOS[b.logo]; im.alt = ''; btn.appendChild(im); } else btn.textContent = b.name;
    btn.style.transitionDelay = (0.7 + i * 0.09) + 's';
    setTimeout(function () { btn.style.transitionDelay = ''; }, 2600);
    var me = null;
    btn.addEventListener('mouseenter', function () { paused = true; goTo(i); });
    btn.addEventListener('mouseleave', function () { paused = false; });
    btn.addEventListener('focus', function () { paused = true; goTo(i); });
    btn.addEventListener('blur', function () { paused = false; });
    btn.addEventListener('click', function () { location.hash = '#/b/' + b.slug; });
    wrap.appendChild(btn); nodesEl.appendChild(wrap);
    var chip = document.createElement('button'); chip.type = 'button'; chip.className = 'lchip' + (b.tall ? ' tall' : '');
    if (b.logo) { chip.setAttribute('aria-label', b.name); var ci = document.createElement('img'); ci.src = LOGOS[b.logo]; ci.alt = ''; chip.appendChild(ci); } else chip.textContent = b.name;
    chip.addEventListener('click', function () {
      if (seq === i) { location.hash = '#/b/' + b.slug; return; }
      stripTouched = Date.now(); holdThenResume(9000); goTo(i);
    });
    document.getElementById('logoStrip').appendChild(chip);
    var ln = document.createElementNS('http://www.w3.org/2000/svg', 'line'); ln.setAttribute('x1', 300); ln.setAttribute('y1', 300); linesEl.appendChild(ln);
    me = { wrap: wrap, line: ln, btn: btn, chip: chip };
    return me;
  });
  var angle = -Math.PI / 2, paused = false, last = 0, seq = -1, seqT = 0;
  var INTRO_MS = 4500, EACH_MS = 3800;
  var hubEl = document.getElementById('hub'), strip = document.getElementById('logoStrip'), homeView = document.querySelector('.view[data-view="/"]');
  var stripTouched = 0, resumeTimer = null;
  function holdThenResume(ms) { paused = true; clearTimeout(resumeTimer); resumeTimer = setTimeout(function () { paused = false; }, ms); }
  strip.addEventListener('touchstart', function () { stripTouched = Date.now(); holdThenResume(5000); }, { passive: true });
  strip.addEventListener('scroll', function () { if (Date.now() - stripTouched < 1500) stripTouched = Date.now(); }, { passive: true });
  function goTo(i) {
    seq = i; seqT = 0;
    hubEl.classList.toggle('focusing', i >= 0);
    strip.classList.toggle('focusing', i >= 0);
    nodes.forEach(function (n, k) { n.chip.classList.toggle('on', k === i); n.btn.classList.toggle('hot', k === i); });
    if (i >= 0 && strip.offsetParent && Date.now() - stripTouched > 4000) {
      var c = nodes[i].chip;
      strip.scrollTo({ left: c.offsetLeft - (strip.clientWidth - c.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    }
    if (i < 0) setInfo(null); else setInfo(BIZ[i], nodes[i]);
  }
  /* pointer or keyboard on the headline side brings back "Think Giant." so its buttons can be used */
  var heroLeftEl = document.getElementById('heroLeft');
  document.querySelector('.hi-go').addEventListener('click', function (e) { e.stopPropagation(); if (shown) location.hash = '#/b/' + shown.slug; });
  document.querySelector('.hi-go').addEventListener('touchstart', function (e) { e.stopPropagation(); }, { passive: true });
  heroLeftEl.addEventListener('mouseenter', function () { if (touch) return; paused = true; goTo(-1); });
  heroLeftEl.addEventListener('mouseleave', function () { paused = false; });
  var touch = window.matchMedia('(hover: none)').matches;
  heroLeftEl.addEventListener('touchstart', function (e) { if (e.target.closest('.hi-go')) return; holdThenResume(8000); if (seq >= 0) goTo(-1); }, { passive: true });
  heroLeftEl.addEventListener('focusin', function () { paused = true; goTo(-1); });
  heroLeftEl.addEventListener('focusout', function () { paused = false; });
  var mTx = 0, mTy = 0, mX = 0, mY = 0;
  var heroSec = document.getElementById('hero');
  if (!reduce && !window.matchMedia('(hover: none)').matches) {
    heroSec.addEventListener('mousemove', function (e) { mTx = (e.clientX / window.innerWidth - 0.5) * 2; mTy = (e.clientY / window.innerHeight - 0.5) * 2; });
    heroSec.addEventListener('mouseleave', function () { mTx = 0; mTy = 0; });
  }
  function placeHub(t) {
    var dt = last ? Math.min(t - last, 50) : 0; last = t;
    var homeOn = homeView.classList.contains('on');
    if (homeOn && !paused && !reduce) { seqT += dt; if (seqT > (seq < 0 ? INTRO_MS : EACH_MS)) goTo(seq + 1 >= nodes.length ? -1 : seq + 1); }
    var hub = document.getElementById('hub'); if (!hub.offsetParent) { requestAnimationFrame(placeHub); return; }
    mX += (mTx - mX) * 0.06; mY += (mTy - mY) * 0.06;
    hub.style.setProperty('--px', mX.toFixed(3)); hub.style.setProperty('--py', mY.toFixed(3));
    if (!paused && !reduce) angle += dt * 0.00009;
    var size = hub.clientWidth, r = size * (size < 480 ? 0.34 : 0.38);
    nodes.forEach(function (n, i) {
      var a = angle + i * (Math.PI * 2 / nodes.length);
      var x = size / 2 + Math.cos(a) * r, y = size / 2 + Math.sin(a) * r * 0.92;
      var hw = n.btn.offsetWidth / 2 + 4; x = Math.min(Math.max(x, hw), size - hw);
      n.wrap.style.transform = 'translate(' + x + 'px,' + y + 'px) translate(-50%, -50%)';
      var rr = (size < 480 ? 0.34 : 0.38) * 600; var lr = rr * 0.72; n.line.setAttribute('x2', 300 + Math.cos(a) * lr); n.line.setAttribute('y2', 300 + Math.sin(a) * lr * 0.92);
      n.btn.classList.toggle('hot', i === seq);
    });
    requestAnimationFrame(placeHub);
  }
  requestAnimationFrame(placeHub);

  /* ---------- router + wipe ---------- */
  var views = document.querySelectorAll('.view'), wipe = document.querySelector('.wipe');
  var current = null;
  function show(route) {
    if (route === '/maqsu') route = '/b/maqsu';
    var biz = route.indexOf('/b/') === 0 ? bySlug(route.slice(3)) : null;
    var target = biz ? ['/b', null, route] : ({ '/': ['/', null], '/about': ['/about', null], '/businesses': ['/businesses', null], '/news': ['/news', null], '/contact': ['/contact', null] }[route] || ['/', null]);
    var key = target[2] || target[0];
    var changing = current !== key;
    function swap() {
      if (biz) renderBiz(biz); else document.title = 'GiantAlliance — Think Giant. Go Beyond.';
      views.forEach(function (v) { v.classList.toggle('on', v.dataset.view === target[0]); });
      document.querySelectorAll('.nav a').forEach(function (a) {
        var r = a.dataset.route, on = (r === route) || (r === '/businesses' && !!biz);
        if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      });
      if (target[1]) { var el = document.getElementById(target[1]); if (el) el.scrollIntoView({ behavior: changing || reduce ? 'auto' : 'smooth' }); }
      else window.scrollTo(0, 0);
      current = key;
      var view = document.querySelector('.view.on');
      view.classList.remove('ready'); void view.offsetWidth;
      setTimeout(function () { view.classList.add('ready'); }, 60);
      observe(view);
      watchFacts(view);
      onScroll();
    }
    if (changing && current !== null && !reduce) {
      wipe.classList.remove('go'); void wipe.offsetWidth; wipe.classList.add('go');
      setTimeout(swap, 450);
    } else swap();
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
  }
  window.addEventListener('hashchange', function () { show(location.hash.replace('#', '') || '/'); });

  /* ---------- reveal on scroll ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 }) : null;
  function observe(scope) {
    scope.querySelectorAll('.reveal:not(.in)').forEach(function (el, i) {
      if (!io || reduce) { el.classList.add('in'); return; }
      el.style.transitionDelay = (el.classList.contains('biz') ? (i % 6) * 0.07 : 0) + 's';
      io.observe(el);
    });
  }

  /* ---------- facts: count up when they come into view ---------- */
  function countUp(b, delay) {
    var raw = b.dataset.final || b.textContent; b.dataset.final = raw;
    var m = raw.match(/^([\d,]+)(.*)$/); if (!m) return;
    var target = parseInt(m[1].replace(/,/g, ''), 10), suffix = m[2], commas = m[1].indexOf(',') > -1;
    var isYear = !commas && target >= 1900 && target <= 2100, from = isYear ? target - 25 : 0;
    var fmt = function (n) { var s = String(n); return commas ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s; };
    if (reduce) { b.textContent = raw; return; }
    b.textContent = fmt(from) + suffix;
    setTimeout(function () {
      var start = null, dur = 1500;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        b.textContent = fmt(Math.round(from + (target - from) * e)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
  }
  var factsIO = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      factsIO.unobserve(e.target); e.target.classList.add('go');
      e.target.querySelectorAll('b').forEach(function (b, i) { countUp(b, i * 120); });
    });
  }, { threshold: 0.4 }) : null;
  function watchFacts(scope) {
    scope.querySelectorAll('.facts:not(.go)').forEach(function (f) {
      if (!factsIO) { f.classList.add('go'); return; }
      f.querySelectorAll('b').forEach(function (b) { var m = (b.dataset.final || b.textContent).match(/^([\d,]+)(.*)$/); if (m && !reduce) { b.dataset.final = b.dataset.final || b.textContent; } });
      factsIO.observe(f);
    });
  }
  /* mission words light up as you read */
  var q = document.getElementById('quote');
  q.innerHTML = q.textContent.split(' ').map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ');
  var words = q.querySelectorAll('.w');

  /* ---------- scroll effects ---------- */
  var top = document.getElementById('top'), beyond = document.getElementById('beyond'), blob = document.getElementById('blob'), btext = document.getElementById('beyondText'), ghost = document.getElementById('ghostNum');
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      top.classList.toggle('scrolled', window.scrollY > 8);
      if (reduce) return;
      if (beyond.offsetParent) {
        var r = beyond.getBoundingClientRect(), vh = window.innerHeight;
        var p = Math.min(Math.max(-r.top / (r.height - vh), 0), 1);
        var need = Math.hypot(window.innerWidth, vh) / 160 + 0.2;
        var s = 1 + (need - 1) * Math.min(p / 0.6, 1);
        blob.style.setProperty('--s', s.toFixed(3));
        btext.style.setProperty('--o', Math.min(Math.max((p - 0.35) / 0.3, 0), 1).toFixed(3));
        var qr = q.getBoundingClientRect(), qp = Math.min(Math.max((vh * 0.85 - qr.top) / (qr.height + vh * 0.35), 0), 1);
        var n = Math.round(qp * words.length);
        words.forEach(function (w, i) { w.classList.toggle('lit', i < n); });
      }
      var y = window.scrollY, vh2 = window.innerHeight;
      /* hero layers move at different speeds */
      if (heroLeftEl.offsetParent) {
        var hp = Math.min(y / vh2, 1);
        heroLeftEl.style.translate = '0 ' + (y * 0.32).toFixed(1) + 'px';
        heroLeftEl.style.opacity = (1 - hp * 1.1).toFixed(3);
        var hc = document.querySelector('.hub-col'); if (hc) hc.style.translate = '0 ' + (y * 0.14).toFixed(1) + 'px';
        strip.style.translate = '0 ' + (y * 0.18).toFixed(1) + 'px';
      }
      /* elements marked data-speed drift relative to the viewport centre */
      document.querySelectorAll('.view.on [data-speed]').forEach(function (el) {
        var r2 = el.getBoundingClientRect();
        if (r2.bottom < -200 || r2.top > vh2 + 200) return;
        var off = (r2.top + r2.height / 2 - vh2 / 2) * parseFloat(el.dataset.speed);
        el.style.translate = '0 ' + off.toFixed(1) + 'px';
      });
      /* giant outlined words slide sideways through the mission section */
      var mb = document.getElementById('missionBg');
      if (mb && mb.offsetParent) {
        var ar = mb.parentNode.getBoundingClientRect();
        var mp = Math.min(Math.max((vh2 - ar.top) / (vh2 + ar.height), 0), 1);
        mb.style.setProperty('--mx', (window.innerWidth * (0.15 - mp * 0.75)).toFixed(1) + 'px');
      }
      ghost = document.getElementById('ghostNum');
      if (ghost && ghost.offsetParent) ghost.style.setProperty('--py', (window.scrollY * 0.25).toFixed(1) + 'px');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);



  /* ---------- 3D cube on business pages: spins slowly, leans toward the mouse ---------- */
  var cubeMouse = null, cubeY = -25, cubeLast = 0, cubeLean = { x: 0, y: 0 };
  var ringY = 0;
  function cubeLoop(ts) {
    var dt = cubeLast ? Math.min(ts - cubeLast, 50) : 0; cubeLast = ts;
    var vis = document.querySelector('.view.on .cube-spin, .view.on .ring, .view.on .stack');
    if (vis && !reduce) {
      var tx = 0, ty = 0;
      if (cubeMouse) {
        var r = vis.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        tx = Math.max(-1, Math.min(1, (cubeMouse.clientY - cy) / 450));
        ty = Math.max(-1, Math.min(1, (cubeMouse.clientX - cx) / 600));
      }
      cubeLean.x += (tx - cubeLean.x) * 0.06; cubeLean.y += (ty - cubeLean.y) * 0.06;
      if (vis.classList.contains('cube-spin')) {
        cubeY += dt * 0.018;
        vis.style.setProperty('--cx', (-18 - cubeLean.x * 22).toFixed(2) + 'deg');
        vis.style.setProperty('--cy', (cubeY + cubeLean.y * 40).toFixed(2) + 'deg');
      } else if (vis.classList.contains('ring')) {
        ringY += dt * 0.012;
        vis.style.setProperty('--lx', (-10 - cubeLean.x * 14).toFixed(2) + 'deg');
        vis.style.setProperty('--ry', (ringY + cubeLean.y * 30).toFixed(2) + 'deg');
      } else {
        vis.style.setProperty('--lx', (10 - cubeLean.x * 16).toFixed(2) + 'deg');
        vis.style.setProperty('--ly', (-22 + cubeLean.y * 30).toFixed(2) + 'deg');
      }
    }
    requestAnimationFrame(cubeLoop);
  }
  requestAnimationFrame(cubeLoop);

  /* logo panels: soft spotlight and gentle tilt that follow the mouse */
  if (!reduce && !window.matchMedia('(hover: none)').matches) {
    document.addEventListener('mousemove', function (e) {
      var v = e.target.closest && e.target.closest('.pf-vis');
      document.querySelectorAll('.view.on .pf-vis').forEach(function (p) {
        if (p !== v) { p.style.removeProperty('--mx'); p.style.removeProperty('--my'); p.style.removeProperty('--tx'); p.style.removeProperty('--ty'); return; }
        var r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        p.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); p.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        p.style.setProperty('--ty', ((x - 0.5) * 16).toFixed(2) + 'deg'); p.style.setProperty('--tx', (-(y - 0.5) * 16).toFixed(2) + 'deg');
      });
    }, { passive: true });
  }
  /* ---------- 3D tilt on business pages ---------- */
  if (!reduce && !window.matchMedia('(hover: none)').matches) {
    document.addEventListener('mousemove', function (e) {
      cubeMouse = e;
      var t2 = e.target.closest && e.target.closest('.tilt');
      document.querySelectorAll('#bizView .tilt-in').forEach(function (el) {
        if (t2 && el.parentNode === t2) {
          var rr = t2.getBoundingClientRect();
          el.style.setProperty('--ty', (((e.clientX - rr.left) / rr.width - 0.5) * 14).toFixed(2) + 'deg');
          el.style.setProperty('--tx', (-((e.clientY - rr.top) / rr.height - 0.5) * 14).toFixed(2) + 'deg');
        } else { el.style.removeProperty('--tx'); el.style.removeProperty('--ty'); }
      });
    }, { passive: true });
  }
  /* ---------- header menu + language ---------- */
  var nav = document.getElementById('nav'), menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', function () { var o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.lang button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.documentElement.lang = b.dataset.lang;
    });
  });

  /* ---------- contact form ---------- */
  var form = document.getElementById('form'), sent = document.getElementById('sent');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true, first = null;
    form.querySelectorAll('.field').forEach(function (f) {
      var inp = f.querySelector('input, textarea'), err = f.querySelector('.err'), msg = '';
      if (f.hasAttribute('data-req') && !inp.value.trim()) msg = 'Add your ' + f.querySelector('label').textContent.toLowerCase().replace('how can we help?', 'message') + '.';
      else if (f.hasAttribute('data-email') && !/^\S+@\S+\.\S+$/.test(inp.value.trim())) msg = 'Enter an email like name@company.com.';
      f.classList.toggle('bad', !!msg); err.textContent = msg; inp.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (msg) { ok = false; first = first || inp; }
    });
    if (!ok) { first.focus(); return; }
    document.getElementById('sentText').textContent = 'Thanks. We’ll get back to you within one business day.';
    form.style.display = 'none'; sent.classList.add('on'); sent.querySelector('h2').setAttribute('tabindex', '-1'); sent.querySelector('h2').focus();
  });
  document.getElementById('again').addEventListener('click', function () { form.reset(); form.style.display = ''; sent.classList.remove('on'); });

  show(location.hash.replace('#', '') || '/');
})();
