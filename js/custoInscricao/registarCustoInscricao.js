function validaFormulario_registarCustoInscricao() {
    let descritivo = document.forms["formCustoInscricao"]["txtDescritivo"].value;
    let valorInscricao = document.forms["formCustoInscricao"]["txtValorInscricao"].value;
    let valorLivro = document.forms["formCustoInscricao"]["txtValorLivro"].value;
    let valorMensalidade = document.forms["formCustoInscricao"]["txtValorMensalidade"].value;
    let aplicarIvaTodos = document.forms["formCustoInscricao"]["txtAplicarIvaTodos"];
    let ivaInscricao = document.forms["formCustoInscricao"]["txtIvaInscricao"].value;
    let ivaLivro = document.forms["formCustoInscricao"]["txtIvaLivro"].value;
    let ivaMensalidade = document.forms["formCustoInscricao"]["txtIvaMensalidade"].value;
    
    
    if (descritivo == "") {
        faltaCampo_registarCustoInscricao("Descritivo");
        document.forms["formCustoInscricao"]["txtDescritivo"].focus();
    }
    else if (valorInscricao == "") {
        faltaCampo_registarCustoInscricao("Valor Inscrição");
        document.forms["formCustoInscricao"]["txtValorInscricao"].focus();
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
