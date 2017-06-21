$(document).ready(function () {

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
    
    
});
