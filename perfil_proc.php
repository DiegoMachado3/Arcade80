<?php
session_start();

// include_once('connect.php');
include_once('danielconect.php');

$foto = '';
$gravar = '';


if(!empty($_FILES['foto_perfil'])){
    $foto = $_FILES['foto_perfil']['name'];
   
}

if(!empty($_POST['cad_foto'])){
    $gravar = $_POST['cad_foto'];
}

$tmp = $_FILES['foto_perfil']['tmp_name'];
$dir1 = 'img/';
$dir2 = $dir1.$foto;
move_uploaded_file($tmp, $dir2);

if($gravar == 'Cadastrar'){
    $res_gravar = "UPDATE `usuarios` SET `foto` = '$foto' WHERE `nome_user` = '{$_SESSION['nome2_user']}' ";
    $resposta_gravar = mysqli_query($conn,$res_gravar);
    $_SESSION['dir'] = $dir1; 
    header("location:perfil.php");
}
?>
