
$(function(){

    //首页全屏banner
    $('#banner .owl-carousel').owlCarousel({
        items: 1,                   //在屏幕中可见的轮播个数
        autoplay:true,              //轮播是否自动播放
        autoplayTimeout:2500,       //轮播切换间隔
        autoplayHoverPause:true,    //是否在鼠标滑过时停止自动播放
        autoWidth:false,             //自适应宽度
        autoHeight: false,           //自适应高度
        lazyLoad: true,             //是否懒加载图片
        dots:true,                 //是否显示圆点导航按钮
        loop:true,                  //是否无限循环，会复制第一项和最后一项来制作无限循环的错觉
        nav:false,                   //显示next/prev按钮
        autoplayHoverPause: true,   //是否在鼠标滑过时停止自动播放
        autoplayTimeout: 5000,      //轮播自动播放间隔,默认5000
        autoplaySpeed: 800,         //轮播自动播放速度
        navSpeed: 800,              //左右箭头切换速度
        dotsSpeed: 800,            //圆点导航切换速度
        //transitionStyle: 'fade',               
        //navText: ["<",">"],         //箭头导航文字
        responsive:{                //轮播响应式设置
            0:{
                items:1,
                autoplay:true
            },
            479:{
                items:1,
                autoplay:true
            },
            768:{
                items:1,
                autoplay:true
            },
            980:{
                items:1,
                autoplay:true
            },
            1199:{
                items:1,
                autoplay:true
            }
        }
    });
    //首页产品banner
    $('#product .item-content').owlCarousel({
        items: 4,                   //在屏幕中可见的轮播个数
        autoplay:true,              //轮播是否自动播放
        autoplayTimeout:4000,       //轮播切换间隔
        autoplayHoverPause:true,    //是否在鼠标滑过时停止自动播放
        autoWidth:false,             //自适应宽度
        dots:false,                 //不显示圆点导航按钮
        loop:true,                  //是否无限循环，会复制第一项和最后一项来制作无限循环的错觉
        nav:true,                   //显示next/prev按钮
        autoplayTimeout: 1500,      //轮播自动播放间隔,默认5000
        autoplaySpeed: 1000,         //轮播自动播放速度
        navSpeed: 1000,              //左右箭头切换速度
        autoHeight: true,           //自适应高度
        //responsiveRefreshRate：200, //Responsive的刷新频率,默认200
        //transitionStyle: 'fade',               
        navText: ["<",">"],         //箭头导航文字
        responsive:{                //轮播响应式设置
            0:{
                items:2
            },
            479:{
                items:2
            },
            768:{
                items:2
            },
            980:{
                items:3
            },
            1200:{
                items:4
            }
        }

    });

    //首页新闻中心banner
    $('#news .item-content').owlCarousel({
        items: 2,                   //在屏幕中可见的轮播个数
        autoplay:true,              //轮播是否自动播放
        autoplayTimeout:4000,       //轮播切换间隔
        autoplayHoverPause:true,    //是否在鼠标滑过时停止自动播放
        autoWidth:false,             //自适应宽度
        autoHeight: true,           //自适应高度
        dots:true,                 //不显示圆点导航按钮
        loop:true,                  //是否无限循环，会复制第一项和最后一项来制作无限循环的错觉
        nav:false,                   //显示next/prev按钮
        autoplaySpeed: 800,         //轮播自动播放速度
        navSpeed: 800,              //左右箭头切换速度
        dotsSpeed: 800,            //圆点导航切换速度
        //transitionStyle: 'fade',               
        navText: ["<",">"],         //箭头导航文字
        responsive:{                //轮播响应式设置
            0:{
                items:1
            },
            479:{
                items:1
            },
            768:{
                items:1
            },
            980:{
                items:2,
                autoplay:false
            },
            1199:{
                items:2,
                autoplay:false
            }
        }
    });

    //首页合作伙伴
    var owl = $('#partner .item-content');
    owl.owlCarousel({
        items: 5,                   //在屏幕中可见的轮播个数
        autoplay:true,              //轮播是否自动播放
        autoplayTimeout:4000,       //轮播切换间隔
        autoplayHoverPause:true,    //是否在鼠标滑过时停止自动播放
        autoWidth:false,             //自适应宽度
        dots:true,                 //不显示圆点导航按钮
        loop:true,                  //是否无限循环，会复制第一项和最后一项来制作无限循环的错觉
        nav:false,                   //显示next/prev按钮
        autoplaySpeed: 800,         //轮播自动播放速度
        navSpeed: 800,              //左右箭头切换速度
        autoHeight: true,           //自适应高度
        dotsSpeed: 800,            //圆点导航切换速度
        //transitionStyle: 'fade',               
        navText: ["<",">"],         //箭头导航文字
        responsive:{                //轮播响应式设置
            0:{
                items:2
            },
            479:{
                items:2
            },
            768:{
                items:3
            },
            980:{
                items:4
            },
            1199:{
                items:5
            }
        }
    });
    $('#partner .owl-nav .owl-prev').click(function() {
        owl.trigger('prev.owl.carousel',[800]);
    })
    $('#partner .owl-nav .owl-next').click(function() {
        owl.trigger('next.owl.carousel',[800]);
    })

    //首页新闻日期数据填充
    $('#news .owl-item .date').each(function () {
        var ndate = $(this).data('date').split('-');
        $(this).find('h2').text(ndate[2]);
        $(this).find('h5').text(ndate[0] + '-' + ndate[1]);
    })

    //监控窗口滚轮缩放改变新闻内容高度
    $(window).on('scroll resize',function(){
        clamp = $('#news .owl-item dd h5').css('-webkit-line-clamp');
        line_height = parseInt($('#news .owl-item dd h5').css('line-height'));
        content_h = clamp * line_height;
        $('#news .owl-item dd h5').css('max-height',content_h + 'px');
    })



})


$(function(){

    t = setInterval("showAuto()", 5000);

})

function showAuto(){

        var URL = $(this).data('img-url');
        $(".hoverimg").attr("src", "http://lscdn.leicht-tech.com/img/hoverbtnbg1.gif");
        $('.contactusdiyou').animate({
            right: '-230px'
        }, 100);
        $('.diyoumask').fadeOut();
}