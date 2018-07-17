create table recipes (
    recipeID serial primary key,
    name text,
    steps text,
    rating int check (rating between 0 and 5),
    prepT int,
    cookT int,
    serves int,
    difLevel text,
    cost int check (int between 0 and 3),
    comments text,
    img text
)