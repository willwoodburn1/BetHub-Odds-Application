DROP DATABASE IF EXISTS bets_db;
CREATE DATABASE bets_db;

USE bets_db;

CREATE TABLE bets (
    selection VARCHAR(50) NOT NULL,
    opponent VARCHAR(50) NOT NULL,
    winnings INTEGER NOT NULL,
    betType VARCHAR(50),
    bookMaker VARCHAR(50)
);

SELECT * FROM bets;