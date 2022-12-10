function validaFormulario_registarTipoInscricao() {
    let descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
    let valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
    let valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
    let valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;
    
    
    if (descritivo == "") {
        faltaCampo_registarTipoInscricao("Descritivo");
        document.forms["formTipoInscricao"]["txtDescritivo"].focus();
    }
    else if (valorInscricao == "") {
        faltaCampo_registarTipoInscricao("Valor Inscrição");
        document.forms["formTipoInscricao"]["txtValorInscricao"].focus();
    }
    else if(valorLivro == "") {
        faltaCampo_registarTipoInscricao("Valor Livro");
        document.forms["formTipoInscricao"]["txtValorLivro"].focus();
    }
    else if(valorMensalidade == "") {
        faltaCampo_registarTipoInscricao("Valor Mensalidade");
        document.forms["formTipoInscricao"]["txtValorMensalidade"].focus();
    }
    else{
        confirmaDados_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade);
    }  
}

function faltaCampo_registarTipoInscricao(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function confirmaDados_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade){
    mostraDados_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade);
    Swal.fire({
        title: 'Pretende gravar?',
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, gravar!'
    }).then((result) => {
        if (result.isConfirmed) {
            registar_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade);
        }
    })
}

function mostraDados_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/mostraDadosRegistar.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function registar_registarTipoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade){ 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText

        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200 && this.responseText == "Carregou query!") {
            mostraTipoAlerta_registarTipoInscricao(true);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);   
        }
        else{
            mostraTipoAlerta_registarTipoInscricao(false);
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/registarDados.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();   
}

function mostraTipoAlerta_registarTipoInscricao(tipoAlerta){
    if (tipoAlerta == true){
        //gravado
        Swal.fire(
            'A Gravar!',
            'O seu registo foi gravado com sucesso!',
            'success'
        )
        limpaDados_registarTipoIncricao();    
    }
    else{
        //nao gravado
        Swal.fire(
            'Erro!',
            'Erro ao gravar registo!',
            'error'
        )
    }
}

function limpaDados_registarTipoIncricao(){
    document.getElementById("formTipoInscricao").reset();
}
