// side nav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000
});


// material box
const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);

// scroll spy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 50
});