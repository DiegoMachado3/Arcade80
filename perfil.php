<head>
    <title>Perfil</title>
</head>
<?php
include_once('menu.php');
?>
<body class="body_perfil" >

<form action="perfil_proc.php" method="POST" enctype="multipart/form-data">

<h1 class="titulo">PERFIL ARCADE 80</h1>

<div class="text_rank">
    <label for="text"><b>RANK</b></label><br>
</div>

<h1><a href="inicio.php" class="text_exit">SAIR</a></h1>

<h1 class="text_player">JOGADOR</h1>
<h1 class="text_email">EMAIL</h1>
<h1 class="text_scores">MAIOR PONTUACAO</h1>
<h1 class="text_perfil">FOTO DE PERFIL</h1>


<div class='botoes_perfil'>
<label for="ft_pf" class="ft_pfReal" >Escolher Foto</label>
<input type="file" name="foto_perfil" id="ft_pf" >
<input class='bots' type="submit" name="cad_foto" value="Cadastrar"><br/>
    
</div>

    <?php
        // include("conect.php");
        include("danielconect.php");
        
        session_start();
        echo "<div class='email_listar'>{$_SESSION['email_login']}</div>";
        echo "<div class='nome_listar'>{$_SESSION['nome2_user']}</div> ";

        $foto_listar = "SELECT `foto` FROM `usuarios` WHERE `nome_user` = '{$_SESSION['nome2_user']}'";
        $fot_listar = mysqli_query($conn, $foto_listar);
        
        while($row_tabela = mysqli_fetch_array($fot_listar)){
            //  echo "<img src=''downloads/'.".$_SESSION['nome_login']."'/'".$_SESSION['foto']."'>";
            // move_uploaded_file($_SESSION['foto'], "img/");
            ?>
                <img class="img_perfil" src="<?php echo $_SESSION['dir'].$row_tabela['foto'];?>">
            <?php
        }

        $gravMP = mysqli_query($conn,"SELECT MAX(pontos) FROM `score` WHERE id_user = '{$_SESSION['idUser']}'");
        $gravP = mysqli_fetch_array($gravMP);
        echo "<div class='maxPontos_listar'> {$gravP['MAX(pontos)']}</div>";

    ?>
     

</form>
    
</body>
</html>