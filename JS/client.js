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
        
        //Adicao
        $("#addPet").click(function(){
            tableRows = document.getElementById("tablePET").rows.length;
            Foto = $("#fotoPET").val();
            Nome = $("#nomePET").val();
            Raca = $("#racaPET").val();
            Idade = $("#idadePET").val();
            ID = Nome.substr(2).concat(Idade*7, Raca.substr(1,2));
            
            var markup = "<tr><td>"+Foto+"</td><td>"+Nome+"</td><td>"+ID+"</td><td>"+Raca+"</td><td>"+Idade+"</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";
            
            $("#tablePET").append(markup);
            
            $("#fotoPET").val("");
            $("#nomePET").val("");
            $("#racaPET").val("");
            $("#idadePET").val("");
        });
        //Adicao
        
    
        //Remocao
        $("#tablePET").on("click", ".rm", function(e){
            $(this).closest('tr').remove();
        });
        //Remocao
        
        var index;
        //Edicao
        $("#tablePET").on("click", ".edit", function(e){
            //Esse codigo loco pega o index da linha referente ao botao de edicao
            index = $(this).closest("td").parent()[0].sectionRowIndex;
            //console.log(parent);
            //console.log(parent.index());
            $("#editFormPET").modal();
            
            $("#editPet").click(function(){
                Foto = $("#petPic").val();
                Nome = $("#petName").val();
                Raca = $("#petRaca").val();
                Idade = $("#petIdade").val();
                ID = Nome.substr(2).concat(Idade*7, Raca.substr(1,2));
                
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
    
    //Modal Agendamento
    $("#btnFormSchedule").click(function(){
        $("#formSchedule").modal();
    });
   
    //Matrizes que representam as semanas com 10 horarios e 5 dias
    var week1 = [10][5];
    var week2 = [10][5];
    var week3 = [10][5];
    var week4 = [10][5];
    var week5 = [10][5];
    var week6 = [10][5];
    var week7 = [10][5];
    var week8 = [10][5];
    var week9 = [10][5];
    var week10 = [10][5];
    
    var hours = [{id: 0, text: '08:00'}, {id: 1, text: '09:00'}, {id: 2, text: '10:00'}, {id: 3, text: '11:00'}, {id: 4, text: '12:00'}, {id: 5, text: '13:00'}, {id: 6, text: '14:00'}, {id: 7, text: '15:00'}, {id: 8, text: '16:00'}, {id: 9, text: '17:00'}];
    
    var days = [{id: 0, text: 'Segunda'}, {id: 1, text: 'Terca'}, {id: 2, text: 'Quarta'}, {id: 3, text: 'Quinta'}, {id: 4, text: 'Sexta'}];
    
    var weeks = [{id: 0, text: 'Semana 1'}, {id: 1, text: 'Semana 2'}, {id: 2, text: 'Semana 3'}, {id: 3, text: 'Semana 4'}, {id: 4, text: 'Semana 5'}, {id: 5, text: 'Semana 6'}, {id: 6, text: 'Semana 7'}, {id: 7, text: 'Semana 8'}, {id: 8, text: 'Semana 9'}, {id: 9, text: 'Semana 10'}];
    
    //Setando os selects
    $(".weekSelect").select2({
        placeholder: "Selecione sua semana",
        allowClear: true,
        data: weeks,
        theme: "bootstrap"
    });
    
    $(".daySelect").select2({
        placeholder: "Seleciona seu dia",
        allowClear: true,
        data: days,
        theme: "bootstrap"
    });
    
        $(".hourSelect").select2({
        placeholder: "Seleciona uma hora",
        allowClear: true,
        data: hours,
        theme: "bootstrap"
    });
    
});
