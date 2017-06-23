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
    var Foto;
    var Nome;
    var ID;
    var Telefone;
    var Email;
    var Endereco;
    var Descricao;
    var Estoque;
    var Vendido;
    var Preco;
    var tableRows;
    var index;

    // Simula a criacao de uma entrada de info. no banco de dados.
    var admArray = [];

    //Modal Add Adm
    $("#btnFormAdm").click(function () {
        $("#formADM").modal();
    });

    //Adicao ADM
    $("#addAdm").click(function () {
        tableRows = document.getElementById("tableADM").rows.length;
        Foto = $("#admPic").val();
        Nome = $("#admName").val();
        Telefone = $("#admTel").val();
        Email = $("#admMail").val();
        //        console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
        ID = Nome.substr(2).concat(Telefone.substr(1, 4), Email.substr(1, 2));

        var markup = "<tr><td>" + Foto + "</td><td>" + Nome + "</td><td>" + ID + "</td><td>" + Telefone + "</td><td>" + Email + "</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";

        $("#tableADM").append(markup);

        $("#admPic").val("");
        $("#admNAme").val("");
        $("#admTel").val("");
        $("#admMail").val("");
    });
    //Adicao ADM

    //Remocao ADM
    $("#tableADM").on("click", ".rm", function (e) {
        $(this).closest('tr').remove();
    });
    //Remocao ADM

    //Edicao ADM
    $("#tableADM").on("click", ".edit", function (e) {
        //Esse codigo loco pega o index da linha referente ao botao de edicao
        index = $(this).closest("td").parent()[0].sectionRowIndex;
        //console.log(parent);
        //console.log(parent.index());
        $("#editFormADM").modal();

        $("#editAdm").click(function () {
            Foto = $("#editAdmPic").val();
            Nome = $("#editAdmName").val();
            Telefone = $("#editAdmTel").val();
            Email = $("#editAdmMail").val();
            ID = Nome.substr(2).concat(Telefone.substr(1, 4), Email.substr(1, 2));
            console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
            //var index = parent.parent()[0].sectionRowIndex;

            document.getElementById('tableADM').rows[index].cells[0].innerHTML = Foto;
            document.getElementById('tableADM').rows[index].cells[1].innerHTML = Nome;
            document.getElementById('tableADM').rows[index].cells[2].innerHTML = ID;
            document.getElementById('tableADM').rows[index].cells[3].innerHTML = Telefone;
            document.getElementById('tableADM').rows[index].cells[4].innerHTML = Email;

            //                parent.children("td:nth-child(1)").val(Foto);
            //                parent.children("td:nth-child(2)").val(Nome);
            //                parent.children("td:nth-child(3)").val(ID);
            //                parent.children("td:nth-child(4)").val(Raca);
            //                parent.children("td:nth-child(5)").val(Idade);
        });
        $("#editAdmPic").val("");
        $("#editAdmName").val("");
        $("#editAdmTel").val("");
        $("#editAdmMail").val("");
    });
    //Edicao ADM

    //Adicao Cliente

    //Modal Add Adm
    $("#btnFormCliente").click(function () {
        $("#formCLIENTE").modal();
    });

    $("#addCliente").click(function () {
        tableRows = document.getElementById("tableCLIENTE").rows.length;
        Foto = $("#clientePic").val();
        Nome = $("#clienteName").val();
        Telefone = $("#clienteTel").val();
        Email = $("#clienteMail").val();
        Endereco = $("#clienteAddress").val();
        //        console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
        ID = Nome.substr(2).concat(Telefone.substr(1, 4), Email.substr(1, 2));

        var markup = "<tr><td>" + Foto + "</td><td>" + Nome + "</td><td>" + ID + "</td><td>" + Telefone + "</td><td>" + Email + "</td><td>" + Endereco + "</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";

        $("#tableCLIENTE").append(markup);

        $("#clientePic").val("");
        $("#clienteName").val("");
        $("#clienteTel").val("");
        $("#clienteMail").val("");
        $("#clienteAddress").val("");
    });
    //Adicao Cliente

    //Remocao CLIENTE
    $("#tableCLIENTE").on("click", ".rm", function (e) {
        $(this).closest('tr').remove();
    });
    //Remocao CLIENTE

    //Edicao CLIENTE
    $("#tableCLIENTE").on("click", ".edit", function (e) {
        //Esse codigo loco pega o index da linha referente ao botao de edicao
        index = $(this).closest("td").parent()[0].sectionRowIndex;
        //console.log(parent);
        //console.log(parent.index());
        $("#editFormCLIENTE").modal();

        $("#editCliente").click(function () {
            Foto = $("#editClientePic").val();
            Nome = $("#editClienteName").val();
            Telefone = $("#editClienteTel").val();
            Email = $("#editClienteMail").val();
            Endereco = $("#editClienteAddress").val();
            ID = Nome.substr(2).concat(Telefone.substr(1, 4), Email.substr(1, 2));
            console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
            //var index = parent.parent()[0].sectionRowIndex;

            document.getElementById('tableCLIENTE').rows[index].cells[0].innerHTML = Foto;
            document.getElementById('tableCLIENTE').rows[index].cells[1].innerHTML = Nome;
            document.getElementById('tableCLIENTE').rows[index].cells[2].innerHTML = ID;
            document.getElementById('tableCLIENTE').rows[index].cells[3].innerHTML = Telefone;
            document.getElementById('tableCLIENTE').rows[index].cells[4].innerHTML = Email;
            document.getElementById('tableCLIENTE').rows[index].cells[5].innerHTML = Endereco;

            //                parent.children("td:nth-child(1)").val(Foto);
            //                parent.children("td:nth-child(2)").val(Nome);
            //                parent.children("td:nth-child(3)").val(ID);
            //                parent.children("td:nth-child(4)").val(Raca);
            //                parent.children("td:nth-child(5)").val(Idade);
        });
        $("#editClientePic").val("");
        $("#editClienteName").val("");
        $("#editClienteTel").val("");
        $("#editClienteMail").val("");
        $("#editClienteAddress").val("");
    });
    //Edicao CLIENTE

    //Adicao Produtos
    $("#btnFormProdutos").click(function () {
        $("#formPRODUTO").modal();
    });

    $("#addProduto").click(function () {
        tableRows = document.getElementById("tablePRODUTOS").rows.length;
        Foto = $("#produtoPic").val();
        Nome = $("#produtoName").val();
        Descricao = $("#produtoDesc").val();
        Preco = $("#produtoPrice").val();
        Estoque = $("#produtoEstoque").val();
        //        console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
        ID = Nome.substr(2).concat(Descricao.substr(1, 4), Preco.substr(1, 2));

        var markup = "<tr><td>" + Foto + "</td><td>" + Nome + "</td><td>" + ID + "</td><td>" + Descricao + "</td><td>" + Preco + "</td><td>" + Estoque + "</td><td>0</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";

        $("#tablePRODUTOS").append(markup);

        $("#produtoPic").val("");
        $("#produtoName").val("");
        $("#produtoDesc").val("");
        $("#produtoPrice").val("");
        $("#produtoEstoque").val("");
    });
    //Adicao Produtos

    //Remocao Produtos
    $("#tablePRODUTOS").on("click", ".rm", function (e) {
        $(this).closest('tr').remove();
    });
    //Remocao Produtos

    //Edicao Produtos
    $("#tablePRODUTOS").on("click", ".edit", function (e) {
        //Esse codigo loco pega o index da linha referente ao botao de edicao
        index = $(this).closest("td").parent()[0].sectionRowIndex;
        //console.log(parent);
        //console.log(parent.index());
        $("#editFormPRODUTO").modal();

        $("#editProduto").click(function () {
            Foto = $("#editProdutoPic").val();
            Nome = $("#editProdutoName").val();
            Descricao = $("#editProdutoDesc").val();
            Preco = $("#editProdutoPrice").val();
            ID = Nome.substr(2).concat(Descricao.substr(1, 4), Preco.substr(1, 2));
            //var index = parent.parent()[0].sectionRowIndex;

            document.getElementById('tablePRODUTOS').rows[index].cells[0].innerHTML = Foto;
            document.getElementById('tablePRODUTOS').rows[index].cells[1].innerHTML = Nome;
            document.getElementById('tablePRODUTOS').rows[index].cells[2].innerHTML = ID;
            document.getElementById('tablePRODUTOS').rows[index].cells[3].innerHTML = Descricao;
            document.getElementById('tablePRODUTOS').rows[index].cells[4].innerHTML = Preco;

        });
        $("#editProdutoPic").val("");
        $("#editProdutoName").val("");
        $("#editProdutoDesc").val("");
        $("#editProdutoPrice").val("");
    });
    //Edicao Produtos

    //Adicao Servicos
    $("#btnFormServicos").click(function () {
        $("#formPRODUTO").modal();
    });

    $("#addServico").click(function () {
        tableRows = document.getElementById("tableSERVICOS").rows.length;
        Foto = $("#servicoPic").val();
        Nome = $("#servicoName").val();
        Descricao = $("#servicoDesc").val();
        Preco = $("#servicoPrice").val();
        //        console.log(Foto + "\n" + Nome + "\n" + Telefone + "\n" + Email);
        ID = Nome.substr(2).concat(Descricao.substr(1, 4), Preco.substr(1, 2));

        var markup = "<tr><td>" + Foto + "</td><td>" + Nome + "</td><td>" + ID + "</td><td>" + Descricao + "</td><td>" + Preco + "</td><td><button class='btn btn-warning edit'><i class='fa fa-pencil' aria-hidden='true'></i></button> <button class='btn btn-danger rm'><i class='fa fa-times' aria-hidden='true'></i></button></td></tr>";

        $("#tableSERVICOS").append(markup);

        $("#servicoPic").val("");
        $("#servicoName").val("");
        $("#servicoDesc").val("");
        $("#servicoPrice").val("");
    });
    //Adicao Servicos

    //Remocao Servicos
    $("#tableSERVICOS").on("click", ".rm", function (e) {
        $(this).closest('tr').remove();
    });
    //Remocao Servicos

    //Edicao de Servicos
    $("#tableSERVICOS").on("click", ".edit", function (e) {
        //Esse codigo loco pega o index da linha referente ao botao de edicao
        index = $(this).closest("td").parent()[0].sectionRowIndex;
        //console.log(parent);
        //console.log(parent.index());
        $("#editFormSERVICO").modal();

        $("#editServico").click(function () {
            Foto = $("#editServicoPic").val();
            Nome = $("#editServicoName").val();
            Descricao = $("#editServicoDesc").val();
            Preco = $("#editServicoPrice").val();
            ID = Nome.substr(2).concat(Descricao.substr(1, 4), Preco.substr(1, 2));
            //var index = parent.parent()[0].sectionRowIndex;

            document.getElementById('tableSERVICOS').rows[index].cells[0].innerHTML = Foto;
            document.getElementById('tableSERVICOS').rows[index].cells[1].innerHTML = Nome;
            document.getElementById('tableSERVICOS').rows[index].cells[2].innerHTML = ID;
            document.getElementById('tableSERVICOS').rows[index].cells[3].innerHTML = Descricao;
            document.getElementById('tableSERVICOS').rows[index].cells[4].innerHTML = Preco;

            //                parent.children("td:nth-child(1)").val(Foto);
            //                parent.children("td:nth-child(2)").val(Nome);
            //                parent.children("td:nth-child(3)").val(ID);
            //                parent.children("td:nth-child(4)").val(Raca);
            //                parent.children("td:nth-child(5)").val(Idade);
        });
        $("#editServicoPic").val("");
        $("#editServicoName").val("");
        $("#editServicoDesc").val("");
        $("#editServicoPrice").val("");
    });
    //Edicao de Servicos

    //Table Updating
});
