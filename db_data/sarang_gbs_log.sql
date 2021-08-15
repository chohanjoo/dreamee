-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: sarang
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gbs_log`
--

DROP TABLE IF EXISTS `gbs_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gbs_log` (
  `gbs_id` int NOT NULL AUTO_INCREMENT,
  `leader_id` int NOT NULL,
  `saint_id` int NOT NULL,
  `village_id` int NOT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  `active_term` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`gbs_id`),
  KEY `fk_gbs_leader_idx` (`leader_id`),
  KEY `fk_gbs_saint_idx` (`saint_id`),
  KEY `fk_gbs_village_idx` (`village_id`),
  CONSTRAINT `fk_gbs_leader` FOREIGN KEY (`leader_id`) REFERENCES `leader` (`leader_id`),
  CONSTRAINT `fk_gbs_saint` FOREIGN KEY (`saint_id`) REFERENCES `saint` (`saint_id`),
  CONSTRAINT `fk_gbs_village` FOREIGN KEY (`village_id`) REFERENCES `village` (`village_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gbs_log`
--

LOCK TABLES `gbs_log` WRITE;
/*!40000 ALTER TABLE `gbs_log` DISABLE KEYS */;
INSERT INTO `gbs_log` VALUES (4,4,13,4,'2020-12-18 23:48:58','2020-12-18 23:48:58','2021-1'),(5,4,14,4,'2020-12-18 23:48:58','2020-12-18 23:48:58','2021-1'),(6,4,15,4,'2020-12-18 23:48:58','2020-12-18 23:48:58','2021-1'),(7,5,13,3,'2020-12-18 23:48:58','2020-12-18 23:48:58','2020-1'),(8,13,20,4,'2021-04-30 22:13:30','2021-04-30 22:13:30','2021-1'),(9,14,26,4,'2021-04-30 22:14:17','2021-04-30 22:14:17','2021-1'),(10,14,27,4,'2021-04-30 22:14:53','2021-04-30 22:14:53','2021-1'),(11,14,28,4,'2021-04-30 22:14:55','2021-04-30 22:14:55','2021-1'),(12,14,29,4,'2021-04-30 22:14:58','2021-04-30 22:14:58','2021-1'),(13,14,30,4,'2021-04-30 22:15:00','2021-04-30 22:15:00','2021-1'),(14,13,21,4,'2021-04-30 22:16:03','2021-04-30 22:16:03','2021-1'),(15,13,22,4,'2021-04-30 22:16:04','2021-04-30 22:16:04','2021-1'),(16,13,23,4,'2021-04-30 22:16:06','2021-04-30 22:16:06','2021-1'),(17,13,24,4,'2021-04-30 22:16:07','2021-04-30 22:16:07','2021-1'),(18,13,25,4,'2021-04-30 22:16:10','2021-04-30 22:16:10','2021-1');
/*!40000 ALTER TABLE `gbs_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-16  1:31:37
