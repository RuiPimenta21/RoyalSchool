
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
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["fotografia"])) {
        //$arquivo = $_FILES["fotografia"];
        // Lógica de manipulação do arquivo aqui
        //echo ($arquivo["name"])."<br>";// contém o nome do arquivo
        //echo ($arquivo["tmp_name"])."<br>"; //contém o nome temporário do arquivo
        //echo ($arquivo["type"])."<br>"; //contém o tipo MIME do arquivo
        //echo ($arquivo["size"])."<br>"; //contém o tamanho do arquivo
        //echo ($arquivo["error"])."<br>"; //contém o código de erro, se houver algum

        $mensagem = "entrou";
       
    }else{
        $mensagem = "nao entrou";
    }
    
   
 /*

    $target_dir = "imagens/perfil/";
    $target_file = $target_dir . basename($_FILES["txtFotografia"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    
/*
    //mudo o nome do ficheiro($txtId)
    $target_file = $target_dir.$txtId.".".$imageFileType ;

    // Verifica se o objeto a fazer upload é uma imagem
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["txtFotografia"]["tmp_name"]);
        if($check !== false) {
            //Verificacao OK
            $uploadOk = 1;
        } else {
            //Verificacao NOT OK
            $uploadOk = 0;
            $mensagem = "O ficheiro selecionado não é uma imagem!"."<br>"."Somente imagens são permitidos.";
        }
    }

    // Verifica o tamanho da imagem e verificacoes anteriores
    if ($_FILES["txtFotografia"]["size"] > 102400 && $uploadOk == 1) {
        $uploadOk = 0;
        $mensagem = "O ficheiro selecionado é demasido grande!"."<br>"."O tamanho da imagem não pode exceder 100 Mb.";
    }

    // verifica formato da imagem e verificacoes anteriores
    if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $uploadOk == 1) {
        $mensagem = "Somente arquivos jpg, jpeg e png são permitidos!";
        $uploadOk = 0;
    }

    // valida verificacoes anteriores
    if (move_uploaded_file($_FILES["txtFotografia"]["tmp_name"], $target_file) && $uploadOk == 1) {
        
        
        //decoding 
        $txtFotografia = $txtId.".".$imageFileType;
        $txUtilizador = rawurldecode($_SESSION["utilizador_id"]);

        
        //atualiza na base de dados.
        require_once "../Conexao.php";
        try{
            $Conexao = Conexao::getConnection();

            $stringQuery = "exec editaFotografiaPerfil @id = '".$id."', @fotografia = '".$txtFotografia."',  @utilizador = '".$txUtilizador."'";
            $query = $Conexao->query($stringQuery);
            
            $mensagem = "O ficheiro ". htmlspecialchars( basename( $_FILES["txtFotografia"]["name"])). " foi carregado.";
            $uploadOk = 1;
            
        }catch(Exception $e){
            echo $e->getMessage();
            exit;
        }
        $mensagem = "O ficheiro ". htmlspecialchars( basename( $_FILES["txtFotografia"]["name"])). " foi carregado.";
        $uploadOk = 1;
    } 
    else {
        $mensagem = "Ocorreu um erro ao carregar a fotografia."."<br>"."Por favor refresque o ecrã e tente novamente.";
        $uploadOk = 0;
    }
    
*/
    $myArr = array($uploadOk => $mensagem);
    $myJSON = json_encode($myArr);
    echo $myJSON;

?>

