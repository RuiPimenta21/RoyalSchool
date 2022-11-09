function validaFormularioTipoIncricao() {
    var descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
    var valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
    var valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
    var valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;
    
    
    if (descritivo == "") {
        faltaCampo("Descritivo");
        document.forms["formTipoInscricao"]["txtDescritivo"].focus();
    }
    else if (valorInscricao == "") {
        faltaCampo("Valor Inscrição");
        document.forms["formTipoInscricao"]["txtValorInscricao"].focus();
    }
    else if(valorLivro == "") {
        faltaCampo("Valor Livro");
        document.forms["formTipoInscricao"]["txtValorLivro"].focus();
    }
    else if(valorMensalidade == "") {
        faltaCampo("Valor Mensalidade");
        document.forms["formTipoInscricao"]["txtValorMensalidade"].focus();
    }
    else{
        confirmaDadosAGravar(descritivo, valorInscricao, valorLivro, valorMensalidade);
    }  
}
function faltaCampo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}
function confirmaDadosAGravar(descritivo, valorInscricao, valorLivro, valorMensalidade){
    
    mostraDadosAGravar(descritivo, valorInscricao, valorLivro, valorMensalidade);
    
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
            guardaDados(descritivo, valorInscricao, valorLivro, valorMensalidade);
        }
    })
}
function mostraDadosAGravar(descritivo, valorInscricao, valorLivro, valorMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("GET", "php/criaTipoInscricao/mostraDadosAGravar.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function guardaDados(descritivo, valorInscricao, valorLivro, valorMensalidade){ 
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
            mostraTipoAlerta(true);
        }
        else{
            mostraTipoAlerta(false);
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("GET", "php/criaTipoInscricao/guardaDados.php?descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function mostraTipoAlerta(tipoAlerta){
    if (tipoAlerta == true){
        //gravado
        Swal.fire(
            'A Gravar!',
            'O seu registo foi gravado com sucesso!',
            'success'
        )
        limpaDados();    
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
function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
}
