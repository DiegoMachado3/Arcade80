<?php

include_once('connect.php');

$cadastro = '';
$gravar = '';

if(!empty($_POST['cadastro_score'])){
    $cadastro = $_POST['cadastro_score'];
    echo "$cadastro";
}

if(!empty($_POST['cadastrar'])){
    $gravar = $_POST['cadastrar'];
}
    if($gravar == 'Cadastrar'){
        $res_gravar = "INSERT INTO score(pontuacao) VALUES ($cadastro)";
        $resposta_gravar = mysqli_query($conn,$res_gravar);
    }
?>