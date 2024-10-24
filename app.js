// Navbar Functionality
$(document).ready(function () {
  const nav = $("nav"),
    sidebarOpen = $(".sidebarOpen"),
    menu = $(".menu");
  sidebarOpen.on("click", function () {
    menu.toggleClass("active");
    $(this).toggleClass("hidden");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".sidebarOpen, .menu").length) {
      menu.removeClass("active");
      sidebarOpen.removeClass("hidden");
    }
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 6,
      },
    },
    dots: false,
    nav: false,
  });
});
