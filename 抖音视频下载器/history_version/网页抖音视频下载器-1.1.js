// ==UserScript==
// @name         网页抖音视频下载器
// @icon         https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico
// @version      1.1
// @description  在作者头像下方插入当前视频的下载按钮
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
$("script").after("<script>function download1(){$('.swiper-slide-active video').children().each(function(){var downloadURL= $(this).attr('src');console.log(downloadURL);window.open(downloadURL);return false;});}</script>")
$("script").after("<script>function download2(){var downloadURL=$('.swiper-slide-active video').attr('src');window.open(downloadURL);console.log(downloadURL);}</script>")
setInterval(function(){
    var aaa = "true";
    $('.swiper-slide-active .xgplayer-video-interaction-wrap').children().each(function(){
        var cls= $(this).attr("class");
        if (cls=="AAhbEl5e DownloadURL"){
            aaa = "false";
            return false;
        };
    });
    if (aaa=="true"){
        $('.swiper-slide-active .kluO5VYY').each(function(){
            $(this).after('<div class="AAhbEl5e DownloadURL" onclick="download1();download2()"><div class="kluO5VYY"><div class="_0SiYhaxA r3oG6gz3"><div class="P9gNnSUG"><svg width="42" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 36 36"><path d="M23 14l-8 8-8-8h5v-12h6v12zM15 22h-15v8h30v-8h-15zM28 26h-4v-2h4v2z"></path></svg></div><div class="ioaKjF1f">下载</div></div></div></div>');
            return false;
	    });
    };
},1000);
}
})();
