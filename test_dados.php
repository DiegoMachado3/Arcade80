<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test_dados</title>
</head>
<body>
    <?php
    include_once('connect.php');
    session_start();

    $ped = "SELECT * FROM `usuarios` WHERE email_user = '{$_SESSION['email_login']}'";
    $pedidos_listar = mysqli_query($conn, $ped);

    while($row_tabela = mysqli_fetch_assoc($pedidos_listar)){
        echo"
        <h1 class='h3_comidas'>".$row_tabela['id_user']."";
            
    }

    
    ?>
</body>
</html>