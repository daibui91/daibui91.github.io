$(document).ready(function () {
    new WOW().init();
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
          $('.accourt').removeClass('hienacc');
          $('.sea_item').removeClass('hiensea');
          $('.cart_v').toggleClass('hiencart');
         
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
});