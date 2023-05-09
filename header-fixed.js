/*Se encarga de hacer que el header permanezca fijo en la parte superior de la página web mientras se hace scroll.
Detecta cuando el usuario desplaza la página y agrega o quita la clase header-fixed del elemento header cuando sea necesario.*/

var header = document.querySelector('.header');
var headerHeight = header.offsetHeight;
var scrollPosition = window.pageYOffset;

window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset;

  if (scrollPosition >= headerHeight) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});