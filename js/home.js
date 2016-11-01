var hisdatas = []; //缓存记录
$(function () {
    //头部切换
    $('.bread_k,.btn-block,.SVG_ICON8').bind("click", function () {
        $('.bread_item').toggleClass("nob");
        $('.bread_k,.btn-block,.SVG_ICON8').toggleClass("foc");
        $('.bread_bg').toggle();
        $('#slider').toggle();
    });
});

//视频类目选择
$(document).ready(function(){

    $("#select1 li").click(function () {
        $(this).toggleClass("selected");
    });

});

