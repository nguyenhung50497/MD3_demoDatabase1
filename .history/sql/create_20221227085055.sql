CREATE DATABASE my_database1;
USE my_database1;
CREATE table product1 (
	id int not null primary key auto_increment,
    name varchar(100),
    price int not null,
    description varchar(255)
)