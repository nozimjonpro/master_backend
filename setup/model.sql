drop database if exists master_class;
create database master_class;

\c master_class;

create extension pgcrypto;

drop table if exists admins;
create table admins(
   admin_id serial primary key,
   username varchar(32) not null,
   password varchar(60) not null
);

create type event as enum('online', 'offline');
create type gender as enum('male', 'female');
create type status as enum('waiting', 'verified', 'unferified');

drop table if exists organizators;
create table organizators(
    organizator_id serial primary key,
    start_date date not null default current_date,
    start_time time not null default current_time,
    category varchar not null,
    subcategory varchar not null,
    event_type event not null,
    event_link varchar not null,
    organization varchar,
    speaker varchar(50) not null,
    profession varchar not null,
    contact varchar(12) not null,
    additional_contact varchar(12) not null,
    title varchar not null,
    description varchar not null,
    image varchar not null,
    status status not null  default 'waiting'
);





