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
            limpaDados();
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "";
            linhaPintada = false;
        }else if(ultimaLinha == linhaSelecionada & linhaPintada == false){
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
        }
        else if(ultimaLinha != linhaSelecionada & linhaPintada == false){
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            ultimaLinha = linhaSelecionada;
            getDadosEditar();
        }else if(ultimaLinha != linhaSelecionada & linhaPintada == true){
            document.getElementById("tblTipoInscricao").rows[ultimaLinha].style.background = ""
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
            linhaPintada = true;
            ultimaLinha = linhaSelecionada;
            getDadosEditar();
        }
    }
    //se filtros mudaram
    else{
        ultimodescritivoSelecionado = descritivoSelecionado;
        ultimoNumeroRegistosSelecionado = numeroRegistosSelecionado;
        ultimoOrdenacaoRegistosSelecionado = ordenacaoRegistosSelecionado;

        document.getElementById("tblTipoInscricao").rows[ultimaLinha].style.background = ""
        document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
        linhaPintada = true;
        ultimaLinha = linhaSelecionada;
        getDadosEditar();
    }  

}

function getDadosEditar(){
    var table = document.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.onclick = function (e) {
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
    };
}

function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
}
    
