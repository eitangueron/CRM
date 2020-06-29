USE crm_project;

-- CREATE TABLE owners (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

CREATE TABLE clients (
    id VARCHAR(30) NOT NULL PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30),
    firstContact DATE,
    emailType INT, 
    sold BOOLEAN,
    c_owner INT,
    country INT,


    FOREIGN KEY (emailType) REFERENCES email_types(id),
    FOREIGN KEY (c_owner) REFERENCES owners(id),
    FOREIGN KEY (country) REFERENCES countries(id)
)


-- DROP TABLE clients

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

-- CREATE TABLE countries(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(40)
-- )


-- DROP TABLE countries