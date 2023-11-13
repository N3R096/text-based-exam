// const party = require('../characters/TEAM')
// const monsterinArea=require('../monsters/monsterPer_Area')
// const monster=require('../monsters/monsters')
// const enemy_classes=require('../monsters/monster_classes')
// const rl =require('readline-sync')
// const techniques =require('../skills/techniques')
// const spells =require('../skills/spells')
// const inventory_inBattle =require('../User_Interface/inventory')
// const ui = require('../User_Interface/user_interface')
// const owc =require('../overworld/overworld_conditions')




// function playerAttack( attackInput, participants){
//     targetselection=rl.question(`please choose your target!`)
//     console.table(participants.name)
//     techniques[attackInput](targetselection)

// }

// function playerspell( attackInput, participants){
//     targetselection=rl.question(`please choose your target!`)
//     console.table(participants.name)
//     spells[attackInput](targetselection)

// }



// function MonsterAttack( attackInput){
//     console.log(attackInput)
//     input = Math.floor(Math.random()*attackInput.Attacks.length)
//     let targetselection =Math.floor(Math.random()* party.status_Characters.length)
   
//     techniques[input](party.status_Characters[targetselection])

// }




// module.exports={
//     playerAttack,
//     playerspell,
//     MonsterAttack,
// }



// // attack.js
// const party = require('../characters/TEAM');
// const rl = require('readline-sync');
// const techniques = require('../skills/techniques');
// const spells = require('../skills/spells');
// const ui = require('../User_Interface/user_interface');
// const btl =require('../Battle/battle')

// function playerAttack(attackInput, participants, battleOrder) {
//   const targetSelection = rl.question(`Please choose your target!\n`);
//   console.table(participants.name);
//   techniques[attackInput](party.status_Characters[targetSelection]);

//   // Check if the battle should end
//   if (checkBattleEnd(battleOrder)) {
//     return; // Exit the function
//   }
// }

// function playerSpell(attackInput, participants, battleOrder) {
//   const targetSelection = rl.question(`Please choose your target!\n`);
//   console.table(participants.name);
//   spells[attackInput](party.status_Characters[targetSelection]);

//   // Check if the battle should end
//   if (checkBattleEnd(battleOrder)) {
//     return; // Exit the function
//   }
// }

// function MonsterAttack(attackInput, battleOrder) {
//   console.log(attackInput);
//   const input = Math.floor(Math.random() * attackInput.Attacks.length);
//   const targetSelection = Math.floor(Math.random() * party.status_Characters.length);
//   techniques[input](party.status_Characters[targetSelection]);

//   // Check if the battle should end
//   if (checkBattleEnd(battleOrder)) {
//     return; // Exit the function
//   }
// }

// function checkBattleEnd(order) {
//   // Check if all player characters are defeated
//   const allPlayerCharactersDefeated = party.status_Characters
//     .filter((character) => character.playablechar)
//     .every((character) => character.HP <= 0);

//   // Check if all monsters are defeated
//   const allMonstersDefeated = monsterinArea.mons_array.every((monster) => monster.HP <= 0);

//   if (allPlayerCharactersDefeated || allMonstersDefeated) {
//     console.log("The battle has ended!");
//     return true; // Indicates that the battle has ended
//   }

//   return false; // Indicates that the battle continues
// }

// module.exports = {
//   playerAttack,
//   playerSpell,
//   MonsterAttack,
//   checkBattleEnd,
// };//////////////////////////
/////////////////////////////////////////////////////////





// attack.js
const party = require('../characters/TEAM');
const rl = require('readline-sync');
const techniques = require('../skills/techniques');
const spells = require('../skills/spells');
const ui = require('../User_Interface/user_interface');
const btl = require('../Battle/battle'); // Added import

function playerAttack(attackInput, participants, battleOrder) {
  const targetSelection = rl.question(`Please choose your target!\n`);
  console.table(participants.name);
  techniques[attackInput](party.status_Characters[targetSelection]);

  // Check if the battle should end
  if (btl.checkBattleEnd(battleOrder)) {
    return; // Exit the function
  }
}

function playerSpell(attackInput, participants, battleOrder) {
  const targetSelection = rl.question(`Please choose your target!\n`);
  console.table(participants.name);
  spells[attackInput](party.status_Characters[targetSelection]);

  // Check if the battle should end
  if (btl.checkBattleEnd(battleOrder)) {
    return; // Exit the function
  }
}

function MonsterAttack(attackInput, battleOrder) {
  console.log(attackInput);
  const input = Math.floor(Math.random() * attackInput.techniques.length);
  console.log(input)
  const used_technique = attackInput.techniques[input]
  const targetSelection = Math.floor(Math.random() * party.status_Characters.length);
  techniques[used_technique](party.status_Characters[targetSelection]);

  // Check if the battle should end
  if (btl.checkBattleEnd(battleOrder)) {
    return; // Exit the function
  }
}

function checkBattleEnd(order) {
  // Check if all player characters are defeated
  const allPlayerCharactersDefeated = party.status_Characters
    .filter((character) => character.playablechar)
    .every((character) => character.HP <= 0);

  // Check if all monsters are defeated
  const allMonstersDefeated = monsterinArea.mons_array.every((monster) => monster.HP <= 0);

  if (allPlayerCharactersDefeated || allMonstersDefeated) {
    console.log("The battle has ended!");
    return true; // Indicates that the battle has ended
  }

  return false; // Indicates that the battle continues
}

module.exports = {
  playerAttack,
  playerSpell,
  MonsterAttack,
  checkBattleEnd,
};

