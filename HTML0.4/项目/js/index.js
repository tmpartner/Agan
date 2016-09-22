/**
 * Created by 甘祥占 on 2016/9/11.
 */
$(function () {

    //banner
    var $banner=$('.banner');
    var $banpicLi=$('.bannerimg');
    var $ban_l=$('.banner-left');
    var $ban_r=$('.banner-right');
    var $banbtn=$('#banbtn li');




    //banner

    focusPic($banbtn,$banpicLi,$banner,$ban_l,$ban_r)
    
    
    
    // 设计订婚戒指
   var $pr_img=$('.project-right');

    //产品系列
    var $recommend=$('.recommend');
    var $oLi=$('#cp li');
    var $ss1=$('.ss1');
    var $ss2=$('.ss2');
    var $tj_r=$('.tj-r');


    
    //婚戒推荐&全球美钻
    var $hjward=$('#hjward');
    var $hjoLi=$('#hjward li');
    var $lb_l=$('#lb-l');
    var $lb_r=$('#lb-r');
    var ind=0;
    var ind2=0;




    //广告
    var $gg1=$('#gg1')
    var $gg2=$('#gg2')
    var $gg3=$('#gg3')


    
    //nav4
    var $lb_ol=$('#lb-ol');
    var $List=$('#bt-list li');
    var $li1=$('#li1');
    var $li2=$('#li2');

    var $fw=$('.nav4 a');
    var $fwId=$('#fw');
    var $jtfw=$('#jtfw');
    var $rq1=$('#rq1');
    var $rq2=$('#rq2');
    var $dh=$('#dh');









    
    
    // 设计订婚戒指
    $pr_img.hover(function () {
        twinkle($pr_img)
    },function () {

    });

    //产品系列
    $recommend.eq(0).css({'display':'block'});
    $oLi.hover(function () {
        $recommend.css({'display':'none'}).eq($(this).index()).css({'display':'block'})
        $oLi.css({'color':'#fff'}).eq($(this).index()).css({'color':'#000'})
    });

    $ss1.hover(function () {
        twinkle($ss1)
    },function () {

    });
    $ss2.hover(function () {
        twinkle($ss2)
    },function () {

    });
    $tj_r.hover(function () {
        twinkle($tj_r)
    },function () {

    });


    // 设计订婚戒指
    $hjward.css({'width':300*$hjoLi.length});
    $lb_l.click(function () {
        ind--;
        if(ind<=0){
            ind=0;
            $lb_l.css({'color':'#d6d7d6'})
        }
        $lb_r.css({'color':'#000'});
        $hjward.stop().animate({'left':-ind*300},1000)
    });
    $lb_r.click(function () {
        ind++;
        if(ind>=4){
            ind=4;
            $lb_r.css({'color':'#d6d7d6'})
        }
        $lb_l.css({'color':'#000'});
        $hjward.stop().animate({'left':-ind*300},1000)
    });

    $hjoLi.hover(function () {
        $(this).stop().animate({'margin-top':'117px'})
    },function () {
        $(this).stop().animate({'margin-top':'130px'})
    });



    var iNow=0;
    var $picLi=$('.pr-img img');
    $picLi.stop().fadeOut().eq(iNow).stop().fadeIn();
    setInterval(toNext,5000);
    function toNext () {
        iNow =++iNow%$picLi.length;
        $picLi.stop().fadeOut().eq(iNow).stop().fadeIn();
    }


    
    


    //广告
    $gg1.hover(function () {
        twinkle($gg1)
    },function () {

    });
    $gg2.hover(function () {
        twinkle($gg2)
    },function () {

    });
    $gg3.hover(function () {
        twinkle($gg3)
    },function () {

    });






    //nav4
    console.log($fw.length)

    for(var i=0;i<$fw.length;i++){
        $fw[i].onmouseover=function () {
            //console.log($(this).index())
            // if($(this).index()==0){
            //     $fwId.html($fw.eq($(this).index()).html())
            // }
            // if($(this).index()==2){}
            switch ($(this).index()){
                case 0:
                    $fwId.html($fw.eq(0).html())
                    $jtfw.html('上海市黄浦区南京东路299号宏伊广场8层')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  021-33665178')
                    ;break;
                case 2:
                    $fwId.html($fw.eq(1).html())
                    $jtfw.html('王府井大街138号新东安T2办公楼7层')
                    $rq1.html('周一至周五 10:30-20:00   ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  010-85186550');break;
                case 4:
                    $fwId.html($fw.eq(2).html())
                    $jtfw.html('天河区天河路230号万菱国际中心35层')
                    $rq1.html('周一至周五 10:30-20:00   ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  020-85236561');break;
                case 6:
                    $fwId.html($fw.eq(3).html())
                    $jtfw.html('锦江区总府路2号时代广场22层')
                    $rq1.html('周一至周五 10:30-20:00 ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  028-86669117');break;
                case 8:
                    $fwId.html($fw.eq(4).html())
                    $jtfw.html('下城区环城北路208号坤和中心写字楼18层')
                    $rq1.html('周一至周五 10:30-20:00 ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  0571-89936665');break;
                case 10:
                    $fwId.html($fw.eq(5).html())
                    $jtfw.html('秦淮区汉中路89号金鹰写字楼A座12层')
                    $rq1.html('周一至周五 10:30-20:00  ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  025-84732218');break;
                case 12:
                    $fwId.html($fw.eq(6).html())
                    $jtfw.html('海曙区车轿街69号恒泰大厦7层')
                    $rq1.html('周一至周五 10:30-20:00  ')
                    $rq2.html('周六至周日 10:00-20:30')
                    $dh.html('咨询电话  0574-83879552');break;
                case 14:
                    $fwId.html($fw.eq(7).html())
                    $jtfw.html('安徽省合肥市芜湖路万达广场7号写字楼8F')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  0551-63666186');break;
                case 16:
                    $fwId.html($fw.eq(8).html())
                    $jtfw.html('和平区南京路219号天津中心18层')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  022-58369518');break;
                case 18:
                    $fwId.html($fw.eq(9).html())
                    $jtfw.html('南门外南关正街88号王府井百货写字楼A座503')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  029-87651758');break;
                case 20:
                    $fwId.html($fw.eq(10).html())
                    $jtfw.html('市南区香港中路40号数码港旗舰大厦37层')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  0532-86678830');break;
                case 22:
                    $fwId.html($fw.eq(11).html())
                    $jtfw.html('二七区民主路10号华润大厦1904室')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  0371-89910828');break;
                case 24:
                    $fwId.html($fw.eq(12).html())
                    $jtfw.html('京汉大道1398号壹方购物中心2号写字楼1106室')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  027-85267510');break;
                case 26:
                    $fwId.html($fw.eq(13).html())
                    $jtfw.html('重庆市渝中区解放碑大都会东方广场15层（协信星光对面）')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  023-63707500');break;
                case 28:
                    $fwId.html($fw.eq(14).html())
                    $jtfw.html('绵阳市涪城区公园路2号瀚威•城市中心21楼')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  021-33665178');break;
                case 30:
                    $fwId.html($fw.eq(15).html())
                    $jtfw.html('上海市黄浦区南京东路299号宏伊广场8层')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  021-33665178');break;
                case 32:
                    $fwId.html($fw.eq(16).html())
                    $jtfw.html('重庆市渝中区解放碑大都会东方广场15层')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  021-33665178');break;
                case 34:
                    $fwId.html($fw.eq(17).html())
                    $jtfw.html('江苏盐城市建军中路133号（曹家巷老军分区东侧）')
                    $rq1.html('周一至周四 10:30-20:00  ')
                    $rq2.html('周五 10:30-20:30')
                    $dh.html('咨询电话  021-33665178');break;
            }

        }
    }


    var $didian1=$('.didian');
    var $fasong=$('.fasong');

    $didian1.focus(function () {
        $didian1.attr({'value':''});
        $fasong.css({'display':'block'})
    });
    $didian1.blur(function () {
        $didian1.attr({'value':'免费发送地址到手机'});
        $fasong.css({'display':'none'})
    });


























    $li1.css({'background':'#ff8a84'})
    $List[0].onmouseover=function () {
        ind2=$(this).index()
        $lb_ol.stop().animate({'left':0})
        $li1.css({'background':'#ff8a84'})
        $li2.css({'background':'#42414a'})
    };
    $List[1].onmouseover=function () {
        ind2=$(this).index()
        $lb_ol.stop().animate({'left':-480})
        $li2.css({'background':'#ff8a84'})
        $li1.css({'background':'#42414a'})
    };


    setInterval(function () {
        ind2++;
        $lb_ol.stop().animate({'left':-(480*ind2)%960})
        if(ind2%2==1){
            $li2.css({'background':'#ff8a84'})
            $li1.css({'background':'#42414a'})
        }else{
            $li1.css({'background':'#ff8a84'})
            $li2.css({'background':'#42414a'})
        }
    },5000);











    
    
    // 图片闪烁
    function twinkle($name) {
        $name.stop().animate({'opacity':0.8},100,function () {
            $name.stop().animate({'opacity':1},100)
        })
    }

});