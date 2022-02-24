var filepath = "S:/";
var aria2_url = "http://127.0.0.1:6800/jsonrpc";

function download_url(aria2_url,filepath,filename,file_url){
    var data = {
        jsonrpc: "2.0", 
        id: "aaa",
        method: "aria2.addUri",
        params:[[file_url],
                {dir:filepath,out:filename,}]
        };
    $.post(aria2_url,JSON.stringify(data),
    function(){alert("已发送请求");});
};

function download1(){
    $('.swiper-slide-active video').children().each(function(){
        var downloadURL= $(this).attr('src');
        var text1 = $('.swiper-slide-active .account-name').text()+'：'+$('.swiper-slide-active .UCT89JiM .Nu66P_ba').text();
        var filename = text1.replace(/[\\/:*?"<>|\n]/g,"");
        console.log(downloadURL);
        if(downloadURL.length>10){download_url(aria2_url,filepath,filename,downloadURL);};
        return false;
    });
};

function download2(){
    var downloadURL=$('.swiper-slide-active video').attr('src');
    console.log(downloadURL);
    if(downloadURL.length>10){window.location.href = downloadURL;};
};

function download3(){
    $('.xg-video-container video').children().each(function(){
        var downloadURL= $(this).attr('src');
        console.log(downloadURL);
        if(downloadURL.length>10){window.location.href = downloadURL;};
        return false;
    });
};

function download4(){
    var downloadURL=$('.xg-video-container video').attr('src');
    console.log(downloadURL);
    if(downloadURL.length>10){window.location.href = downloadURL;};
};