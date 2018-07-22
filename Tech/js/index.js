
$(document).ready(function () {
    $(window).scroll(function(event) { 
       
                  if($('html,body').scrollTop() >= 153) { 
                      $('.menu_right').addClass('stick'); 
                  }
                  else 
                  {
                      $('.menu_right').removeClass('stick'); 
                  }
                  //console.log($('.title h2:last-child').offset().top);
                  if($('html,body').scrollTop() >= $('#bottom_ar').offset().top-180) { 
                    $('.alert').addClass('hien'); 
                    $('.menu_right').removeClass('stick'); 
                }
                else 
                {
                    $('.alert').removeClass('hien'); 
                    //$('.menu_right').addClass('stick'); 
                }
                        
                                 
             });
            // if($('input').focus()){
            //     $('.abc').addClass('hien');
            // } 
            $('input').focus(function(){
                $('i.abc').addClass('hien1');
            });
            // $('input').blur(function(){
            //     $('i.abc').removeClass('hien1');
            // });
            $('i.abc').click(function (e) { 
                e.preventDefault();
                $('input').val("");
                $('i.abc').removeClass('hien1');
            });
            $('i.foot_i').click(function (e) { 
                e.preventDefault();
                $('.alert').removeClass('hien');
            });
    var a=$('h2');
    var b="";
    var i=1;
    // var y=document.querySelectorAll("h2");
    // console.log(y);
    // console.log(a);
    // console.log($('h2').offset().top);
    
    for( let i=0 ; i<=a.length-1 ; i++){
        b+='<li class="d_item"> <a href="#_'+i+'">' +a[i].innerText+'</a></li>';
        // console.log($('h2').offset().top) ;
        
        
    }

    
 
    //  for(i=1 ; i<=y.length-1 ; i++){
    //     alert ($(this).offset().top);
        
    // }

    $('.chimuc').html(b);
    var c=$('.chimuc li a');

    // c.click(function (e) { 
    //     e.preventDefault();
    //     alert (c[]);
    // });

    // c.each(function( index ) {
    //     $( this ).click(function (e) { 
    //         e.preventDefault();
    //         a.each(function( index ) {
    //             var g=$(this).offset.top();
    //             });
    //         $( $( this ).parent().html())
    //         alert (g);
    //         //$("html, body").animate({ scrollTop:g}, 800);
            
           
    //     });
    //   });

    // $('.d_item a').click(function(e){
    //     console.log('this :', $(this));
    // })
    for(let i=0 ; i<=c.length-1 ; i++){
        // console.log('c :', c);
        let d=c[i];
        let e=a[i];
        
      
        //     $(window).scroll(function(event) { 
        //         console.log($('html,body').scrollTop());
        //         console.log($(e).offset().top);
        //         if($('html,body').scrollTop() == $(e).offset().top) { 
        //             //alert( 'a');
        //             $(d).addClass('sang'); 
        //         }
               
                               
        //    });
      
        $(d).click(function(){
            // console.log(d);
            // console.log(a[i]);
            // console.log($(e).offset().top);
            $("html, body").animate({ scrollTop:$(e).offset().top}, 800);
            return false;
        });
     }
    
     
     //$("html, body").scrollspy({target:'.danhmuc_1'});
        
    //  }
        // $(window).scroll(function(){ 
        //     if ($(this).scrollTop() > 700) { 
        //         $('#backtop').fadeIn(); 
        //     } else { 
        //         $('#backtop').fadeOut(); 
        //     } 
        // }); 
        // $('#backtop').click(function(){ 
        //     $("html, body").animate({ scrollTop: 0 }, 800); 
        //     return false; 
        // }); 
        // $('.menu_pc .menu_item:nth-child(1) a').click(function (e) { 
        //     e.preventDefault();
        //     $("html, body").animate({ scrollTop:$('.text_main1').offset().top-180}, 800);
        // });
        // $('.menu_pc .menu_item:nth-child(2) a').click(function (e) { 
        //     e.preventDefault();
        //     $("html, body").animate({ scrollTop:$('.main_3').offset().top-100}, 800);
        // });
        // $('.menu_pc .menu_item:nth-child(3) a').click(function (e) { 
        //     e.preventDefault();
        //     $("html, body").animate({ scrollTop:$('.diengia').offset().top-100}, 800);
        // });
        // $('.menu_pc .menu_item:nth-child(4) a').click(function (e) { 
        //     e.preventDefault();
        //     $("html, body").animate({ scrollTop:$('.login').offset().top}, 800);
        // });
        // $('.fa.fa-bars').click(function(){
           
        //     $('.mobile').addClass('in');
        //     //$('.icon_bar').addClass('out');

        // });
        // $('.fa.fa-times').click(function(){
        //     $('.mobile').removeClass('in');
        //     //$('.icon_bar').removeClass('out');

        // });

  
});