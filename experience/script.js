$(document).ready(function () {

  // ===== MOBILE MENU TOGGLE =====
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // ===== SCROLL EVENTS =====
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // Scroll to top button
    if (window.scrollY > 200) {
      $('#scroll-top').addClass('active');
    } else {
      $('#scroll-top').removeClass('active');
    }
  });

});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: false
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .heading', { delay: 200 });
srtop.reveal('.experience p', { delay: 300 });
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 300 });

/* ===== TAB TITLE CHANGE (CLEAN) ===== */
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Experience | Vipin Maurya";
    $("#favicon").attr("href", "/assets/images/favicon.png");
  } else {
    document.title = "Come Back 👋 | Vipin Maurya";
  }
});
