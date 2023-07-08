function validaEspacoTemporal_registarAnoLetivo(){

    let intervaloDatasValidado = false

    let dataInicio1Periodo = document.forms["formAnoLetivo"]["txtDataInicio1Perido"].value;
    let dataFim1Periodo = document.forms["formAnoLetivo"]["txtDataFim1Perido"].value;
    let dataInicio2Periodo = document.forms["formAnoLetivo"]["txtDataInicio2Perido"].value;
    let dataFim2Periodo = document.forms["formAnoLetivo"]["txtDataFim2Perido"].value;
    let dataInicio3Periodo = document.forms["formAnoLetivo"]["txtDataInicio3Perido"].value;
    let dataFim3Periodo = document.forms["formAnoLetivo"]["txtDataFim3Perido"].value;
    let dataInicio1PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].value;
    let dataFim1PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].value;
    let dataInicio2PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].value;
    let dataFim2PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].value;
    let dataInicio3PausaLetiva = document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].value;
    let dataFim3PausaLetiva = document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].value;

    intervaloDatasValidado = validaIntervaloDatas_registarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva)

    if(intervaloDatasValidado == true){
        trabalhaDias_registarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva)
    }
}

function validaFormulario_registarAnoLetivo() {

    let intervaloDatasValidado = false

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
        faltaCampo_registarAnoLetivo("Descritivo");
        document.forms["formAnoLetivo"]["txtDescritivo"].focus();
        return false;
    }
    else if (descritivo1Periodo == "") {
        faltaCampo_registarAnoLetivo("Descritivo 1º Período");
        document.forms["formAnoLetivo"]["txtDescritivo1Periodo"].focus();
        return false;
    }
    else if (dataInicio1Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Início 1º Período");
        document.forms["formAnoLetivo"]["txtDataInicio1Perido"].focus();
        return false;
    }
    else if (dataFim1Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Fim 1º Período");
        document.forms["formAnoLetivo"]["txtDataFim1Perido"].focus();
        return false;
    }
    else if (descritivo2Periodo == "") {
        faltaCampo_registarAnoLetivo("Descritivo 2º Período");
        document.forms["formAnoLetivo"]["txtDescritivo2Periodo"].focus();
        return false;
    }
    else if (dataInicio2Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Início 2º Período");
        document.forms["formAnoLetivo"]["txtDataInicio2Perido"].focus();
        return false;
    }
    else if (dataFim2Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Fim 2º Período");
        document.forms["formAnoLetivo"]["txtDataFim2Perido"].focus();
        return false;
    }
    else if (descritivo3Periodo == "") {
        faltaCampo_registarAnoLetivo("Descritivo 3º Período");
        document.forms["formAnoLetivo"]["txtDescritivo3Periodo"].focus();
        return false;
    }
    else if (dataInicio3Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Início 3º Período");
        document.forms["formAnoLetivo"]["txtDataInicio3Perido"].focus();
        return false;
    }
    else if (dataFim3Periodo == "") {
        faltaCampo_registarAnoLetivo("Data de Fim 3º Período");
        document.forms["formAnoLetivo"]["txtDataFim3Perido"].focus();
        return false;
    }
    else if (descritivo1PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Descritivo do Natal");
        document.forms["formAnoLetivo"]["txtDescritivo1PausaLetiva"].focus();
        return false;
    }
    else if (dataInicio1PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Início do Natal");
        document.forms["formAnoLetivo"]["txtDataInicio1PausaLetiva"].focus();
        return false;
    }
    else if (dataFim1PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Fim do Natal");
        document.forms["formAnoLetivo"]["txtDataFim1PausaLetiva"].focus();
        return false;
    }
    else if (descritivo2PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Descritivo do Carnaval");
        document.forms["formAnoLetivo"]["txtDescritivo2PausaLetiva"].focus();
        return false;
    }
    else if (dataInicio2PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Início do Carnaval");
        document.forms["formAnoLetivo"]["txtDataInicio2PausaLetiva"].focus();
        return false;
    }
    else if (dataFim2PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Fim do Carnaval");
        document.forms["formAnoLetivo"]["txtDataFim2PausaLetiva"].focus();
        return false;
    }
    else if (descritivo3PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Descritivo da Páscoa");
        document.forms["formAnoLetivo"]["txtDescritivo3PausaLetiva"].focus();
        return false;
    }
    else if (dataInicio3PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Início da Páscoa");
        document.forms["formAnoLetivo"]["txtDataInicio3PausaLetiva"].focus();
        return false;
    }
    else if (dataFim3PausaLetiva == "") {
        faltaCampo_registarAnoLetivo("Data de Fim da Páscoa");
        document.forms["formAnoLetivo"]["txtDataFim3PausaLetiva"].focus();
        return false;
    }
    else{
        intervaloDatasValidado = validaIntervaloDatas_registarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva)
        if(intervaloDatasValidado == true){
           //confirmaDados_registarAnoLetivo(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade); 
        }
    }  
}

