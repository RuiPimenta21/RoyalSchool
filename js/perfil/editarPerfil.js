function validaFormulario_editarPerfil() {
   
    let id = document.forms["formPerfil"]["txtId"].value;
    let fotografia = "" /*document.forms["formPerfil"]["txtfotografia"].value;*/
    let observacao = document.forms["formPerfil"]["txtObservacao"].value;
    let email = document.forms["formPerfil"]["txtEmail"].value;
    let password = document.forms["formPerfil"]["txtPassword"].value;
    let nomeCompleto = document.forms["formPerfil"]["txtNome"].value;
    let cc = document.forms["formPerfil"]["txtCC"].value;
    let dataNascimento = document.forms["formPerfil"]["txtDataNascimento"].value;
    let pais = document.forms["formPerfil"]["txtPais"].value;
    let distrito = document.forms["formPerfil"]["txtDistrito"].value;
    let concelho = document.forms["formPerfil"]["txtConcelho"].value;
    let morada = document.forms["formPerfil"]["txtMorada"].value;
    let nif = document.forms["formPerfil"]["txtNif"].value;
    let codigoPostal = document.forms["formPerfil"]["txtCodigoPostal"].value;
    let telemovel = document.forms["formPerfil"]["txtTelemovel"].value;


    if (email == "") {
        faltaCampo_editarPerfil("Email");
        document.forms["formPerfil"]["txtEmail"].focus();
        return;
    }
    else if (password == "") {
        faltaCampo_editarPerfil("Password");
        document.forms["formPerfil"]["txtPassword"].focus();
        return;
    }
    else if(nomeCompleto == "") {
        faltaCampo_editarPerfil("Nome Completo");
        document.forms["formPerfil"]["txtNome"].focus();
        return;
    }
    else if(cc == "") {
        faltaCampo_editarPerfil("Cartão de Cidadão (CC)");
        document.forms["formPerfil"]["txtCC"].focus();
    }
    else if(dataNascimento == "") {
        faltaCampo_editarPerfil("Data Nascimento");
        document.forms["formPerfil"]["txtDataNascimento"].focus();
    }
    else if(pais == "") {
        faltaCampo_editarPerfil("País");
        document.forms["formPerfil"]["txtPais"].focus();
    }
    else if(distrito == "") {
        faltaCampo_editarPerfil("Distrito");
        document.forms["formPerfil"]["txtDistrito"].focus();
    }
    else if(concelho == "") {
        faltaCampo_editarPerfil("Concelho");
        document.forms["formPerfil"]["txtConcelho"].focus();
    }
    else if(morada == "") {
        faltaCampo_editarPerfil("Morada");
        document.forms["formPerfil"]["txtMorada"].focus();
    }
    else if(nif == "") {
        faltaCampo_editarPerfil("Identificação Fiscal (NIF)");
        document.forms["formPerfil"]["txtNif"].focus();
    }
    else if(codigoPostal == "") {
        faltaCampo_editarPerfil("Código-Postal");
        document.forms["formPerfil"]["txtCodigoPostal"].focus();
    }
    else if(telemovel == "") {
        faltaCampo_editarPerfil("Telemóvel");
        document.forms["formPerfil"]["txtTelemovel"].focus();
    }
    else{
        confirmaDados_editarPerfil(id,fotografia,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel);
    }  
}

function faltaCampo_editarPerfil(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function confirmaDados_editarPerfil(id,fotografia,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel){
    mostraDados_editarPerfil(id,fotografia,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel);
    Swal.fire({
        title: 'Pretende editar?',
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, editar!'
    }).then((result) => {
        if (result.isConfirmed) {
            //editar_editarPerfil(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
            console.log("chegou aqui!")
        }
    })
}

function mostraDados_editarPerfil(id,fotografia,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("GET", "php/perfil/mostraDadosEditar.php?id="+encodeURIComponent(id)+"&email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password)+"&nomeCompleto="+encodeURIComponent(nomeCompleto)+"&cc="+encodeURIComponent(cc)+"&dataNascimento="+encodeURIComponent(dataNascimento)+"&pais="+encodeURIComponent(pais)+"&distrito="+encodeURIComponent(distrito)+"&concelho="+encodeURIComponent(concelho)+"&morada="+encodeURIComponent(morada)+"&nif="+encodeURIComponent(nif)+"&codigoPostal="+encodeURIComponent(codigoPostal)+"&telemovel="+encodeURIComponent(telemovel), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

/*
function editar_editarPerfil(id,fotografia,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel){ 
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText

        const mensagem = JSON.parse(this.responseText);
        //console.log(myObj);

        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200 && mensagem[0] == 1) {
           mostraTipoAlerta_editarPerfil(true, 1);

           //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
            linhaPintada = false;
        }
        else if(mensagem[0] == 2){
            mostraTipoAlerta_editarPerfil(true, 2);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
            linhaPintada = false;
        }
        else{
            //erro que não vem de nehum resultado da query
            mostraTipoAlerta_editarPerfil(false, 0);
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/editarDados.php?id="+encodeURIComponent(id)+"&fotografia="+encodeURIComponent(fotografia)+"&observacao="+encodeURIComponent(observacao)+"&email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password)+"&nomeCompleto="+encodeURIComponent(nomeCompleto)+"&cc="+encodeURIComponent(cc)+"&dataNascimento="+encodeURIComponent(dataNascimento)+"&pais="+encodeURIComponent(pais)+"&distrito="+encodeURIComponent(distrito)+"&concelho="+encodeURIComponent(concelho)+"&morada="+encodeURIComponent(morada)+"&nif="+encodeURIComponent(nif)+"&codigoPostal="+encodeURIComponent(codigoPostal)+"&telemovel="+encodeURIComponent(telemovel), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

*/
