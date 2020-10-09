-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_supertravelsplus3
-- ------------------------------------------------------
-- Server version	5.7.31-log

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
-- Table structure for table `places`
--
CREATE DATABASE db_supertrasplus;
USE db_supertrasplus;

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `img1` varchar(45) DEFAULT NULL,
  `img2` varchar(45) DEFAULT NULL,
  `img3` varchar(45) DEFAULT NULL,
  `subname` varchar(45) NOT NULL,
  `descripcion2` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (1,'Estambul','Considered one of the most beautiful cities in Europe, Istanbul is the largest city in Turkey, constituting in turn one of the three transcontinental cities that are located between Europe and Asia.','estambul1','estambul2','estambul3','A place to discover','Considered one of the most beautiful cities in Europe, Istanbul is the largest city in Turkey, constituting in turn one of the three transcontinental cities that are located between Europe and Asia.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'),(10,'New York','Considered the most important city in the world economically and culturally, New York is located in the homonymous state of the United States, although it is not its capital, despite having the largest population not only in that state but in the entire country.','nyork1','nyork2','nyork3','The city that never sleeps','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'),(22,'Tokio','According to the UN, of the 7 billion human beings that we are currently on the planet, 450 million people live in just 28 cities: 16 in Asia (the majority in China, India, Indonesia and Pakistan), 4 in Latin America (whose main cities are Sao Paulo and Buenos Aires)','tokio1','tokio2','tokio3','Between tradition and advance','According to the UN, of the 7 billion human beings that we are currently on the planet, 450 million people live in just 28 cities: 16 in Asia (the majority in China, India, Indonesia and Pakistan), 4 in Latin America (whose main cities are Sao Paulo and Buenos Aires) According to the UN, of the 7 billion human beings that we are currently on the planet.'),(23,'Estocolmo','asdasdsadasdasdsadasdasdasdasdasdasdasdasdas',NULL,NULL,NULL,'Lorem Ipsun Nupsi','sdasdasdasdasdasdasdasdasddasdasdasdasdasdasdasdsdasdsfasdfsdfasF sdfa sdfasdf aea sdasdfadsf asdfsd asfdvdsdfsdfdscf.asdasdasdasdasdasdasdasdasdasd');
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-09 19:53:31
