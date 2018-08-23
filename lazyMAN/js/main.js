//for sticky navbar
window.onscroll = function () {
  showNav()
};

var navbar = document.getElementById("navbar");
var main = document.getElementById("main");
var sticky = navbar.offsetTop;

function showNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    main.classList.add("some-margin");
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("some-margin");
  }
}

//for search function
function openSearchBox() {
  var a = document.getElementById("search-box");
  a.classList.add("open");
}

function closeSearchBox() {
  var b = document.getElementById("search-box");
  b.classList.remove("open");
}

//for toggle menu

function toggleMenu() {
  var c = document.getElementById("fullscreen-nav");
  c.classList.toggle("open");
}


$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
})