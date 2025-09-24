CREATE DATABASE HelseKort;
USE HelseKort;

CREATE TABLE Blodtype (
    BlodtypeID INT AUTO_INCREMENT PRIMARY KEY,
    Type VARCHAR(5) UNIQUE NOT NULL
);

CREATE TABLE Person (
    PersonID INT AUTO_INCREMENT PRIMARY KEY,
    Fodselsnummer VARCHAR(11) UNIQUE NOT NULL,
    Fornavn VARCHAR(100) NOT NULL,
    Etternavn VARCHAR(100) NOT NULL,
    Telefon VARCHAR(15),
    Nodkontakt_navn VARCHAR(100),
    Nodkontakt_telefon VARCHAR(15),
    Barcode VARCHAR(100) UNIQUE,
    NFC_ID VARCHAR(100) UNIQUE,
    BlodtypeID INT,
    FOREIGN KEY (BlodtypeID) REFERENCES Blodtype(BlodtypeID)
);

CREATE TABLE Allergi (
    AllergiID INT AUTO_INCREMENT PRIMARY KEY,
    Navn VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Person_Allergi (
    PersonID INT,
    AllergiID INT,
    Alvorlighetsgrad VARCHAR(50),
    PRIMARY KEY (PersonID, AllergiID),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID),
    FOREIGN KEY (AllergiID) REFERENCES Allergi(AllergiID)
);

CREATE TABLE Diagnose (
    DiagnoseID INT AUTO_INCREMENT PRIMARY KEY,
    Navn VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Person_Diagnose (
    PersonDiagnoseID INT AUTO_INCREMENT PRIMARY KEY,
    PersonID INT,
    DiagnoseID INT,
    Diagnosedato DATE,
    Status VARCHAR(50),
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID),
    FOREIGN KEY (DiagnoseID) REFERENCES Diagnose(DiagnoseID)
);

CREATE TABLE Medisin (
    MedisinID INT AUTO_INCREMENT PRIMARY KEY,
    Navn VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Person_Medisin (
    PersonMedisinID INT AUTO_INCREMENT PRIMARY KEY,
    PersonID INT,
    MedisinID INT,
    Dosering VARCHAR(100),
    Frekvens VARCHAR(100),
    Startdato DATE,
    Sluttdato DATE,
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID),
    FOREIGN KEY (MedisinID) REFERENCES Medisin(MedisinID)
);