<?php

    session_start();

    $uploadOk = 0;
    $mensagem = "";

    //decoding 
    $txtId = rawurldecode($_REQUEST["id"]);


    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["fotografia"])) {
        $ficheiro = $_FILES["fotografia"];
    
        // Lógica de manipulação do arquivo aqui
        // $ficheiro["name"] contém o nome do arquivo
        // $ficheiro["tmp_name"] contém o nome temporário do arquivo
        // $ficheiro["type"] contém o tipo MIME do arquivo
        // $ficheiro["size"] contém o tamanho do arquivo
        // $ficheiro["error"] contém o código de erro, se houver algum

        
        // Verificar se houve algum erro no envio do arquivo
        if ($ficheiro["error"] > 0) {
            
            $mensagem = "Erro ao carregar o ficheiro: " . $ficheiro["error"];
        } 
        else {
            
            // Nome original do arquivo
            $ficheiroNome = $ficheiro["name"];
    
            // Formato do arquivo
            $ficheiroformato = strtolower(pathinfo($ficheiroNome,PATHINFO_EXTENSION));

            //Tamanho do arquivo
            $ficheiroTamanho = $ficheiro["size"];

            // Caminho temporário do arquivo no servidor
            $ficheiroCaminhoTemporario = $ficheiro["tmp_name"];

            //****************************** Validações ****************************** 
            
            // Verifica se o objeto a fazer upload é uma imagem
            $check = getimagesize($ficheiroCaminhoTemporario);
            if($check !== false) {
                //Verificacao ok
                $uploadOk = 1;
            } else {
                //Verificacao não ok
                $uploadOk = 0;
                $mensagem = "Somente imagens são permitidos.";
            }
           
            // Verifica o tamanho da imagem e verificacoes anteriores
            if ( $ficheiroTamanho > 102401 && $uploadOk == 1) {
                $uploadOk = 0;
                $mensagem = "O tamanho da imagem nao pode exceder 100 Mb.";
            }
            
            // verifica formato da imagem e verificacoes anteriores
            if(($ficheiroformato != "jpg" && $ficheiroformato != "jpeg" && $ficheiroformato != "png") && $uploadOk == 1) {
                $uploadOk = 0;
                $mensagem = "Somente arquivos jpg, jpeg e png são permitidos!";
            }
        }
    }
    
    $myArr = array ($uploadOk, $mensagem);
    $myJSON = json_encode($myArr);
    echo ($myJSON);
?>



