function validaFotografia_editarPerfil(){

    var fileToUpload = document.getElementById("fotografia").value;
    var idxDot = fileToUpload.lastIndexOf(".") + 1;
    var extFile = fileToUpload.substr(idxDot, fileToUpload.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
        //mensagem
        return true;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Fotografia',
            text: 'Somente arquivos jpg, jpeg e png são permitidos!',
        })
        return false;
    }   
}

function editaFotografia_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel){ 
    var arquivo = document.getElementById("fotografia").files[0];
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    formData.append("fotografia", arquivo);

    xhr.open("POST", "php/perfil/editarFotografia.php?id="+encodeURIComponent(id), true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Lógica de manipulação da resposta do servidor aqui
            console.log(xhr.responseText);
            const mensagem = JSON.parse(xhr.responseText);
            mensagem[0]
        
        }
    };
    xhr.send(formData);
 
    
    
    
    
    
    
    
    
    
    
    /*
    


    xhttp = new XMLHttpRequest();

        var arquivo = document.getElementById("fotografia").files[0];
        var formData = new FormData();
        formData.append("fotografia", arquivo);

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

                //carrega imagem do utilizador na barra de navegacao
                /*document.getElementById('parametroUtilizadorPerfil').innerHTML = mensagem[1];
                document.forms["formPerfil"]["txtNomePerfil"].innerHTML = mensagem[1];
                document.forms["formPerfil"]["txtPassword"].innerHTML = mensagem[2];
                return true;

            }
            else if(mensagem[0] == 0){
                //não passou na validação da imagem
                mostraTipoAlertaFotografia_editarPerfil(mensagem[1]);
                return false;
            }
            else{
                //erro que não vem do pedido
                mostraTipoAlerta_editarPerfil(false, 0);
                document.getElementById("txtErro").style.display = "block";
                document.getElementById("txtErro").style.visibility = "visible";
                document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
                return false;
            }
        };
    //Encoding
    xhttp.open("POST", "php/perfil/editarFotografia.php?id="+encodeURIComponent(id), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send(formData);
    */
}

function validaFormulario_editarPerfil() {

    let id = document.forms["formPerfil"]["txtId"].value;
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
        confirmaDados_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel);
    }  
}

function faltaCampo_editarPerfil(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function confirmaDados_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel){
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
            // se imagem standard salta processo de guardar imagem
            if (imagemFezUpload == 1){
                //Se a imagem tiver upload, espera resultado para guardar restantes dados
                if(editaFotografia_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel) == true){
                    editar_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel);
                    imagemFezUpload == 0;
                };
            }
            else{
                editar_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel);
            }  
        }
    })
}

function mostraDados_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/perfil/mostraDadosEditar.php?id="+encodeURIComponent(id)+"&email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password)+"&nomeCompleto="+encodeURIComponent(nomeCompleto)+"&cc="+encodeURIComponent(cc)+"&dataNascimento="+encodeURIComponent(dataNascimento)+"&pais="+encodeURIComponent(pais)+"&distrito="+encodeURIComponent(distrito)+"&concelho="+encodeURIComponent(concelho)+"&morada="+encodeURIComponent(morada)+"&nif="+encodeURIComponent(nif)+"&codigoPostal="+encodeURIComponent(codigoPostal)+"&telemovel="+encodeURIComponent(telemovel), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function editar_editarPerfil(id,observacao,email,password,nomeCompleto,cc,dataNascimento,pais,distrito,concelho,morada,nif,codigoPostal,telemovel){ 
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

            //carrega nome de utilizador na barra de navegacao
            document.getElementById('parametroUtilizadorPerfil').innerHTML = mensagem[1];
            document.forms["formPerfil"]["txtNomePerfil"].innerHTML = mensagem[1];
            document.forms["formPerfil"]["txtPassword"].innerHTML = mensagem[2];

           
           //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaDados_mostarPerfil();
        }
        else if(mensagem[0] == 2){
            mostraTipoAlerta_editarPerfil(true, 2);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
             //funcao em outro ficheiro
             carregaDados_mostarPerfil();
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
    xhttp.open("POST", "php/perfil/editarDados.php?id="+encodeURIComponent(id)+"&fotografia="+encodeURIComponent(fotografia)+"&observacao="+encodeURIComponent(observacao)+"&email="+encodeURIComponent(email)+"&password="+encodeURIComponent(password)+"&nomeCompleto="+encodeURIComponent(nomeCompleto)+"&cc="+encodeURIComponent(cc)+"&dataNascimento="+encodeURIComponent(dataNascimento)+"&pais="+encodeURIComponent(pais)+"&distrito="+encodeURIComponent(distrito)+"&concelho="+encodeURIComponent(concelho)+"&morada="+encodeURIComponent(morada)+"&nif="+encodeURIComponent(nif)+"&codigoPostal="+encodeURIComponent(codigoPostal)+"&telemovel="+encodeURIComponent(telemovel), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function faltaCampo_editarPerfil(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function mostraTipoAlertaFotografia_editarPerfil(mensagem){
    Swal.fire(
        'Erro!',
        mensagem,
        'error'
    )
}

function mostraTipoAlerta_editarPerfil(tipoAlerta, mensagem){
    if (tipoAlerta == true && mensagem == 1){
        //editado
        Swal.fire(
            'A Editar!',
            'O seu registo foi editado com sucesso!',
            'success'
        )
        limpaDados_editarPerfil();    
    }
    else if(tipoAlerta == true && mensagem == 2){
        Swal.fire(
            'Impossível Editar!',
            'O seu registo não pode ser editado pois já se encontra eliminado, atualize a página!',
            'error'
        )
    }
    else{
        //nao gravado
        Swal.fire(
            'Erro!',
            'Erro ao editar registo!',
            'error'
        )
    }
}

function limpaDados_editarPerfil(){
    document.getElementById("formPerfil").reset();
}
  