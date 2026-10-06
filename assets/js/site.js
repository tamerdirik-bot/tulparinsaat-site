(function(){
  var toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
  if(toggle&&nav){
    var close=function(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menüyü aç');document.body.style.overflow='';};
    toggle.addEventListener('click',function(){var open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');document.body.style.overflow=open?'hidden':'';});
    nav.addEventListener('click',function(e){if(e.target.closest('a'))close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus();}});
    window.addEventListener('resize',function(){if(window.innerWidth>960)close();});
  }
  var buttons=document.querySelectorAll('[data-filter]');
  buttons.forEach(function(b){b.addEventListener('click',function(){
    var f=b.getAttribute('data-filter');
    buttons.forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});
    document.querySelectorAll('.card[data-cat]').forEach(function(c){c.hidden=!(f==='all'||c.getAttribute('data-cat')===f);});
  });});
})();
