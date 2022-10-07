 $(window).scroll(function () {
     $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
 });

 $(document).ready(function () {
     $('.dropdown-submenu a.test').on("click", function (e) {
         $(this).next('ul').toggle();
         e.stopPropagation();
         e.preventDefault();
     });
 });