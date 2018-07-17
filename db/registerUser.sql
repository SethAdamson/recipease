INSERT INTO users
(email, password)
VALUES
($1, $2);

SELECT * FROM users
where email = $1;
