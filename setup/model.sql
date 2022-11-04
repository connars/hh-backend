create database turksh_db;

create extension pgcrypto;

drop table if exists admins;
create table admins(
   admin_id serial primary key,
   adminname varchar(40) not null,
   password varchar(60) not null,
   status varchar(50) default 'admin',
   created_at timestamp default current_timestamp
);

drop table if exists users;
create table users(
   user_id serial primary key,
   username varchar(40) not null,
   lastname varchar(40) not null,
   password varchar(60) not null,
   contact varchar(9) not null,
   email varchar(100) not null,
   avatar text,
   created_at timestamp default current_timestamp
);

drop table if exists balance;
create table balance(
 balance_id serial primary key,
 user_id int references users(user_id),
 score decimal(7,2) default 0
);




insert into users(username,lastname,password,contact,email)
 values 
 ('victor','salamon',crypt('12345678',gen_salt('bf')),'908277777','josh@gmail.com');

 insert into balance(user_id,score) 
 values (1,10000);

 insert into admins(adminname,password) values ('admin','12345678');
