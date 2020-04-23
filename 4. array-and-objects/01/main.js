let penguin = {};
penguin.favoriteFoods = ["fish","seal","sea-cow"];

console.log(penguin.favoriteFoods[1]);
let firstFavFood = penguin.favoriteFoods[0];

penguin["favoriteFoods"].push("ice-cream");

console.log(penguin.favoriteFoods.length);
penguin["favoriteFoods"][penguin["favoriteFoods"].length - 1] = "pineapples";

let lastFavFood = penguin["favoriteFoods"][penguin["favoriteFoods"].length - 1];
console.log(lastFavFood)

for (let food of penguin.favoriteFoods){
    console.log(food)
}