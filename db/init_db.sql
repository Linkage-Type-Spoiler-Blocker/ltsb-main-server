CREATE DATABASE caps2 default CHARACTER SET UTF8;
USE caps2;

CREATE TABLE country(
    id int not null AUTO_INCREMENT,
    iso char(3) not null,
    name VARCHAR(80) not null,
    krname VARCHAR(80) not null,
    PRiMARY KEY (id)
);

CREATE TABLE user(
    uid int not null AUTO_INCREMENT,
    email VARCHAR(320) not null, 
    pw char(40) not null, 
    is_active tinyint(1) not null, 
    location int(3) not null,
    PRiMARY KEY (uid)
);

CREATE TABLE movie(
    mid int not null AUTO_INCREMENT,
    movie_file VARCHAR(80),
    PRiMARY KEY (mid)
);

CREATE TABLE user_movie(
    user_uid int not null AUTO_INCREMENT,
    movie_mid int not null AUTO_INCREMENT,
    FOREIGN KEY (user_uid) REFERENCES user (uid),
    FOREIGN KEY (movie_mid) REFERENCES movie (mid)
);

CREATE TABLE blocked(
    user_uid itn not null AUTO_INCREMENT,
    list_file VARCHAR(80),
    FOREIGN KEY (user_uid) REFERENCES user (uid)
);

INSERT INTO country (iso, name, krname) VALUES
('KOR', 'KOREAN', '한국어'), ('ENG', 'ENGLISH', '영어');