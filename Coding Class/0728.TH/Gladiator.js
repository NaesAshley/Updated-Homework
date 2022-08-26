// https://github.com/angeljuarez77/objects-practice/blob/main/README.md
class Gladiator {
  constructor(nameParam, weaponParam) {
    this.name = nameParam;
    this.weapon = weaponParam;
  }
}

const newGladiator = new Gladiator("Jordan", "shield");
console.log(newGladiator);

const newGladiator2 = new Gladiator("Jimmy", "sword");
console.log(newGladiator2);

class Arena {
  constructor(arenaNameParam) {
    this.arenaName =
      arenaNameParam.charAt(0).toUpperCase() + arenaNameParam.slice(1);
  }
}

const newArena = new Arena("thepitt");
console.log(newArena);

const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []console.log(newArena.newGladiator);
