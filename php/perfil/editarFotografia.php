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
           
            // Caminho temporário do arquivo no servidor
            $ficheiroCaminhoTemporario = $ficheiro["tmp_name"];
    
            // Diretório de destino onde o arquivo será movido
            $diretorioDestino = "C:/xampp/htdocs/RoyalSchool/RoyalSchool/imagens/perfil/";
    
            // Nome final do arquivo (opcional)
            // Aqui você pode renomear o arquivo se necessário
            $destficheiroNome = $txtId.".png"; 

            // Constrói o caminho completo do arquivo de destino
            $diretorioDestinoFicheiro = $diretorioDestino . $destficheiroNome;
    
            //****************************** Validações ****************************** 
            
            // Move o arquivo temporário para o diretório de destino
            if (move_uploaded_file($ficheiroCaminhoTemporario, $diretorioDestinoFicheiro)) {

                //atualiza na base de dados.
                require_once "../Conexao.php";
                try{
                    $Conexao = Conexao::getConnection();

                    $stringQuery = "exec editaFotografiaPerfil @id = '".$txtId."', @fotografia = '".$destficheiroNome."',  @utilizador = '".$txUtilizador."'";
                    $query = $Conexao->query($stringQuery);
                    $dados = $query->fetchAll();

                    $linha=0;
                    foreach($dados as $dado) {
                        $dado[$linha];
                        $linha++;
                    }
                    if ($dado[0] == "1"){
                        //console.log("Arquivo guardado com sucesso na base de dados para: ". $diretorioDestinoFicheiro;)
                        $mensagem = ""; 
                        $uploadOk = 1;
                    }
                    else{
                        $mensagem = "Erro ao gravar imagem!"; 
                        $uploadOk = 0;
                    }
                }catch(Exception $e){
                    echo $e->getMessage();
                    exit;
                }
            } 
            else {
                $mensagem =  "Erro ao mover o arquivo para a pasta.";
                $uploadOk = 0;
            }
        }
    }
    

    $myArr = array ($uploadOk, $mensagem);
    $myJSON = json_encode($myArr);

    echo ($myJSON);
?>
