/**
 * Created by 甘祥占 on 2016/9/11.
 */

$(function () {
    var $box3=$('.nav-b1');
    $.get('json/package.json',function (data) {
        for(var i=0;i<data.length;i++){
            $box3.eq(i).html('<dl class="one">'+
                '<dt>'+data[i].name+'</dt>'+
                '<dd><a href="###">'+data[i].dd1+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd2+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd3+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd4+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd5+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd6+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd7+'</a></dd>'+
                '<dd><a href="###">'+data[i].dd8+'</a></dd>'+
                '</dl>'+
                '<ul>'+
                '<li><a href="###">'+data[i].uli1+'</a></li>'+
                '<li><a href="###">'+data[i].uli2+'</a></li>'+
                '<li><a href="###">'+data[i].uli3+'</a></li>'+
                '<li><a href="###">'+data[i].uli4+'</a></li>'+
                '<li><a href="###">'+data[i].uli5+'</a></li>'+
                '<li><a href="###">'+data[i].uli6+'</a></li>'+
                '<li><a href="###">'+data[i].uli7+'</a></li>'+
                '</ul>'+
                '<div class="moulding"></div>'+
                '<ol>'+
                '<li><a href="###">'+data[i].oli1+'</a> </li>'+
                '<li><a href="###">'+data[i].oli2+'</a> </li>'+
                '<li><a href="###">'+data[i].oli3+'</a> </li>'+
                '<li><a href="###">'+data[i].oli4+'</a> </li>'+
                '<li><a href="###">'+data[i].oli5+'</a> </li>'+
                '</ol>'+
                '<div class="mouldingimg">'+
                '<img src="'+data[i].img+'">'+
                '</div>')
        }

    });


    var $gwc = $('#gwc');
    var $gwc_b = $('#gwc-b');
    var $nc = $('#nc');
    var $nc_b = $('#nc-b');
    var $gw = $('#gw');
    var $QR = $('#QR');


    // 导航栏
    var $dh = $('.dh');
    var $nav = $('.nav')


   


    //footer
    var $ss1=$('.ss1')


    $gwc.hover(function () {
        $gwc_b.css('display', 'block')
    }, function () {
        $gwc_b.css('display', 'none')
    })
    $nc.hover(function () {
        $nc_b.css('display', 'block')
    }, function () {
        $nc_b.css('display', 'none')
    });
    $gw.hover(function () {
        $QR.css('display', 'block')
    }, function () {
        $QR.css('display', 'none')
    });


    // 导航栏
    $dh.hover(function () {
        $nav.eq($(this).index()-1).css('display','block')
    },function () {
        $nav.eq($(this).index()-1).css('display','none')
    });
    $nav.hover(function () {
        //alert($(this).index())
        $nav.eq($(this).index()-3).css('display','block')
    },function () {
        $nav.eq($(this).index()-3).css('display','none')
    });



    
    // footer
    $ss1.hover(function () {
        twinkle($ss1)
    },function () {

    });



    //find
    var $find2=$('.find2');
    var $find3=$('.find3');
    var $find4=$('.find4');

    $find2.hover(function () {
        twinkle($find2)
        $find4.css({'display':'block'})
    },function () {
        $find4.css({'display':'none'})
    });

    $(window).scroll(function () {
        if($(window).scrollTop()>=400){
            $find3.css({'display':'block'})
        }
        if($(window).scrollTop()<400){
            $find3.css({'display':'none'})
        }

    });
    $find3.click(function () {
        $("body,html").animate({"scrollTop":0});

    });
    $find3.hover(function () {
        twinkle($find3)
    },function () {

    });

























        // 图片闪烁
        function twinkle($name) {
            $name.stop().animate({'opacity':0.8},100,function () {
                $name.stop().animate({'opacity':1},100)
            })
        }
    
    
    
    
    
    
    
































})