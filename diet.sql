-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 12:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diet`
--

-- --------------------------------------------------------

--
-- Table structure for table `diet_plans`
--

CREATE TABLE `diet_plans` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `diet_plan` text DEFAULT NULL,
  `added_on` timestamp NULL DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_on` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `diet_plans`
--

INSERT INTO `diet_plans` (`id`, `code`, `diet_plan`, `added_on`, `added_by`, `updated_on`, `updated_by`, `deleted_on`, `deleted_by`) VALUES
(1, 'MODERATE', '{\r\n    \"breakfast\": {\r\n        \"time\": \"8.00 - 8.30 AM\",\r\n        \"diet\": \"2 besan cheela + 1/2 cup low fat curd\"\r\n    },\r\n    \"midmeal\": {\r\n        \"time\": \"11.00 - 11.30 AM\",\r\n        \"diet\": \"1 Apple\"\r\n    },\r\n    \"lunch\": {\r\n        \"time\": \"2.00 - 2.30 PM\",\r\n        \"diet\": \"1 cup masoor dal + 1 chapatti + 1/2 up low fat curd + salad\"\r\n    },\r\n    \"evening\": {\r\n        \"time\": \"4.00 - 4.30 PM\",\r\n        \"diet\": \"1 cup tomato soup\"\r\n    },\r\n    \"dinner\": {\r\n        \"time\": \"8.00 - 8.30 PM\",\r\n        \"diet\": \"1 cup carrot peas vegetable +1 chapatti + salad\"\r\n    }\r\n}', NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'OVERWEIGHT', '{\r\n    \"breakfast\": {\r\n        \"time\": \"8.00 - 8.30 AM\",\r\n        \"diet\": \"3 egg whites + 1 toasted brown bread + 1/2 cup low fat milk (no sugar)\"\r\n    },\r\n    \"midmeal\": {\r\n        \"time\": \"11.00 - 11.30 AM\",\r\n        \"diet\": \"1 Cup Papaya\"\r\n    },\r\n    \"lunch\": {\r\n        \"time\": \"2.00 - 2.30 PM\",\r\n        \"diet\": \"1 cup arhar dal + 1 chapatti + 1/2 cup low fat curd + salad\"\r\n    },\r\n    \"evening\": {\r\n        \"time\": \"4.00 - 4.30 PM\",\r\n        \"diet\": \"1 cup vegetable soup\"\r\n    },\r\n    \"dinner\": {\r\n        \"time\": \"8.00 - 8.30 PM\",\r\n        \"diet\": \"1 cup pumpkin + 1 chapatti + salad\"\r\n    }\r\n}', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'UNDERWEIGHT', '{\r\n    \"breakfast\": {\r\n        \"time\": \"8.00 - 8.30 AM\",\r\n        \"diet\": \"2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts\"\r\n    },\r\n    \"midmeal\": {\r\n        \"time\": \"11.00 - 11.30 AM\",\r\n        \"diet\": \"1 cup banana shake\"\r\n    },\r\n    \"lunch\": {\r\n        \"time\": \"2.00 - 2.30 PM\",\r\n        \"diet\": \"1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad\"\r\n    },\r\n    \"evening\": {\r\n        \"time\": \"4.00 - 4.30 PM\",\r\n        \"diet\": \"1 cup strawberry smoothie + 1 cup vegetable poha\"\r\n    },\r\n    \"dinner\": {\r\n        \"time\": \"8.00 - 8.30 PM\",\r\n        \"diet\": \"1.5 cup chicken curry + 3 chapatti + salad\"\r\n    }\r\n}', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `mobile` text DEFAULT NULL,
  `added_on` timestamp NULL DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_on` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `mobile`, `added_on`, `added_by`, `updated_on`, `updated_by`, `deleted_on`, `deleted_by`) VALUES
(1, NULL, 'user@user.com', 'Test@123', NULL, '2024-05-05 09:29:11', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `diet_plans`
--
ALTER TABLE `diet_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_772886e2f1f47b9ceb04a06e20` (`email`,`username`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `diet_plans`
--
ALTER TABLE `diet_plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
