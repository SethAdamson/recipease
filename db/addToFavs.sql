insert into favorites
(userid, recipeid)
values
($1, $2);

select * from favorites
join recipes
on favorites.recipeid = recipes.recipeid
where userid = $1;