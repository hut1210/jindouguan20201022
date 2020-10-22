$(function () {
    //地图初始化
    var map = new BMap.Map("contact-map");
    // var point = new BMap.Point(113.822767,22.630198);
    var point = new BMap.Point(114.162153,22.28872);
    var i_map = $('#contact-map').data("icon");
    if(map){}
    //地图缩放
    map.centerAndZoom(point, 10);
    setTimeout(function(){
		map.setZoom(12);
	}, 2000);  //2秒后放大到14级
    map.enableScrollWheelZoom(true);

    //创建动画标注
    
    // var pt = new BMap.Point(113.822767,22.630198);
    var pt = new BMap.Point(114.162153,22.28872);
    var myIcon = new BMap.Icon(i_map, new BMap.Size(20,20));
    var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注 
    
    /* var marker = new BMap.Marker(point); // 创建标注 */
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    
    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
    map.addControl(navigationControl);

    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError", function (e) {
        // 定位失败事件
        alert(e.message);
    });
    map.addControl(geolocationControl);
})
