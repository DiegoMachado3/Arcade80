-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08-Nov-2022 às 21:12
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ds-one`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto`
--

CREATE TABLE `foto` (
  `id_foto` int(11) NOT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `foto`
--

INSERT INTO `foto` (`id_foto`, `foto`) VALUES
(1, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nvusuario`
--

CREATE TABLE `nvusuario` (
  `id_nvusuario` int(11) NOT NULL,
  `email_nvusuario` varchar(25) NOT NULL,
  `senha_nvusuario` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `nvusuario`
--

INSERT INTO `nvusuario` (`id_nvusuario`, `email_nvusuario`, `senha_nvusuario`) VALUES
(1, 'adm@gmail.com', 'senha');

-- --------------------------------------------------------

--
-- Estrutura da tabela `score`
--

CREATE TABLE `score` (
  `id_score` int(11) NOT NULL,
  `pontos` int(100) NOT NULL,
  `jogo` varchar(20) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `score`
--

INSERT INTO `score` (`id_score`, `pontos`, `jogo`, `id_user`) VALUES
(143, 0, '', 9),
(144, 0, '', 9),
(145, 0, '', 9),
(146, 0, '', 9),
(147, 0, '', 9),
(148, 14, '', 9),
(149, 0, '', 9),
(150, 0, '', 9),
(151, 0, '', 9),
(152, 0, '', 9),
(153, 0, '', 9),
(154, 0, '', 9),
(155, 0, '', 9),
(156, 28, '', 9),
(157, 0, '', 9),
(158, 0, '', 9),
(159, 0, '', 9),
(160, 1, '', 9),
(161, 0, '', 9),
(162, 1, '', 9),
(163, 0, '', 9),
(164, 0, '', 9),
(165, 0, '', 9),
(166, 0, '', 9),
(167, 0, '', 9),
(168, 0, '', 9),
(169, 0, '', 9),
(170, 0, '', 9),
(171, 0, '', 9),
(172, 0, '', 9),
(173, 0, '', 9),
(174, 0, '', 9),
(175, 0, '', 9),
(176, 0, '', 9),
(177, 0, '', 9),
(178, 0, '', 9),
(179, 0, '', 9),
(180, 0, '', 9),
(181, 53, '', 9),
(182, 0, '', 9),
(183, 0, '', 9),
(184, 0, '', 9),
(185, 0, '', 9),
(186, 0, '', 9),
(187, 0, '', 9),
(188, 0, '', 9),
(189, 22, '', 9),
(190, 0, '', 9),
(191, 0, '', 9),
(192, 0, '', 9),
(193, 0, '', 9),
(194, 0, '', 9),
(195, 0, '', 9),
(196, 0, '', 9),
(197, 0, '', 9),
(198, 0, '', 9),
(199, 0, '', 9),
(200, 0, '', 9),
(201, 0, '', 9),
(202, 0, '', 9),
(203, 0, '', 9),
(204, 0, '', 9),
(205, 0, '', 9),
(206, 0, '', 9),
(207, 0, '', 9),
(208, 0, '', 9),
(209, 0, '', 9),
(210, 0, '', 9),
(211, 0, '', 9),
(212, 0, '', 9),
(213, 0, '', 9),
(214, 0, '', 9),
(215, 0, '', 9),
(216, 0, '', 9),
(217, 0, '', 9),
(218, 0, '', 9),
(219, 0, '', 9),
(220, 0, '', 9),
(221, 0, '', 9),
(222, 0, '', 9),
(223, 0, '', 9),
(224, 0, '', 9),
(225, 0, '', 9),
(226, 0, '', 9),
(227, 0, '', 9),
(228, 0, '', 9),
(229, 0, '', 9),
(230, 0, '', 9),
(231, 0, '', 9),
(232, 0, '', 9),
(233, 0, '', 9),
(234, 0, '', 9),
(235, 0, '', 9),
(236, 0, '', 9),
(237, 0, '', 9),
(238, 0, '', 9),
(239, 0, '', 9),
(240, 0, '', 9),
(241, 0, '', 9),
(242, 0, '', 9),
(243, 0, '', 9),
(244, 0, '', 9),
(245, 0, '', 9),
(246, 0, '', 9),
(247, 0, '', 9),
(248, 0, '', 9),
(249, 1685, '', 9),
(250, 0, '', 9),
(251, 1, '', 9),
(252, 0, '', 11),
(253, 0, '', 11),
(254, 0, '', 11),
(255, 0, '', 11),
(256, 0, '', 11),
(257, 0, '', 11),
(258, 16, '', 11),
(259, 0, '', 11),
(260, 0, '', 11),
(261, 0, '', 11),
(262, 0, '', 11),
(263, 0, '', 11),
(264, 0, '', 11),
(265, 0, '', 11),
(266, 0, '', 11),
(267, 0, '', 11),
(268, 0, '', 11),
(269, 0, '', 11),
(270, 0, '', 11),
(271, 0, '', 11),
(272, 0, '', 11),
(273, 0, '', 11),
(274, 0, '', 11),
(275, 0, '', 11),
(276, 0, '', 11),
(277, 0, '', 11),
(278, 0, '', 11),
(279, 0, '', 11),
(280, 0, '', 11),
(281, 0, '', 11),
(282, 0, '', 11),
(283, 0, '', 11),
(284, 0, '', 11),
(285, 0, '', 11),
(286, 0, '', 11),
(287, 0, '', 11),
(288, 0, '', 11),
(289, 221, '', 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `nome_user` varchar(30) NOT NULL,
  `email_user` varchar(30) NOT NULL,
  `senha_user` varchar(20) NOT NULL,
  `foto` varchar(100) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `nome_user`, `email_user`, `senha_user`, `foto`) VALUES
(1, 'dan', 'dan@gmail.com', '123', 'Captura_de_tela_2022-10-29_105018-removebg-preview.png'),
(3, 'del', 'del@gmail.com', '123', ''),
(4, 'dan', 'dan@gmail.com', '123', 'Captura_de_tela_2022-10-29_105018-removebg-preview.png'),
(5, 'das', 'das@gmail.com', '123', 'ab3e1aef99a1da8102e0d963d017489d.jpg'),
(6, 'limao', 'lim@gmail.com', '123', 'D00CB.gif'),
(7, 'sir', 'sir@gmail.com', '123', 'cfa2f2e7130d5026a972c9af10631908.jpg'),
(8, 'don', 'don@gmail.com', '123', 'como-ler-partitura.png'),
(9, 'denis', 'den@gmail.com', '123', 'matt4mus-alternate-realities.jpg'),
(10, 'denis', 'den@gmail.com', '123', 'matt4mus-alternate-realities.jpg'),
(11, 'dac', 'dac@gmail.com', '321', 'description-image.avif');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `foto`
--
ALTER TABLE `foto`
  ADD PRIMARY KEY (`id_foto`);

--
-- Índices para tabela `nvusuario`
--
ALTER TABLE `nvusuario`
  ADD PRIMARY KEY (`id_nvusuario`);

--
-- Índices para tabela `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id_score`),
  ADD KEY `usuario_score` (`id_user`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `foto`
--
ALTER TABLE `foto`
  MODIFY `id_foto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `nvusuario`
--
ALTER TABLE `nvusuario`
  MODIFY `id_nvusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `score`
--
ALTER TABLE `score`
  MODIFY `id_score` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=290;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `usuario_score` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
