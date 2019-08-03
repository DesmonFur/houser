CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(500),
address VARCHAR(500),
city VARCHAR(500),
state VARCHAR(500),
zip INTEGER 
);


INSERT INTO houses (name,address,city,state,zip)
VALUES('Laram', '123 Laram Rd', 'Orem', 'UT', 84320),
('Marla', '321 Marla St', 'Lehi', 'UT', 84320),
('Sucks', '50 Rona ln', 'Aurora', 'CO', 80014);
