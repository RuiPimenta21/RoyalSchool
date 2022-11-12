function selecionaLinha(linha){
    let linhaSelecionada = linha;
    console.log(linhaSelecionada);
    document.getElementById("tblTipoInscricao").rows[linhaSelecionada].style.background = "yellow";
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
        $(document.forms["formTipoInscricao"]["txtValorInscricao"]).val(arrayLinhaTabela[1]);
        $(document.forms["formTipoInscricao"]["txtValorLivro"]).val(arrayLinhaTabela[2]);
        $(document.forms["formTipoInscricao"]["txtValorMensalidade"]).val(arrayLinhaTabela[3]);
    };
}



function limpaDados(){
    document.getElementById("formTipoInscricao").reset();
}
    
