$(document).ready(function () {
    new WOW().init();
    $(window).scroll(function(event) { 
                  if($('html,body').scrollTop() > 150) {  // so sanh vi tri hien tai voi welcome
                      $('.menu_top1').addClass('stick'); // doi logo
                      $('.logo img').attr('src', 'images/lo1.png');
                      $('.nav-link').addClass('color_menu');
                      $('.text_menu_end').addClass('color_text');
                      $('.icon_bar13').addClass('color_icon');
                  }
                  else   
                  {
                      $('.menu_top1').removeClass('stick');  // ve nhu cu 
                      $('.logo img').attr('src', 'images/logo-white.png');
                      $('.nav-link').removeClass('color_menu');
                      $('.text_menu_end').removeClass('color_text');
                      $('.icon_bar13').removeClass('color_icon');
                  }
                
                              
             });
             $('#backtop').fadeOut();
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
        
       var a=$('.navbar-nav .nav-item .nav-link');
       var c=$('.truot');
       for(let i=0 ; i<=a.length-1 ; i++){
           $(a[i]).click(function () { 
               $("html, body").animate({ scrollTop:$(c[i]).offset().top-85}, 800);
               return false;
           });
       }
       var b=$('.mobi');
       for(let i=0 ; i<=b.length-1 ; i++){
        $(b[i]).click(function () { 
            $("html, body").animate({ scrollTop:$(c[i]).offset().top-85}, 800);
            return false;
        });
        }
    
        $('span.icon_bar13').click(function(){
           
            $('.menu_bar').toggleClass('in');
            $('span.icon_bar13 i').toggleClass('fa-times');
            $('body').toggleClass('in2');
            $('span.icon_bar13 i').toggleClass('fa-bars');

        });
        $('.check2').click(function (e) { 
            e.preventDefault();
            $('.an').toggleClass('hien');
           
        });
        $(".myBtn").click(function(){
            $("#myModal").modal();
           return false;
        });
        $("#zoom_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, loadingIcon: '' });

        $("#zoom_01").bind("click", function (e) { var ez = $('#zoom_01').data('elevateZoom'); $.fancybox    (ez.getGalleryList()); return false; });
        
       
});