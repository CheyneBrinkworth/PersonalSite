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


document.addEventListener('DOMContentLoaded', function() {
  const colls = document.querySelectorAll('.collapsible');
  let openMenu = null; // Variable to keep track of currently open menu
  
  colls.forEach(function(coll) {
      coll.addEventListener('click', function() {
          if (openMenu === this) {
              // Toggle the clicked menu
              this.classList.toggle('active');
              const content = this.nextElementSibling;
              if (content.style.display === 'block') {
                  content.style.display = 'none';
              } else {
                  content.style.display = 'block';
              }
          } else {
              // Close the currently open menu
              if (openMenu) {
                  openMenu.classList.remove('active');
                  openMenu.nextElementSibling.style.display = 'none';
              }
              // Open the clicked menu
              this.classList.add('active');
              this.nextElementSibling.style.display = 'block';
              openMenu = this;
          }
      });
  });
});
