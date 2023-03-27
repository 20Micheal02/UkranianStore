export function Footer() {
  document.querySelector(".footer-body").innerHTML = `
  <div class="footer">
						<div class="container">
							<div class="footer__wrapper">
								<div class="footer__logo">
									<a href="/" class="logo">Ukranian<span>Store</span></a>
								</div>
								<div class="footer__categories">
									<p class="footer__title">Категорії</p>
									<ul class="footer__ul">
										<li><a class="footer__link"  href="#">iPhone</a></li>
										<li><a class="footer__link" href="#">MacBook</a></li>
										<li><a class="footer__link" href="#">AirPods</a></li>
										<li><a class="footer__link" href="#">Apple Watch</a></li>
										<li><a class="footer__link" href="#">iPad</a></li>
										<li><a class="footer__link" href="#">PlayStation</a></li>
										<li><a class="footer__link" href="#">Xbox</a></li>
									</ul>
								</div>
								<div class="footer__info ">
									<p class="footer__title">Корисна інформація</p>
									<ul class="footer__ul">
										<li><a class="footer__link" href="#">Trade in</a></li>
										<li><a class="footer__link" href="#">Apple</a></li>
										<li><a class="footer__link" href="#">Гарантія</a></li>
										<li><a class="footer__link" href="#">Доставка</a></li>
										<li><a class="footer__link" href="#">Оплата</a></li>
										<li><a class="footer__link" href="#">Питання та відповіді</a></li>
										<li><a class="footer__link" href="#">Контакти</a></li>
										<li><a class="footer__link" href="#">Про Нас</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="footer__border">
							<div class="container">
								<p class="footer__text">@UkranianStore 2023</p>
							</div>
						</div>
					</div>
  `;
  const witdhWindow = window.innerWidth;

  const footerTitles = document.querySelectorAll(".footer__title");

  if (witdhWindow <= 390) {
    footerTitles.forEach((footerTitle) => {
      footerTitle.addEventListener("click", () => {
        const footerUl = footerTitle.nextElementSibling;
        footerUl.classList.toggle("footer__ul--open");
      });
    });
  }
}
