$(document).ready(function() {

    // Initialize side nav
    $('.button-collapse').sideNav();

    // Add in image styling
    $('p img', '.post').addClass('center-block z-depth-1');
    $('p img', '.post').unwrap().wrap("<div class='blog-image-padding' />");

});