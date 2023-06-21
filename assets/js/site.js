import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.addEventListener('DOMContentLoaded', (event) => {
  if (document.querySelector("#search")) {
    new PagefindUI({ element: "#search" });
  }
});
