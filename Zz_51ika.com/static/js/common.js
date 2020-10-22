$(function () {
    //手机侧栏点击效果
    $('#topnav button').on('click', function () {
        $(this).toggleClass('active');
        $('#topnav ul').toggleClass('sidebar-active');
        $('.side-all').toggleClass('sidebar-active');
        $('#zedang').toggleClass('active');
    })
    $('#zedang').on('touchend', function () {
        $('#topnav button').removeClass('active');
        $('#topnav ul').removeClass('sidebar-active');
        $('.side-all').removeClass('sidebar-active');
        $(this).removeClass('active');
    })
    $('#topnav ul li').on('click', function () {
        $('#topnav button').toggleClass('active');
        $('#topnav ul').toggleClass('sidebar-active');
        $('.side-all').toggleClass('sidebar-active');
        $(this).addClass('active').siblings().removeClass('active');
    })

    //Bootstrap3轮播触摸滑动
    var startX, endX; //声明触摸的两个变量  
    var offset = 30; //声明触摸距离的变量  
    $('.carousel-inner').on('touchstart', function (e) {
        preventDefault();
        startX = e.originalEvent.touches[0].clientX; //当触摸开始时的x坐标；  
    });
    $('.carousel-inner').on('touchmove', function (e) {
        preventDefault();
        endX = e.originalEvent.touches[0].clientX; //当触摸离开时的x坐标；  
    });
    $('.carousel-inner').on('touchend', function (e) {
        //当触摸完成时进行的事件；  
        preventDefault();
        var distance = Math.abs(startX - endX); //不论正负，取值为正值；  
        if (distance > offset) {
            if (startX > endX) {
                preventDefault();
                $('#banner').carousel('next'); //当开始的坐标大于结束的坐标时，滑动到下一附图  
            } else {
                $('#banner').carousel('prev'); //当开始的坐标小于结束的坐标时，滑动到上一附图  

            }

        }
    });

    //圆点指标定位到相应的图
    $('.carousel-indicators li').on('click', function () {
        var number = $(this).data('slide-to');
        $('#banner').carousel(number);
    });

    //头部语言切换下拉
    $('#lang .box span').on('click', function () {
        $('#lang .box ul').slideToggle(250);
    })
    $('#lang .box ul li').on('click', function () {
        var str = $(this).text();
        console.log(str);
        $('#lang .box span').text(str);
        $(this).toggleClass('active');
    })

    //导航移动下划线
    var lf_move = $('nav .active').position().left;
    $('nav ul .move').css({
        'left': lf_move - 18
    });
    $('nav ul li').hover(function () {
        var h_lf_move = $(this).position().left;
        $('nav ul .move').css({
            'left': h_lf_move - 18
        });
    }, function () {
        $('nav ul .move').css({
            'left': lf_move - 18
        });
    })
    $(window).resize(function () {
        var lf_move = $('nav .active').position().left;
        $('nav ul .move').css({
            'left': lf_move - 18
        });
    });

    //内页二级导航
    $('.top-banner dl').on('click', function () {
        if ($(this).hasClass('nav_open')) {
            $(this).removeClass('nav_open').addClass('nav_close');
        } else {
            $(this).removeClass('nav_close').addClass('nav_open');
        }
        $('.top-banner .subnav').slideToggle(500);
    })
    $(window).resize(function () {
        insidefun();
    });

    function insidefun() {
        winW = $(window).width();
        //监控窗口变化，内页二级导航的改变
        if (winW <= 768) {
            $('.top-banner dl').removeClass('nav_open').addClass('nav_close');
            $('.top-banner dl .subnav').css('display', 'none');
        }
        if (winW >= 768) {
            $('.top-banner dl .subnav').css('display', 'flex');
        }
    }

    //内页侧栏菜单导航

    //侧栏二级菜单点击效果
    $('#sidebar li span').click(function () {
        $(this).parent('li').siblings().find('span').removeClass('active');
        $(this).parent('li').siblings().find('dl').slideUp(500);
        $(this).siblings('li').slideToggle(500);
        $(this).parent('li').find('dl').slideToggle(500);
        $(this).addClass('active');
    });

    function LeftMenufun() {
        winW = $(window).width();
        if (winW > 768) {
            $('.n_left_menu_list').show();
            $('.n_left_menu_list').find('.active').siblings('.n_left_dd_list').slideDown(500);

        }
        if (winW <= 768) {
            $('.n_left_menu_list').hide();
            $('.n_left_menu_list').find('.active').parent('.n_left_menu_list').show();
            $('.n_left_menu_list').find('.active').siblings('.n_left_dd_list').slideUp(500);

        }

    };

    $(window).resize(function () {
        LeftMenufun();
    });
    LeftMenufun();

    //导航栏填充轮播margin
    function marginNav() {
        var top = $('header').height();
        $("#banner").css("margin-top", top);
        $(".top-banner").css("margin-top", top);
        $(".top-banner-pro").css("margin-top", top);
    }
    $(window).resize(function () {
        marginNav();
    });
    marginNav();

    /* 侧边客服 */
    $(".contactusdiyou").hover(function () {
        var URL = $(this).data('img-url');
        $(".hoverimg").attr("src", URL + "/img/hoverbtnbg1.gif");
        $('.diyoumask').fadeIn();
        $('.contactusdiyou').animate({
            right: '0'
        }, 100);
    }, function () {
        var URL = $(this).data('img-url');
        $(".hoverimg").attr("src", URL + "/img/hoverbtnbg.gif");
        $('.contactusdiyou').animate({
            right: '-230px'
        }, 100, function () {});
        $('.diyoumask').fadeOut();
    });

});

//wow.js初始化
new WOW().init();

//图片弹窗预览
layer.photos({
    photos: '.layer-photos',
    anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
});

/* 53客服 */
// var _53code = document.createElement("script");
// _53code.src = "https://tb.53kf.com/code/code/10190169/8";
// var s = document.getElementsByTagName("script")[0];
// s.parentNode.insertBefore(_53code, s);


// var _SWTcode = document.createElement("script");
// _SWTcode.src = "http://pht.zoosnet.net/JS/LsJS.aspx?siteid=PHT51882027&float=1&lng=cn";
// var s = document.getElementsByTagName("script")[0];
// s.parentNode.insertBefore(_SWTcode, s);
