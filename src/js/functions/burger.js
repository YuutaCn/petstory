import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const header = document.querySelector('.header');
  const headerLogo = document.querySelector('.header__logo-h1');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      header.style.transition = 'all 250ms var(--default-cubic)';
      headerLogo.style.transition = 'all 250ms var(--default-cubic)';
      header.style.background = 'var(--white-color)';
      headerLogo.style.color = '#FE9013';
      headerLogo.style.outline = 'solid 1px #FE9013';
      headerLogo.style.outlineOffset = '0px';
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      header.style.transition = 'all 250ms var(--default-cubic)';
      headerLogo.style.transition = 'all 250ms var(--default-cubic)';
      header.style.background = 'var(--black-color)';
      headerLogo.style.color = 'var(--white-color)';
      headerLogo.style.outline = 'solid 4px #FE901300';
      headerLogo.style.outlineOffset = '10px';
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    header.style.background = 'var(--black-color)';
    headerLogo.style.color = 'var(--white-color)';
    headerLogo.style.outline = 'solid 4px #FE901300';
    headerLogo.style.outlineOffset = '10px';
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      header.style.background = 'var(--black-color)';
      headerLogo.style.color = 'var(--white-color)';
      headerLogo.style.outline = 'solid 4px #FE901300';
      headerLogo.style.outlineOffset = '10px';
      enableScroll();
    });
  });
})();
