//内页二级导航
$('.top-banner-pro dl').on('click', function () {
    if ($(this).hasClass('nav_open')) {
        $(this).removeClass('nav_open').addClass('nav_close');
    } else {
        $(this).removeClass('nav_close').addClass('nav_open');
    }
    $('.top-banner-pro .subnav').slideToggle(500);
})
$(window).resize(function () {
    insidefun();
});

function insidefun() {
    winW = $(window).width();
    //监控窗口变化，内页二级导航的改变
    if (winW <= 992) {
        $('.top-banner-pro dl').removeClass('nav_open').addClass('nav_close');
        $('.top-banner-pro dl .subnav').css('display', 'none');
    }
    if (winW >= 992) {
        $('.top-banner-pro dl .subnav').css('display', 'flex');
    }


}
$(function () {
    //产品中心详情参数切换
    $('.product .r-detail dt span').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var slide = $(this).data("slide");
        $('.product .r-detail .down dd').eq(slide).css('display', 'block').siblings('dd').css('display', 'none');
    })

    /*
        show  //正常状态的框
        bigshow   // 放大的框的盒子
        smallshow  //缩小版的框
        mask   //放大的区域（黑色遮罩）
        bigitem  //放大的框
     */
    var obj = new mag('.bigView', '.bigshow', '.smallshow', '.mask', '.bigitem');
    obj.init();
    set_bigView()
    $(window).resize(function () {
        set_bigView()
    });
    function set_bigView(){
        var view_h = $('.bigView').height();
    $('.bigshow').height(view_h);
    }




})
