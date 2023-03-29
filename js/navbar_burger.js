// по клику на бурге должен открывать меню
// пока слайдом появляется белый пустой экран

const headerMenu = document.getElementById("headerMenu")
const buttonMenu = document.getElementById("buttonMenu")
function switchBurgerMenu() {
  headerMenu?.classList.toggle('mt-header__navbar_active');
//   buttonMenu?.classList.toggle('mt-button_menu_active'); //!за что отвечает класс непонятно (взято с другой "страницы")]]]
//   document.body.classList.toggle('body_lock'); //!за что отвечает класс непонятно (взято с другой "страницы")]]]
}
buttonMenu.addEventListener("click", switchBurgerMenu);