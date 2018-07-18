$(function () {
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 800) { 
            $('#backtop').fadeIn(); 
        } else { 
            $('#backtop').fadeOut(); 
        } 
    }); 
    $('#backtop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 
    }); 
});