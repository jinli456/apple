$(function () {
    //顶部
    var deng=$(".deng");
    var curs=$(".curs");
    var curx=$(".curx");
    var flg2=true;
    deng.on("click",function () {
       /* if(flg2){
            flg2=false;*/
        // alert(1)
            $(".deng").addClass("x");
            $(".xiala").css({opacity:1,zIndex:9999});
            $("body").css("overflow","hidden");
            $(".tab-list").css("display","none");
            $(".bao").css("display","none");
            $(".x").on("click",function(){
                $(".xiala").css({opacity:"0",zIndex:0});
                $("body").css("overflow","scroll");
                $(".tab-list").css("display","block");
                $(".bao").css("display","block");
                $(".deng").removeClass("x");

        })
    })
  /*  deng.on("click",function () {
        $(this).toggleClass("x");
        $(".xiala").slideToggle();

    })*/

    var bag=$(".bag");
    var flg=true;
    bag.on("click",function(){
        if(flg){
            flg=false;
            $(".bag-box").css("display","block");
        }else {
            flg=true;
            $(".bag-box").css("display","none");
        }

    })
    var bao=$(".bao");
    var flg1=true;
    bao.on("click",function(){
        if(flg1){
            flg1=false;
            $(".bag-box").css("display","block");
        }else {
            flg1=true;
            $(".bag-box").css("display","none");
        }

    })


    //banner
    var slides=$('.gallery-slide-wrapper a');
    var dots=$('.dot-nav .dot');
    var moving=false;
    var btn=$(".btn");
    var left=$(".left");
    var right=$(".right");
    btn.css("display","none");
    $(".carousel").on("mouseenter",function(){
        btn.css("display","block");
    })
    $(".carousel").on("mouseleave",function(){
        btn.css("display","none");
    })
    moveTo=function(el,dir){
        moving=true;
        if(dir=="right"){
            slides.filter(".active").removeClass("active").addClass("leave").delay(1000).queue(function(){$(this).removeClass('leave').dequeue();moving=false;});
            $(el).addClass("right");
            $(el).get(0).offsetWidth;
            $(el).removeClass("right").addClass("active");
            dots.removeClass("active").eq(slides.index(el)).addClass("active");
        }else if(dir=="left"){
            slides.filter(".active").removeClass("active").addClass("right").delay(1000).queue(function(){$(this).removeClass('right').dequeue();moving=false;});
            $(el).addClass("enter");
            $(el).get(0).offsetWidth;
            $(el).removeClass("enter").addClass("active");
            dots.removeClass("active").eq(slides.index(el)).addClass("active");
        }
        }

    moveRight=function(){
        var active=slides.filter(".active");
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,"right");
    }
    moveLeft=function(){
        var active=slides.filter(".active");
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,"left");
    }
    dots.on("click",function(){
        clearInterval(t);
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(moving){return;}
        if(c==n){return;}else if(c<n){
            moveTo(slides.eq(n),"right");
        }else{
            moveTo(slides.eq(n),"left");
        }
    })
    right.on("click",function(){
        moveRight();
    })
    left.on("click",function(){
        moveLeft();
    })
    var t= setInterval(moveRight,2000);

    //底部
    $('.footer2-inner ul').on('click',function () {
        $(this).find('.shi').toggleClass('cha');
        $(this).find('li').slideToggle();
    })
})