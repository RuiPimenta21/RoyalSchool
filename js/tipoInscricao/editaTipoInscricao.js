let ultimodescritivoSelecionado = "";
let ultimoNumeroRegistosSelecionado = "top 10";
let ultimoOrdenacaoRegistosSelecionado = "order by 1 asc";
let ultimaLinha = 0;



function selecionaLinha(linhaSelecionada){
  
    let descritivoSelecionado = document.forms["formMostraRegistos"]["txtPesquisaDescritivo"].value;
    let numeroRegistosSelecionado = document.forms["formMostraRegistos"]["txtNumeroRegistos"].value;
    let ordenacaoRegistosSelecionado = document.forms["formMostraRegistos"]["txtOrdenacaoRegistos"].value;

    if(descritivoSelecionado == ultimodescritivoSelecionado & numeroRegistosSelecionado == ultimoNumeroRegistosSelecionado & ordenacaoRegistosSelecionado == ultimoOrdenacaoRegistosSelecionado){
        if (ultimaLinha != linhaSelecionada){
            document.getElementById("tblTipoInscricao").rows[ultimaLinha].style.background = ""
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
        }
        else if (ultimaLinha == linhaSelecionada){
            limpaDados();
            document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "";
        }
    }else{
        limpaDados();
        document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "#FFC107";
    }
   
    ultimodescritivoSelecionado = descritivoSelecionado 
    ultimoNumeroRegistosSelecionado = numeroRegistosSelecionado
    ultimoOrdenacaoRegistosSelecionado = ordenacaoRegistosSelecionado
    ultimaLinha = linhaSelecionada
    getDadosEditar();

    
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

        //console.log(arrayLinhaTabela);
        limpaDados();
        
        //introduz nas txtbox
        $(document.forms["formTipoInscricao"]["txtDescritivo"]).val(arrayLinhaTabela[0]);
        $(document.forms["formTipoInscricao"]["txtValorInscricao"]).val(parseFloat(arrayLinhaTabela[1]));
        $(document.forms["formTipoInscricao"]["txtValorLivro"]).val(parseFloat(arrayLinhaTabela[2]));
        $(document.forms["formTipoInscricao"]["txtValorMensalidade"]).val(parseFloat(arrayLinhaTabela[3]));
    };
}

function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
    console.log("entrou")
}
    
