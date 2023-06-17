function validaFormulario_registarAnoLetivo() {

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
        confirmaDados_registarAnoLetivo(descritivo, valorInscricao, valorLivro, valorMensalidade, aplicarIvaTodos, ivaInscricao, ivaLivro, ivaMensalidade);
    }  
}

function validaIntervaloDatas_registarAnoLetivo(campo){
   
    if(dataInicio3Periodo > dataFim3Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 3º Período superior a Data de Fim 3º Período");
    }
    else if(dataInicio3Periodo < dataFim2Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 3º Período inferior a Data de Fim 2º Período");
    }
    else if(dataInicio2Periodo > dataFim2Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 2º Período superior a Data de Fim 2º Período");
    }
    else if(dataInicio2Periodo < dataFim1Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 2º Período inferior a Data de Fim 1º Período");
    }
    else if(dataInicio1Periodo > dataFim1Periodo){
        dataInvalida_registarAnoLetivo("Data de Início 1º Período superior a Data de Fim 1º Período");
    }

    else if (dataInicio3PausaLetiva > dataFim3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início da Páscoa superior a Data de Fim da Páscoa");
    }
    else if(dataInicio3PausaLetiva < dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início da Páscoa inferior a Data de Fim do Carnaval");
    }
    else if(dataInicio2PausaLetiva > dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Carnaval superior a Data de Fim do Carnaval");
    }
    else if(dataInicio2PausaLetiva < dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Carnaval inferior a Data de Fim do Natal");
    }
    else if(dataInicio1PausaLetiva > dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início do Natal superior a Data de Fim do Natal");
    }

    else if(dataInicio3Periodo > dataFim3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 3º Periodo superior a Data de Fim da Páscoa");
    }
    else if(dataFim2Periodo > dataInicio3PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim 2º Periodo superior a Data de Início da Páscoa");
    }
    else if(dataFim2Periodo < dataFim2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim 2º Periodo inferior a Data de Fim do Carnaval");
    }
    else if(dataInicio2Periodo > dataInicio2PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 2º Periodo superior a Data de Início do Carnaval");
    }
    else if(dataInicio2Periodo < dataFim1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Início 2º Periodo inferior a Data de Fim do Natal");
    }
    else if(dataFim1Periodo > dataInicio1PausaLetiva){
        dataInvalida_registarAnoLetivo("Data de Fim do Natal superior a Data de Início do Natal");
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