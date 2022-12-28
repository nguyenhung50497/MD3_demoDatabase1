create 
use my_database1;
create table product1 (
	id int not null primary key auto_increment,
    name varchar(100),
    price int not null,
    description varchar(255)
)