function validaIntervaloDatas_registarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva){
   
    if(dataInicio3Periodo != "" && dataFim3Periodo != "" && dataInicio3Periodo >= dataFim3Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 3º Período superior ou igual a Data de Fim 3º Período");
        return false;
    }
    else if(dataInicio3Periodo != "" && dataFim2Periodo != "" &&  dataInicio3Periodo <= dataFim2Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 3º Período inferior ou igual a Data de Fim 2º Período");
        return false;
    }
    else if(dataInicio2Periodo != "" && dataFim2Periodo != "" &&  dataInicio2Periodo >= dataFim2Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 2º Período superior ou igual a Data de Fim 2º Período");
        return false;
    }
    else if(dataInicio2Periodo != "" && dataFim1Periodo != "" &&  dataInicio2Periodo <= dataFim1Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 2º Período inferior ou igual a Data de Fim 1º Período");
        return false;
    }
    else if(dataInicio1Periodo != "" && dataFim1Periodo != "" &&  dataInicio1Periodo >= dataFim1Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 1º Período superior ou igual a Data de Fim 1º Período");
        return false;
    }
    else if (dataInicio3PausaLetiva != "" && dataFim3PausaLetiva != "" && dataInicio3PausaLetiva >= dataFim3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início da Páscoa superior ou igual a Data de Fim da Páscoa");
        return false;
    }
    else if(dataInicio3PausaLetiva != "" && dataFim2PausaLetiva != "" &&  dataInicio3PausaLetiva <= dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início da Páscoa inferior ou igual a Data de Fim do Carnaval");
        return false;
    }
    else if(dataInicio2PausaLetiva != "" && dataFim2PausaLetiva != "" &&  dataInicio2PausaLetiva >= dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Carnaval superior ou igual a Data de Fim do Carnaval");
        return false;
    }
    else if(dataInicio2PausaLetiva != "" && dataFim1PausaLetiva != "" &&  dataInicio2PausaLetiva <= dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Carnaval inferior ou igual a Data de Fim do Natal");
        return false;
    }
    else if(dataInicio1PausaLetiva != "" && dataFim1PausaLetiva != "" &&  dataInicio1PausaLetiva >= dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Natal superior ou igual a Data de Fim do Natal");
        return false;
    }
    else if(dataInicio3Periodo != "" && dataFim3PausaLetiva != "" &&  dataInicio3Periodo >= dataFim3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 3º Periodo superior ou igual a Data de Fim da Páscoa");
        return false;
    }
    else if(dataFim2Periodo != "" && dataInicio3PausaLetiva != "" &&  dataFim2Periodo >= dataInicio3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim 2º Periodo superior ou igual a Data de Início da Páscoa");
        return false;
    }
    else if(dataFim2Periodo != "" && dataFim2PausaLetiva != "" &&  dataFim2Periodo <= dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim 2º Periodo inferior ou igual a Data de Fim do Carnaval");
        return false;
    }
    else if(dataInicio2Periodo != "" && dataInicio2PausaLetiva != "" &&  dataInicio2Periodo >= dataInicio2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 2º Periodo superior ou igual a Data de Início do Carnaval");
        return false;
    }
    else if(dataInicio2Periodo != "" && dataFim1PausaLetiva != "" &&  dataInicio2Periodo <= dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 2º Periodo inferior ou igual a Data de Fim do Natal");
        return false;
    }
    else if(dataFim1Periodo != "" && dataInicio1PausaLetiva != "" &&  dataFim1Periodo >= dataInicio1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim do Natal superior ou igual a Data de Início do Natal");
        return false;
    }
    else{
        return true;
    }
}

function faltaCampo_registarAnoLetivo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function dataInvalida_registarAnoLetivo(campo){
    Swal.fire({
        icon: 'error',
        title: campo,
        text: 'Por favor introduza uma valor válido.',
    })
}

