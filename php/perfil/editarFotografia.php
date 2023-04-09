
<?php
    session_start();

    define('DB_HOST'        , "FIXO\SQLEXPRESS");
    define('DB_USER'        , "admin");
    define('DB_PASSWORD'    , "admin");
    define('DB_NAME'        , "RoyalSchoolDB");
    define('DB_DRIVER'      , "sqlsrv");

    //decoding 
    $txtId = rawurldecode($_REQUEST["id"]);

    $target_dir = "imagens/perfil/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 0;
    $mensagem = "";
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    //mudo o nome do ficheiro($txtId)
    $target_file = $target_dir.$txtId.".".$imageFileType ;

    // Verifica se o objeto a fazer upload é uma imagem
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
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
    if ($_FILES["fileToUpload"]["size"] > 102400 && $uploadOk == 1) {
        $uploadOk = 0;
        $mensagem = "O ficheiro selecionado é demasido grande!"."<br>"."O tamanho da imagem não pode exceder 100 Mb.";
    }

    // verifica formato da imagem e verificacoes anteriores
    if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" && $uploadOk == 1) {
        $mensagem = "Somente arquivos jpg, jpeg e png são permitidos!";
        $uploadOk = 0;
    }

    // valida verificacoes anteriores
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file) && $uploadOk == 1) {
        $mensagem = "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
        $uploadOk = 1;
    } 
    else {
        $mensagem = "Ocorreu um erro ao carregar a fotografia."."<br>"."Por favor refresque o ecrã e tente novamente.";
        $uploadOk = 0;
    }
    

    


    $myArr = $dado;
    $myJSON = json_encode($myArr);


?>

