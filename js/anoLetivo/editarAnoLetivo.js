let descritivoSelecionado = ""; 
let numeroRegistosSelecionado = ""; 
let ordenacaoRegistosSelecionado = "";

let ultimaLinha = 0;
let linhaPintada = false;


function atribuidataInicio_editarAnoLetivo(){
    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataInicio"]).val(dataInicio1Periodo);
}

function atribuidataFim_editarAnoLetivo(){
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataFim"]).val(dataFim3Periodo);
}

function selecionaLinha_editarAnoLetivo(linhaSelecionada){
    descritivoSelecionado = document.forms["formAnoLetivoMostraRegistos"]["txtPesquisaDescritivo"].value;
    numeroRegistosSelecionado = document.forms["formAnoLetivoMostraRegistos"]["txtNumeroRegistos"].value;
    ordenacaoRegistosSelecionado = document.forms["formAnoLetivoMostraRegistos"]["txtOrdenacaoRegistos"].value;

    //se filtros mantiveram
    if(descritivoSelecionado == DefaultPesquisaDescritivo & numeroRegistosSelecionado == DefaultNumeroRegistos & ordenacaoRegistosSelecionado == DefaultOrdenacaoRegistos){
        if (ultimaLinha == linhaSelecionada & linhaPintada == true){
            document.getElementById("tblAnoLetivo").rows[linhaSelecionada].style.background = "";
            linhaPintada = false;
            getDados_editarAnoLetivo(linhaPintada);
            
        }else if(ultimaLinha == linhaSelecionada & linhaPintada == false){
            document.getElementById("tblAnoLetivo").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarAnoLetivo(linhaPintada);
        }
        else if(ultimaLinha != linhaSelecionada & linhaPintada == false){
            document.getElementById("tblAnoLetivo").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarAnoLetivo(linhaPintada);
            ultimaLinha = linhaSelecionada;
           
        }else if(ultimaLinha != linhaSelecionada & linhaPintada == true){
            document.getElementById("tblAnoLetivo").rows[ultimaLinha].style.background = ""
            document.getElementById("tblAnoLetivo").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            getDados_editarAnoLetivo(linhaPintada);
            ultimaLinha = linhaSelecionada; 
        }
    }
    else{   //se filtros mudaram
        DefaultPesquisaDescritivo = descritivoSelecionado;
        DefaultNumeroRegistos = numeroRegistosSelecionado;
        DefaultOrdenacaoRegistos = ordenacaoRegistosSelecionado;

        document.getElementById("tblAnoLetivo").rows[ultimaLinha].style.background = ""
        document.getElementById("tblAnoLetivo").rows[linhaSelecionada].style.background = "#FFC107";
        linhaPintada = true;
        getDados_editarAnoLetivo(linhaPintada);
        ultimaLinha = linhaSelecionada;  
    }  
}

