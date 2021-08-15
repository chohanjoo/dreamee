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
-- Table structure for table `saint`
--

DROP TABLE IF EXISTS `saint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saint` (
  `saint_id` int NOT NULL AUTO_INCREMENT,
  `dept_id` int NOT NULL,
  `village_id` int NOT NULL,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pre_church` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `major` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `baptism` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT 'N',
  `disciple_training` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT 'N',
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`saint_id`),
  KEY `fk_saint_dept_idx` (`dept_id`),
  CONSTRAINT `fk_saint_dept` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saint`
--

LOCK TABLES `saint` WRITE;
/*!40000 ALTER TABLE `saint` DISABLE KEYS */;
INSERT INTO `saint` VALUES (1,1,4,'TEST',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0','2020-12-12 22:13:55','2020-12-12 22:13:55'),(13,14,4,'가그린','N교회',22,'W','컴퓨터공학','서울','1999-01-01','N','N','2020-12-18 23:34:34','2020-12-18 23:34:34'),(14,14,4,'가그린1','N교회',22,'M','컴퓨터공학','서울','1999-02-01','N','N','2020-12-18 23:35:58','2020-12-18 23:35:58'),(15,14,4,'가그린2','N교회',23,'W','컴퓨터공학','서울','1999-01-03','Y','N','2020-12-18 23:35:58','2020-12-18 23:35:58'),(16,14,3,'가그린3','N교회',24,'M','컴퓨터공학','서울','1999-01-11','N','N','2020-12-18 23:35:58','2020-12-18 23:35:58'),(17,14,3,'가그린4','N교회',25,'M','컴퓨터공학','서울','1999-11-01','N','Y','2020-12-18 23:35:58','2020-12-18 23:35:58'),(18,14,3,'가그린5','-',26,'W','컴퓨터공학','서울','1999-01-21','Y','Y','2020-12-18 23:35:58','2020-12-18 23:35:58'),(19,14,3,'가그린6','-',27,'M','컴퓨터공학','서울','1999-10-31','Y','Y','2020-12-18 23:35:58','2020-12-18 23:35:58'),(20,14,4,'박효신1',NULL,20,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-10-11','Y','Y','2021-03-16 22:04:38','2021-05-19 02:14:16'),(21,14,4,'박효신2',NULL,22,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-12-01','N','N','2021-03-16 22:05:06','2021-03-16 22:05:06'),(22,14,4,'박효신3',NULL,22,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-12-01','N','Y','2021-03-16 22:05:19','2021-03-16 22:05:19'),(23,14,4,'박효신4',NULL,22,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-12-01','Y','Y','2021-03-16 22:05:28','2021-03-16 22:05:28'),(24,14,4,'박효신5',NULL,22,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-02-01','Y','Y','2021-03-16 22:05:38','2021-03-16 22:05:38'),(25,14,4,'박효신6',NULL,32,'M','노래전공','서울특별시 사랑시 고백구 행복동','2000-02-01','Y','Y','2021-03-16 22:05:46','2021-03-16 22:05:46'),(26,14,4,'아이유1',NULL,32,'W','마우스전공','서울특별시 사랑시 고백구 행복동','2002-02-01','Y','Y','2021-03-16 22:07:05','2021-03-16 22:07:05'),(27,14,4,'아이유2',NULL,32,'W','마우스전공','서울특별시 사랑시 고백구 행복동','2002-12-01','Y','Y','2021-03-16 22:07:12','2021-03-16 22:07:12'),(28,14,4,'아이유3',NULL,32,'W','마우스전공','서울특별시 사랑시 고백구 행복동','2002-12-01','N','N','2021-03-16 22:07:25','2021-03-16 22:07:25'),(29,14,4,'아이유4',NULL,32,'W','마우스전공','서울특별시 사랑시 고백구 행복동','2002-12-01','N','N','2021-03-16 22:07:34','2021-03-16 22:07:34'),(30,14,4,'아이유5',NULL,32,'W','맥북학과','서울특별시 사랑시 고백구 행복동','2002-12-01','N','N','2021-03-16 22:07:57','2021-03-16 22:07:57'),(31,14,4,'김센카',NULL,32,'M','북학과','서울특별시 사랑시 고백구 행복동','2002-12-01','Y','N','2021-03-16 22:11:41','2021-03-16 22:11:41'),(33,14,4,'신디','여의도순복음교회',20,'W','보컬전공','서울시 신디구','2004-06-18','N','N','2021-05-16 00:08:36','2021-05-16 00:08:36');
/*!40000 ALTER TABLE `saint` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-16  1:31:36
