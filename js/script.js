var countDiv = 3;
var countImg = 2;
var iActiveImg = 0;
var path = "img/img";
var Vol = 100;

function CreateImage(){
    for(var i = 0; i<countDiv; i++){
        for(var j = 0; j<countDiv; j++){

        var html = "<div class = 'img" + i+ j +"'></div>";
        var img = $(html);
        img.css("background-position", "-"+i*500/countDiv+ "px " + "-"+j*500/countDiv + "px");
        img.css("width", 100/countDiv + "%"); 
        img.css("height", 100/countDiv + "%"); 
        img.appendTo("#main");
    }
}
}

function changeImg(){
    var j = 1;
    $("#main div").each(function(){
        $(this).fadeOut(Vol*j, function(){
            $(this).css('background-image', 'url("'+path + iActiveImg+'.jpg")');
            $(this).fadeIn(Vol*j);
        });
        j++;
    });
}

function leftImg(){
    iActiveImg--;
    if(iActiveImg < 0)
        iActiveImg = countImg - 1;
    changeImg();
}

function rightImg(){
    iActiveImg++;
    if(iActiveImg >= countImg)
    iActiveImg=0;
    changeImg();
}

$(document).ready( function()
{
   CreateImage();

});




/*function CreateImage(){
    for(var i = 0; i<countDiv; i++){
        j = 0;
        var html = "<div class = 'img" + i +"'></div>";
        var img = $(html);
        img.css("background-position", "-"+i*500/countDiv+ "px 0px");
        img.css("width", 100/countDiv + "%"); 
        img.appendTo("#main");
    }
}*/
