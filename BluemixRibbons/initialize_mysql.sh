# set up user
CREATE USER 'ribbons'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'ribbons'@'localhost';

# set up database
create database ribbons;
use ribbons;
create table users (id int PRIMARY KEY auto_increment,
                   name varchar(50),
                   email varchar(255) NOT NULL,
                   user varchar(50),
                   password varchar(50) NOT NULL);
# example user
insert into users (name, email, user, password) VALUES ('Sebastian', 'sgp715', 'gabiman7@live.com', 'Rochester7');

create table hammocks(id int NOT NULL PRIMARY KEY auto_increment,
                     name varchar(50) NOT NULL,
                     email varchar(255) NOT NULL,
                     type varchar(10),
                     suspension varchar(10),
                     length int,
                     width int);

# example hammocks
insert into hammocks (name, email, type, suspension, length, width) values("Sebastian", 'gabiman7@live.com', 'rope', 'spreaders', 64, 70);
