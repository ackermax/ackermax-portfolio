$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.carousel').carousel();
    $(".carousel-item").click(function(){
        var source = $(this).attr("src");
        $("#image-dump").attr("src", source);
    });
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});