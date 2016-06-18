// This code was used for forcibly overriding CuteNews styles
// it may not be necessary anymore

$(document).ready(function() {

    $('.button-collapse').sideNav();

    //Get rid of styling from CuteNews
    $('div b', '.post').contents().unwrap();
    $('div font', '.post').contents().unwrap();
    $('div[style]', '.post').removeAttr('style');
    $('span b', '.post').contents().unwrap();
    $('span font', '.post').contents().unwrap();
    $('span[style]', '.post').removeAttr('style');
    $('a[style]', '.post').removeAttr('style');
    $('div', '.post').addClass('flow-text');
    $('p', '.post').addClass('flow-text');

    // We probably still need this part though
    $('p img', '.post').addClass('center-block z-depth-1');
    $('p img', '.post').unwrap().wrapAll("<div class='blog-image-padding' />");

});