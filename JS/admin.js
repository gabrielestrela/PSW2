$(document).ready(function () {

    //Mostrando apenas o respectivo menu
    $("#btn1").click(function () {
        $("#usuarios").collapse("hide");
        $("#produtos").collapse("hide");
        $("#servicos").collapse("hide");
    });

    $("#btn2").click(function () {
        $("#administradores").collapse("hide");
        $("#produtos").collapse("hide");
        $("#servicos").collapse("hide");
    });

    $("#btn3").click(function () {
        $("#administradores").collapse("hide");
        $("#usuarios").collapse("hide");
        $("#servicos").collapse("hide");
    });

    $("#btn4").click(function () {
        $("#administradores").collapse("hide");
        $("#usuarios").collapse("hide");
        $("#produtos").collapse("hide");
    });
    //Mostrando apenas o respectivo menu
    
    //Table Updating
});
