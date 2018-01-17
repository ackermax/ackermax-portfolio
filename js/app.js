$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $(".carousel-item").click(function(){
        var source = $(this).attr("src");
        $("#image-dump").attr("src", source);
    });
});