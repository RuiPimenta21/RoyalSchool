let descritivoSelecionado = ""; 
let numeroRegistosSelecionado = ""; 
let ordenacaoRegistosSelecionado = "";

let ultimaLinha = 0;
let linhaPintada = false;


function selecionaLinha_CustoInscricao(linhaSelecionada){
    descritivoSelecionado = document.forms["formMostraRegistos"]["txtPesquisaDescritivo"].value;
    numeroRegistosSelecionado = document.forms["formMostraRegistos"]["txtNumeroRegistos"].value;
    ordenacaoRegistosSelecionado = document.forms["formMostraRegistos"]["txtOrdenacaoRegistos"].value;

    //se filtros mantiveram
    if(descritivoSelecionado == DefaultPesquisaDescritivo & numeroRegistosSelecionado == DefaultNumeroRegistos & ordenacaoRegistosSelecionado == DefaultOrdenacaoRegistos){
        if (ultimaLinha == linhaSelecionada & linhaPintada == true){
            document.getElementById("tblCustoInscricao").rows[linhaSelecionada].style.background = "";
            linhaPintada = false;
            getDados_editarCustoInscricao(linhaPintada);
            
        }else if(ultimaLinha == linhaSelecionada & linhaPintada == false){
            document.getElementById("tblCustoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarCustoInscricao(linhaPintada);
        }
        else if(ultimaLinha != linhaSelecionada & linhaPintada == false){
            document.getElementById("tblCustoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarCustoInscricao(linhaPintada);
            ultimaLinha = linhaSelecionada;
           
        }else if(ultimaLinha != linhaSelecionada & linhaPintada == true){
            document.getElementById("tblCustoInscricao").rows[ultimaLinha].style.background = ""
            document.getElementById("tblCustoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarCustoInscricao(linhaPintada);
            ultimaLinha = linhaSelecionada; 
        }
    }
    else{   //se filtros mudaram
        DefaultPesquisaDescritivo = descritivoSelecionado;
        DefaultNumeroRegistos = numeroRegistosSelecionado;
        DefaultOrdenacaoRegistos = ordenacaoRegistosSelecionado;

        document.getElementById("tblCustoInscricao").rows[ultimaLinha].style.background = ""
        document.getElementById("tblCustoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
        linhaPintada = true;
        getDados_editarCustoInscricao(linhaPintada);
        ultimaLinha = linhaSelecionada;  
    }  
}

function getDados_editarCustoInscricao(linhaPintada){
    var table = document.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.onclick = function (e) {
        if(linhaPintada == true){
            limpaDados_editarCustoInscricao()
            e = e || window.event;
            var arrayLinhaTabela = [];
            var target = e.srcElement || e.target;
            while (target && target.nodeName !== "TR") {
                target = target.parentNode;
            }
            if (target) {
                var cells = target.getElementsByTagName("td");
                for (var i = 0; i < cells.length; i++) {
                    arrayLinhaTabela.push(cells[i].innerHTML);
                }
            }
        
            //introduz nas txtbox
            $(document.forms["formCustoInscricao"]["txtId"]).val(arrayLinhaTabela[0]);
            $(document.forms["formCustoInscricao"]["txtDescritivo"]).val(arrayLinhaTabela[2]);
            $(document.forms["formCustoInscricao"]["txtValorInscricao"]).val(parseFloat(arrayLinhaTabela[3]).toFixed(2));
            $(document.forms["formCustoInscricao"]["txtValorLivro"]).val(parseFloat(arrayLinhaTabela[4]).toFixed(2));
            $(document.forms["formCustoInscricao"]["txtValorMensalidade"]).val(parseFloat(arrayLinhaTabela[5]).toFixed(2));
            $(document.forms["formCustoInscricao"]["txtIvaInscricao"]).val(parseFloat(arrayLinhaTabela[6]).toFixed(2));
            $(document.forms["formCustoInscricao"]["txtIvaLivro"]).val(parseFloat(arrayLinhaTabela[7]).toFixed(2));
            $(document.forms["formCustoInscricao"]["txtIvaMensalidade"]).val(parseFloat(arrayLinhaTabela[8]).toFixed(2));
        }else{
            limpaDados_editarCustoInscricao()
        }
    };
   
}

function validaFormulario_editarCustoInscricao() {
    if(linhaPintada == true){
        let id = document.forms["formCustoInscricao"]["txtId"].value;
        let descritivo = document.forms["formCustoInscricao"]["txtDescritivo"].value;
        let valorInscricao = document.forms["formCustoInscricao"]["txtValorInscricao"].value;
        let valorLivro = document.forms["formCustoInscricao"]["txtValorLivro"].value;
        let valorMensalidade = document.forms["formCustoInscricao"]["txtValorMensalidade"].value;
        let aplicarIvaTodos = document.forms["formCustoInscricao"]["txtAplicarIvaTodos"];
        let ivaInscricao = document.forms["formCustoInscricao"]["txtIvaInscricao"].value;
        let ivaLivro = document.forms["formCustoInscricao"]["txtIvaLivro"].value;
        let ivaMensalidade = document.forms["formCustoInscricao"]["txtIvaMensalidade"].value;

        if (descritivo == "") {
            faltaCampo_editarCustoInscricao("Descritivo");
            document.forms["formCustoInscricao"]["txtDescritivo"].focus();
        }
        else if (valorInscricao == "") {
            faltaCampo_editarCustoInscricao("Valor Inscrição");
            document.forms["formCustoInscricao"]["txtValorInscricao"].focus();
        }
        else if(valorLivro == "") {
            faltaCampo_editarCustoInscricao("Valor Livro");
            document.forms["formCustoInscricao"]["txtValorLivro"].focus();
        }
        else if(valorMensalidade == "") {
            faltaCampo_editarCustoInscricao("Valor Mensalidade");
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
            confirmaDados_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
        }  
    }
    else{
        faltaLinha_editarCustoInscricao()
    }
}

function confirmaDados_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade){
    
    mostraDados_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    
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
            editar_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
        }
    })
}

