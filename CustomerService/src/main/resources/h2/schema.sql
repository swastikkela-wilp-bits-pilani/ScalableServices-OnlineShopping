DROP TABLE IF EXISTS CUSTOMER;

CREATE TABLE CUSTOMER(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EMAIL VARCHAR(255) NOT NULL,
    FIRST_NAME VARCHAR(100) NOT NULL,
    LAST_NAME VARCHAR(100) NOT NULL
);


