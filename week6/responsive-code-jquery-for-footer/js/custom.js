var m1 = $(".footer-links-wrapper h3");

m1.on('click', function() {
   

    $(this).next("ul").slideToggle();
    $(this).toggleClass("expand");
});

