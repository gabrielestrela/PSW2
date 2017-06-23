$(document).ready(function () {

    //Modal Add Pet
    $("#btnFormPet").click(function () {
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

    //Administracao da tabela PET

    var Foto;
    var Nome;
    var ID;
    var Raca;
    var Idade;
    var tableRows;

    // Simula a criacao de uma entrada de info. no banco de dados.
    var petArray = ["pet1", "pet2", "pet3"];
    var servicos = ["Veterinario", "Banho", "Tosa", "Caminhada"];

    //Adicao
    $("#addPet").click(function () {
        tableRows = document.getElementById("tablePET").rows.length;
        Foto = $("#fotoPET").val();
        Nome = $("#nomePET").val();
        Raca = $("#racaPET").val();
        Idade = $("#idadePET").val();
        ID = Nome.substr(2).concat(Idade * 7, Raca.substr(1, 2));

        var markup = "<tr><td>" + Foto + "</td><td>" + Nome + "</td><td>" + ID + "</td><td>" + Raca + "</td><td>" + Idade + "</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";

        $("#tablePET").append(markup);
        petArray.push(Nome);

        $("#fotoPET").val("");
        $("#nomePET").val("");
        $("#racaPET").val("");
        $("#idadePET").val("");
    });
    //Adicao


    //Remocao
    $("#tablePET").on("click", ".rm", function (e) {
        $(this).closest('tr').remove();
    });
    //Remocao

    var index;
    //Edicao
    $("#tablePET").on("click", ".edit", function (e) {
        //Esse codigo pega o index da linha referente ao botao de edicao
        index = $(this).closest("td").parent()[0].sectionRowIndex;
        //console.log(parent);
        //console.log(parent.index());
        $("#editFormPET").modal();

        $("#editPet").click(function () {
            Foto = $("#petPic").val();
            Nome = $("#petName").val();
            Raca = $("#petRaca").val();
            Idade = $("#petIdade").val();
            ID = Nome.substr(2).concat(Idade * 7, Raca.substr(1, 2));

            //var index = parent.parent()[0].sectionRowIndex;

            document.getElementById('tablePET').rows[index].cells[0].innerHTML = Foto;
            document.getElementById('tablePET').rows[index].cells[1].innerHTML = Nome;
            document.getElementById('tablePET').rows[index].cells[2].innerHTML = ID;
            document.getElementById('tablePET').rows[index].cells[3].innerHTML = Raca;
            document.getElementById('tablePET').rows[index].cells[4].innerHTML = Idade;

            //                parent.children("td:nth-child(1)").val(Foto);
            //                parent.children("td:nth-child(2)").val(Nome);
            //                parent.children("td:nth-child(3)").val(ID);
            //                parent.children("td:nth-child(4)").val(Raca);
            //                parent.children("td:nth-child(5)").val(Idade);
        });
        $("#petPic").val("");
        $("#petName").val("");
        $("#petRaca").val("");
        $("#petIdade").val("");
    });
    //Edicao

    //Administracao da tabela PET

    //Carrinho
    //modal
    $("#btnFormSchedule").click(function () {
        $("#formSchedule").modal();
        console.log(petArray);
    });

    //Calculo do valor total do carrinho
    $("#btnFormCarrinho").click(function () {
        tableRows = document.getElementById("tableCARRINHO").rows.length;
        var total = 0;
        var price = 0;
        var quantity = 0;
        for (row = 1; row < tableRows; row++) {
            price = document.getElementById('tableCARRINHO').rows[row].cells[2].innerHTML;
            quantity = document.getElementById('tableCARRINHO').rows[row].cells[3].getElementsByTagName('input')[0].value;
            total += price * quantity;
        }
        $("#total").val(total);
    });

    //Carrinho

    //Modal Agendamento
    $("#btnFormCarrinho").click(function () {
        $("#formCARRINHO").modal();
    });


    //Default de quantidade eh 1
    document.getElementById("qntty").defaultValue = "1";

    //Matrizes que representam as semanas com 10 horarios e 5 dias
    //Criadas para a checagem de ocupacao
    var week1 = [];
    var week2 = [];
    var week3 = [];
    var week4 = [];
    var week5 = [];
    var week6 = [];
    var week7 = [];
    var week8 = [];
    var week9 = [];
    var week10 = [];

    for (i = 0; i < 10; i++) {
        week1[i] = new Array(5);
        week2[i] = new Array(5);
        week3[i] = new Array(5);
        week4[i] = new Array(5);
        week5[i] = new Array(5);
        week6[i] = new Array(5);
        week7[i] = new Array(5);
        week8[i] = new Array(5);
        week9[i] = new Array(5);
        week10[i] = new Array(5);
    }

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 5; j++) {
            week1[i][j] = 0;
            week2[i][j] = 0;
            week3[i][j] = 0;
            week4[i][j] = 0;
            week5[i][j] = 0;
            week6[i][j] = 0;
            week7[i][j] = 0;
            week8[i][j] = 0;
            week9[i][j] = 0;
            week10[i][j] = 0;
        }
    }

    var hours = [{
        id: 0,
        text: '08:00'
    }, {
        id: 1,
        text: '09:00'
    }, {
        id: 2,
        text: '10:00'
    }, {
        id: 3,
        text: '11:00'
    }, {
        id: 4,
        text: '12:00'
    }, {
        id: 5,
        text: '13:00'
    }, {
        id: 6,
        text: '14:00'
    }, {
        id: 7,
        text: '15:00'
    }, {
        id: 8,
        text: '16:00'
    }, {
        id: 9,
        text: '17:00'
    }];

    var days = [{
        id: 0,
        text: 'Segunda'
    }, {
        id: 1,
        text: 'Terca'
    }, {
        id: 2,
        text: 'Quarta'
    }, {
        id: 3,
        text: 'Quinta'
    }, {
        id: 4,
        text: 'Sexta'
    }];

    var weeks = [{
        id: 0,
        text: 'Semana 1'
    }, {
        id: 1,
        text: 'Semana 2'
    }, {
        id: 2,
        text: 'Semana 3'
    }, {
        id: 3,
        text: 'Semana 4'
    }, {
        id: 4,
        text: 'Semana 5'
    }, {
        id: 5,
        text: 'Semana 6'
    }, {
        id: 6,
        text: 'Semana 7'
    }, {
        id: 7,
        text: 'Semana 8'
    }, {
        id: 8,
        text: 'Semana 9'
    }, {
        id: 9,
        text: 'Semana 10'
    }];

    //Setando os selects
    $(".weekSelect").select2({
        placeholder: "Selecione sua semana",
        allowClear: true,
        data: weeks,
        theme: "bootstrap"
    });

    $(".daySelect").select2({
        placeholder: "Selecione seu dia",
        allowClear: true,
        data: days,
        theme: "bootstrap"
    });

    $(".hourSelect").select2({
        placeholder: "Selecione uma hora",
        allowClear: true,
        data: hours,
        theme: "bootstrap"
    });

    $(".serviceSelect").select2({
        placeholder: "Selecione o Servico",
        allowClear: true,
        data: servicos,
        theme: "bootstrap"
    });

    $(".petSelect").select2({
        placeholder: "Selecione o Pet",
        allowClear: true,
        data: petArray,
        theme: "bootstrap"
    });

    //Processando Agendamento
    var week;
    var day;
    var hour;
    var mark;
    $("#finishSchedule").click(function () {

        //Recebe o valor do index da lista do respectivo Select
        //week = $("#wS").val();
        var e = document.getElementById("wS");
        week = e.selectedIndex;
        e = document.getElementById("dS");
        day = e.selectedIndex;
        e = document.getElementById("hS");
        hour = e.selectedIndex;
        serv = $("#sS :selected").text();
        pname = $("#pS :selected").text();

        if (serv == "Veterinario")
            img = "<img src='../IMAGES/vet32.png' class='img-responsive'>";
        if (serv == "Banho")
            img = "<img src='../IMAGES/shower32.png' class='img-responsive'>";
        if (serv == "Tosa")
            img = "<img src='../IMAGES/grooming32.png' class='img-responsive'>";
        if (serv == "Caminhada")
            img = "<img src='../IMAGES/dogWalking32.png' class='img-responsive'>";

        if (week == 0) {
            if (week1[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week1[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS1').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 1) {
            if (week2[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week2[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS2').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 2) {
            if (week3[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week3[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS3').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 3) {
            if (week4[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week4[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS4').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 4) {
            if (week5[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week5[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS5').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 5) {
            if (week6[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week6[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS6').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 7) {
            if (week8[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week8[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS8').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 8) {
            if (week9[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week9[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS9').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }
        if (week == 9) {
            if (week10[hour][day] == 1) {
                alert("Horario Ocupado");
                return;
            }
            week10[hour][day] = 1; //tabelas para checagem de ocupacao
            mark = img + "<br>" + serv + "<br>" + pname;
            document.getElementById('tableS10').rows[hour + 1].cells[day + 1].innerHTML = mark;
        }

    });

});
