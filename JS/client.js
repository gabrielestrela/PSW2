$(document).ready(function () {

    $("#btnPetForm").click(function () {
        $("#formPET").modal();
    });

    //Mostrando apenas o respectivo menu
    $("#btn1").click(function () {
        $("#agendamento").collapse("hide");
        $("#carrinho").collapse("hide");
        $("#dadosPESSOAIS").collapse("hide");
    });

    $("#btn2").click(function () {
        $("#cadastroPET").collapse("hide");
        $("#carrinho").collapse("hide");
        $("#dadosPESSOAIS").collapse("hide");
    });

    $("#btn3").click(function () {
        $("#cadastroPET").collapse("hide");
        $("#agendamento").collapse("hide");
        $("#dadosPESSOAIS").collapse("hide");
    });

    $("#btn4").click(function () {
        $("#cadastroPET").collapse("hide");
        $("#agendamento").collapse("hide");
        $("#carrinho").collapse("hide");
    });
    //Mostrando apenas o respectivo menu
});
