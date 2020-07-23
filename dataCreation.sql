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


-- DROP TABLE clients;
-- DROP TABLE countries;

-- SELECT clients.id AS _id, clients.name, firstContact, sold,
-- e_type AS emailType, owners.name AS owner, countries.name AS country
-- FROM clients, email_types, owners, countries
-- WHERE clients.emailType=email_types.id
-- AND owners.id=clients.c_owner
-- AND countries.id=clients.country
-- ORDER BY clients.name

-- UPDATE clients
-- SET name = 'Eitan Gueron', country = 'ISRAEL'
-- WHERE id= '5b9f48a2406b2cd74c55c663';

-- SELECT id FROM countries
-- WHERE name='Israel'



