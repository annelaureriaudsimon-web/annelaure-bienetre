(function(){
  var b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
  var btns=document.querySelectorAll('.copy');
  for(var i=0;i<btns.length;i++){(function(c){
    c.addEventListener('click',function(){
      var m=document.getElementById(c.getAttribute('data-msg'));
      function ok(){m.textContent=c.getAttribute('data-label')}
      function ko(){m.textContent='Sélectionnez le texte ci-dessus pour le copier.'}
      try{navigator.clipboard.writeText(c.getAttribute('data-copy')).then(ok,ko)}catch(e){ko()}
    });
  })(btns[i])}
})();
