/**
 * Created by Administrator on 2016/9/14.
 */
$(function () {
    var n=0;

    fenye()
   function fenye() {
       $.get('json/tsconfig.json', function (data) {
           var $nr_warp = $('#nr-warp');
           var str = '';
           var num = 10;
           for (var i = num * n; i < Math.min(num * (n + 1), data.length); i++) {
               str += '<li class="cur Li">' +
                   '<img class="magt-15" src="' + data[i].img + '">' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].zhengshu + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].zuanzhong + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].yanse + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].jingdu + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].qiegong + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].paoguang + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].duichen + '</a>' +
                   '<a href="commodity_particulars.html?pId=' + data[i].pId + '">' + data[i].suozaidi + '</a>' +
                   '<b id="nr-b">小鸟价</b>' +
                   '<span  id="red">' + data[i].niaojia + '</span>' +
                   '<s>' + data[i].jiage + '</s>' +
                   '<span class="nr-btn fr">立即查看</span>' +
                   '</li>'
           }
           $nr_warp.html(str);
       })
   }
    // 列表
    var $shou=$('.shou');
    var $list_1=$('.list-1');
    var $list_2=$('.list-2');
    $shou.click(function () {
        if($('.shou').hasClass('shou-one')){
            $list_1.removeClass('list-one');
            $list_2.removeClass('list-two');
            $shou.removeClass('shou-one');
            $shou.html('展开高级搜索')
        }else{
            $list_1.addClass('list-one');
            $list_2.addClass('list-two');
            $shou.addClass('shou-one');
            $shou.html('收起高级搜索')
        }
    });

    var $xz=$('#nav-xh');
    var $sz=$('#nav-sz');
        $xz.css({'border-bottom':'3px solid #ff8A84'});
    $xz.click(function () {
        $xz.css({'border-bottom':'3px solid #ff8A84'});
        $sz.css({'border-bottom':'3px solid transparent'})
    });
    $sz.click(function () {
        $sz.css({'border-bottom':'3px solid #ff8A84'});
        $xz.css({'border-bottom':'3px solid transparent'})
    });

    var $json_btn=$('.json-btn a');
    var $nr_warp=$('#nr-warp');
    var $zzc=$('.zzc');
    $json_btn.eq(0).css('color','#ff8A84')
    $json_btn.click(function () {
        var da=$(this).index();
        $zzc.css('display','block');
        setTimeout(function () {
            n=da;
            fenye();
            $json_btn.css('color','#000').eq(da).css('color','#ff8A84')
            $zzc.css('display','none');
        },2000)

    });



















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