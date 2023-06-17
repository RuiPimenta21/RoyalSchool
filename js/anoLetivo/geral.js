function validaFormulario_geralAnoLetivo() {
    let descritivo = document.forms["formCustoInscricao"]["txtDescritivo"].value;

    let descritivo1Periodo = document.forms["formCustoInscricao"]["txtDescritivo1Periodo"].value;
    let dataInicio1Periodo = document.forms["formCustoInscricao"]["txtDataInicio1Perido"].value;
    let dataFim1Periodo = document.forms["formCustoInscricao"]["txtDataFim1Perido"].value;

    let descritivo2Periodo = document.forms["formCustoInscricao"]["txtDescritivo2Periodo"].value;
    let dataInicio2Periodo = document.forms["formCustoInscricao"]["txtDataInicio2Perido"].value;
    let dataFim2Periodo = document.forms["formCustoInscricao"]["txtDataFim2Perido"].value;

    let descritivo3Periodo = document.forms["formCustoInscricao"]["txtDescritivo3Periodo"].value;
    let dataInicio3Periodo = document.forms["formCustoInscricao"]["txtDataInicio3Perido"].value;
    let dataFim3Periodo = document.forms["formCustoInscricao"]["txtDataFim3Perido"].value;


    let descritivo1PausaLetiva = document.forms["formCustoInscricao"]["txtDescritivo1PausaLetiva"].value;
    let dataInicio1PausaLetiva = document.forms["formCustoInscricao"]["txtDataInicio1PausaLetiva"].value;
    let dataFim1PausaLetiva = document.forms["formCustoInscricao"]["txtDataFim1PausaLetiva"].value;



    
    if (descritivo == "") {
        faltaCampo_geralAnoLetivo("Descritivo");
        document.forms["formCustoInscricao"]["txtDescritivo"].focus();
    }
    else if (descritivo1Periodo == "") {
        faltaCampo_geralAnoLetivo("Descritivo 1º Período");
        document.forms["formCustoInscricao"]["txtDescritivo1Periodo"].focus();
    }
    else if (dataInicio1Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Início 1º Período");
        document.forms["formCustoInscricao"]["txtDataInicio1Perido"].focus();
    }
    else if (dataFim1Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Fim 1º Período");
        document.forms["formCustoInscricao"]["txtDataFim1Perido"].focus();
    }
    else if (descritivo2Periodo == "") {
        faltaCampo_geralAnoLetivo("Descritivo 2º Período");
        document.forms["formCustoInscricao"]["txtDescritivo2Periodo"].focus();
    }
    else if (dataInicio2Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Início 2º Período");
        document.forms["formCustoInscricao"]["txtDataInicio2Perido"].focus();
    }
    else if (dataFim2Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Fim 2º Período");
        document.forms["formCustoInscricao"]["txtDataFim2Perido"].focus();
    }
    else if (descritivo3Periodo == "") {
        faltaCampo_geralAnoLetivo("Descritivo 3º Período");
        document.forms["formCustoInscricao"]["txtDescritivo3Periodo"].focus();
    }
    else if (dataInicio3Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Início 3º Período");
        document.forms["formCustoInscricao"]["txtDataInicio3Perido"].focus();
    }
    else if (dataFim3Periodo == "") {
        faltaCampo_geralAnoLetivo("Data de Fim 3º Período");
        document.forms["formCustoInscricao"]["txtDataFim3Perido"].focus();
    }
    


    else if (descritivo1PausaLetiva == "") {
        faltaCampo_geralAnoLetivo("Descritivo 1º Pausa Letiva");
        document.forms["formCustoInscricao"]["txtDescritivo1PausaLetiva"].focus();
    }
    else if (dataInicio1PausaLetiva == "") {
        faltaCampo_geralAnoLetivo("Data de Início 1º Pausa Letiva");
        document.forms["formCustoInscricao"]["txtDataInicio1PausaLetiva"].focus();
    }
    else if (dataFim1PausaLetiva == "") {
        faltaCampo_geralAnoLetivo("Data de Fim 1º Pausa Letiva");
        document.forms["formCustoInscricao"]["txtDataFim1PausaLetiva"].focus();
    }
    




    
    
    
    
    else if(valorLivro == "") {
        faltaCampo_registarCustoInscricao("Valor Livro");
        document.forms["formCustoInscricao"]["txtValorLivro"].focus();
    }
    else if(valorMensalidade == "") {
        faltaCampo_registarCustoInscricao("Valor Mensalidade");
        document.forms["formCustoInscricao"]["txtValorMensalidade"].focus();
    }
    else if(ivaInscricao == "") {
        faltaCampo_registarCustoInscricao("IVA Incrição");
        document.forms["formCustoInscricao"]["txtIvaInscricao"].focus();
    }
    else if(ivaLivro == "") {
        faltaCampo_registarCustoInscricao("IVA Livro");
        document.forms["formCustoInscricao"]["txtIvaLivro"].focus();
    }
    else if(ivaMensalidade == "") {
        faltaCampo_registarCustoInscricao("IVA Mensalidade");
        document.forms["formCustoInscricao"]["txtIvaMensalidade"].focus();
    }
    else{

        if(aplicarIvaTodos.checked == true){
            aplicarIvaTodos = "Sim"
        }
        else{
            aplicarIvaTodos = "Não"
        }
        confirmaDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    }  
}

function faltaCampo_registarCustoInscricao(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function confirmaDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade){
    
    mostraDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    
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
            registar_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
        }
    })
}

function mostraDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/custoInscricao/mostraDadosRegistar.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&aplicarIvaTodos="+encodeURIComponent(aplicarIvaTodos)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function registar_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade){ 
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
            mostraTipoAlerta_registarCustoInscricao(true);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarCustoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);   
            linhaPintada = false;
        }
        else{
            mostraTipoAlerta_registarCustoInscricao(false);
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("POST", "php/custoInscricao/registarDados.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&aplicarIvaTodos="+encodeURIComponent(aplicarIvaTodos)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();   
}

function mostraTipoAlerta_registarCustoInscricao(tipoAlerta){
    if (tipoAlerta == true){
        //gravado
        Swal.fire(
            'A Gravar!',
            'O seu registo foi gravado com sucesso!',
            'success'
        )
        limpaDados_registarCustoInscricao();    
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

function limpaDados_registarCustoInscricao(){
    document.getElementById("formCustoInscricao").reset();
}