function getDados_editarAnoLetivo(linhaPintada){
    var table = document.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.onclick = function (e) {
        if(linhaPintada == true){
            limpaDados_editarAnoLetivo()
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
            $(document.forms["formAnoLetivo"]["txtId"]).val(arrayLinhaTabela[0]);
            $(document.forms["formAnoLetivo"]["txtDescritivo"]).val(arrayLinhaTabela[2]);
            $(document.forms["formAnoLetivo"]["txtDataInicio"]).val(arrayLinhaTabela[3]);
            $(document.forms["formAnoLetivo"]["txtDataFim"]).val(arrayLinhaTabela[4]);
            $(document.forms["formAnoLetivo"]["txtDescritivo1Periodo"]).val(arrayLinhaTabela[5]);
            $(document.forms["formAnoLetivo"]["txtDataInicio1Periodo"]).val(arrayLinhaTabela[6]);
            $(document.forms["formAnoLetivo"]["txtDataFim1Periodo"]).val(arrayLinhaTabela[7]);
            $(document.forms["formAnoLetivo"]["txtDescritivo2Periodo"]).val(arrayLinhaTabela[8]);
            $(document.forms["formAnoLetivo"]["txtDataInicio2Periodo"]).val(arrayLinhaTabela[9]);
            $(document.forms["formAnoLetivo"]["txtDataFim2Periodo"]).val(arrayLinhaTabela[10]);
            $(document.forms["formAnoLetivo"]["txtDescritivo3Periodo"]).val(arrayLinhaTabela[11]);
            $(document.forms["formAnoLetivo"]["txtDataInicio3Periodo"]).val(arrayLinhaTabela[12]);
            $(document.forms["formAnoLetivo"]["txtDataFim3Periodo"]).val(arrayLinhaTabela[13]);
            $(document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"]).val(arrayLinhaTabela[14]);
            $(document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"]).val(arrayLinhaTabela[15]);
            $(document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"]).val(arrayLinhaTabela[16]);
            $(document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"]).val(arrayLinhaTabela[17]);
            $(document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"]).val(arrayLinhaTabela[18]);
            $(document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"]).val(arrayLinhaTabela[19]);
            $(document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"]).val(arrayLinhaTabela[20]);
            $(document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"]).val(arrayLinhaTabela[21]);
            $(document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"]).val(arrayLinhaTabela[22]);
        }else{
            limpaDados_editarAnoLetivo()
        }
    };
   
}

function validaFormulario_editarAnoLetivo() {
    if(linhaPintada == true){

        let id = document.forms["formAnoLetivo"]["txtId"].value;    
        let descritivo = document.forms["formAnoLetivo"]["txtDescritivo"].value;
        let descritivo1Periodo = document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].value;
        let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
        let dataFim1Periodo = document.forms["formAnoLetivo"]["txtDataFim1Perido"].value;
        let descritivo2Periodo = document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].value;
        let dataInicio2Periodo = document.forms["formAnoLetivo"]["txtDataInicio2Perido"].value;
        let dataFim2Periodo = document.forms["formAnoLetivo"]["txtDataFim2Perido"].value;
        let descritivo3Periodo = document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].value;
        let dataInicio3Periodo = document.forms["formAnoLetivo"]["txtDataInicio3Perido"].value;
        let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;
        let descritivo1PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].value;
        let dataInicio1PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].value;
        let dataFim1PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].value;
        let descritivo2PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].value;
        let dataInicio2PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].value;
        let dataFim2PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].value;
        let descritivo3PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].value;
        let dataInicio3PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].value;
        let dataFim3PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].value;


        if (descritivo == "") {
            faltaCampo_editarAnoLetivo("Descritivo");
            document.forms["formAnoLetivo"]["txtDescritivo"].focus();
            return false;
        }
        else if (descritivo1Periodo == "") {
            faltaCampo_editarAnoLetivo("Descritivo 1º Período");
            document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].focus();
            return false;
        }
        else if (dataInicio1Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Início 1º Período");
            document.forms["formAnoLetivo"]["txtDataInicio1Perido"].focus();
            return false;
        }
        else if (dataFim1Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Fim 1º Período");
            document.forms["formAnoLetivo"]["txtDataFim1Perido"].focus();
            return false;
        }
        else if (descritivo2Periodo == "") {
            faltaCampo_editarAnoLetivo("Descritivo 2º Período");
            document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].focus();
            return false;
        }
        else if (dataInicio2Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Início 2º Período");
            document.forms["formAnoLetivo"]["txtDataInicio2Perido"].focus();
            return false;
        }
        else if (dataFim2Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Fim 2º Período");
            document.forms["formAnoLetivo"]["txtDataFim2Perido"].focus();
            return false;
        }
        else if (descritivo3Periodo == "") {
            faltaCampo_editarAnoLetivo("Descritivo 3º Período");
            document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].focus();
            return false;
        }
        else if (dataInicio3Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Início 3º Período");
            document.forms["formAnoLetivo"]["txtDataInicio3Perido"].focus();
            return false;
        }
        else if (dataFim3Periodo == "") {
            faltaCampo_editarAnoLetivo("Data de Fim 3º Período");
            document.forms["formAnoLetivo"]["txtDataFim3Perido"].focus();
            return false;
        }
        else if (descritivo1PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Descritivo do Natal");
            document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].focus();
            return false;
        }
        else if (dataInicio1PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Início do Natal");
            document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].focus();
            return false;
        }
        else if (dataFim1PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Fim do Natal");
            document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].focus();
            return false;
        }
        else if (descritivo2PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Descritivo do Carnaval");
            document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].focus();
            return false;
        }
        else if (dataInicio2PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Início do Carnaval");
            document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].focus();
            return false;
        }
        else if (dataFim2PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Fim do Carnaval");
            document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].focus();
            return false;
        }
        else if (descritivo3PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Descritivo da Páscoa");
            document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].focus();
            return false;
        }
        else if (dataInicio3PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Início da Páscoa");
            document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].focus();
            return false;
        }
        else if (dataFim3PausaLetiva == "") {
            faltaCampo_editarAnoLetivo("Data de Fim da Páscoa");
            document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].focus();
            return false;
        }
        else{
            intervaloDatasValidado =  validaIntervaloDatas_editarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva)
            if(intervaloDatasValidado == true){
                confirmaDados_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva);
            }
        } 
    }
    else{
        faltaLinha_editarAnoLetivo()
    }
}

