-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: solarwaysdb
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerID` int NOT NULL AUTO_INCREMENT,
  `CustomerFName` varchar(255) NOT NULL,
  `CustomerLName` varchar(255) NOT NULL,
  `CustomerEmail` varchar(255) NOT NULL,
  `CustomerContactNo` varchar(255) NOT NULL,
  `CustomerAddress` varchar(255) NOT NULL,
  PRIMARY KEY (`CustomerID`),
  UNIQUE KEY `CustomerID_UNIQUE` (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Rose','Peterson','rose111@gmail,com','068 242 4552','162 Barry Hertzog Street Johannesburg 2193'),(2,'Angela','Ndlovu','Angel@gmail,com','072 235 7632','34 Jorissen Street Johannesburg 2001'),(3,'Ben','Benzino','ben10@gmail,com','081 243 6542','62 Rissik Street Johannesburg 2103'),(4,'Sarah','Connor','sarah.connor@example.com','081 456 7890','15 Elm Street, Pretoria 0002'),(5,'David','King','david.king@example.com','082 345 6789','21 Park Avenue, Johannesburg 2000'),(6,'Lisa','Brown','lisa.brown@example.com','073 654 3210','33 Oak Lane, Durban 4000'),(7,'Chris','Green','chris.green@example.com','072 987 6543','45 Palm Road, Cape Town 8001'),(8,'Emma','Jones','emma.jones@example.com','071 123 9876','50 Maple Street, Bloemfontein 9301'),(9,'Tom','Black','tom.black@example.com','083 321 4567','60 Willow Drive, Port Elizabeth 6001'),(10,'Anna','White','anna.white@example.com','084 654 7890','22 River Road, East London 5201'),(11,'Jason','Taylor','jason.taylor@example.com','085 456 3210','14 Cedar Avenue, Johannesburg 2000'),(12,'Sophie','Morgan','sophie.morgan@example.com','086 789 1234','99 Birch Street, Polokwane 0700'),(13,'Mark','Scott','mark.scott@example.com','082 567 4321','45 Pine Street, Kimberley 8300'),(14,'Alice','Davis','alice.davis@example.com','083 654 4321','65 Fir Lane, Nelspruit 1200'),(15,'Ethan','Cooper','ethan.cooper@example.com','084 321 9870','72 Aspen Drive, Pretoria 0083');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `JobID` int NOT NULL AUTO_INCREMENT,
  `JobHoursPlanned` int NOT NULL,
  `JobHoursWorked` int NOT NULL,
  `StaffID` int NOT NULL,
  `RepairID` int NOT NULL,
  `JobDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`JobID`),
  UNIQUE KEY `JobID_UNIQUE` (`JobID`),
  KEY `StaffID` (`StaffID`),
  KEY `RepairID` (`RepairID`),
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`StaffID`) REFERENCES `staff` (`StaffID`),
  CONSTRAINT `job_ibfk_2` FOREIGN KEY (`RepairID`) REFERENCES `repair` (`RepairID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,4,6,3,2,NULL),(2,6,5,2,1,NULL),(3,5,5,1,3,NULL),(4,1,1,1,1,NULL),(5,2,2,2,2,NULL),(6,3,2,1,2,NULL),(7,4,2,2,3,NULL),(8,3,2,1,2,'Solar panel installation'),(9,4,3,2,3,'Inverter replacement'),(10,5,4,3,1,'Battery check and repair'),(11,6,6,1,2,'Complete system overhaul'),(12,2,2,2,1,'Basic maintenance'),(13,7,7,3,2,'Wiring repair'),(14,3,3,2,3,'Unit troubleshooting'),(15,5,5,1,2,'Firmware upgrade'),(16,2,1,2,1,'Site inspection'),(17,6,6,3,3,'System diagnostics'),(18,4,4,2,1,'Panel cleaning'),(19,5,5,1,2,'Performance monitoring');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `ManufacturerID` int NOT NULL AUTO_INCREMENT,
  `ManufacturerName` varchar(255) NOT NULL,
  `ManufacturerEmail` varchar(255) NOT NULL,
  `ManufacturerContactNo` varchar(255) NOT NULL,
  `ManufacturerAddress` varchar(255) NOT NULL,
  PRIMARY KEY (`ManufacturerID`),
  UNIQUE KEY `CustomerID_UNIQUE` (`ManufacturerID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Canadian Solar','sales.ca@csisolar.com ','+1 519 837 1881','545 Speedvale Avenue West Guelph, Ontario, N1K 1E6'),(2,'Atess','sales@atesspower.com','+86 755 2998 8492','Shiyan Street, Baoan District, Shenzhen'),(3,'Trina Solar','sales@trinasolar.com','+86 519 8517 6109','No.2 Tianhe Road,Trina PV Industrial Park ,Xinbei district , Jiangsu ,China'),(4,'Solarway Suppliers','sales@solarwaysuppliers.com','010 007 0903\n','162 Barry Hertzog Ave, Greenside, Randburg, 2193\n'),(5,'SMA Solar','sales@sma.de','+49 561 9522 0','Sonnenallee 1, 34266 Niestetal, Germany'),(6,'Fronius','sales@fronius.com','+43 7242 241 0','Froniusplatz 1, Wels, Austria'),(7,'Huawei Solar','support@huawei.com','+86 755 2878 0808','Huaweibei Road, Shenzhen, China'),(8,'Sungrow','sales@sungrowpower.com','+86 551 6532 7872','No. 1699 Xiyou Road, Hefei, China'),(9,'GoodWe','support@goodwe.com','+86 512 6239 7998','No.90 Zijin Rd, Suzhou New District, China'),(10,'Delta Electronics','sales@delta.com.tw','+886 2 8797 2088','186, Ruey Kuang Road, Taipei, Taiwan'),(11,'Victron Energy','info@victronenergy.com','+31 36 535 9700','De Paal 35, Almere, Netherlands'),(12,'Solaredge','info@solaredge.com','+972 9 759 9993','1 HaMada Street, Herzliya, Israel'),(13,'Enphase Energy','sales@enphase.com','+1 877 797 4743','47281 Bayside Pkwy, Fremont, CA, USA'),(14,'ABB Solar','sales@abb.com','+41 43 317 7111','Affolternstrasse 44, Zurich, Switzerland');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `part`
--

DROP TABLE IF EXISTS `part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `part` (
  `PartID` int NOT NULL AUTO_INCREMENT,
  `PartName` varchar(255) DEFAULT NULL,
  `PartQuantity` int NOT NULL,
  PRIMARY KEY (`PartID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `part`
--

LOCK TABLES `part` WRITE;
/*!40000 ALTER TABLE `part` DISABLE KEYS */;
INSERT INTO `part` VALUES (1,'DC Connector',100),(2,'MC4 Connector',200),(3,'Battery Inverter',50),(4,'Solar Panel Mount',150),(5,'PV Combiner Box',75),(6,'DC Isolator',100),(7,'AC Breaker',90),(8,'Charge Controller',40),(9,'Monitoring Unit',120),(10,'DC Cable',300),(11,'AC Cable',250),(12,'Grounding Kit',200);
/*!40000 ALTER TABLE `part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair`
--

DROP TABLE IF EXISTS `repair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair` (
  `RepairID` int NOT NULL AUTO_INCREMENT,
  `CustomerID` int NOT NULL,
  `UnitID` int NOT NULL,
  `ManufacturerID` int NOT NULL,
  `RepairStatus` varchar(255) NOT NULL,
  `CheckinDate` date NOT NULL,
  `CheckoutDate` date DEFAULT NULL,
  `repairdescription` varchar(255) NOT NULL,
  PRIMARY KEY (`RepairID`),
  UNIQUE KEY `RepairID_UNIQUE` (`RepairID`),
  KEY `CustomerID` (`CustomerID`),
  KEY `UnitID` (`UnitID`),
  KEY `ManufacturerID` (`ManufacturerID`),
  CONSTRAINT `repair_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `repair_ibfk_3` FOREIGN KEY (`UnitID`) REFERENCES `unit` (`UnitID`),
  CONSTRAINT `repair_ibfk_4` FOREIGN KEY (`ManufacturerID`) REFERENCES `manufacturer` (`ManufacturerID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair`
--

LOCK TABLES `repair` WRITE;
/*!40000 ALTER TABLE `repair` DISABLE KEYS */;
INSERT INTO `repair` VALUES (1,3,1,1,'IN REPAIR','2024-08-05','1990-01-01','FUSE'),(2,1,2,2,'COMPLETED','2024-07-15','2024-07-24','VOLTAGE'),(3,2,3,1,'READY FOR COLLECTION','2024-08-10','1990-01-01','WIRING'),(4,1,1,1,'IN REPAIR','2024-08-20','2024-09-01','FUSE'),(5,1,1,1,'IN REPAIR','2024-08-22','2024-08-22','WIRING'),(6,1,1,1,'COMPLETED','2024-08-22','2024-09-01','VOLTAGE'),(7,2,2,2,'IN REPAIR','2024-08-23','2024-09-02','FUSE'),(8,2,2,3,'IN REPAIR','2024-09-01','1990-01-01','Inverter malfunction'),(9,1,1,2,'IN REPAIR','2024-09-05','1990-01-01','Panel replacement'),(10,3,3,1,'COMPLETED','2024-09-10','2024-09-12','Wiring fault'),(11,1,1,2,'COMPLETED','2024-09-15','2024-09-20','Battery issue'),(12,2,2,3,'IN REPAIR','2024-09-18','1990-01-01','Monitoring system failure'),(13,3,3,1,'IN REPAIR','2024-09-21','1990-01-01','System checkup'),(14,1,2,2,'IN REPAIR','2024-09-25','1990-01-01','Inverter fault'),(15,2,1,3,'COMPLETED','2024-09-30','2024-10-05','Panel installation'),(16,3,2,1,'IN REPAIR','2024-10-01','1990-01-01','Controller issue'),(17,2,1,3,'COMPLETED','2024-10-05','2024-10-10','General maintenance'),(18,1,3,2,'IN REPAIR','2024-10-08','1990-01-01','Wiring reinstallation'),(19,3,2,1,'IN REPAIR','2024-10-12','1990-01-01','Unit inspection');
/*!40000 ALTER TABLE `repair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repairpart`
--

DROP TABLE IF EXISTS `repairpart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repairpart` (
  `RepairPartID` int NOT NULL AUTO_INCREMENT,
  `RepairID` int NOT NULL,
  `PartID` int NOT NULL,
  PRIMARY KEY (`RepairPartID`),
  KEY `RepairID` (`RepairID`),
  KEY `PartID` (`PartID`),
  CONSTRAINT `repairpart_ibfk_1` FOREIGN KEY (`RepairID`) REFERENCES `repair` (`RepairID`),
  CONSTRAINT `repairpart_ibfk_2` FOREIGN KEY (`PartID`) REFERENCES `part` (`PartID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repairpart`
--

LOCK TABLES `repairpart` WRITE;
/*!40000 ALTER TABLE `repairpart` DISABLE KEYS */;
INSERT INTO `repairpart` VALUES (1,1,3),(2,2,1),(3,3,2),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,1),(9,9,2),(10,10,3),(11,11,4),(12,12,5);
/*!40000 ALTER TABLE `repairpart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `StaffID` int NOT NULL AUTO_INCREMENT,
  `StaffFName` varchar(255) NOT NULL,
  `StaffLName` varchar(255) NOT NULL,
  `StaffEmail` varchar(255) NOT NULL,
  `StaffContactNo` varchar(255) NOT NULL,
  `StaffRole` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`StaffID`),
  UNIQUE KEY `CustomerID_UNIQUE` (`StaffID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'John','Mathebula','JBones@gmail/com','073 562 2123','Technician','X7p!q9z@T4m'),(2,'Jane','Doe','JaneDoe@example.com','082 123 4567','Technician','jR3&v2L#y6K'),(3,'Michael','Smith','MSmith@domain.com','071 987 6543','Admin','P@8sG1#xT5r'),(4,'Linda','Martins','linda.martins@example.com','074 555 1234','Admin','L1!wQ9v*H2n'),(5,'Alex','Johnson','alex.johnson@example.com','071 654 7890','Technician','M6^bZ4x&K7t'),(6,'Eva','Clark','eva.clark@example.com','083 111 2222','Technician','T@5jF3#qP8m'),(7,'Max','Rogers','max.rogers@example.com','072 987 6541','Admin','R2!dN8^kB4h'),(8,'Natalie','Wilson','natalie.wilson@example.com','084 333 5555','Technician','S1#lX6$zQ9w'),(9,'Samuel','Adams','samuel.adams@example.com','071 222 1111','Technician','V7&yK3^tF1b'),(10,'Oscar','James','oscar.james@example.com','082 444 6666','Technician','Q4!pM2@jH8r'),(11,'Diana','Evans','diana.evans@example.com','071 333 7777','Technician','Z3#sN5^vC2q'),(12,'Patrick','Nelson','patrick.nelson@example.com','084 222 4444','Technician','F8^wJ1*kT7p'),(13,'Jennifer','Brown','jennifer.brown@example.com','082 999 8888','Technician','Y2!jN7$kP3m'),(14,'Hannah','Carter','hannah.carter@example.com','071 555 7777','Technician','W5^gR8#tL1f'),(15,'Oliver','Scott','oliver.scott@example.com','073 888 9999','Technician','A9@qB4&zT6h');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `UnitID` int NOT NULL AUTO_INCREMENT,
  `UnitName` varchar(255) NOT NULL,
  `UnitBrand` varchar(255) NOT NULL,
  `UnitType` varchar(255) NOT NULL,
  `UnitSize` varchar(255) NOT NULL,
  PRIMARY KEY (`UnitID`),
  UNIQUE KEY `UnitID_UNIQUE` (`UnitID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'12KW DEYE SINGLE PHASE INVERTER','Canadian Solar','Hybrid Inverter','height:50cm, width:38cm'),(2,'ATESS 30KW HYBRID 3-PHASE INVERTER','Atess','Hybrid Inverter','height:55cm, width:40cm'),(3,'CANADIAN SOLAR 455W PANEL MONO','Canadian Solar','Solar Panel','height:78cm, width:39cm'),(4,'DEYE 8KW SINGLE PHASE INVERTER','Deye','Hybrid Inverter','height:45cm, width:30cm'),(5,'TRINA SOLAR 500W PANEL','Trina Solar','Solar Panel','height:80cm, width:40cm'),(6,'SUNSYNK 5KW INVERTER','Sunsynk','Hybrid Inverter','height:40cm, width:35cm'),(7,'CANADIAN SOLAR 400W MONO PANEL','Canadian Solar','Solar Panel','height:75cm, width:35cm'),(8,'GOODWE 6KW 3-PHASE INVERTER','GoodWe','Hybrid Inverter','height:50cm, width:38cm'),(9,'LONGI 450W MONO SOLAR PANEL','Longi','Solar Panel','height:78cm, width:39cm'),(10,'HUAWEI 10KW INVERTER','Huawei','Hybrid Inverter','height:52cm, width:40cm'),(11,'JINKO SOLAR 370W MONO PANEL','Jinko Solar','Solar Panel','height:77cm, width:36cm'),(12,'SMA SUNNY BOY 5.0 INVERTER','SMA','String Inverter','height:45cm, width:33cm'),(13,'FRONIUS SYMO 7.0 3-PHASE INVERTER','Fronius','Hybrid Inverter','height:47cm, width:37cm'),(14,'REC ALPHA 360W MONO PANEL','REC','Solar Panel','height:76cm, width:38cm'),(15,'SOLIS 3.6KW 1-PHASE INVERTER','Solis','Hybrid Inverter','height:43cm, width:32cm'),(16,'a','a','a','a');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-19 20:10:58
