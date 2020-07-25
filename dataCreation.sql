-- CREATE DATABASE crm_project;

USE crm_project;

-- CREATE TABLE owners (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE email_types (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     e_type VARCHAR(20)
-- );

-- CREATE TABLE countries(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(40)
-- );

-- CREATE TABLE clients (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     -- email VARCHAR(30),
--     firstContact DATE,
--     emailType INT, 
--     sold BOOLEAN,
--     c_owner INT,
--     country INT,


--     FOREIGN KEY (emailType) REFERENCES email_types(id),
--     FOREIGN KEY (c_owner) REFERENCES owners(id),
--     FOREIGN KEY (country) REFERENCES countries(id)
-- );

