$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function(event) { 
                  if($('html,body').scrollTop() > 150) {  // so sanh vi tri hien tai voi welcome
                      $('.navbar-brand img.logo').attr('src', 'images/index/logo3.png'); // doi logo
                      $('.image_banner').addClass('bounce animated'); 
                       $('.navbar-brand img.logo').addClass('vang'); // them hieu ung 
                       $('nav.menu_top1').addClass('nentrang');
                  }
                  else   // neu o tren welcome
                  {
                      $('.navbar-brand img.logo').removeClass('vang');  // ve nhu cu 
                      $('.menu_top1').removeClass('nentrang');
                      $('.navbar-brand img.logo').attr('src', 'images/index/logo2.png');// ve nhu cu 
                  }
                
                              
             });
    
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 700) { 
                $('#backtop').fadeIn(); 
            } else { 
                $('#backtop').fadeOut(); 
            } 
        }); 
        $('#backtop').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 800); 
            return false; 
        }); 
        $('.fa.fa-bars').click(function(){
            $('.menu_mobi').addClass('in');
            $('.icon_bar').addClass('out');

        });
        $('.fa.fa-times').click(function(){
            $('.menu_mobi').removeClass('in');
            $('.icon_bar').removeClass('out');

        });
        // $(".nav-link").click(function (e) { 
        //     $(this).addClass("active");
        // });
        $('#box-sp1').owlCarousel({
            loop:true,
            
            nav:true,
            autoplay:true,
            autoplayTimeout:5000,
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
        });
  
});