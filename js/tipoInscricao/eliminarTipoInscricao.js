function validaFormulario_eliminarTipoInscricao() {
    if(linhaPintada == true){

        let id = document.forms["formTipoInscricao"]["txtId"].value;
        let descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
        let valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
        let valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
        let valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;
        let ivaInscricao = document.forms["formTipoInscricao"]["txtIvaInscricao"].value;
        let ivaLivro = document.forms["formTipoInscricao"]["txtIvaLivro"].value;
        let ivaMensalidade = document.forms["formTipoInscricao"]["txtIvaMensalidade"].value;

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
        else if(ivaInscricao == "") {
            faltaCampo_registarTipoInscricao("IVA Incrição");
            document.forms["formTipoInscricao"]["txtIvaInscricao"].focus();
        }
        else if(ivaLivro == "") {
            faltaCampo_registarTipoInscricao("IVA Livro");
            document.forms["formTipoInscricao"]["txtIvaLivro"].focus();
        }
        else if(ivaMensalidade == "") {
            faltaCampo_registarTipoInscricao("IVA Mensalidade");
            document.forms["formTipoInscricao"]["txtIvaMensalidade"].focus();
        }
        else{
            confirmaDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade);
        }  
    }
    else{
        faltaLinha_eliminarTipoInscricao()
    }
}

function confirmaDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade){
    mostraDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade);
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
            eliminar_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade);
        }
    })
}

function mostraDados_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/tipoInscricao/mostraDadosEliminar.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function eliminar_eliminarTipoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, ivaInscricao, ivaLivro, ivaMensalidade){ 
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
            mostraTipoAlerta_eliminarTipoInscricao(true, 1);
        
            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
            linhaPintada = false;
        }
        else if(this.readyState == 4 && this.status == 200 && mensagem[0] == 2){
            mostraTipoAlerta_eliminarTipoInscricao(true, 2);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
        }
        else if(this.readyState == 4 && this.status == 200 && mensagem[0] == 3){
            mostraTipoAlerta_eliminarTipoInscricao(true, 3);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
        }
        else if(this.readyState == 4 && this.status == 200 && mensagem[0] == 4){
            mostraTipoAlerta_eliminarTipoInscricao(true, 4);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarTipoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
        }
        else{   
            //erro que não vem de nehum resultado da query
            mostraTipoAlerta_eliminarTipoInscricao(false, "5");       
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("POST", "php/tipoInscricao/eliminarDados.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
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
    else if (tipoAlerta == true && mensagemFinal == 2){
        //existe registo que não pode ser eliminado
        Swal.fire(
            'Impossível Eliminar!',
            'O seu registo não pode ser eliminado pois existem "Inscrições" com este "Tipo de Inscrição!"',
            'error'
        )
        limpaDados_eliminarTipoIncricao();    
    }
    else if (tipoAlerta == true && mensagemFinal == 3){
        //existe registo que não pode ser eliminado
        Swal.fire(
            'Impossível Eliminar!',
            'O seu registo não pode ser eliminado pois já se encontra eliminado, atualize a página!',
            'error'
        )
        limpaDados_eliminarTipoIncricao();    
    }
    else if (tipoAlerta == true && mensagemFinal == 4){
        //existe registo que não pode ser eliminado
        Swal.fire(
            'Impossível Eliminar!',
            'O seu registo não pode ser eliminado pois foi alterado, atualize a página!',
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
    

