$(document).ready(function(){
    var slide = $(".box");
    slide.hide();
    var s=0;
    slide.eq().show();

    var numrigth = $(".box").length;
    $(".next").click(function(){
        slide.eq(s).hide();
        s++;
        if(s>=numrigth){
            s=0;
        }
        slide.eq(s).show();

    });
    $(".back").click(function(){
        slide.eq(s).hide();
        s--;
        if(s<0){
            s= numrigth-1;
        }
        slide.eq(s).show();

    });
});