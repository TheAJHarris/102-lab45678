let favAnimal = "";
let visName = "";
let favPetname = "";





function askAnimal() {
  favAnimal = prompt("What is your favorite animal?");
  console.log(favAnimal);
  document.write("Oh wow! I like " + favAnimal + "s too! Aren't they great?");
}

function askName() {
  visName = prompt("What's your name?");
  console.log(visName);
  document.write(" Nice to mee you " + visName + ", what can I help you with today?");
}

function askPet() {
  favPetname = prompt("What is the name of your favorite pet?");
  console.log(favPetname);
  document.write(favPetname + "? That's a great name!");
}
