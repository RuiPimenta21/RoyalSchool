<?php

    session_start();

    define('DB_HOST'        , "FIXO\SQLEXPRESS");
    define('DB_USER'        , "admin");
    define('DB_PASSWORD'    , "admin");
    define('DB_NAME'        , "RoyalSchoolDB");
    define('DB_DRIVER'      , "sqlsrv");

    $uploadOk = 0;
    $mensagem = "";

    
    //decoding 
    $txtId = rawurldecode($_REQUEST["id"]);
    $txUtilizador = rawurldecode($_SESSION["utilizador_id"]);

    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["fotografia"])) {
        $ficheiro = $_FILES["fotografia"];
    
        // Lógica de manipulação do arquivo aqui
        // $file["name"] contém o nome do arquivo
        // $file["tmp_name"] contém o nome temporário do arquivo
        // $file["type"] contém o tipo MIME do arquivo
        // $file["size"] contém o tamanho do arquivo
        // $file["error"] contém o código de erro, se houver algum


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
    
            // Diretório de destino onde o arquivo será movido
            $diretorioDestino = "C:/xampp/htdocs/RoyalSchool/RoyalSchool/imagens/perfil/";
    
            // Nome final do arquivo (opcional)
            // Aqui você pode renomear o arquivo se necessário
            //$destficheiroNome = $txtId.".".$ficheiroformato;
            $destficheiroNome = $txtId.".png"; 

            // Constrói o caminho completo do arquivo de destino
            $diretorioDestinoFicheiro = $diretorioDestino . $destficheiroNome;
    



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
            if ( $ficheiroTamanho > 102400 && $uploadOk == 1) {
                $uploadOk = 0;
                $mensagem = "O tamanho da imagem nao pode exceder 100 Mb.";
            }
            
            // verifica formato da imagem e verificacoes anteriores
            if(($ficheiroformato != "jpg" && $ficheiroformato != "jpeg" && $ficheiroformato != "png") && $uploadOk == 1) {
                $uploadOk = 0;
                $mensagem = "Somente arquivos jpg, jpeg e png são permitidos!";
            }
            
            // Move o arquivo temporário para o diretório de destino
            if (move_uploaded_file($ficheiroCaminhoTemporario, $diretorioDestinoFicheiro)  && $uploadOk == 1) {

                //atualiza na base de dados.
                require_once "../Conexao.php";
                try{
                    $Conexao = Conexao::getConnection();

                    $stringQuery = "exec editaFotografiaPerfil @id = '".$txtId."', @fotografia = '".$destficheiroNome."',  @utilizador = '".$txUtilizador."'";
                    $query = $Conexao->query($stringQuery);
                    
                    $mensagem = "Arquivo guardado com sucesso na base de dados para: ". $diretorioDestinoFicheiro;
                    $uploadOk = 1;
                    
                }catch(Exception $e){
                    echo $e->getMessage();
                    exit;
                }
            } else {
                $mensagem =  "Erro ao mover o arquivo para a pasta.";
                $uploadOk = 0;
            }
        }
    }

    $myArr = array ($uploadOk, $mensagem);
    $myJSON = json_encode($myArr);

    echo ($myJSON);
?>
