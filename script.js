(function(){
  const stage=document.getElementById('slidesWrapper');
  const slides=[...document.querySelectorAll('.slide')];
  const progress=document.getElementById('demo-progress');
  let current=Math.max(0,Math.min(slides.length-1,(parseInt(location.hash.slice(1),10)||1)-1));
  function fit(){const scale=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform=`translate(-50%,-50%) scale(${scale})`;}
  function show(n){current=Math.max(0,Math.min(slides.length-1,n));slides.forEach((el,i)=>el.classList.toggle('active',i===current));if(progress)progress.style.width=((current+1)/slides.length*100)+'%';history.replaceState(null,'','#'+(current+1));}
  function nextSlide(){show(current+1)} function prevSlide(){show(current-1)} function toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}
  window.nextSlide=nextSlide;window.prevSlide=prevSlide;window.toggleFullscreen=toggleFullscreen;
  addEventListener('resize',fit);addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' ','Enter'].includes(e.key)){e.preventDefault();nextSlide()}else if(['ArrowLeft','PageUp','Backspace'].includes(e.key)){e.preventDefault();prevSlide()}else if(e.key==='Home'){show(0)}else if(e.key==='End'){show(slides.length-1)}else if(e.key.toLowerCase()==='f'){toggleFullscreen()}});
  addEventListener('click',e=>{if(e.target.closest('a,button'))return;e.clientX<innerWidth*.25?prevSlide():nextSlide()});
  fit();show(current);
})();
