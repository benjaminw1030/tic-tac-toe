function Dinosaur(name, period, diet, walksOnForLegs, yearDiscovered, popularity) {
  this.name = name;
  this.period = period;
  this.diet = diet;
  this.walksOnForLegs = undefined;
  this.yearDiscovered = yearDiscovered;
  this.popularity = popularity;
}

dino1 = { 
  name: "Tyrannosaurus rex",
  period: "Mesozoic",
  diet: "carnivore",
  walksOnForLegs: false,
  yearDiscovered: 1902,
  popularity: 999
}

dino2 = { 
  name: "Brachiosaurus",
  period: "Jurassic",
  diet: "herbivore",
  walksOnForLegs: true,
  yearDiscovered: 1900,
  popularity: 959
}

dino3 = { 
  name: "Parasaurolophus",
  period: "Cretaceous",
  diet: "herbivore",
  walksOnForLegs: true,
  yearDiscovered: 1922,
  popularity: 500
}

dino4 = { 
  name: "Stegosaurus",
  period: "Jurassic",
  diet: "herbivore",
  walksOnForLegs: true,
  yearDiscovered: 1876,
  popularity: 903
}

// Prompt 2:

// The client wants the splash page to display the top three most popular dinosaurs on the site. Write a method that filters the entire list of dinosaurs and returns an array containing the top three most popular dinosaurs.

// Example:

// Given: [ dino1, dino2, dino3, dino4 ]
// Return: [ dino1, dino2, dino4 ]
// const dinos = [dino1, dino2, dino3, dino4]
// Dinosaur.prototype.popularity= function(dinos) {
//   const sortdino = dinos.sort((a, b) => (a.popularity > b.popularity))
//   return sortdino.slice(0, 3);
// }


function dinosort(dinos) {
  const sortdino = dinos.sort(function(a, b) { 
    return b.popularity - a.popularity;
  });
  return sortdino.slice(0, 3);
}
const dinos = [dino1, dino2, dino3, dino4]
dinosort(dinos);