create table favorites(
    userID int,
    recipeID int,
    foreign key (userID) references users(userID),
    foreign key (recipeID) references recipes(recipeID)
)