<?php
session_start();

// include_once('connect.php');
include_once('danielconect.php');

$nome = '';
$email = '';
$senha = '';
$confirmsenha = '';
$gravar = '';
// $nvsenha = 'senha';
// $nvemail = 'adm@gmail.com';
// $adm = '1';

if(!empty($_POST['nome_cadastro'])){
    $nome = $_POST['nome_cadastro'];
    // echo "$nome";
}

if(!empty($_POST['email_cadastro'])){
    $email = $_POST['email_cadastro'];
}

if(!empty($_POST['senha_cadastro'])){
    $senha = $_POST['senha_cadastro'];
}

if(!empty($_POST['Confirmsenha_cadastro'])){
    $confirmsenha = $_POST['Confirmsenha_cadastro'];
}

if(!empty($_POST['registrar'])){
    $gravar = $_POST['registrar'];
}

// if ($senha = $confirmsenha){
    if($gravar == 'Registrar'){
        $res_gravar = "INSERT INTO usuarios(nome_user,email_user,senha_user) VALUES ('$nome','$email','$senha')";
        $resposta_gravar = mysqli_query($conn,$res_gravar);
        // if($senha == $nvsenha && $email == $nvemail ){
        //     // $res_gravar2 = "INSERT INTO usuarios(nome_user,email_user,senha_user,nv_user) VALUES ('$nome','$email','$senha','$adm')";
        //     // $resposta_gravar2 = mysqli_query($conn,$res_gravar2);
        //     // $_SESSION['nv_email'] = $nvemail;
        //     // $_SESSION['nv_senha'] = $nvsenha;
        //     echo "dados gravados";
        // }
        $_SESSION['nome_login'] = $nome;
        header("Location:login.php");
        //echo "dados gravados";
    
    }
// }




?>