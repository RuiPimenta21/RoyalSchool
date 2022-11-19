let ultimodescritivoSelecionado = "";
let ultimoNumeroRegistosSelecionado = "top 10";
let ultimoOrdenacaoRegistosSelecionado = "order by 2 asc";
let descritivoSelecionado = ""; 
let numeroRegistosSelecionado = ""; 
let ordenacaoRegistosSelecionado = "";
let ultimaLinha = 0;
let linhaPintada = false;


function selecionaLinha(linhaSelecionada){
    descritivoSelecionado = document.forms["formMostraRegistos"]["txtPesquisaDescritivo"].value;
    numeroRegistosSelecionado = document.forms["formMostraRegistos"]["txtNumeroRegistos"].value;
    ordenacaoRegistosSelecionado = document.forms["formMostraRegistos"]["txtOrdenacaoRegistos"].value;

   
    //se filtros mantiveram
    if(descritivoSelecionado == ultimodescritivoSelecionado & numeroRegistosSelecionado == ultimoNumeroRegistosSelecionado & ordenacaoRegistosSelecionado == ultimoOrdenacaoRegistosSelecionado){
        if (ultimaLinha == linhaSelecionada & linhaPintada == true){
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "";
            linhaPintada = false;
            getDadosEditar(linhaPintada);
            
        }else if(ultimaLinha == linhaSelecionada & linhaPintada == false){
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDadosEditar(linhaPintada);
        }
        else if(ultimaLinha != linhaSelecionada & linhaPintada == false){
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDadosEditar(linhaPintada);
            ultimaLinha = linhaSelecionada;
           
        }else if(ultimaLinha != linhaSelecionada & linhaPintada == true){
            document.getElementById("tblTipoInscricao").rows[ultimaLinha].style.background = ""
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDadosEditar(linhaPintada);
            ultimaLinha = linhaSelecionada; 
        }
    }
    else{   //se filtros mudaram
        ultimodescritivoSelecionado = descritivoSelecionado;
        ultimoNumeroRegistosSelecionado = numeroRegistosSelecionado;
        ultimoOrdenacaoRegistosSelecionado = ordenacaoRegistosSelecionado;

        document.getElementById("tblTipoInscricao").rows[ultimaLinha].style.background = ""
        document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
        linhaPintada = true;
        getDadosEditar(linhaPintada);
        ultimaLinha = linhaSelecionada;  
    }  
}

function getDadosEditar(linhaPintada){
    var table = document.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.onclick = function (e) {
        if(linhaPintada == true){
            limpaDados()
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
            $(document.forms["formTipoInscricao"]["txtId"]).val(arrayLinhaTabela[0]);
            $(document.forms["formTipoInscricao"]["txtDescritivo"]).val(arrayLinhaTabela[2]);
            $(document.forms["formTipoInscricao"]["txtValorInscricao"]).val(parseFloat(arrayLinhaTabela[3]));
            $(document.forms["formTipoInscricao"]["txtValorLivro"]).val(parseFloat(arrayLinhaTabela[4]));
            $(document.forms["formTipoInscricao"]["txtValorMensalidade"]).val(parseFloat(arrayLinhaTabela[5]));
        }else{
            limpaDados()
        }
    };
   
}
function validaFormularioTipoIncricaoEditar() {
    if(linhaPintada == true){

        let id = document.forms["formTipoInscricao"]["txtId"].value;
        let descritivo = document.forms["formTipoInscricao"]["txtDescritivo"].value;
        let valorInscricao = document.forms["formTipoInscricao"]["txtValorInscricao"].value;
        let valorLivro = document.forms["formTipoInscricao"]["txtValorLivro"].value;
        let valorMensalidade = document.forms["formTipoInscricao"]["txtValorMensalidade"].value;

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
            confirmaDadosAEditar(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
        }  
    }
    else{
        faltaLinha()
    }
}

function confirmaDadosAEditar(id, descritivo, valorInscricao, valorLivro, valorMensalidade){
    mostraDadosAEditar(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
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
            editaDados(id, descritivo, valorInscricao, valorLivro, valorMensalidade);
        }
    })
}

function mostraDadosAEditar(id, descritivo, valorInscricao, valorLivro, valorMensalidade) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("GET", "php/tipoInscricao/mostraDadosAEditar.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}

function editaDados(id, descritivo, valorInscricao, valorLivro, valorMensalidade){ 
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
    xhttp.open("GET", "php/tipoInscricao/editaDados.php?id="+encodeURIComponent(id)+"&descritivo="+encodeURIComponent(descritivo)+"&valorInscricao="+encodeURIComponent(valorInscricao)+"&valorLivro="+encodeURIComponent(valorLivro)+"&valorMensalidade="+encodeURIComponent(valorMensalidade), true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();

    
    //carrega a tabela novamente para se ver as alterações, com os ultimos filtros
    //funcao em outro ficheiro
    carregaTabela(ultimoNumeroRegistosSelecionado, ultimoOrdenacaoRegistosSelecionado, ultimodescritivoSelecionado);
}

function faltaLinha(){
    Swal.fire({
        icon: 'error',
        title: 'Linha em falta',
        text: 'Por favor selecione a linha a editar.',
    })
}

function faltaCampo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function mostraTipoAlerta(tipoAlerta){
    if (tipoAlerta == true){
        //editado
        Swal.fire(
            'A Editar!',
            'O seu registo foi editado com sucesso!',
            'success'
        )
        limpaDados();    
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

function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
}
    
