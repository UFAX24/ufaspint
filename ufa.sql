-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2021 at 06:09 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gclubson_spin-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `ufa_id` varchar(255) DEFAULT NULL,
  `spin_bonus` int(11) DEFAULT NULL,
  `spin_date` date DEFAULT NULL,
  `spin_time` time DEFAULT NULL,
  `get_bonus_date` date DEFAULT NULL,
  `get_bonus_time` time DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `token`, `ufa_id`, `spin_bonus`, `spin_date`, `spin_time`, `get_bonus_date`, `get_bonus_time`, `status`) VALUES
(12, 'K2AIZHZJEL', 'test01', 50, '2021-07-09', '20:18:59', '2021-06-28', '22:17:19', 1),
(13, '93PPAH16UJ', 'testaw', 50, '2021-07-09', '20:42:05', '2021-06-28', '22:52:40', 1),
(14, 'Z8VIT05K9U', 'dw1234', 50, '2021-07-10', '16:14:31', '2021-06-28', '22:52:44', 1),
(15, 'L9DBFUKVOD', 'gjssaf4', 300, '2021-07-13', '22:36:33', '2021-06-28', '22:52:47', 1),
(16, 'MKDHG2ON61', 'esan122546', 50, '2021-07-13', '22:37:04', '2021-06-28', '22:52:49', 1),
(17, 'UU9ML45EYZ', 'em1234', 50, '2021-07-09', '21:03:28', '2021-07-09', '21:03:39', 1),
(18, '0TY00NZKS9', 'test1588', 50, '2021-07-13', '23:50:45', '2021-07-13', '23:53:16', 1),
(19, 'KAOXXSTFF8', 'em02451134', 1000, '2021-07-13', '23:53:03', '2021-07-13', '23:53:19', 1),
(20, 'Z9WFTKLCO1', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(21, 'ELV9PYVAW6', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(22, 'FI567PN75G', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(23, 'LT99UCH6YD', 'ea1205461', 50, '2021-07-13', '23:01:22', '2021-07-13', '23:02:04', 1),
(24, '9TU17288WE', 'ea1205156', 50, '2021-07-13', '23:01:53', '2021-07-13', '23:02:11', 1),
(25, 'XCAE5F7W7L', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(26, '795PCM31BS', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(27, 'YUFY1D7W3J', 'es12354', 500, '2021-07-14', '11:03:51', '2021-07-14', '11:07:09', 1),
(28, 'EDD6XQW5UK', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(29, 'WCANBZCGZO', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(30, 'P07RNGOAX3', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(31, '52DVM0UJ4H', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(32, 'UBIXCXCU2T', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(33, '29YKX1X2F8', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(34, '8WNS0CKC9Z', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(35, 'KHQDBSD01J', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(36, '8INV5QA36B', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(37, 'D6ADJOQNAJ', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(38, 'A3L9I0W8MO', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(39, '6GB3E6DC3Y', NULL, NULL, NULL, NULL, NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
