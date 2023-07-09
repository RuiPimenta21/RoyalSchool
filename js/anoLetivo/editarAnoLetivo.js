function atribuidataInicio_editarAnoLetivo(){

    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataInicio"]).val(dataInicio1Periodo);
}

function atribuidataFim_editarAnoLetivo(){
   
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;
    $(document.forms["formAnoLetivo"]["txtDataFim"]).val(dataFim3Periodo);
}