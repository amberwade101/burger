DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;



USE burgers_DB;

CREATE TABLE burgers(
    id INT not null AUTO_INCREMENT primary key,
   burger_name VARCHAR(100) not null,
   devoured BOOLEAN
   
);

SELECT * FROM burgers;

INSERT INTO burgers(id, burger_name,devoured) VALUES (1, "california burger","yes");

INSERT INTO burgers(id, burger_name,devoured) VALUES (2, "Bacon-Cheese burger","no");
INSERT INTO burgers(id, burger_name,devoured) VALUES (3, "American burger","no");

DESCRIBE burgers


