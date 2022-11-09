<head>
    <title>Rank</title>
</head>
<head>
    <title>Rank</title>
</head>
<?php
include_once('menu.php');
session_start();
?>
<body id="placarbg"  ></body>
    <div class="gamespg">
        <div class="gamestop">
            <img class="linha4" src="linha.png">
            <h1 class="gamestt">RANK</h1>
            <img class="linha4" src="linha.png">
        </div>
        <div class="ranklist">
            <div class="rank_lugar">
                <h1 id="rank_lugar">1º</h1>
                <h1 id="rank_lugar">2º</h1>
                <h1 id="rank_lugar">3º</h1>
                <h1 id="rank_lugar">4º</h1>
                <h1 id="rank_lugar">5º</h1>
                <h1 id="rank_lugar">6º</h1>
                <h1 id="rank_lugar">7º</h1>
                <h1 id="rank_lugar">8º</h1>
                <h1 id="rank_lugar">9º</h1>
                <h1 id="rank_lugar">10º</h1>
            </div>
            <div class="rank_listar" style="display: block;">
                <?php
                    // include_once('connect.php');
                    include_once('danielconect.php');

                    $placar = "SELECT * FROM usuarios INNER JOIN score ON usuarios.id_user = score.id_user ORDER BY pontos DESC LIMIT 10;                    ";
                    $placar_listar = mysqli_query($conn, $placar);



                    while($row_tabela = mysqli_fetch_assoc($placar_listar)){
                        echo "<div style='display:flex;' class='listacao'; >
                        <div class='nome2_listar'>
                            <h1 id='nome2_listar'>".$row_tabela['nome_user']."</h1>
                        </div>
                        <div class='jogo_listar'>
                            <h1 id='jogo_listar'>".$row_tabela['jogo']."</h1>
                        </div>
                        <div class='pontos_listar'>
                            <h1 id='pontos_listar'>".'pts:'.$row_tabela['pontos']."</h1>
                        </div></div>
                        ";
                    }  
                ?>
            </div>
        </div>
        <div class="pacman">
            <img src="pacman.png">
        </div>
    </div>
</body>
</html>