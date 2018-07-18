$(document).ready(function () {
    $(window).scroll(function(event) { 
                  if($('html,body').scrollTop() > 150) {  // so sanh vi tri hien tai voi welcome
                      $('.top').addClass('stick'); // doi logo
                     
                  }
                  else   // neu o tren welcome
                  {
                      $('.top').removeClass('stick');  // ve nhu cu 
                      // ve nhu cu 
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
        $('.menu_pc .menu_item:nth-child(1) a').click(function (e) { 
            e.preventDefault();
            $("html, body").animate({ scrollTop:$('.text_main1').offset().top-180}, 800);
        });
        $('.menu_pc .menu_item:nth-child(2) a').click(function (e) { 
            e.preventDefault();
            $("html, body").animate({ scrollTop:$('.main_3').offset().top-100}, 800);
        });
        $('.menu_pc .menu_item:nth-child(3) a').click(function (e) { 
            e.preventDefault();
            $("html, body").animate({ scrollTop:$('.diengia').offset().top-100}, 800);
        });
        $('.menu_pc .menu_item:nth-child(4) a').click(function (e) { 
            e.preventDefault();
            $("html, body").animate({ scrollTop:$('.login').offset().top}, 800);
        });
        $('.fa.fa-bars').click(function(){
           
            $('.mobile').addClass('in');
            //$('.icon_bar').addClass('out');

        });
        $('.fa.fa-times').click(function(){
            $('.mobile').removeClass('in');
            //$('.icon_bar').removeClass('out');

        });
console.log($('.text_main1').offset().top);
  
});