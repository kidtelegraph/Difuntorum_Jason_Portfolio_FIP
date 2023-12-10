-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2023 at 09:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myportfoliodb`
--

-- --------------------------------------------------------

--
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `project_details` varchar(255) NOT NULL,
  `published_date` date NOT NULL,
  `project_image` varchar(125) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `projects` (`title`, `project_details`, `published_date`, `project_image`) VALUES
('Fresh Fit Laboratory', 'The advertisement employs a contemporary and energetic tone, inviting the audience to explore the diverse world of Fresh Fit Laboratory and discover fashion gems that resonate with their unique sense of style.', '2020-08-24', 'freshfit.jpg'),
('Zima: Drink of the Year', 'In crafting the branding for Zima with a theme aimed at young adults, I meticulously blended vibrant colors, modern fonts, and engaging graphics to embody the energetic spirit of the demographic.', '2023-03-21', 'zimabest.jpg'),
('Plugplay: Earbuds', 'In developing the branding for the premium earbuds "PlugPlay," my focus was on infusing a luxurious ambiance, specifically emphasizing a rich purple hue to convey exclusivity.', '2023-09-22', 'plugplaypromo.jpg'),
('Ceci: Premium Skin Care', 'In conceptualizing the branding for the premium skincare line "Ceci," I curated an elegant theme that resonates with luxury by incorporating the timeless allure of roses and complementing it with subtle nude colors.', '2023-09-28', 'cecipromo.jpg');