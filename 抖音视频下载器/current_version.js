// ==UserScript==
// @name         网页版抖音视频下载器
// @icon         https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico
// @version      1.8
// @description  插入当前视频的下载按钮
// @author       xiaofang
// @match        *://www.douyin.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// @namespace    https://greasyfork.org/zh-CN/scripts/438928
// @supportURL   https://github.com/xiaofang113/GreasyFork/blob/main/%E6%8A%96%E9%9F%B3%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%99%A8/current_version.js
// @homepageURL  https://github.com/xiaofang113/GreasyFork/blob/main/%E6%8A%96%E9%9F%B3%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD%E5%99%A8/current_version.js
// ==/UserScript==

(function(){
console.log("脚本启动成功");
window.onload = function(){
$("head").prepend(`
<script>
    function tishi(){
        $('.DownloadURL path').attr('style','fill:#00CCFF');
        $('.tishi1').show();
        $('.tishi2').show();
        setTimeout(function(){$('.DownloadURL path').attr('style','fill:#FFFFFF');},100);
        setTimeout(function(){$('.tishi1').hide();$('.tishi2').hide();},1000);
    };
    function download1(){
        var filename=$('.swiper-slide-active .account-name').text()+'：'+$('.swiper-slide-active .UCT89JiM .Nu66P_ba').text().replace(/[\\/:*?\"<>|\\n]/g,'');
        var imgs = document.evaluate('//*[@class="swiper-slide ARBi5fd6 swiper-slide-active"]//*[@class="swiper-slide swiper-slide-active"]/div/img/@src',document).iterateNext();
        if(imgs){
            document.evaluate('//*[@class="swiper-slide ARBi5fd6 swiper-slide-active"]//*[@class="swiper-slide swiper-slide-active"]/button',document).iterateNext().click()
            downloadfile(imgs.value,filename+'.jpg');tishi();
        }else{
            $('.swiper-slide-active video').children().each(function(){
                var downloadURL= $(this).attr('src');
                console.log(downloadURL);
                if(downloadURL.length>20){downloadfile(downloadURL,filename+'.mp4');tishi();};
                return false;
            });
        }
    };
    function download3(){
        var filename=('@'+$('.yy223mQ8 .Nu66P_ba').first().text()+'：'+$('.z8_VexPf .Nu66P_ba').text()).replace(/[\\/:*?\"<>|\\n]/g,'');
        $('.xg-video-container video').children().each(function(){
            var downloadURL= $(this).attr('src');
            console.log(downloadURL);
            if(downloadURL.length>20){downloadfile(downloadURL,filename+'.mp4');tishi();};
            return false;
        });
    };
    function downloadfile(url,name){
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const a = document.createElement('a');
            const objectUrl = window.URL.createObjectURL(blob);
            a.download = name;
            a.href = objectUrl;
            a.click();
            window.URL.revokeObjectURL(objectUrl);
            a.remove();
        })
    };
</script>
`);
$(".YwClj8rK #fullscreen_capture_feedback").next().prepend('<div class="Y58u3RjO aeP91Vml tishi1" style="display: none;">下载成功</div>');
$(".XW6jLhS3").prepend('<div class="Y58u3RjO GDIQIpUY tishi2" style="display: none;">下载成功</div>');
setInterval(function(){
    var aaa = "";
    $('.swiper-slide-active .OFZHdvpl').children().each(function(){
        aaa = "true";
        var cls= $(this).attr("class");
        if (cls=="DownloadURL"){
            aaa = "false";
            return false;
        };
    });
    if (aaa=="true"){
        $('.swiper-slide-active .OFZHdvpl').children().each(function(index,element){
            if(index==0){
                $(this).after('<div class="DownloadURL" onclick="download1()"><div class="NRiH5zYV"><div class="pBxTZJeH Qz1xVpFH"><div class="tzVl3l7w"><svg width="54" height="36" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36"><path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z"></path></svg></div><div class="hfgGrUTS">下载</div></div></div></div>');
                return false;
            };
        });
    };
    var bbb = "";
    $('.UwvcKsMK').children().each(function(){
        bbb = "true";
        var cls2= $(this).attr("class");
        if (cls2=="kr4MM4DQ DownloadURL"){
            bbb = "false";
            return false;
        };
    });
    if (bbb=="true"){
        $('.UwvcKsMK').children().each(function(index,element){
            if(index==3){
                $(this).after('<div class="kr4MM4DQ DownloadURL" onclick="download3()"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" class="u1O5vnab eclJUOOC" viewBox="0 0 36 36"><path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z"></path></svg><span class="Uehud9DZ">下载</span></div>');
                return false;
            };
        });
    };
},1000);
}
})();