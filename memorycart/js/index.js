var cards=['f1','f2','f3','f4','f5','f6','f7','f8'];
var current=null;
var count='0';
var time=31;
function shuffle(array){
    var currentIndex =array.length , temporaryValue, randomIndex;
    while(currentIndex != 0){
        randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
        temporaryValue=array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temporaryValue;
    }
    return array;
}
function flip(card){
    $(card).toggleClass('fliped');
    $(card).toggleClass('add_event');
   

    // if($(card).hasClass('fliped')){
       
    //     $(card).addClass('add_event');
    // }
    document.getElementById('click_music').play();
    if(!current){
        current=$(card);
       
    }else{
        if(current.attr('data-name') !=$(card).attr('data-name')){
            setTimeout(function(){
                $(card).toggleClass('fliped');
                current.toggleClass('fliped');
                $(card).toggleClass('add_event');
                current.toggleClass('add_event');
                document.getElementById('false_music').play();
                // if($(card).hasClass('fliped')==true){
    
                //     $(card).removeClass('add_event');
                // }
                current=null;
            },500);
        }else{
            setTimeout(function(){
                $(card).css('opacity','0');
                current.css('opacity','0');
                document.getElementById('true_music').play();
                current=null;
            },200);
            count++;
            if(count==8){
                $('#win').css('visibility','visible');
                document.getElementById('win_music').play();
            
            }
        }
    }
        
    
}
$(function () {
    cards=cards.concat(cards);
    cards= shuffle(cards);
    var html ='';
    for(var i=0;i<=cards.length-1;i++){
        if(i==8){ html+='<div class="grid">'+
        '<div class="card" onclick="flip(this)" data-name="'+cards[i]+'">'+
            '<div class="back" data-name="'+cards[i]+'">'+
                '<img src="img/'+cards[i]+'.jpg" alt="">'+
            '</div>'+
            '<div class="font">'+
                '<img src="img/back.jpg" alt="">'+
            '</div>'+
        '</div>'+'<div class="clearfix"></div>'+
    '</div>'}else{
        html+='<div class="grid">'+
        '<div class="card" onclick="flip(this)" data-name="'+cards[i]+'">'+
            '<div class="back" data-name="'+cards[i]+'">'+
                '<img src="img/'+cards[i]+'.jpg" alt="">'+
            '</div>'+
            '<div class="font">'+
                '<img src="img/back.jpg" alt="">'+
            '</div>'+
        '</div>'+
    '</div>'
    }
       
    }
    $('.content').html(html);
    var run = setInterval(function () {
        time--;
        if(time==0){
            clearInterval(run);
            $('#over').css('visibility','visible');
            $('.card').css('pointer-events', 'none');
            document.getElementById('over_music').play();
        }
        if(count==8){
            clearInterval(run);
        }
        $('#time1').html(time);
    },1000);
    
});
