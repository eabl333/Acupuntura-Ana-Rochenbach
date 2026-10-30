(function(){
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn){btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
  document.querySelectorAll('.sub-toggle').forEach(function(b){
    b.addEventListener('click',function(){var li=b.parentElement,o=li.classList.toggle('open');b.setAttribute('aria-expanded',o)})
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){document.querySelectorAll('.has-sub.open').forEach(function(l){l.classList.remove('open')})}});
  var y=document.getElementById('ano');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('form-wa');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var t='Olá, meu nome é '+f.nome.value+'. Motivo: '+f.motivo.value+'.'+(f.msg.value?' '+f.msg.value:'');
    window.open('https://wa.me/5566992344454?text='+encodeURIComponent(t),'_blank','noopener');
  })}
})();
