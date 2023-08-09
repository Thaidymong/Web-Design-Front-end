$(document).ready(function(){
    var slide=$(".box");
    var numnext= $(".box").length;
    slide.hide();
    var s=0;
    slide.eq(0).show();

    getSlide_page();
    function getSlide_page(){
        $(".page_slide").find("li").eq(0).addClass("color");
    }

    $(".next").click(function(){
        AutoSlide();
        // $(".page_slide").find("li").eq(s).removeClass("color");
        // slide.eq(s).hide();
        // s++;
        // if(s>=numnext){
        //     s=0;
        // }
        // $(".page_slide").find("li").eq(s).addClass("color");
        // slide.eq(s).show();
    });
    $(".back").click(function(){
        $(".page_slide").find("li").eq(s).removeClass("color");
        slide.eq(s).hide();
        s--;
        if(s<0){
            s= numnext - 1;
        }
        $(".page_slide").find("li").eq(s).addClass("color");
        slide.eq(s).show();
    });

    $(".page_slide").on("click","li",function(){
        $(".page_slide").find("li").eq(s).removeClass("color");
        slide.eq(s).hide();
        s= this.index();
        slide.eq(s).show();
        $(".page_slide").find("li").eq(s).addClass("color");
    });

    var AutoSlide= function(){
        $(".page_slide").find("li").eq(s).removeClass("color");
        slide.eq(s).hide();
        s++;
        if(s>=numnext){
            s=0;
        }
        $(".page_slide").find("li").eq(s).addClass("color");
        slide.eq(s).show();
    }


    // Auto Slide
    // var ClearAutoSlide = setInterval(function(){
    //     AutoSlide();
    //     },
    //     2000
    // );

    // $(".mainbox").mouseover(function(){
    //     clearInterval(ClearAutoSlide);
    // });
    // $(".mainbox").mouseout(function(){
    //     ClearAutoSlide= setInterval(function(){
    //         AutoSlide();
    //         },
    //         2000
    //     );
    // });

    // var ClearAutoSlide = setInterval(function(){
    //     AutoSlide();
    //     },
    //     1000
    // );
    // $(".mainbox").mouseover(function(){
    //     clearInterval(ClearAutoSlide);
    // });
    // $(".mainbox").mouseout(function(){
    //     ClearAutoSlide= setInterval(function(){
    //         AutoSlide();
    //         },
    //         2000
    //     );
    // });

    var ClearAutoSlide = setInterval(function(){
        AutoSlide();
        }, 2000
    );
    $(".mainbox").mouseover(function(){
        clearInterval(ClearAutoSlide);
    });
    $(".mainbox").mouseout(function(){
        ClearAutoSlide = setInterval(function(){
            AutoSlide();
        },2000
        );
    });
});