function mostraDados_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/custoInscricao/mostraDadosEditar.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&aplicarIvaTodos="+encodeURIComponent(aplicarIvaTodos)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function editar_editarCustoInscricao(id, descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade){ 
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
           mostraTipoAlerta_editarCustoInscricao(true, 1);

           //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarCustoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
            linhaPintada = false;
        }
        else if(mensagem[0] == 2){
            mostraTipoAlerta_editarCustoInscricao(true, 2);

            //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
            //funcao em outro ficheiro
            carregaTabela_mostrarCustoInscricao(DefaultNumeroRegistos, DefaultOrdenacaoRegistos, DefaultPesquisaDescritivo);
            linhaPintada = false;
        }
        else{
            //erro que não vem de nehum resultado da query
            mostraTipoAlerta_editarCustoInscricao(false, 0);
            document.getElementById("txtErro").style.display = "block";
            document.getElementById("txtErro").style.visibility = "visible";
            document.getElementById("txtErro").innerHTML = "ReadyState do pedido: " + this.readyState + ";  Status da resposta: " + this.status + "; Erro: " + this.responseText + ";";
        }
    };
    //Encoding
    xhttp.open("POST", "php/custoInscricao/editarDados.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade)+"&aplicarIvaTodos="+encodeURIComponent(aplicarIvaTodos)+"&ivaInscricao="+encodeURIComponent(ivaInscricao)+"&ivaLivro="+encodeURIComponent(ivaLivro)+"&ivaMensalidade="+encodeURIComponent(ivaMensalidade), false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function faltaLinha_editarCustoInscricao(){
    Swal.fire({
        icon: 'error',
        title: 'Linha em falta',
        text: 'Por favor selecione a linha a editar.',
    })
}

function faltaCampo_editarCustoInscricao(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function mostraTipoAlerta_editarCustoInscricao(tipoAlerta, mensagem){
    if (tipoAlerta == true && mensagem == 1){
        //editado
        Swal.fire(
            'A Editar!',
            'O seu registo foi editado com sucesso!',
            'success'
        )
        limpaDados_editarCustoInscricao();    
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

function limpaDados_editarCustoInscricao(){
    document.getElementById("formCustoInscricao").reset();
}
    

