INSERT INTO users
(username, email, password)
VALUES
($1, $2, $3);

SELECT * FROM users
where email = $2;