function trabalhaDias_registarAnoLetivo(dataInicio1Periodo,dataFim1Periodo,dataInicio2Periodo,dataFim2Periodo,dataInicio3Periodo,dataFim3Periodo,dataInicio1PausaLetiva,dataFim1PausaLetiva,dataInicio2PausaLetiva,dataFim2PausaLetiva,dataInicio3PausaLetiva,dataFim3PausaLetiva){

    limparDesenhoLinhaTemporal_registarAnoLetivo()

    let totalizadorDias1Periodo = 0
    let totalizadorDias1PausaLetiva = 0
    let percentagemDias1Periodo = 0
    let percentagemDias1PausaLetiva = 0

    let totalizadorDias2Periodo = 0
    let totalizadorDias2PausaLetiva = 0
    let percentagemDias2Periodo = 0
    let percentagemDias2PausaLetiva = 0

    let totalizadorDias3Periodo = 0
    let totalizadorDias3PausaLetiva = 0
    let percentagemDias3Periodo = 0
    let percentagemDias3PausaLetiva = 0
    
    let totalizadorDiasTotal = 0

    //Contagem dias
    if (dataInicio1Periodo != "" && dataFim1Periodo != "") {
        totalizadorDias1Periodo = calcularNumeroDias(dataInicio1Periodo, dataFim1Periodo)
    }
    else{
        totalizadorDias1Periodo = 0
    }
    if (dataInicio1PausaLetiva != "" && dataFim1PausaLetiva != "") {
        totalizadorDias1PausaLetiva = calcularNumeroDias(dataInicio1PausaLetiva, dataFim1PausaLetiva) 
    }
    else{
        totalizadorDias1PausaLetiva = 0
    }

    if (dataInicio2Periodo != "" && dataFim2Periodo != "") {
        totalizadorDias2Periodo = calcularNumeroDias(dataInicio2Periodo, dataFim2Periodo)
    }
    else{
        totalizadorDias2Periodo = 0
    }
    if (dataInicio2PausaLetiva != "" && dataFim2PausaLetiva != "") {
        totalizadorDias2PausaLetiva = calcularNumeroDias(dataInicio2PausaLetiva, dataFim2PausaLetiva) 
    }
    else{
        totalizadorDias2PausaLetiva = 0
    }

    if (dataInicio3Periodo != "" && dataFim3Periodo != "") {
        totalizadorDias3Periodo = calcularNumeroDias(dataInicio3Periodo, dataFim3Periodo)
    }
    else{
        totalizadorDias3Periodo = 0
    }
    if (dataInicio3PausaLetiva != "" && dataFim3PausaLetiva != "") {
        totalizadorDias3PausaLetiva = calcularNumeroDias(dataInicio3PausaLetiva, dataFim3PausaLetiva) 
    }
    else{
        totalizadorDias3PausaLetiva = 0
    }

    if (totalizadorDias2PausaLetiva > 0){
        totalizadorDias2Periodo = (totalizadorDias2Periodo-totalizadorDias2PausaLetiva)/2;
        totalizadorDiasTotal = totalizadorDias1Periodo + totalizadorDias1PausaLetiva + totalizadorDias2Periodo + totalizadorDias2PausaLetiva + totalizadorDias2Periodo + totalizadorDias3PausaLetiva + totalizadorDias3Periodo;
    }
    else{
        totalizadorDiasTotal = totalizadorDias1Periodo + totalizadorDias1PausaLetiva + totalizadorDias2Periodo + totalizadorDias2PausaLetiva + totalizadorDias3PausaLetiva + totalizadorDias3Periodo;
    }

    percentagemDias1Periodo = (totalizadorDias1Periodo * 100 ) / totalizadorDiasTotal
    percentagemDias1PausaLetiva = (totalizadorDias1PausaLetiva * 100 ) / totalizadorDiasTotal
    percentagemDias2Periodo = (totalizadorDias2Periodo * 100 ) / totalizadorDiasTotal
    percentagemDias2PausaLetiva = (totalizadorDias2PausaLetiva * 100 ) / totalizadorDiasTotal
    percentagemDias3Periodo = (totalizadorDias3Periodo * 100 ) / totalizadorDiasTotal
    percentagemDias3PausaLetiva = (totalizadorDias3PausaLetiva * 100 ) / totalizadorDiasTotal


    //css 
    if (percentagemDias1Periodo > 0){
        percentagemDias1Periodo = percentagemDias1Periodo + "%"

        document.getElementById("div1periodo").style.width = percentagemDias1Periodo;
        document.getElementById("div1periodo").style.display = "block";
        document.getElementById("div1periodo").style.visibility = "visible";
    }
    if (percentagemDias1PausaLetiva > 0){
        percentagemDias1PausaLetiva = percentagemDias1PausaLetiva + "%"

        document.getElementById("div1ferias").style.width = percentagemDias1PausaLetiva
        document.getElementById("div1ferias").style.display = "block";
        document.getElementById("div1ferias").style.visibility = "visible";
    }
    if (percentagemDias2Periodo > 0 && percentagemDias2PausaLetiva == 0){
        percentagemDias2Periodo = percentagemDias2Periodo + "%"

        document.getElementById("div2periodo1").style.width = percentagemDias2Periodo;
        document.getElementById("div2periodo1").style.display = "block";
        document.getElementById("div2periodo1").style.visibility = "visible";
    }
    else if (percentagemDias2Periodo > 0 && percentagemDias2PausaLetiva > 0){
        percentagemDias2Periodo = percentagemDias2Periodo + "%"
        percentagemDias2PausaLetiva = percentagemDias2PausaLetiva + "%"

        document.getElementById("div2periodo1").style.width = percentagemDias2Periodo;
        document.getElementById("div2periodo1").style.display = "block";
        document.getElementById("div2periodo1").style.visibility = "visible";

    
        document.getElementById("div2ferias").style.width = percentagemDias2PausaLetiva
        document.getElementById("div2ferias").style.display = "block";
        document.getElementById("div2ferias").style.visibility = "visible";

        document.getElementById("div2periodo2").style.width = percentagemDias2Periodo;
        document.getElementById("div2periodo2").style.display = "block";
        document.getElementById("div2periodo2").style.visibility = "visible";
    }
    if (percentagemDias2PausaLetiva > 0 && percentagemDias2Periodo == 0){
        percentagemDias2PausaLetiva = percentagemDias2PausaLetiva + "%"
        document.getElementById("div2ferias").style.width = percentagemDias2PausaLetiva
        document.getElementById("div2ferias").style.display = "block";
        document.getElementById("div2ferias").style.visibility = "visible";
    }
    if (percentagemDias3PausaLetiva > 0){
        percentagemDias3PausaLetiva = percentagemDias3PausaLetiva + "%"

        document.getElementById("div3ferias").style.width = percentagemDias3PausaLetiva
        document.getElementById("div3ferias").style.display = "block";
        document.getElementById("div3ferias").style.visibility = "visible";
    }
    if (percentagemDias3Periodo > 0){
        percentagemDias3Periodo = percentagemDias3Periodo + "%"

        document.getElementById("div3periodo").style.width = percentagemDias3Periodo;
        document.getElementById("div3periodo").style.display = "block";
        document.getElementById("div3periodo").style.visibility = "visible";
    }
}

