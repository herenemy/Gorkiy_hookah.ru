'use strict';

const headerNode = document.querySelector('.header');
const navNode = document.querySelector('.nav');
const sectionReservationNode = document.getElementById('section--4');
const sectionIntroNode = document.querySelector('.section_intro');
const btnScrollToNode = document.getElementById('btnScrollTo');
const navLinksContainerNode = document.querySelector('.nav__items');
const allSectionsNode = document.querySelectorAll('.appearance-section');
const imgAlbumNode = document.querySelectorAll('.grid');
const btnShowAlbumNode = document.getElementById('btnAlbumShow');
const btnHideAlbumNode = document.getElementById('btnAlbumHide');
const albumContainerNode = document.querySelector('.grid__dropdown-inner');
const btnShowAlbumContainerNode = document.getElementById(
  'btnAlbumShowContainer'
);
const btnScrollToTop = document.querySelector('.btn-scroll-to-top');

btnScrollToTop.addEventListener('click', goTotop);

function goTotop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTotop, 0);
  }
}

btnScrollToNode.addEventListener('click', () => {
  sectionReservationNode.scrollIntoView({
    behavior: 'smooth',
  });
});

navLinksContainerNode.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('nav__link')) {
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    console.log('hello');
  }
});

// Appearance section
// function appearanceSection(entries, observer) {
//   const entry = entries[0];
//   console.log(entry);

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section_hidden');
//   observer.unobserve(entry.target);
// }

// const sectionObserver = new IntersectionObserver(appearanceSection, {
//   root: null,
//   threshold: 0,
// });

// allSectionsNode.forEach(item => {
//   sectionObserver.observe(item);
//   item.classList.add('section_hidden');
// });

// Header observer
const headerHeight = headerNode.getBoundingClientRect().height;
const getStickyNav = entries => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    headerNode.classList.add('nav_sticky');
    btnScrollToTop.classList.add('btn-scroll_active');
  } else {
    headerNode.classList.remove('nav_sticky');
    btnScrollToTop.classList.remove('btn-scroll_active');
  }
};

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionIntroNode);

// Album section
btnShowAlbumNode.addEventListener('click', () => {
  albumContainerNode.classList.add('grid_active');
  btnShowAlbumContainerNode.classList.add('btn_hidden');
});

btnHideAlbumNode.addEventListener('click', () => {
  albumContainerNode.classList.remove('grid_active');
  btnShowAlbumContainerNode.classList.remove('btn_hidden');
});
