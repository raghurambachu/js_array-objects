let myPenguin = {
    name: "Tacky the Penguin",
    origin: "Len Hostler",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  }

  myPenguin.outfit = {
      hat : "baseball cap",
      shirt: "Hawaiian shirt",
      pants: "cargo shorts",
      shoes: "flip-flops"
  }

  let penguinHatType = myPenguin.outfit.hat;
  console.log(penguinHatType);

  myPenguin.outfit.accessory = "pocket watch";

  myPenguin.outfit.hat = "top hat";

  delete myPenguin.outfit.pants;

  for (let outfit in myPenguin.outfit){
      console.log(outfit);
  }