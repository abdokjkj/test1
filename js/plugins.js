
$(function(){

$(".s3 div button:nth-of-type(1)").on("mouseenter",function(){

$(this).siblings().css("color","red");

});

$(".s3 div button:nth-of-type(1)").on("mouseleave",function(){

$(this).siblings().css("color","white");
    
});

$(".s3 div button:nth-of-type(2)").on("mouseenter",function(){

$(this).siblings().css("color","blue");
    
});

$(".s3 div button:nth-of-type(2)").on("mouseleave",function(){

$(this).siblings().css("color","white");
        
});

window.onscroll = function(){

"use strict";

$(".fixed").css({

backgroundColor : "black" ,
width : "100%" ,
transition: "all 1s ease-in-out"

})

}

$(".s4 .c5 h2").on("click",function(){

$(this).next("p").toggle();

});

$(".t2").on("click",function(){

$('.timer').countTo();

});

var mixer = mixitup('.cont');

$("body").niceScroll({

cursorcolor: "blue" , 
cursorwidth: "10px"

});

$(".test").on("click",function(){

$(window).scrollTop(0);

});

});
