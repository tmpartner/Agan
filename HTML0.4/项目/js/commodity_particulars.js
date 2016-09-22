/**
 * Created by Administrator on 2016/9/18.
 */



$(function () {
    var $par=$('.par');
    var stri=window.location.search;
    var attr = stri.split("=");
   $.get('json/particular.json',function (data) {
       var str='';
       for(var i=0;i<data.length;i++){
           if(i==attr[1]){
               str+='<div class="yxzs">'+
                   '<img class="zs-1" src="'+data[i].img+'">'+
                   '</div>' +
                   '<div class="yxzs-r">' +
                   '<div>' +
                   '<img class="fl magr-20" src="images/jiaobiao_xian.jpg">' +
                   '<h1>'+data[i].name+'</h1>' +
                   '</div>' +
                   '<div class="xq_2">' +
                   '<span>小鸟价:<i class="font20 color-ff8 magl-20">'+data[i].niaojia+'</i><s>'+data[i].jiage+'</s></span>' +
                   '<span class="magl-30">预付定金:<i class="magl-20 font20 color-ff8">'+data[i].dingjin+'</i></span>' +
                   '</div>' +
                   '<div class="xq_3">' +
                   '<span>编号</span><span>'+data[i].bianhao+'</span><br>' +
                   '<span>证书</span><span>'+data[i].zhengshu+'</span>' +
                   '<img class="fr" src="images/cer_gia.jpg">' +
                   '</div>' +
                   '<div class="xq_4">' +
                   '<img class="magt-20" src="images/mz.jpg">' +
                   '<div class="xq_4_2" >' +
                   '<a href="shopping_cart.html?ip='+data[i].pId+'" class="a1">选择这颗钻石 开始定制</a><br>' +
                   '<a class="a2">预付定金</a>' +
                   '<a class="a2 fr">免息分期</a>' +
                   '</div>' +
                   '<div class="xq_4_3">' +
                   '<span class="magr-30 magt-20">服务</span>' +
                   '<a>自提</a>' +
                   '<i>/</i>' +
                   '<a>免费调货</a>' +
                   '<i>/</i>' +
                   '<a>免运费</a>' +
                   '<i>/</i>' +
                   '<a>现货全额支付立即发货</a><br>' +
                   '<span class="magr-30 magt-30">分享</span>' +
                   '<img class="magt-30" src="images/fenxiang-1.jpg">' +
                   '<img class="magt-30" src="images/fenxiang-2.jpg">' +
                   '<img class="magt-30" src="images/fenxiang-3.jpg">' +
                   '<img  class="magt-30" src="images/fenxiang-4.jpg">' +
                   '</div>' +
                   '</div>' +
                   '</div>'

           }
           
       }
       $par.html(str);
       var $a1=$('.a1');
       
       
       
       
       
       var $oUl=$('.oUl');
       var $zs_1=$('.zs-1');
       $oUl.eq(0).css({'border':"1px solid #ff8A84"})
       $oUl.eq(0).hover(function () {
           $zs_1.attr('src', 'images/zs-1-1.png')
           $oUl.css({'border':'#ccc'}).eq(0).css({'border':"1px solid #ff8A84"})
       });
       $oUl.eq(1).hover(function () {
           $zs_1.attr('src', 'images/zs-1-2.png')
           $oUl.css({'border':'#ccc'}).eq(1).css({'border':"1px solid #ff8A84"})
       });
       $oUl.eq(2).hover(function () {
           $zs_1.attr('src', 'images/zs-1-3.png')
           $oUl.css({'border':'#ccc'}).eq(2).css({'border':"1px solid #ff8A84"})
       });
   })

    var $zx_1=$('.zx-1');
    var $jia_1=$('.jia-1');
    var $jia_2=$('.jia-2');

    $zx_1.eq(0).click(function () {
        var hei=parseInt($zx_1.eq(0).css('height'));
        if(hei==182){
            $zx_1.eq(0).animate({'height':32})
            $jia_1.html('+')
        }else{
            $zx_1.eq(0).animate({'height':182})
            $jia_1.html('-')
        }
    })
    $zx_1.eq(1).click(function () {
        var hei=parseInt($zx_1.eq(1).css('height'));
        if(hei==182){
            $zx_1.eq(1).animate({'height':32})
            $jia_2.html('+')
        }else{
            $zx_1.eq(1).animate({'height':182})
            $jia_2.html('-')
        }
    })

















































});