function validaIntervaloDatas_editarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva){

    //Periodo
    if(dataInicio1Periodo > dataFim1Periodo){
        dataInvalida_editarAnoLetivo("A Data de Início do 1º Período não pode ser superior a Data de Fim do 1º Período.");
        return false;
    }
    else if(dataInicio2Periodo > dataFim2Periodo){
        dataInvalida_editarAnoLetivo("A Data de Início do 2º Período não pode ser superior a Data de Fim do 2º Período.");
        return false;
    }
    else if(dataInicio3Periodo > dataFim3Periodo){
        dataInvalida_editarAnoLetivo("A Data de Início do 3º Período não pode ser superior a Data de Fim do 3º Período.");
        return false;
    }
    else if(dataFim1Periodo >= dataInicio2Periodo){
        dataInvalida_editarAnoLetivo("A Data de Fim do 1º Período não pode ser igual ou superior a Data de Início do 2º Período.");
        return false;
    }
    else if(dataFim2Periodo >= dataInicio3Periodo){
        dataInvalida_editarAnoLetivo("A Data de Fim do 2º Período não pode ser igual ou superior a Data de Início do 3º Período.");
        return false;
    }
    //Pausa Letiva
    else if(dataInicio1PausaLetiva > dataFim1PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Início da 1º Pausa não pode ser superior a Data de Fim da 1º Pausa.");
        return false;
    }
    else if(dataInicio2PausaLetiva > dataFim2PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Início da 2º Pausa não pode ser superior a Data de Fim da 2º Pausa.");
        return false;
    }
    else if(dataInicio3PausaLetiva > dataFim3PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Início da 3º Pausa não pode ser superior a Data de Fim da 3º Pausa.");
        return false;
    }
    else if(dataFim1PausaLetiva >= dataInicio2PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Fim da 1º Pausa não pode ser igual ou superior a Data de Início 2º Pausa.");
        return false;
    }
    else if(dataFim2PausaLetiva >= dataInicio3PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Fim da 2º Pausa não pode ser igual ou superior a Data de Início 3º Pausa.");
        return false;
    }
    else if(dataInicio1Periodo >= dataInicio1PausaLetiva){
        dataInvalida_editarAnoLetivo("A Data de Início do 1º Período não pode ser igual ou superior a Data de Início da 1º Pausa.");
        return false;
    }
    else if(dataFim3PausaLetiva >= dataFim3Periodo){
        dataInvalida_editarAnoLetivo("A Data de Fim da 3º Pausa não pode ser igual ou superior Data de Fim do 3º Período.");
        return false;
    }
    else{
        return true;
    }
} 

function confirmaDados_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva){
    
    mostraDados_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva);
    
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
            editar_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva);
        }
    })
    
}

