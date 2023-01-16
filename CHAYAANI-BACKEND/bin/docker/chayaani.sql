CREATE DATABASE IF NOT EXISTS CHAYAANI_APP;

USE CHAYAANI_APP;

CREATE TABLE users(
    `userID` int NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(250) NOT NULL,
    `cin` varchar(10) NOT NULL,
    PRIMARY KEY(`userID`),
    UNIQUE KEY `email_UNIQUE` (`email`),
    UNIQUE KEY `username_UNIQUE` (`username`)
);

CREATE TABLE offres(
    `offreID` int NOT NULL AUTO_INCREMENT,
    `villeDepart` varchar(50) NOT NULL DEFAULT '',
    `villeDestination` varchar(50) NOT NULL DEFAULT '',
    `dateDepart` Date NOT NULL DEFAULT '',
    `nbPersonnes` integer NOT NULL ,
    `prix` float NOT NULL ,
    PRIMARY KEY(`offreID`)
);