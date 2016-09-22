/**
 * Created by Administrator on 2016/9/19.
 */
$(function () {
    var $name=$('.name');
    var $paw=$('.paw');
    var $xz=$('.xz');
    var $mm=$('.mm');
    var $dl=$('.denglu');
    var $cw=$('.cw1');
    $name.focus(function () {
        if($name.val()=='用户名'){
            $name.val('');
        }
        $name.css({'color':'#000'})
    });
    $name.blur(function () {
        if($name.val()==''){
            $name.val('用户名');
            $name.css({'color':'#ccc'})
        }
    });
    $paw.focus(function () {
        $mm.css({'display':'none'})
    });
    $paw.blur(function () {
        if($paw.val()==''){
            $mm.css({'display':'block'})
        }
    });
    $xz.click(function () {
        if($xz.hasClass('bb')){
            $xz.removeClass('bb');
        }else{
            $xz.addClass('bb');
        }
    });


    $dl.click(function () {
        $cw.css({'display':'block'})
    });
});




























