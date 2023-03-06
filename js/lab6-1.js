/* jQuery and JavaScript code here for lab6-1.html */
window.onload = function(){

$('#pageTitle').text('Lab 6 - DOM Manipulation with Jquery');
var className = $("#msgArea").attr("class");
$('#msgArea').prop('placeholder',"My class is "+className);

/*The class name wouldnt work. Had to just use button type*/
$('button').css({"background-color":"#FF0000"});
$('body').css("background-color","ivory");
$('.center-icons').addClass("selected");


$('.panel')
.on("click", function(){
    $('#message').html("You clicked in the panel");
})
.on("mousemove", function(e){
    $('#message').html("x="+e.pageX + "y="+e.pageY);
})
.on("mouseleave",function(e){
    $("#message").html("The mouse has left");
});


$("#panel-2>p").prepend($('<img src="/images/art/thumbs/13030.jpg" alt="Woman in chair">'));

$(".container>img").hover(function(){
    /*come back to this */
    var alt =$(this).attr('alt');
    var src = $(this).attr('src');
    var newsrc = src.replace("small", "medium");

    var preview = $('<div id="preview"></div>');
    var image = $("<img src='"+newsrc+"'>");
    var caption = $('<p>'+alt+'</p>');

    $(this).addClass("gray");


})
.on("mouseleave",$(this).removeClass("gray"));
}