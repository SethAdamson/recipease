create table byCategory(
    recipeID int,
    categoryID int,
    foreign key (recipeID) references recipes(recipeID),
    foreign key (categoryID) references category(categoryID)
)