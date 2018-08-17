$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function(event) { 
        if($('html,body').scrollTop() > 150) { 
           
            $('.top_fix').addClass('stick'); 
        }
        else   
        {
            $('.top_fix').removeClass('stick');
        
        }
      
                    
   });
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 800) {
                $('#backtop').fadeIn(); 
            } else { 
                $('#backtop').fadeOut(); 
            } 
        }); 
        $('#backtop').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 800);  
        }); 
        
    let a = $('.menu_sec2 .sl1');  
 
      for (let i = 0; i < a.length-1; i++) {
         $('.menu_sec2 .sl1').click(function (e) { 
             e.preventDefault();
             $('.menu_sec2 .sl1').removeClass('act');
             $(this).addClass('act');
             let b=$(this).index()+1;
             $('.wp-list-boxsp .an').removeClass('hien');
             $('.wp-list-boxsp .an:nth-child('+b+')').addClass('hien');
         });
      }
      let b = $('.menu_sec2 .sl2');  
      console.log(b);
      for (let i = 0; i < b.length-1; i++) {
         $('.menu_sec2 .sl2').click(function (e) { 
             e.preventDefault();
             $('.menu_sec2 .sl2').removeClass('act');
             $(this).addClass('act');
             let b=$(this).index()+1;
             $('.wp-list-boxsp .an').removeClass('hien');
             $('.wp-list-boxsp .an:nth-child('+b+')').addClass('hien');
         });
      }
      $('div.cart #cart_t').click(function (e) { 
          e.preventDefault();
          let a = 1;
          $('.accourt').removeClass('hienacc');
          $('.sea_item').removeClass('hiensea');
          $('.cart_v').toggleClass('hiencart');
          console.log('y');
          return false;
      });
      $('#login').click(function (e) { 
        e.preventDefault();
    
        $('.sea_item').removeClass('hiensea');
        $('.cart_v').removeClass('hiencart');
        $('.accourt').toggleClass('hienacc');
        return false;
    });
    $('#search').click(function (e) { 
        e.preventDefault();
        $('.accourt').removeClass('hienacc');
        $('.cart_v').removeClass('hiencart');
        $('.sea_item').toggleClass('hiensea');
        return false;
    });
    // menu_mobi
    $('li.item1,li.item2').slideUp();
    $('#icon_mo').click(function (e) { 
        e.preventDefault();
        $('li.item1').slideToggle();
    });
    $('.icon_mo1').click(function (e) { 
        e.preventDefault();
        console.log('$(this).parents() :', $(this).parent());
        $(this).parent().next('.ul_item2').children().slideToggle();
        console.log($(this).parent().next('.ul_item2'));
    });
    console.log($('li.item1'));
    $('div.menu_mobi i').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('xoay');
    });
    $('.icon_bar13').click(function (e) { 
        // alert ('a');
        $('div.menu__mobi').addClass('menuvao');
        $('.menu_mobi .den').addClass('hienden');
    });
    $('#tatmenu').click(function (e) { 
        $('div.menu__mobi').removeClass('menuvao');
        $('.menu_mobi .den').removeClass('hienden');
    });
    //sanpham.html
    $('#id_sp2').click(function (e) { 
        e.preventDefault();
        $('#id_sp1').removeClass('them_mau');
        $('#id_sp2').addClass('them_mau');
        $('.an_sp').addClass('hien_an_sp');
        $('.hien_sp').addClass('an_hien_sp');
    });
    $('#id_sp1').click(function (e) { 
        e.preventDefault();
        $('#id_sp2').removeClass('them_mau');
        $('#id_sp1').addClass('them_mau');
        $('.an_sp').removeClass('hien_an_sp');
        $('.hien_sp').removeClass('an_hien_sp');
    });
    $('#box-dt').owlCarousel({
        loop:true,
         margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5200,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#box-sp1').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5200,
        autoplaySpeed:1000,
          
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#box-sp2').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5200,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#box-sp3').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5400,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#box-sp4').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5400,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#box-sp5').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5400,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('#box-sp6').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        autoplayTimeout:5400,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    $("#zoom_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, loadingIcon: '' });

    $("#zoom_01").bind("click", function (e) { var ez = $('#zoom_01').data('elevateZoom'); $.fancybox    (ez.getGalleryList()); return false; });
});