select * from favorites
join recipes
on favorites.recipeid = recipes.recipeid
where userid = $1