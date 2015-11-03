/*************
*****MENU*****
**************/

// LEFT MENU INIT
$('.button-collapse.toolbar').sideNav({
    menuWidth: 80,
});
// RIGHT MENU INIT
$('.button-collapse.menu').sideNav({
    menuWidth: 240,
    edge: 'right',
});


/*************
*****ROWS*****
**************/

// ROW SLIDER NAVIGATION
$('.row-nav > a:first-child').on('click', function() {
    $('#'+$(this).parent().data('row')).slick('slickNext');
});
$('.row-nav > a:last-child').on('click', function() {
    $('#'+$(this).parent().data('row')).slick('slickPrev');
});

// ROW SLIDER - CATEGORY ROW SLIDER INIT
$('#category').slick({
    focusOnSelect: false,
    infinite: false,
    focusOnSelect: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

// ROW SLIDER - POPULAR STAFF ROW SLIDER INIT
$('#popular-staff').slick({
    focusOnSelect: false,
    infinite: false,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});

// POPULAR STAFF - ALBUM SLIDER INIT
$('.album-slider').slick({
    draggable: false,
    focusOnSelect: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
});

// ALBUM SLIDER NAVIGATION
$('.album-slider-nav > .right').click(function(){
    $(this).parent().next().slick('slickNext');
});
$('.album-slider-nav > .left').click(function(){
    $(this).parent().next().slick('slickPrev');
});

// ROW SLIDER - BLOGS ROW SLIDER INIT
$('#blogs').slick({
    focusOnSelect: false,
    infinite: false,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
});

// ROW SLIDER - NEWS ROW SLIDER INIT
$('#news').slick({
    focusOnSelect: false,
    infinite: false,
    focusOnSelect: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

/*************
***DOCUMENT***
**************/

// RESIZING ELEMENTS ON LOAD
$(document).ready(function(){
    $('#popular-staff .card.product_card, #popular-staff #album').css({
        'height': $('#popular-staff .card.product_card').css('width')
    });
    
    setTimeout(function(){

    //Category
    $("#slide-toolbar .row-nav[data-row=category]").css({
        'height': $('#category').height()+50,   // 50=margin
        'margin-top': $('header').height()+50-320-25 //50=header margin, 320=5(icons)*64, 20 nav top pos
    }); 
    $("#slide-toolbar .row-nav[data-row=category] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=category]").height()/2-30
    });
    
    //Popular staff//
    $("#slide-toolbar .row-nav[data-row=popular-staff]").css({
        'height': $('#popular-staff').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=popular-staff] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=popular-staff]").height()/2-30
    });
    
    //Blogs
    $("#slide-toolbar .row-nav[data-row=blogs]").css({
        'height': $('#blogs').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=blogs] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=blogs]").height()/2-30
    });
    
    //News
    $("#slide-toolbar .row-nav[data-row=news]").css({
        'height': $('#news').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=news] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=news]").height()/2-30
    });
    
    }, 1000);
});

$( window ).resize(function() {
    $('#popular-staff .card.product_card, #popular-staff #album').css({
        'height': $('#popular-staff .card.product_card').css('width')
    });
    setTimeout(function(){

    //Category
    $("#slide-toolbar .row-nav[data-row=category]").css({
        'height': $('#category').height()+50,
        'margin-top': $('header').height()+50-320-25 //50=header margin, 320=5(icons)*64, 20 nav top pos
    });
    $("#slide-toolbar .row-nav[data-row=category] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=category]").height()/2-30
    });
    
    //Popular staff
    $("#slide-toolbar .row-nav[data-row=popular-staff]").css({
        'height': $('#popular-staff').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=popular-staff] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=popular-staff]").height()/2-30
    });
    
    //Blogs
    $("#slide-toolbar .row-nav[data-row=blogs]").css({
        'height': $('#blogs').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=blogs] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=blogs]").height()/2-30
    });
    
    //News
    $("#slide-toolbar .row-nav[data-row=news]").css({
        'height': $('#news').height()+50,
    });
    $("#slide-toolbar .row-nav[data-row=news] .row-nav-btn").css({
        'top': $("#slide-toolbar .row-nav[data-row=news]").height()/2-30
    });
    
    }, 1000);
});