(function(){
  if (window.__mdSite) return; window.__mdSite = 1;
  var d = document, w = window, P = w.MD_PAGE || {}, h = d.head;
  d.documentElement.lang = 'sr';
  var STATIC = !!w.__mdStaticHead;
  if (P.title && !STATIC) d.title = P.title;
  function add(tag, a){ var e = d.createElement(tag); for (var k in a) e.setAttribute(k, a[k]); h.appendChild(e); return e; }
  var A = 'assets/', U = 'https://mddigitalweb.com';
  if (!STATIC){
  if (P.desc){ add('meta',{name:'description',content:P.desc}); add('meta',{property:'og:description',content:P.desc}); }
  if (P.title){ add('meta',{property:'og:title',content:P.title}); }
  if (P.path != null){ add('link',{rel:'canonical',href:U+P.path}); add('meta',{property:'og:url',content:U+P.path}); }
  add('meta',{property:'og:type',content:'website'});
  add('meta',{property:'og:site_name',content:'MD Digital'});
  add('meta',{property:'og:image',content:U+'/assets/og-image.png'});
  add('meta',{name:'twitter:card',content:'summary_large_image'});
  add('meta',{name:'theme-color',content:'#1B160F'});
  add('link',{rel:'icon',href:A+'favicon-32.png',sizes:'32x32',type:'image/png'});
  add('link',{rel:'icon',href:A+'favicon-16.png',sizes:'16x16',type:'image/png'});
  add('link',{rel:'apple-touch-icon',href:A+'apple-touch-icon.png'});
  }

  var css =
    'html{scroll-behavior:smooth}body{margin:0;background:#F9F4ED;-webkit-font-smoothing:antialiased;overflow-x:hidden}*{box-sizing:border-box}' +
    'h1,h2,h3,p,ol,ul{margin:0;padding:0}a{color:#BE8F27;text-decoration:none}a:hover{color:#9a7115}::selection{background:#BE8F27;color:#F9F4ED}' +
    'a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid #BE8F27;outline-offset:3px}input:focus,textarea:focus{outline:none;border-color:#BE8F27!important}' +
    '@keyframes md-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes md-spin{to{transform:rotate(360deg)}}@keyframes md-spin-rev{to{transform:rotate(-360deg)}}@keyframes md-glow{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:.75;transform:scale(1.08)}}@keyframes md-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}' +
    '.md-show-nav{display:none!important}@media(max-width:960px){.md-nav{display:none!important}.md-show-nav{display:flex!important}}' +
    '@media(max-width:768px){.md-stack{grid-template-columns:1fr!important}.md-col{flex-direction:column!important}.md-hide-m{display:none!important}.md-off-m{margin-top:0!important}' +
    '.md-btns{flex-direction:column!important;align-items:stretch!important}.md-btns>a{width:100%;justify-content:center}.md-full-m{width:100%!important;align-self:stretch!important}' +
    '.md-cap{white-space:normal!important}.md-cap>span{display:block}.md-sticky{position:static!important}.md-center-m{text-align:center!important}.md-show-m{display:flex!important}.md-radovi-cta{flex-direction:column!important;justify-content:center!important;text-align:center}.md-radovi-cta h2,.md-radovi-cta p{margin-left:auto!important;margin-right:auto!important}.md-row{align-items:start!important}.md-row .md-row-n{padding-top:7px;min-width:22px}.md-row .md-row-a{align-self:center}}' +
    '.md-row{position:relative;overflow:hidden;isolation:isolate}.md-row::before{content:"";position:absolute;inset:0;background:#1B160F;transform:scaleY(0);transform-origin:bottom;transition:transform .55s cubic-bezier(.2,.7,.2,1);z-index:-1}' +
    '.md-row .md-row-t,.md-row .md-row-n,.md-row .md-row-d{transition:color .4s,transform .55s cubic-bezier(.2,.7,.2,1),opacity .4s}.md-row .md-row-a{transition:transform .55s cubic-bezier(.2,.7,.2,1),background .4s,color .4s,border-color .4s}' +
    '@media(hover:hover){.md-row .md-row-d{opacity:0;transform:translateY(10px)}.md-row:hover::before,.md-row:focus-visible::before{transform:scaleY(1)}.md-row:hover .md-row-t{color:#F4EEDF;transform:translateX(18px)}.md-row:hover .md-row-n{color:#D6A94A}.md-row:hover .md-row-d{opacity:1;transform:none;color:#c8bfa8}.md-row:hover .md-row-a{transform:rotate(-45deg);background:#D6A94A;border-color:#D6A94A;color:#1B160F}}' +
    '/*md-row-fix*/@media(max-width:768px){.md-row{align-items:center!important;padding:12px 4px!important;gap:14px!important}.md-row .md-row-d{display:none!important}.md-row .md-row-n{padding-top:0!important}.md-row .md-row-t{font-size:24px!important}.md-row .md-row-a{width:36px!important;height:36px!important;font-size:15px!important}.md-row:hover .md-row-t{transform:none!important}}' +
    '@keyframes md-pulse{0%{box-shadow:0 0 0 0 rgba(214,169,74,.55)}70%{box-shadow:0 0 0 22px rgba(214,169,74,0)}100%{box-shadow:0 0 0 0 rgba(214,169,74,0)}}.md-pulse{animation:md-pulse 2.4s ease-out infinite}@media(prefers-reduced-motion:reduce){.md-pulse{animation:none}}' +
    '@media print{[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}}';
  var st = d.createElement('style'); st.textContent = css; h.appendChild(st);

  var mm = function(q){ return w.matchMedia ? w.matchMedia(q).matches : false; };
  var reduce = mm('(prefers-reduced-motion: reduce)');
  var fine = mm('(hover: hover) and (pointer: fine)');
  var E = 'cubic-bezier(.16,.84,.24,1)';
  var FROM = {up:'translateY(46px)',down:'translateY(-30px)',left:'translateX(-56px)',right:'translateX(56px)',scale:'scale(.9)',word:'translateY(108%)',fade:'',clip:'translateY(20px)'};
  var items = [], para = [], lines = [], steps = [], anims = [], io = null;

  function base(e){ return e.getAttribute('data-base') || ''; }
  function show(e){
    if (e.__shown || !e.__md) return; e.__shown = 1;
    if (reduce) return;
    var dl = (+e.getAttribute('data-delay') || 0) + (e.__dl || 0);
    void e.offsetWidth;
    e.style.transition = 'opacity .9s '+E+' '+dl+'ms, transform 1.1s '+E+' '+dl+'ms, clip-path 1.1s '+E+' '+dl+'ms';
    e.style.opacity = '1';
    e.style.transform = base(e);
    if (e.__t === 'clip') e.style.clipPath = 'inset(0 0 0 0)';
    setTimeout(function(){ e.style.transition = e.__tr0 || ''; }, dl + 1250);
  }
  function prep(e){
    if (e.__md) return; e.__md = 1;
    if (reduce) return;
    var t = e.getAttribute('data-reveal') || 'up'; e.__t = t;
    e.__tr0 = e.style.transition;
    e.style.transition = 'none';
    if (t !== 'word') e.style.opacity = '0';
    e.style.transform = ((FROM[t] || '') + ' ' + base(e)).trim();
    if (t === 'clip') e.style.clipPath = 'inset(0 0 100% 0)';
    var sc = e.parentElement && e.parentElement.closest('[data-stagger]');
    if (sc){ sc.__n = sc.__n || 0; e.__dl = sc.__n * (+sc.getAttribute('data-stagger') || 90); sc.__n++; }
    var tg = t === 'word' ? (sc || e.parentElement) : e;
    e.__tg = tg;
    if (!tg.__items){ tg.__items = []; if (io) io.observe(tg); }
    tg.__items.push(e);
    items.push(e);
  }
  if ('IntersectionObserver' in w){
    io = new IntersectionObserver(function(es){
      es.forEach(function(x){ if (x.isIntersecting){ (x.target.__items || []).forEach(show); io.unobserve(x.target); } });
    }, {threshold:0.1, rootMargin:'0px 0px -5% 0px'});
  }
  function check(){
    var vh = w.innerHeight || 800;
    for (var i = 0; i < items.length; i++){
      var e = items[i]; if (e.__shown) continue;
      var r = e.__tg.getBoundingClientRect();
      if ((r.width || r.height) && r.top < vh * 0.94 && r.bottom > 0) show(e);
    }
  }
  function scan(root){
    if (!root || root.nodeType !== 1) return;
    var all = [root].concat([].slice.call(root.querySelectorAll('[data-reveal],[data-parallax],[data-marquee],[data-spin],[data-spin-rev],[data-glow],[data-float],[data-line],[data-step]')));
    all.forEach(function(e){
      if (e.hasAttribute('data-reveal')) prep(e);
      if (e.__mx) return;
      var any = false;
      if (e.hasAttribute('data-parallax')){ any = true; if (!reduce) para.push(e); }
      if (e.hasAttribute('data-line')){ any = true; lines.push(e); }
      if (e.hasAttribute('data-step')){ any = true; e.__c0 = e.style.color; steps.push(e); }
      if (!reduce){
        var an = e.hasAttribute('data-spin-rev') ? 'md-spin-rev '+(e.getAttribute('data-spin-rev') || '30s')+' linear infinite'
          : e.hasAttribute('data-glow') ? 'md-glow 4s ease-in-out infinite'
          : e.hasAttribute('data-marquee') ? 'md-marquee '+(e.getAttribute('data-marquee') || '32s')+' linear infinite'
          : e.hasAttribute('data-spin') ? 'md-spin '+(e.getAttribute('data-spin') || '24s')+' linear infinite'
          : e.hasAttribute('data-float') ? 'md-float 6s ease-in-out infinite' : '';
        if (an){ any = true; e.__an = an; e.style.animation = an; anims.push(e); }
      }
      if (any) e.__mx = 1;
    });
  }

  var bar = d.createElement('div');
  bar.setAttribute('aria-hidden','true');
  bar.style.cssText = 'position:fixed;left:0;top:0;height:3px;width:100%;background:#BE8F27;transform-origin:0 50%;transform:scaleX(0);z-index:1000;pointer-events:none;';

  var tick = false;
  function frame(){
    tick = false;
    var vh = w.innerHeight || 800, sy = w.scrollY || w.pageYOffset || 0;
    var max = Math.max(1, d.documentElement.scrollHeight - vh);
    bar.style.transform = 'scaleX(' + Math.min(1, sy / max).toFixed(4) + ')';
    para.forEach(function(e){
      if (!e.isConnected || !e.parentElement) return;
      var r = e.parentElement.getBoundingClientRect();
      var c = r.top + r.height / 2 - vh / 2;
      var f = +e.getAttribute('data-parallax') || 0.1;
      e.style.transform = 'translate3d(0,' + (-c * f).toFixed(1) + 'px,0)';
    });
    lines.forEach(function(e){
      if (!e.isConnected) return;
      var r = e.parentElement.getBoundingClientRect();
      var p = (vh * 0.6 - r.top) / (r.height || 1); p = p < 0 ? 0 : p > 1 ? 1 : p;
      e.style.transform = 'scaleY(' + p.toFixed(3) + ')';
    });
    steps.forEach(function(e){
      if (!e.isConnected) return;
      var r = e.getBoundingClientRect();
      var on = r.top + r.height / 2 < vh * 0.6;
      if (e.__on !== on){ e.__on = on; e.style.color = on ? '#BE8F27' : (e.__c0 || ''); }
    });
    check();
    keepAnims();
  }
  function keepAnims(){ anims.forEach(function(e){ if (e.isConnected && !e.style.animation) e.style.animation = e.__an; }); }
  function req(){ if (!tick){ tick = true; requestAnimationFrame(frame); } }

  function pointer(){
    var dot = d.createElement('div'), ring = d.createElement('div');
    dot.setAttribute('aria-hidden','true'); ring.setAttribute('aria-hidden','true');
    dot.style.cssText = 'position:fixed;left:0;top:0;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#BE8F27;z-index:1002;pointer-events:none;opacity:0;transition:opacity .25s;';
    ring.style.cssText = 'position:fixed;left:0;top:0;width:88px;height:88px;margin:-44px 0 0 -44px;border-radius:50%;border:2px solid rgba(190,143,39,.75);z-index:1001;pointer-events:none;opacity:0;display:flex;align-items:center;justify-content:center;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#1B160F;transition:opacity .3s,background .3s,border-color .3s;';
    d.body.appendChild(ring); d.body.appendChild(dot);
    var mx = -200, my = -200, rx = -200, ry = -200, sc = 0.43, ts = 0.43, mode = null, mag = null, tl = null;
    function setMode(m, label){
      if (m === mode && (m !== 'label' || ring.textContent === label)) return;
      mode = m;
      if (m === 'label'){ ts = 1; ring.style.background = '#D6A94A'; ring.style.borderColor = '#D6A94A'; ring.textContent = label; dot.style.opacity = '0'; }
      else if (m === 'link'){ ts = 0.66; ring.style.background = 'rgba(190,143,39,.12)'; ring.style.borderColor = '#BE8F27'; ring.textContent = ''; dot.style.opacity = '1'; }
      else { ts = 0.43; ring.style.background = 'transparent'; ring.style.borderColor = 'rgba(190,143,39,.75)'; ring.textContent = ''; dot.style.opacity = '1'; }
    }
    function release(m){ m.style.transition = (m.__tr1 ? m.__tr1 + ', ' : '') + 'transform .7s cubic-bezier(.2,.9,.25,1.4)'; m.style.transform = ''; }
    function untilt(k){ k.style.transform = ''; var im = k.querySelector('[data-tilt-img]'); if (im) im.style.transform = ''; }
    d.addEventListener('pointermove', function(ev){
      if (ev.pointerType !== 'mouse') return;
      mx = ev.clientX; my = ev.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      ring.style.opacity = '1'; if (mode !== 'label') dot.style.opacity = '1';
      var t = ev.target && ev.target.closest ? ev.target : null; if (!t) return;
      var c = t.closest('[data-cursor]');
      if (c) setMode('label', c.getAttribute('data-cursor'));
      else if (t.closest('a,button,[role=button],summary')) setMode('link');
      else setMode('');
      var m = t.closest('[data-magnetic]');
      if (mag && mag !== m){ release(mag); mag = null; }
      if (m){
        if (!m.__mg){ m.__mg = 1; m.__tr1 = m.style.transition; }
        mag = m;
        var r = m.getBoundingClientRect();
        var dx = (mx - (r.left + r.width / 2)) * 0.28, dy = (my - (r.top + r.height / 2)) * 0.4;
        m.style.transition = (m.__tr1 ? m.__tr1 + ', ' : '') + 'transform .25s cubic-bezier(.2,.7,.2,1)';
        m.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
      }
      var k = t.closest('[data-tilt]');
      if (tl && tl !== k){ untilt(tl); tl = null; }
      if (k){
        tl = k;
        var q = k.getBoundingClientRect();
        var px = (mx - q.left) / q.width - 0.5, py = (my - q.top) / q.height - 0.5;
        k.style.transform = 'perspective(1000px) rotateX(' + (-py * 7).toFixed(2) + 'deg) rotateY(' + (px * 9).toFixed(2) + 'deg)';
        var im = k.querySelector('[data-tilt-img]');
        if (im) im.style.transform = 'scale(1.07) translate(' + (-px * 12).toFixed(1) + 'px,' + (-py * 12).toFixed(1) + 'px)';
      }
    }, {passive:true});
    d.documentElement.addEventListener('mouseleave', function(){
      ring.style.opacity = '0'; dot.style.opacity = '0';
      if (mag){ release(mag); mag = null; } if (tl){ untilt(tl); tl = null; }
    });
    (function loop(){
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; sc += (ts - sc) * 0.2;
      ring.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px) scale(' + sc.toFixed(3) + ')';
      requestAnimationFrame(loop);
    })();
  }

  function curtain(){
    var c = d.createElement('div');
    c.id = 'md-curtain';
    c.setAttribute('aria-hidden', 'true');
    c.style.cssText = 'position:fixed;inset:0;z-index:9998;background:#1B160F;display:flex;align-items:center;justify-content:center;pointer-events:none;transform:translateY(0);will-change:transform;';
    c.innerHTML = '<div style="position:absolute;left:0;right:0;bottom:0;height:3px;background:#D6A94A;"></div><div style="width:64px;height:64px;border-radius:50%;background:#F9F4ED;border:1px solid rgba(214,169,74,.6);display:flex;align-items:center;justify-content:center;"><img src="assets/mark-cat-badge.png" alt="" style="width:38px;height:38px;display:block"></div>';
    d.body.appendChild(c);
    var mp = d.getElementById('md-pre'); if (mp) mp.parentNode.removeChild(mp);
    var ease = 'cubic-bezier(.76,0,.24,1)';
    function out(){ c.style.transition = reduce ? 'opacity .2s' : 'transform .7s ' + ease; if (reduce) c.style.opacity = '0'; else c.style.transform = 'translateY(-100%)'; }
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ setTimeout(out, 120); }); });
    w.addEventListener('pageshow', function(e){ if (e.persisted){ c.style.transition = 'none'; c.style.transform = 'translateY(-100%)'; c.style.opacity = reduce ? '0' : '1'; } });
    d.addEventListener('click', function(e){
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;
      var u; try { u = new URL(a.href, location.href); } catch(_) { return; }
      if (u.origin !== location.origin) return;
      if (u.pathname === location.pathname && u.hash) return;
      e.preventDefault();
      if (reduce){ c.style.transition = 'opacity .2s'; c.style.opacity = '1'; }
      else { c.style.transition = 'none'; c.style.transform = 'translateY(100%)'; c.offsetHeight; c.style.transition = 'transform .55s ' + ease; c.style.transform = 'translateY(0)'; }
      setTimeout(function(){ location.href = u.href; }, reduce ? 200 : 560);
    }, true);
  }

  function init(){
    curtain();
    d.body.appendChild(bar);
    if (fine && !reduce) pointer();
    scan(d.body);
    new MutationObserver(function(ms){ ms.forEach(function(m){ m.addedNodes.forEach(scan); }); req(); })
      .observe(d.body, {childList:true, subtree:true});
    w.addEventListener('scroll', req, {passive:true});
    w.addEventListener('resize', req);
    req();
    [150, 600, 1500, 3000].forEach(function(t){ setTimeout(req, t); });
    setInterval(keepAnims, 1000);
  }
  if (d.body) init(); else d.addEventListener('DOMContentLoaded', init);
})();
