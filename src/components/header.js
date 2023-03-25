import user from "../img/user.png";
import cart from "../img/trolley-cart.png";
export function Header() {
  document.querySelector(".header-body").innerHTML = `
  <div class="header">
  <div class="container">
    <div class="header__wrapper">

      <div class="header__logo">
        <a href="#" class="logo">Ukranian<span>Store</span> </a>
        <button class="header__btn-categories">
          Каталог
        </button>
      </div>
      <div class="cloas-menu">
        <ul class="header__ul">
          <li><a class="header__link" href="#">Акція</a></li>
          <li><a class="header__link" href="#">Гарантія</a></li>
          <li><a class="header__link" href="#">Доставка</a></li>
          <li><a class="header__link" href="#">Оплата</a></li>
        </ul>
        <ul>
          <li><a class="footer__link"  href="#">iPhone</a></li>
          <li><a class="footer__link" href="#">MacBook</a></li>
          <li><a class="footer__link" href="#">AirPods</a></li>
          <li><a class="footer__link" href="#">Apple Watch</a></li>
          <li><a class="footer__link" href="#">iPad</a></li>
          <li><a class="footer__link" href="#">PlayStation</a></li>
          <li><a class="footer__link" href="#">Xbox</a></li>
        </ul>
      </div>
      <div class="header__menu">
        <ul class="header__ul">
          <li><a class="header__link" href="#">Акція</a></li>
          <li><a class="header__link" href="#">Гарантія</a></li>
          <li><a class="header__link" href="#">Доставка</a></li>
          <li><a class="header__link" href="#">Оплата</a></li>
        </ul>
        <div class="header__user-btn">
          <a href="../pages/html/autorization.html" class="auth"><img src=${user} alt="user"></a>
          <a href="#" class="header__catr"><img src=${cart} alt="cart"></a>
        </div>
      </div>
      
    </div>
  </div>
</div>
  `;
  function addClass() {
    const menuBtn = document.querySelector(".header__btn-categories");
    const openMenu = document.querySelector(".cloas-menu");
    menuBtn.addEventListener("click", () => {
      openMenu.classList.toggle("open-menu");
    });
  }
  addClass();
}
