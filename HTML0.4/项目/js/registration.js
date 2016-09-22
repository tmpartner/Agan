/**
 * Created by Administrator on 2016/9/19.
 */
$(function () {
    var $xxk=$('.xxk li');
    var $sjzc=$('.sjzc');
    var $yxzc=$('.yxzc');
    var $xz=$('.xz');
    $xxk.eq(0).css({'border-bottom':'2px solid #ff8a81'});
    $xxk.eq(0).click(function () {
        $xxk.css({'border-bottom':'2px solid transparent'});
        $xxk.eq(0).css('border-bottom','2px solid #ff8a81');
        $sjzc.css({'display':'block'});
        $yxzc.css({'display':'none'});
    });
    $xxk.eq(1).click(function () {
        $xxk.css({'border-bottom':'2px solid transparent'});
        $xxk.eq(1).css('border-bottom','2px solid #ff8a81');
        $sjzc.css({'display':'none'});
        $yxzc.css({'display':'block'});
    });
    $xz.click(function () {
        if($xz.hasClass('bb')){
            $xz.removeClass('bb');
        }else{
            $xz.addClass('bb');
        }
    });

    var $sj=$('.sj');
    var $bc_img1=$('.bc_img1');
    var $sj1=$('.sj1');

    var $hy=$('.hy');
    var $bc_img2=$('.bc_img2');
    var $hy1=$('.hy1');
    
    var $mima=$('.mima');
    var $bc_img3=$('.bc_img3');
    var $mima_txt=$('.mima_txt');
    var $mima1=$('.mima1');

    var $qrmm=$('.qrmm');
    var $qrmm_txt=$('.qrmm_txt');
    var $bc_img4=$('.bc_img4');
    var $qrmm1=$('.qrmm1');

    var $sjyz=$('.sjyz');
    var $sjyz1=$('.sjyz1');

    var $yzm=$('.yzm');
    var $yzm_img=$('.yzm_img');
    var $yzm1=$('.yzm1');
    var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
    var paw=/^[a-z0-9A-Z、_-]{6,20}$/;

    var youxiang=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    $sj.focus(function () {
        if($sj.val()=='请输入手机号'){
            $sj.val('');
        }
        $sj.css({'color':'#000'})
    });
    $sj.blur(function () {
        if($sj.val()==''){
            $sj.css({'color':'#ccc'});
            $sj1.html('手机号码不能为空');
            $sj1.css({'display':'block'});
            $bc_img1.css({'display':'inline-block'});
            $bc_img1.attr({src:"images/icon_warning.png"});
        }else if($sj.val().length==11){

            if($sj.val().search(mobileReg)==-1){
                $sj1.css({'display':'block'});
                $sj1.html('请输入正确的手机号码');
                $bc_img1.attr({src:"images/icon_warning.png"});
            }else{
                $bc_img1.css({'display':'inline-block'});
                $bc_img1.attr({src:"images/zq.png"});
                $sj1.css({'display':'none'});
            }
        }else {
            $sj1.html('手机号码为11位数字');
            $sj1.css({'display':'block'});
            $bc_img1.css({'display':'inline-block'});
            $bc_img1.attr({src:"images/icon_warning.png"});
        }
    });

    $hy.focus(function () {
        if($hy.val()=='请输入会员名'){
            $hy.val('');
        }
        $hy.css({'color':'#000'})
    });

    $hy.blur(function () {
       if($hy.val()==''){
           $bc_img2.css({'display':'inline-block'});
           $hy1.html('请输入会员名');
           $hy1.css({'display':'block'});
           $bc_img2.attr({src:"images/icon_warning.png"});
       }else if($hy.val().length<6){
           $hy1.css({'display':'block'});
           $hy1.html('您输入的会员名已存在');
           $bc_img2.css({'display':'inline-block'});
           $bc_img2.attr({src:"images/icon_warning.png"});
       }else{
           $hy1.css({'display':'none'});
           $bc_img2.css({'display':'inline-block'});
           $bc_img2.attr({src:"images/zq.png"});
       }
    });
    $mima.focus(function () {
        $mima_txt.css({'display':'none'});
        $mima.css({'color':'#000'});
    });
    $mima.blur(function () {
        if($mima.val()==''){
            $mima1.css('display','block');
            $bc_img3.css('display','inline-block');
            $mima1.html('密码不能为空，请填写密码');
            $bc_img3.attr({src:"images/icon_warning.png"});
        }else if($mima.val().search(paw)==-1){
            $mima1.css('display','block');
            $bc_img3.css('display','inline-block');
            $mima1.html("6-20位大小写字母，数字及'-'、'_'组合");
            $bc_img3.attr({src:"images/icon_warning.png"});
        }else{
            $bc_img3.css('display','inline-block');
            $bc_img3.attr({src:"images/zq.png"});
            $mima1.css('display','none');
        }
    });

    $qrmm.focus(function () {
        $qrmm_txt.css({'display':'none'});
        $qrmm.css({'color':'#000'});
    });
    $qrmm.blur(function () {
        if($qrmm.val()==''){
            $qrmm1.css('display','block');
            $bc_img4.css('display','inline-block');
            $qrmm1.html('确认密码不能为空');
            $bc_img4.attr({src:"images/icon_warning.png"});
        }else if($qrmm.val()!=$mima.val()){
            $qrmm1.css('display','block');
            $qrmm1.html('两次密码不一致，请重新输入');
            $bc_img4.css('display','inline-block');
            $bc_img4.attr({src:"images/icon_warning.png"});
        }else if($qrmm.val()==$mima.val()){
            $bc_img4.css('display','inline-block');
            $bc_img4.attr({src:"images/zq.png"});
            $qrmm1.css('display','none');
        }
    });

    $sjyz.focus(function () {
        $sjyz.val('');
        $sjyz.css('color','#000')
    });
    $sjyz.blur(function () {
        if($sjyz.val()==''){
            $sjyz.val('6位验证码');
            $sjyz1.css('display','block')
            $sjyz.css('color','#ccc')
        }else{
            $sjyz1.css('display','none')
        }
    });
    $yzm.focus(function () {
        $yzm.val('');
        $yzm.css('color','#000')
    });
    $yzm.blur(function () {
        if($yzm.val()==''){
            $yzm.val('4位验证码');
            $yzm1.css('display','block')
            $yzm.css('color','#ccc')
        }else{
            $yzm1.css('display','none')
        }
    });


    var $denglu=$('.denglu');
    $denglu.click(function () {
        $sj1.css('display','block');
        $hy1.css('display','block');
        $mima1.css('display','block');
        $sjyz1.css('display','block');
        $yzm1.css('display','block');
    })

    // 邮箱

    var $yx=$('.yx');
    var $yx_hy=$('.yx_hy');
    var $yx_mima=$('.yx_mima');
    var $yx_qrmm=$('.yx_qrmm');
    var $yzm2=$('.yzm2');


    var $yx1=$('.yx1');
    var $yx_hy1=$('.yx_hy1');
    var $yx_mima1=$('.yx_mima1');
    var $yx_qrmm1=$('.yx_qrmm1');
    var $yzm21=$('.yzm21');


    var $bc_img5=$('.bc_img5');
    var $bc_img6=$('.bc_img6');
    var $bc_img7=$('.bc_img7');
    var $bc_img8=$('.bc_img8');


    var $yx_qrmm_txt=$('.yx_qrmm_txt');
    var $yx_mima_txt=$('.yx_mima_txt');
    var $denglu1=$('.denglu1');


    $yx.focus(function () {
       if($yx.val()=='输入您常用的邮箱地址') {
           $yx.val('');
           $yx.css('color','#000');
       }
    });
    $yx.blur(function () {
        if($yx.val()=='') {
            $yx.val('输入您常用的邮箱地址');
            $yx1.css('display','block');
            $bc_img5.css('display','inline-block');
            $yx.css('color','#ccc')
        }else if($yx.val().search(youxiang)==-1) {
            $yx1.css('display','block');
            $yx1.html('邮箱格式有误，请重新输入');
            $bc_img5.css('display','inline-block');
        }else{
            $yx1.css('display','none');
            $bc_img5.css('display','inline-block');
            $bc_img5.attr({src:'images/zq.png'})
        }
    });










    $yx_hy.focus(function () {
        if($yx_hy.val()=='请输入会员名'){
            $yx_hy.val('');
        }
        $yx_hy.css({'color':'#000'})
    });

    $yx_hy.blur(function () {
        if($yx_hy.val()==''){
            $bc_img6.css({'display':'inline-block'});
            $yx_hy1.html('请输入会员名');
            $yx_hy1.css({'display':'block'});
            $bc_img6.attr({src:"images/icon_warning.png"});
        }else if($yx_hy.val().length<6){
            $yx_hy1.css({'display':'block'});
            $yx_hy1.html('您输入的会员名已存在');
            $bc_img6.css({'display':'inline-block'});
            $bc_img6.attr({src:"images/icon_warning.png"});
        }else{
            $yx_hy1.css({'display':'none'});
            $bc_img6.css({'display':'inline-block'});
            $bc_img6.attr({src:"images/zq.png"});
        }
    });
    $yx_mima.focus(function () {
        $yx_mima_txt.css({'display':'none'});
        $yx_mima.css({'color':'#000'});
    });
    $yx_mima.blur(function () {
        if($yx_mima.val()==''){
            $yx_mima1.css('display','block');
            $bc_img7.css('display','inline-block');
            $yx_mima1.html('密码不能为空，请填写密码');
            $bc_img7.attr({src:"images/icon_warning.png"});
        }else if($yx_mima.val().search(paw)==-1){
            $yx_mima1.css('display','block');
            $bc_img7.css('display','inline-block');
            $yx_mima1.html("6-20位大小写字母，数字及'-'、'_'组合");
            $bc_img7.attr({src:"images/icon_warning.png"});
        }else{
            $bc_img7.css('display','inline-block');
            $bc_img7.attr({src:"images/zq.png"});
            $yx_mima1.css({'display':'none'})
        }
    });
    $yx_qrmm.focus(function () {
        $yx_qrmm_txt.css({'display':'none'});
        $yx_qrmm.css({'color':'#000'});
    });
    $yx_qrmm.blur(function () {
        if($yx_qrmm.val()==''){
            $yx_qrmm1.css('display','block');
            $bc_img8.css('display','inline-block');
            $yx_qrmm1.html('确认密码不能为空');
            $bc_img8.attr({src:"images/icon_warning.png"});
        }else if($yx_qrmm.val()!=$yx_mima.val()){
            $yx_qrmm1.css('display','block');
            $yx_qrmm1.html('两次密码不一致，请重新输入');
            $bc_img8.css('display','inline-block');
            $bc_img8.attr({src:"images/icon_warning.png"});
        }else if($yx_qrmm.val()==$yx_mima.val()){
            $bc_img8.css('display','inline-block');
            $bc_img8.attr({src:"images/zq.png"});
            $yx_qrmm1.css('display','none');
        }
    });
    $yzm2.focus(function () {
        $yzm2.val('');
        $yzm2.css('color','#000')
    });
    $yzm2.blur(function () {
        if($yzm2.val()==''){
            $yzm2.val('4位验证码');
            $yzm21.css('display','block')
            $yzm2.css('color','#ccc')
        }else{
            $yzm21.css('display','none')
        }
    });
    $denglu1.click(function () {
        $yx1.css('display','block');
        $yx_hy1.css('display','block');
        $yx_mima1.css('display','block');
        $yzm21.css('display','block');
    })

   
    









});


