function calcularNumeroDias(dataInicial, dataFinal) {
    let inicio = null;
    let fim = null;

    inicio = new Date(dataInicial);
    fim = new Date(dataFinal);

    var diferenca = fim.getTime() - inicio.getTime();
    var dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

    return dias+1;
}

function limparDesenhoLinhaTemporal_registarAnoLetivo(){
    percentagemZero =  0 + "%"

    document.getElementById("div1periodo").style.width = percentagemZero;
    document.getElementById("div1periodo").style.display = "none";
    document.getElementById("div1periodo").style.visibility = "none";


    document.getElementById("div1ferias").style.width = percentagemZero;
    document.getElementById("div1ferias").style.display = "none";
    document.getElementById("div1ferias").style.visibility = "none";

    document.getElementById("div2periodo1").style.width = percentagemZero;
    document.getElementById("div2periodo1").style.display = "none";
    document.getElementById("div2periodo1").style.visibility = "none";

    document.getElementById("div2periodo2").style.width = percentagemZero;
    document.getElementById("div2periodo2").style.display = "none";
    document.getElementById("div2periodo2").style.visibility = "none";

    document.getElementById("div2ferias").style.width = percentagemZero;
    document.getElementById("div2ferias").style.display = "none";
    document.getElementById("div2ferias").style.visibility = "none";
    
    document.getElementById("div3ferias").style.width = percentagemZero;
    document.getElementById("div3ferias").style.display = "none";
    document.getElementById("div3ferias").style.visibility = "none";

    document.getElementById("div3periodo").style.width = percentagemZero;
    document.getElementById("div3periodo").style.display = "none";
    document.getElementById("div3periodo").style.visibility = "none";
}



/*
function confirmaDados_registarAnoLetivo(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade){
    
    mostraDados_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    
    Swal.fire({
        title: 'Pretende gravar?',
        html: '<div id="txtTabela">Este texto vai ser substituido pela tabela</div>',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, gravar!'
    }).then((result) => {
        if (result.isConfirmed) {
            registar_registarCustoInscricao(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
        }
    })
}*/