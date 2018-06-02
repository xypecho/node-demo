function autodivheight() {

    var clist = $(".case-wrap .case-con .picbox .pic");
    for (var i = 0; i < clist.length; i++) {
        clist[i].style.height = Math.round((clist[i].offsetWidth) * (270 / 320)) + "px";
    }

    var mclist = $(".main-wrap .case-con .clist .picbox .pic");
    for (var i = 0; i < mclist.length; i++) {
        mclist[i].style.height = Math.round((mclist[i].offsetWidth) * (270 / 320)) + "px";
    }



}




window.onload = autodivheight;
$(window).resize(function () {
    autodivheight();
});