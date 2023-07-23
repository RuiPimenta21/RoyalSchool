let descritivoSelecionado = ""; 
let numeroRegistosSelecionado = ""; 
let ordenacaoRegistosSelecionado = "";

let ultimaLinha = 0;
let linhaPintada = false;


function getDados_geralAnoLetivo(){
    let id = document.forms["formAnoLetivo"]["txtId"].value;    
    let descritivo = document.forms["formAnoLetivo"]["txtDescritivo"].value;
    let dataInicio = document.forms["formAnoLetivo"]["txtDataInicio"].value
    let dataFim = document.forms["formAnoLetivo"]["txtDataFim"].value

    let id1Periodo = document.forms["formAnoLetivo"]["txtId1Periodo"].value;
    let descritivo1Periodo = document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].value;
    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
    let dataFim1Periodo = document.forms["formAnoLetivo"]["txtDataFim1Perido"].value;

    let id2Periodo = document.forms["formAnoLetivo"]["txtId2Periodo"].value;
    let descritivo2Periodo = document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].value;
    let dataInicio2Periodo = document.forms["formAnoLetivo"]["txtDataInicio2Perido"].value;
    let dataFim2Periodo = document.forms["formAnoLetivo"]["txtDataFim2Perido"].value;

    let id3Periodo = document.forms["formAnoLetivo"]["txtId3Periodo"].value;
    let descritivo3Periodo = document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].value;
    let dataInicio3Periodo = document.forms["formAnoLetivo"]["txtDataInicio3Perido"].value;
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;

    let id1Pausa = document.forms["formAnoLetivo"]["txtId1Pausa"].value;
    let descritivo1PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].value;
    let dataInicio1PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].value;
    let dataFim1PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].value;

    let id2Pausa = document.forms["formAnoLetivo"]["txtId2Pausa"].value;
    let descritivo2PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].value;
    let dataInicio2PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].value;
    let dataFim2PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].value;

    let id3Pausa = document.forms["formAnoLetivo"]["txtId3Pausa"].value;
    let descritivo3PausaLetiva = document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].value;
    let dataInicio3PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].value;
    let dataFim3PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].value;

    let valoresformAnoLetivo = [id,descritivo,dataInicio,dataFim,id1Periodo,descritivo1Periodo,dataInicio1Periodo,dataFim1Periodo,id2Periodo,descritivo2Periodo,dataInicio2Periodo,dataFim2Periodo,id3Periodo,descritivo3Periodo,dataInicio3Periodo,dataFim3Periodo,id1Pausa,descritivo1PausaLetiva,dataInicio1PausaLetiva,dataFim1PausaLetiva,id2Pausa,descritivo2PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,id3Pausa,descritivo3PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva];

    return valoresformAnoLetivo;
}

























function atribuidataInicio_geralAnoLetivo(){
    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataInicio"]).val(dataInicio1Periodo);
}

function atribuidataFim_geralAnoLetivo(){
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataFim"]).val(dataFim3Periodo);
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

            $(document.forms["formAnoLetivo"]["txtId1Periodo"]).val(arrayLinhaTabela[5]);
            $(document.forms["formAnoLetivo"]["txtDescritivo1Periodo"]).val(arrayLinhaTabela[6]);
            $(document.forms["formAnoLetivo"]["txtDataInicio1Periodo"]).val(arrayLinhaTabela[7]);
            $(document.forms["formAnoLetivo"]["txtDataFim1Periodo"]).val(arrayLinhaTabela[8]);

            $(document.forms["formAnoLetivo"]["txtId2Periodo"]).val(arrayLinhaTabela[9]);
            $(document.forms["formAnoLetivo"]["txtDescritivo2Periodo"]).val(arrayLinhaTabela[10]);
            $(document.forms["formAnoLetivo"]["txtDataInicio2Periodo"]).val(arrayLinhaTabela[11]);
            $(document.forms["formAnoLetivo"]["txtDataFim2Periodo"]).val(arrayLinhaTabela[12]);

            $(document.forms["formAnoLetivo"]["txtId3Periodo"]).val(arrayLinhaTabela[13]);
            $(document.forms["formAnoLetivo"]["txtDescritivo3Periodo"]).val(arrayLinhaTabela[14]);
            $(document.forms["formAnoLetivo"]["txtDataInicio3Periodo"]).val(arrayLinhaTabela[15]);
            $(document.forms["formAnoLetivo"]["txtDataFim3Periodo"]).val(arrayLinhaTabela[16]);

            $(document.forms["formAnoLetivo"]["txtId1Pausa"]).val(arrayLinhaTabela[17]);
            $(document.forms["formAnoLetivo"]["txtDescritivo1Pausa"]).val(arrayLinhaTabela[18]);
            $(document.forms["formAnoLetivo"]["txtDataInicio1Pausa"]).val(arrayLinhaTabela[19]);
            $(document.forms["formAnoLetivo"]["txtDataFim1Pausa"]).val(arrayLinhaTabela[20]);

            $(document.forms["formAnoLetivo"]["txtId2Pausa"]).val(arrayLinhaTabela[21]);
            $(document.forms["formAnoLetivo"]["txtDescritivo2Pausa"]).val(arrayLinhaTabela[22]);
            $(document.forms["formAnoLetivo"]["txtDataInicio2Pausa"]).val(arrayLinhaTabela[23]);
            $(document.forms["formAnoLetivo"]["txtDataFim2Pausa"]).val(arrayLinhaTabela[24]);

            $(document.forms["formAnoLetivo"]["txtId3Pausa"]).val(arrayLinhaTabela[25]);
            $(document.forms["formAnoLetivo"]["txtDescritivo3Pausa"]).val(arrayLinhaTabela[26]);
            $(document.forms["formAnoLetivo"]["txtDataInicio3Pausa"]).val(arrayLinhaTabela[27]);
            $(document.forms["formAnoLetivo"]["txtDataFim3Pausa"]).val(arrayLinhaTabela[28]);
        }else{
            limpaDados_geralAnoLetivo()
        }
    };
   
}




function limpaDados_geralAnoLetivo(){
    document.getElementById("formAnoLetivo").reset();
}