const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.addEventListener('mousemove', function(e) {
  var cursor = document.getElementById('cursor');
  var x = e.clientX - cursor.offsetWidth / 2;
  var y = e.clientY - cursor.offsetHeight / 2;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});
