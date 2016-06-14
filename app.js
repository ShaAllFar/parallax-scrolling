function parallax(){
  var ypos = window.pageYOffset;
  image = document.getElementById('parallax-layer');
  image.style.top = -(ypos * .1) + 'px';
}

window.addEventListener('scroll',parallax);
