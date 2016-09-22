/**
 * Created by Administrator on 2016/9/18.
 */
$(function () {
    $.get('json/cart.json',function (data) {
        var str=''
        var $gw_oul=$('.gw_oul');
        var stri=window.location.search;
        var attr = stri.split("=");
        for(var i=0;i<data.length;i++){
            if(i==attr[1]){
                str+='<li class="oLi">' +
                    '<div class="fl nr_1">' +
                    '<img class="fl nr_img magt-10" src="'+data[i].img+'">' +
                    '<span class="magt-20 dis-blo">'+data[i].name+'</span><br>' +
                    '<i class="magt-5">GIV-</i><span class="magt-5">'+data[i].zhengshu+'</span>' +
                    '</div>' +
                    '<div class="nr_2 fl" >' +
                    '<span></span>' +
                    '</div>' +
                    '<div class="nr_3 fl" >' +
                    '<span></span>' +
                    '</div>' +
                    '<div class="nr_4 fl" >' +
                    '<s>'+data[i].jiage+'</s>' +
                    '</div>' +
                    '<div class="nr_5 fl" >' +
                    '<span class="nj">'+data[i].niaojia+'</span><br>' +
                    '<span class="color99 dj">'+data[i].dingjin+'(定金)</span>' +
                    '</div>' +
                    '<div class="nr_6 fl" >' +
                    '<a class="del">删除</a>' +
                    '</div>' +
                    '</li>'
            }
        }
        $gw_oul.html(str);
        var $del=$('.del');
        $del.click(function(){
            $(this).parents('li').remove();
            getsum();
        });

        getsum();

    });

    var $qk=$('.qk');
    var $oli=$('.gw_oul');
    $qk.click(function () {
        $oli.remove()
        getsum();
    });

















    var $dd=$('.dd');
    var $yf=$('.yf');
    function getsum() {
        var $nj=$('.nj');
        var $dj=$('.dj');
        var sum=0;
        var sfsum=0;
        var $oli=$('.oLi');
        $oli.each(function () {
            sum+=parseFloat($nj.html());
            sfsum+=parseFloat($dj.html());
        });
        $dd.html(sum+'￥');
        $yf.html(sfsum+'￥');
    }


















});
































