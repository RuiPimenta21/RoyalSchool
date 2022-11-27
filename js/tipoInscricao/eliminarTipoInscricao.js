function validaFormulario_eliminarTipoInscricao() {
    if(linhaPintada == true){

        let id = document.forms["formTipoInscricao"]["txtId"].value;
        let descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
        let valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
        let valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
        let valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;

        if (descritivo == "") {
            faltaCampo_eliminarTipoInscricao("Descritivo");
            document.forms["formTipoInscricao"]["txtDescritivo"].focus();
        }
        else if (valorInscricao == "") {
            faltaCampo_eliminarTipoInscricao("Valor Inscrição");
            document.forms["formTipoInscricao"]["txtValorInscricao"].focus();
        }
        else if(valorLivro == "") {
            faltaCampo_eliminarTipoInscricao("Valor Livro");
            document.forms["formTipoInscricao"]["txtValorLivro"].focus();
        }
        else if(valorMensalidade == "") {
            faltaCampo_eliminarTipoInscricao("Valor Mensalidade");
            document.forms["formTipoInscricao"]["txtValorMensalidade"].focus();
        }
        else{
            confirmaDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
        }  
    }
    else{
        faltaLinha_eliminarTipoInscricao()
    }
}

function confirmaDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade){
    mostraDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
    Swal.fire({
        title: 'Pretende eliminar?',
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminar_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
        }
    })
}

function mostraDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/mostraDadosEliminar.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function eliminar_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade){ 
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        document.getElementById("txtErro").style.display = "none";
        document.getElementById("txtErro").style.visibility = "none";
        document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
       
        this.readyState
        this.status
        this.responseText
      
        //operacao está CONCLUIDA e resposta está OK
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.response)
            if(this.response == 1){
                mostraTipoAlerta_editarTipoInscricao(true, 1);
            }else if(){
                mostraTipoAlerta_editarTipoInscricao(true, 0);
            }
        }else{   
            mostraTipoAlerta_eliminarTipoInscricao(false, 0);       
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    }
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/eliminarDados.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();


    //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
    //funcao em outro ficheiro
    carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo); 
}

function faltaLinha_eliminarTipoInscricao(){
    Swal.fire({
        icon: 'error',
        title: 'Linha em falta',
        text: 'Por favor selecione a linha a eliminar.',
    })
}

function faltaCampo_eliminarTipoInscricao(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function mostraTipoAlerta_eliminarTipoInscricao(tipoAlerta, mensagemFinal){
    if (tipoAlerta == true && mensagemFinal == 1){
        //eliminado
        Swal.fire(
            'A Eliminar!',
            'O seu registo foi eliminado com sucesso!',
            'success'
        )
        limpaDados_eliminarTipoIncricao();    
    }
    else if (tipoAlerta == true && mensagemFinal == 0){
        //existe registo que não pode ser eliminado
        Swal.fire(
            'Impossível Eliminar!',
            'O seu registo não pode ser eliminado pois existem "Inscrições" com este "Tipo de Inscrição!"',
            'error'
        )
        limpaDados_eliminarTipoIncricao();    
    }
    else{
        //nao gravado
        Swal.fire(
            'Erro!',
            'Erro ao eliminar registo!',
            'error'
        )
    }
}

function limpaDados_eliminarTipoIncricao(){
    document.getElementById("formTipoInscricao").reset();
}
    

