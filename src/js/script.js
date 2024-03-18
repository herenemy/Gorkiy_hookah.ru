'use strict';

const header = document.querySelector('.header');
const sectionIntro = document.querySelector('.section_intro');
const navLinksContainer = document.querySelector('.nav__items');
const allSectionsNode = document.querySelectorAll('.appearance-section');
const btnShowAlbum = document.getElementById('btnAlbumShow');
const btnHideAlbum = document.getElementById('btnAlbumHide');
const albumContainer = document.querySelector('.grid__dropdown-inner');
const btnShowAlbumContainer = document.getElementById('btnAlbumShowContainer');
const btnScrollToTop = document.querySelector('.btn-scroll-to-top');
const burgerContainer = document.querySelector('.burger-nav__inner');
const burgerMenu = document.querySelector('.burger');

btnScrollToTop.addEventListener('click', goTotop);

function goTotop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTotop, 0);
  }
}

navLinksContainer.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    console.log('hello');
  }
});

// Appearance section
function appearanceSection(entries, observer) {
  const entry = entries[0];
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section_hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0,
});

allSectionsNode.forEach(item => {
  sectionObserver.observe(item);
  item.classList.add('section_hidden');
});

// Header observer

// const mediaQuery = window.matchMedia(`(max-width: 860px)`);
// if (mediaQuery.matches) {
//   console.log('hello world');
// }

// function checkQuery(mediaQuery) {
//   if (mediaQuery.matches) {
//     header.classList.add('nav_sticky');
//   }
// }

// mediaQuery.addEventListener('change', checkQuery);

const headerHeight = header.getBoundingClientRect().height;
const getStickyNav = entries => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    btnScrollToTop.classList.add('btn-scroll_active');
  } else {
    btnScrollToTop.classList.remove('btn-scroll_active');
  }
};

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionIntro);

// Album section
btnShowAlbum.addEventListener('click', () => {
  albumContainer.classList.add('grid_active');
  btnShowAlbumContainer.classList.add('btn_hidden');
});

btnHideAlbum.addEventListener('click', () => {
  albumContainer.classList.remove('grid_active');
  btnShowAlbumContainer.classList.remove('btn_hidden');
});

// burger menu
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerContainer.classList.toggle('burger__nav_active');
});
