<?php
    session_start();
    if (!isset($_SESSION["utilizador_id"])){
        header("Location: ./index.php");
    }

    if (!empty($_POST['fname'])) {
        $_SESSION['utilizador_nomePerfil'] = $_POST['fname'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
        echo "Olá " . $_SESSION["utilizador_nomePerfil"] . ".<br>";
    ?>

    <a href="index2.php" class="button">Pagina 2</a>
    <br>
    <a href="index4.php" class="button">Encerrar sessão!</a>

</body>
</html>