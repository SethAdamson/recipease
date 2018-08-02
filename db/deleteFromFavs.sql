delete from favorites
where recipeid = $2;

select * from favorites
join recipes
on favorites.recipeid = recipes.recipeid
where userid = $1;