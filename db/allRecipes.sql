select * from recipes
join bycategory
on bycategory.recipeid = recipes.recipeid
-- where recipes.categoryid = $1