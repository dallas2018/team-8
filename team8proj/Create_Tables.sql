create table applicant_Status (
statusID int Auto_Increment,
applicantID int,
Form1 varchar(255),
Form2 varchar(255),
Form3 varchar(255),
Form4 varchar(255),
Form5 varchar(255),
primary key(statusID)

);

a
create table Criminal_Background(

CB_ID int auto_increment,
applicantID int,
Arrest_Date DATE,
description varchar(255),
primary key (CB_ID)
);


create table story(
storyID int auto_increment,
applicantID int,
storyTitle varchar(50),
storyDescription varchar(255),
dateCreated date,
primary key(storyID)
);


create table Applicant(
applicantID int auto_increment,
firstName varchar(50),
lastName varchar(50),
address varchar(50),
city varchar(50),
state varchar(50),
zipcode int,
email varchar(50),
phoneNumber varchar(50),
dateofBirth DATE,
dateEntered DATE,
loginID int,
primary key(applicantID)
);

create table Applicant_Type(
applicant_typeID int auto_increment,
applicantID int,
typeID int,
primary key(applicant_typeID)
);


create table Types (
typeID int auto_increment,
TypeDescription varchar(255),
primary key (typeID)
);



create table Login(
loginID int auto_increment,
loginPass varchar(255),
primary key (loginID)

);




-- TRIGGERS

DELIMITER $$
create trigger status_create
after insert on Applicant for each row begin
		insert into applicant_Status (statusID, applicantID, Form1, Form2, Form3, Form4) values (statusID, new.applicantID, '0','0','0','0');
	END$$