(function(){
  var toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
  var btns=[].slice.call(document.querySelectorAll('.menu-btn'));
  function sub(b){return document.getElementById(b.getAttribute('aria-controls'));}
  function closeSubs(except){btns.forEach(function(b){if(b!==except){b.setAttribute('aria-expanded','false');sub(b).hidden=true;}});}
  btns.forEach(function(b){b.addEventListener('click',function(){var open=b.getAttribute('aria-expanded')!=='true';closeSubs(b);b.setAttribute('aria-expanded',String(open));sub(b).hidden=!open;});});
  document.addEventListener('click',function(e){if(!e.target.closest('.menu-item'))closeSubs();});
  function closeNav(){if(!nav||!toggle)return;nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menüyü aç');document.body.style.overflow='';}
  if(toggle&&nav){
    toggle.addEventListener('click',function(){var open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');document.body.style.overflow=open?'hidden':'';if(!open)closeSubs();});
    nav.addEventListener('click',function(e){if(e.target.closest('a')){closeSubs();closeNav();}});
    window.addEventListener('resize',function(){if(window.innerWidth>960)closeNav();});
  }
  document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;var o=document.querySelector('.menu-btn[aria-expanded="true"]');if(o){closeSubs();o.focus();}else if(nav&&nav.classList.contains('is-open')){closeNav();toggle.focus();}});
  var fb=[].slice.call(document.querySelectorAll('[data-filter]'));
  function apply(f){fb.forEach(function(x){x.setAttribute('aria-pressed',String(x.getAttribute('data-filter')===f));});document.querySelectorAll('.card[data-cat]').forEach(function(c){c.hidden=!(f==='all'||c.getAttribute('data-cat')===f);});}
  fb.forEach(function(b){b.addEventListener('click',function(){apply(b.getAttribute('data-filter'));});});
  var m=location.search.match(/[?&]kategori=([a-z]+)/);
  if(m&&fb.some(function(b){return b.getAttribute('data-filter')===m[1];}))apply(m[1]);
})();
