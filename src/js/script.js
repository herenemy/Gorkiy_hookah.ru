'use strict';

const headerNode = document.querySelector('.header');
const navNode = document.querySelector('.nav');
const sectionReservationNode = document.getElementById('section--4');
const sectionIntroNode = document.querySelector('.section_intro');
const btnScrollToNode = document.getElementById('btnScrollTo');
const navLinksContainerNode = document.querySelector('.nav__items');
const allSectionsNode = document.querySelectorAll('.appearance-section');

btnScrollToNode.addEventListener('click', () => {
  sectionReservationNode.scrollIntoView({ behavior: 'smooth' });
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
const headerHeight = headerNode.getBoundingClientRect().height;
const getStickyNav = entries => {
  const entry = entries[0];
  console.log(entry);
  !entry.isIntersecting
    ? headerNode.classList.add('nav_sticky')
    : headerNode.classList.remove('nav_sticky');
};

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionIntroNode);
