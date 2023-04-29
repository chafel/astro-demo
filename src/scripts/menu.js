// NOTE: Astro can send JavaScript to the browser to allow client side interactivity

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});