function mostraDados_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtTabela").innerHTML = this.responseText;
    }
    //Encoding
    xhttp.open("POST", "php/anoLetivo/mostraDadosEditar.php?id="+encodeURIComponent(id)+
        "&descritivo="+encodeURIComponent(descritivo)+
        "&descritivo1Periodo="+encodeURIComponent(descritivo1Periodo)+
        "&dataInicio1Periodo="+encodeURIComponent(dataInicio1Periodo)+
        "&dataFim1Periodo="+encodeURIComponent(dataFim1Periodo)+
        "&descritivo2Periodo="+encodeURIComponent(descritivo2Periodo)+
        "&dataInicio2Periodo="+encodeURIComponent(dataInicio2Periodo)+
        "&dataFim2Periodo="+encodeURIComponent(dataFim2Periodo)+
        "&descritivo3Periodo="+encodeURIComponent(descritivo3Periodo)+
        "&dataInicio3Periodo="+encodeURIComponent(dataInicio3Periodo)+
        "&dataFim3Periodo="+encodeURIComponent(dataFim3Periodo)+
        "&descritivo1PausaLetiva="+encodeURIComponent(descritivo1PausaLetiva)+
        "&dataInicio1PausaLetiva="+encodeURIComponent(dataInicio1PausaLetiva)+
        "&dataFim1PausaLetiva="+encodeURIComponent(dataFim1PausaLetiva)+
        "&descritivo2PausaLetiva="+encodeURIComponent(descritivo2PausaLetiva)+
        "&dataInicio2PausaLetiva="+encodeURIComponent(dataInicio2PausaLetiva)+
        "&dataFim2PausaLetiva="+encodeURIComponent(dataFim2PausaLetiva)+
        "&descritivo3PausaLetiva="+encodeURIComponent(descritivo3PausaLetiva)+
        "&dataInicio3PausaLetiva="+encodeURIComponent(dataInicio3PausaLetiva)+
        "&dataFim3PausaLetiva="+encodeURIComponent(dataFim3PausaLetiva),     
    true);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
}
 /*
function editar_editarAnoLetivo(id,descritivo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva){ 
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
    xhttp.open("POST", "php/anoLetivo/editarDados.php?id="+encodeURIComponent(id)+
        "&descritivo="+encodeURIComponent(descritivo)+
        "&descritivo1Periodo="+encodeURIComponent(descritivo1Periodo)+
        "&dataInicio1Periodo="+encodeURIComponent(dataInicio1Periodo)+
        "&dataFim1Periodo="+encodeURIComponent(dataFim1Periodo)+
        "&descritivo2Periodo="+encodeURIComponent(descritivo2Periodo)+
        "&dataInicio2Periodo="+encodeURIComponent(dataInicio2Periodo)+
        "&dataFim2Periodo="+encodeURIComponent(dataFim2Periodo)+
        "&descritivo3Periodo="+encodeURIComponent(descritivo3Periodo)+
        "&dataInicio3Periodo="+encodeURIComponent(dataInicio3Periodo)+
        "&dataFim3Periodo="+encodeURIComponent(dataFim3Periodo)+
        "&descritivo1PausaLetiva="+encodeURIComponent(descritivo1PausaLetiva)+
        "&dataInicio1PausaLetiva="+encodeURIComponent(dataInicio1PausaLetiva)+
        "&dataFim1PausaLetiva="+encodeURIComponent(dataFim1PausaLetiva)+
        "&descritivo2PausaLetiva="+encodeURIComponent(descritivo2PausaLetiva)+
        "&dataInicio2PausaLetiva="+encodeURIComponent(dataInicio2PausaLetiva)+
        "&dataFim2PausaLetiva="+encodeURIComponent(dataFim2PausaLetiva)+
        "&descritivo3PausaLetiva="+encodeURIComponent(descritivo3PausaLetiva)+
        "&dataInicio3PausaLetiva="+encodeURIComponent(dataInicio3PausaLetiva)+
        "&dataFim3PausaLetiva="+encodeURIComponent(dataFim3PausaLetiva),         
    false);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
   
}
 */

function dataInvalida_editarAnoLetivo(campo){
    Swal.fire({
        icon: 'error',
        title: 'Datas inválidas.',
        text: campo ,
    })
}

function faltaLinha_editarAnoLetivo(){
    Swal.fire({
        icon: 'error',
        title: 'Linha em falta',
        text: 'Por favor selecione a linha a editar.',
    })
}

function faltaCampo_editarAnoLetivo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

/*
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
*/
function limpaDados_editarCustoInscricao(){
    document.getElementById("formAnoLetivo").reset();
}
    
