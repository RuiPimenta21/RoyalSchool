
<?php
    $target_dir = "imagens/perfil/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 0;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    //mudo o nome do ficheiro
    $target_file = $target_dir."ruipimenta".".".$imageFileType ;

    // Verifica se o objeto a fazer upload é uma imagem
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            //Verificacao OK
            $uploadOk = 1;
        } else {
            //Verificacao NOT OK
            echo "<br>"."O ficheiro não é uma imagem.";
            $uploadOk = 0;
        }
    }

    // Verifica o tamanho da imagem
    if ($_FILES["fileToUpload"]["size"] > 102400) {
        echo "<br>"."Sorry, your file is too large. Deve ter menos de 100 Mb.";
        $uploadOk = 0;
    }

    // verifica formato da imagem
    if($imageFileType != "jpg" && $imageFileType != "jpeg" && $imageFileType != "png" ) {
        echo "<br>"."Sorry, only JPG, JPEG, PNG files are allowed.";
        $uploadOk = 0;
    }

    // valida todos as verificacoes anteriores
    if ($uploadOk == 0) {
        echo "<br>"."Sorry, your file was not uploaded.";
    } else {
        echo ("<br>  ".$_FILES["fileToUpload"]["tmp_name"]);
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "<br>"."The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
        } else {
            echo "<br>"."Sorry, there was an error uploading your file.";
        }
    }

    
?>

