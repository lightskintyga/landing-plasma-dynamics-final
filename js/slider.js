var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    imagesLoaded: true,
    percentPosition: false,
});

var imgs = elem.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

/*
flkty.on( 'scroll', function() {
    flkty.slides.forEach( function( slide, i ) {
        var img = imgs[i];
        var x = ( slide.target + flkty.x ) * -1/3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
});*/
