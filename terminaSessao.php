<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Royal School</title>
    <!-- ********************************************  Ico  ********************************************  -->
    <link rel="shortcut icon" href="imagens/logo.ico" type="image/x-icon">
</head>
<body>
    <?php
       // remove all session variables
        session_unset();

        // destroy the session
        session_destroy();

        echo "Todas as variáveis de sessão são removidas e a sessão é destruída.";

        header("Location: ./index.php");
        exit();
    ?>
</body>
</html>