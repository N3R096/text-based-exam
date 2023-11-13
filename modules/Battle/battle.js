// const party = require('../characters/TEAM')
// const monsterinArea=require('../monsters/monsterPer_Area')
// const monster=require('../monsters/monsters')
// const enemy_classes=require('../monsters/monster_classes')
// const rl =require('readline-sync')
// const techniques =require('../skills/techniques')
// const spells =require('../skills/spells')
// const inventory_inBattle =require('../User_Interface/inventory')
// const attack_action =require('../Battle/attack')
// const ui = require('../User_Interface/user_interface')
// const owc =require('../overworld/overworld_conditions')

// // /*
// // >>--- loop that generates (monster
// // >>--- functio)n that takes the monsters speed together with the partys speed and sorts them
// // >>--- a battle ui that shows -- > partys health -- opponents health -- inventory -- flee -- attacks and spells (input needed)-- a callback that sends you to the battle ui */

// // /// reduce for total weight of items

// // function o(enemy_inArea){

// //   const p = Math.floor(Math.random()* 40);

// //   if (p>= 0 && p<10){
// // const m1 = Math.floor(Math.random() * enemy_inArea.length)
// // const m2 = Math.floor(Math.random() * enemy_inArea.length)
// // const attackingM1=(monster[monsterinArea.mons_array[m1])]
// // const attackingM2= (monster[monsterinArea.mons_array[m2])]
// // // console.log(attackingM1, attackingM2)
// // const participants=[attackingM1, attackingM2]
// // return participants
// //   }

// //   if (p>= 10 && p<20){
// //   const m1 = Math.floor(Math.random() * enemy_inArea.length)
// //   const m2 = Math.floor(Math.random() * enemy_inArea.length)
// //   const m3 = Math.floor(Math.random() * enemy_inArea.length)
// //   const attackingM1=(monster[monsterinArea.mons_array[m1]]);
// //   const attackingM2= (monster[monsterinArea.mons_array[m2]]);
// //   const attackingM3=(monster[monsterinArea.mons_array[m3]]);
// //   // console.log(attackingM1, attackingM2, attackingM3)
// //   const participants=[attackingM1, attackingM2, attackingM3]
// //   return participants
// //     }

// //   if (p>= 20 && p<35){
// // const m1 = Math.floor(Math.random() * enemy_inArea.length)
// // const m2 = Math.floor(Math.random() * enemy_inArea.length)
// // const m3 = Math.floor(Math.random() * enemy_inArea.length)
// // const m4 = Math.floor(Math.random() * enemy_inArea.length)
// // const attackingM1=(monster[monsterinArea.mons_array[m1]]);
// // const attackingM2= (monster[monsterinArea.mons_array[m2]]);
// // const attackingM3=(monster[monsterinArea.mons_array[m3]]);
// // const attackingM4=(monster[monsterinArea.mons_array[m4]]);
// // // console.log(attackingM1, attackingM2, attackingM3, attackingM4)
// // const participants=[attackingM1, attackingM2, attackingM3, attackingM4]
// // return participants
// //   }

// //   if (p>= 35){
// // const m1 = Math.floor(Math.random() * enemy_inArea.length)
// // const m2 = Math.floor(Math.random() * enemy_inArea.length)
// // const m3 = Math.floor(Math.random() * enemy_inArea.length)
// // const m4 = Math.floor(Math.random() * enemy_inArea.length)
// // const m5 = Math.floor(Math.random() * enemy_inArea.length)
// // const attackingM1=(monster[monsterinArea.mons_array[m1]]);
// // const attackingM2= (monster[monsterinArea.mons_array[m2]]);
// // const attackingM3=(monster[monsterinArea.mons_array[m3]]);
// // const attackingM4=(monster[monsterinArea.mons_array[m4]]);
// // const attackingM5=(monster[monsterinArea.mons_array[m5]]);
// // // console.log(attackingM1, attackingM2, attackingM3, attackingM4, attackingM5)
// // const participants=[attackingM1, attackingM2, attackingM3, attackingM4, attackingM5]
// // return participants
// //   }
// // }

// // const oParty = o((monster[monsterinArea.mons_array)
// // console.log(oParty)
// // oParty

// // function getMonster(input){
// //   let ouput = input.map((inp)=>(monster[inp]);
// // retur)n ouput
// // }
// // console.log(getMonster(oParty))

// // function getParty(team){
// //   const player_party = team;
// //   if (player_party[1] && player_party[2]){
// //     player1 = team[1];
// //     player2= team[2]
// //     full_party = [player1, player2];
// //     return full_party
// //   }
// // }

// // console.log(getParty(party.status_Characters))

// function battle(){
//   //////////////////////////////////////////////////
//   function start_battle(enemy_inArea, team){
//     const partyMember = team;
//     const enemyNumber_check = Math.floor(Math.random()* 40);

//     if (enemyNumber_check>= 0 && enemyNumber_check<10){
//   const m1 = Math.floor(Math.random() * enemy_inArea.length)
//   const m2 = Math.floor(Math.random() * enemy_inArea.length)

//  const attackingM1= new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

//  const attackingM2= new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);
// //
//   const participants=[attackingM1, attackingM2,partyMember[1],partyMember[2]]
//   return participants
//     }

//     if (enemyNumber_check>= 10 &&enemyNumber_check<20){
//     const m1 = Math.floor(Math.random() * enemy_inArea.length)
//     const m2 = Math.floor(Math.random() * enemy_inArea.length)
//     const m3 = Math.floor(Math.random() * enemy_inArea.length)
//   //
//   const attackingM1= new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

//   const attackingM2= new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

//   const attackingM3= new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

//     //
//     const participants=[attackingM1, attackingM2, attackingM3,partyMember[1],partyMember[2]]
//     return participants
//       }

//     if (enemyNumber_check>= 20 && enemyNumber_check<35){
//   const m1 = Math.floor(Math.random() * enemy_inArea.length)
//   const m2 = Math.floor(Math.random() * enemy_inArea.length)
//   const m3 = Math.floor(Math.random() * enemy_inArea.length)
//   const m4 = Math.floor(Math.random() * enemy_inArea.length)
//   //
//   const attackingM1= new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

//   const attackingM2= new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

//   const attackingM3= new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

//  const attackingM4= new enemy_classes[enemy_inArea[m4]](enemy_inArea[m4]);

//   //
//   const participants=[attackingM1, attackingM2, attackingM3, attackingM4,partyMember[1],partyMember[2]]

//   return participants
//     }

//     if (enemyNumber_check>= 35){
//   const m1 = Math.floor(Math.random() * enemy_inArea.length)
//   const m2 = Math.floor(Math.random() * enemy_inArea.length)
//   const m3 = Math.floor(Math.random() * enemy_inArea.length)
//   const m4 = Math.floor(Math.random() * enemy_inArea.length)
//   const m5 = Math.floor(Math.random() * enemy_inArea.length)
//   //
//   const attackingM1= new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

//   const attackingM2= new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

//   const attackingM3= new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

//  const attackingM4= new enemy_classes[enemy_inArea[m4]](enemy_inArea[m4]);

//  const attackingM5= new enemy_classes[enemy_inArea[m5]](enemy_inArea[m5]);

//   //
//   const participants=[attackingM1, attackingM2, attackingM3, attackingM4, attackingM5,partyMember[1],partyMember[2]]
//   return participants
//     }
//   }////////////////////////////////////////////////////

//  function getBattleOrder(){
//    const battle_order=start_battle(monsterinArea.mons_array, party.status_Characters)

//  battle_order.sort((a,b) => b.Speed - a.Speed);

//  return battle_order

//  }

// function activeBattle(order){

// let i =0;

// do {console.log(order[i].name)
//   // order[i];
// if (order[i].playablechar){
//   ui.inBattle_user_interface(order)
// }else {attack_action.MonsterAttack(order[i])}
//   i++
// }while(i<order.length)

// }

// activeBattle(getBattleOrder())

//   ///////////////////////////////////////////////////////

//   ////////////////////////////////////////////////////
//   /////////////////////////////////////////////////////
// //   const enemyRandomizedParty = enemyRandomizer((monster[monsterinArea.mons_array)])

// //   ////////////////////////////////////////////////////////
// //   function getEnemy(input){
// //     let output = input.map((inp)=>(monster[inp]);
// //     outpu)t.sort((a,b) => b.Speed - a.Speed);
// //   console.log(output)
// //     return output
// //   }getEnemy(enemyRandomizedParty)
// //   console.log("_------------------------------------------_____----___---------------")
// //   /////////////////////////////////////////////////////////
// //   function getParty(team){
// //     const player_party = team;
// //     if (player_party[1] && player_party[2]){
// //       player1 = team[1];
// //       player2= team[2]
// //       full_party = [player1, player2];
// //       return full_party
// //     }
// //   }

// //   /////////////////////////////////////////////////////////////////
// //   console.log("---------------------------------------------------------")

// // function getParticipants(){
// //   const all_inBattle =  [];
// //   all_inBattle.push(getEnemy(enemyRandomizedParty), getParty(party.status_Characters))
// //   all_inBattle.join()
// //   const obj =(getEnemy(enemyRandomizedParty),getParty(party.status_Characters));
// // console.log(obj)
// // obj.sort((a,b) => b.Speed - a.Speed);

// // console.log("---------------------------------------------------------")
// //   return all_inBattle
// // }

// // // console.log(getParticipants())
// //////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// // function getBattleOrder(){
// //   const battle_order=getParticipants()
// // battle_order.join()
// // battle_order.sort((a,b) => b.Speed - a.Speed);

// // }
// // getBattleOrder()

// ////////////////////////////////////////////////////////////////////////////

// }

// battle()

// // function target_for_monster() {
// //     let byMonster_selected_target = Math.floor(
// //       Math.random() * partySlots.length - 1
// //     );
// //     selectedTarget = partySlots[byMonster_selected_target];
// //   }

// //   /* function for calculating wether  something happens or not*/
// //   const monster_variants = ["v1", "v2", "v3", "v4", "v5"];
// //   // const item_variants = ["v1", "v2", "v3", "v4", "v5"];

// //   function check_for_event() {
// //     let randomFcheckNumber = Math.floor(Math.random() * 100 + 1);
// //     // console.log(randomFcheckNumber)
// //     if (randomFcheckNumber > 85) {
// //       let isBattle = true;
// //       console.log("a (monster appeared");

// //       let randomMonster = Math.floor(Math.random() * monster_variants.length);
// //       let selectedMonster = monster_variants[randomMonster];
// //       let groupOfMonsters =
// //         Math.floor(Math.random() * 6 + 1) + ` ${selectedMonster} are attacking`;
// //       console.log(groupOfMonsters);
// //     } else if (randomFcheckNumber <= 10) {
// //       let randomItemFound = Math.floor(Math.random() * (monster[monsterinArea.current_area.items_inArea.leng)t]h);
// //       let foundItem = (monster[monsterinArea.current_area.items_inArea[randomItemFou)n]d];
// //       console.log("you found a", foundItem);
// //       inventory_inBattle.addItem_toInventory(foundItem,1)

// //     } else if (randomFcheckNumber < 85 && randomFcheckNumber > 10) {
// //       console.log("nothing in sight");
// //     }
// //     // else if (chest){
// //     //     console.log('chest found')
// //     // }
// //   }

// // //  check_for_event()
// // // check_for_event()
// // // check_for_event()
// // // ui.full_user_interface
// party, inventory, rl , attack_action,

// battle.js
const party = require("../characters/TEAM");
const monsterinArea = require("../monsters/monsterPer_Area");
const monster = require("../monsters/monsters");
const enemy_classes = require("../monsters/monster_classes");
const rl = require("readline-sync");
const techniques = require("../skills/techniques");
const spells = require("../skills/spells");
const inventory_inBattle = require("../User_Interface/inventory");
const attack_action = require("../Battle/attack");
const ui = require("../User_Interface/user_interface");
const owc = require("../overworld/overworld_conditions");
const leveling=require('../EXP_SYSTEM/lvl_system')

function start_battle(enemy_inArea, team) {
  const partyMember = team;
  const enemyNumber_check = Math.floor(Math.random() * 40);

  if (enemyNumber_check >= 0 && enemyNumber_check < 10) {
    const m1 = Math.floor(Math.random() * enemy_inArea.length);
    const m2 = Math.floor(Math.random() * enemy_inArea.length);
    const attackingM1 = new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

    const attackingM2 = new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);
    //
    const participants = [
      attackingM1,
      attackingM2,
      partyMember[1],
      partyMember[2],
    ];
    const enemy_party = [attackingM1, attackingM2];
    const playerTeam = [partyMember[1], partyMember[2]];
    return [participants, enemy_party, playerTeam];
  }

  if (enemyNumber_check >= 10 && enemyNumber_check < 20) {
    const m1 = Math.floor(Math.random() * enemy_inArea.length);
    const m2 = Math.floor(Math.random() * enemy_inArea.length);
    const m3 = Math.floor(Math.random() * enemy_inArea.length);
    //
    const attackingM1 = new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

    const attackingM2 = new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

    const attackingM3 = new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

    //
    const participants = [
      attackingM1,
      attackingM2,
      attackingM3,
      partyMember[1],
      partyMember[2],
    ];
    const enemy_party = [attackingM1, attackingM2, attackingM3];
    const playerTeam = [partyMember[1], partyMember[2]];
    return [participants, enemy_party, playerTeam];
  }

  if (enemyNumber_check >= 20 && enemyNumber_check < 35) {
    const m1 = Math.floor(Math.random() * enemy_inArea.length);
    const m2 = Math.floor(Math.random() * enemy_inArea.length);
    const m3 = Math.floor(Math.random() * enemy_inArea.length);
    const m4 = Math.floor(Math.random() * enemy_inArea.length);
    //
    const attackingM1 = new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

    const attackingM2 = new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

    const attackingM3 = new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

    const attackingM4 = new enemy_classes[enemy_inArea[m4]](enemy_inArea[m4]);

    //
    const participants = [
      attackingM1,
      attackingM2,
      attackingM3,
      attackingM4,
      partyMember[1],
      partyMember[2],
    ];
    const enemy_party = [attackingM1, attackingM2, attackingM3, attackingM4];
    const playerTeam = [partyMember[1], partyMember[2]];
    return [participants, enemy_party, playerTeam];
  }

  // constructor functions -or factory function

  if (enemyNumber_check >= 35) {
    const m1 = Math.floor(Math.random() * enemy_inArea.length);
    const m2 = Math.floor(Math.random() * enemy_inArea.length);
    const m3 = Math.floor(Math.random() * enemy_inArea.length);
    const m4 = Math.floor(Math.random() * enemy_inArea.length);
    const m5 = Math.floor(Math.random() * enemy_inArea.length);
    //
    const attackingM1 = new enemy_classes[enemy_inArea[m1]](enemy_inArea[m1]);

    const attackingM2 = new enemy_classes[enemy_inArea[m2]](enemy_inArea[m2]);

    const attackingM3 = new enemy_classes[enemy_inArea[m3]](enemy_inArea[m3]);

    const attackingM4 = new enemy_classes[enemy_inArea[m4]](enemy_inArea[m4]);

    const attackingM5 = new enemy_classes[enemy_inArea[m5]](enemy_inArea[m5]);

    //  i array of objects // filter  only works with an array of objects
    const participants = [
      attackingM1,
      attackingM2,
      attackingM3,
      attackingM4,
      attackingM5,
      partyMember[1],
      partyMember[2],
    ];
    const enemy_party = [
      attackingM1,
      attackingM2,
      attackingM3,
      attackingM4,
      attackingM5,
    ];
    const playerTeam = [partyMember[1], partyMember[2]];
    return [participants, enemy_party, playerTeam];
  }
}

function getBattleOrder() {
  const [attack_order, enemy_group, player_group] = start_battle(
    monsterinArea.mons_array,
    party.status_Characters
  );
  attack_order.sort((a, b) => b.Speed - a.Speed);

  console.log(
    "----------------------------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------"
  );
  console.log(
    "----------------------------------------------------------------------"
  );
  return [attack_order, enemy_group, player_group];
  //
}

function checkBattleEnd(order) {
  // Check if all player characters are defeated
  const allPlayerCharactersDefeated = party.status_Characters
    .filter((character) => character.playablechar)
    .every((character) => character.HP <= 0);

  // Check if all monsters are defeated
  const allMonstersDefeated = monsterinArea.mons_array.every(
    (monster) => monster.HP <= 0
  );

  if (allPlayerCharactersDefeated || allMonstersDefeated) {
    console.log("The battle has ended!");
    return true; // Indicates that the battle has ended
  }

  return false; // Indicates that the battle continues
}

///////////////////////////////////////////////////////7

function activeBattle() {
  let i = 0;
  const [order, enemy_team, player_team] = getBattleOrder();

  enemy_team.map((enemy) => console.log(enemy.name, "appeared."));
  ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  while (
    (i < order.length && player_team.length > 0) ||
    (i < order.length && enemy_team.length > 0)
  ) {
    if (enemy_team.length === 0) {
leveling.lvlUp
console.table(party.TEAM_Character)
      break;
    }
    if (player_team.length === 0) {
      break;
    }
    ///>>>>>>>>>>>>>>>>>>>>><<<<

    console.log(
      `|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`
    );
    console.log(`||ENEMY PARTY||`);
    console.log(
      ` ${enemy_team.map((enemy) =>
        console.log(`${enemy.name}:${enemy.HP}/${enemy.fullHP}`)
      )}`
    );

    console.log(`||PLAYER PARTY||`);

    console.log(`                             

${player_team.map((player) =>
  console.log(`${player.name}:${player.currentHealth}/${player.fullHealth}`)
)}          
 
`);

    if (order[i].playableChar === false) {
      const attacker = order[i];
      console.log(attacker.name);
      const selected_attack_index = Math.floor(
        Math.random() * order[i].techniques.length
      );
      const selected_attack = order[i].techniques[selected_attack_index];
      const target_index = Math.floor(Math.random() * player_team.length);
      const chosen_target = player_team[target_index];
      console.log(
        "-----------------------------------------------------------"
      );
      techniques[selected_attack](chosen_target, attacker);
console.log(selected_attack,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
      if (chosen_target.currentHealth === 0) {
        console.log(
          ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
        );
        player_team.splice(target_index, 1);

        console.log(
          "_-------------------------------------------------------------------------------"
        );
      }
    }
    if (order[i].playableChar === true) {
      const attacker = order[i];
      console.log(attacker.name);
      console.log(`It's`, order[i].name + "'s", `turn.`);
      // party, inventory, rl , attack_action,
      let ui_battle = rl.question(`
||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
     |...................................................................................................................................|
     |>>--||1:-- Attack ||2:-- Techniques  ||3:-- Spells || 4:-- Team || 5:-- Inventory ||8:-- Settings||--<<|
     |-----------------------------------------------------------------------------------------------------------------------------------|
    
   <- Your input ? ->`);
      if (ui_battle === "1") {
        const ui_battle1 = rl.question(
          `Who do you want to attack ? 
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`,
          console.log(`||ENEMY PARTY||`),
          console.log(
            ` ${enemy_team.map((enemy, index) =>
              console.log(
                [index + 1],
                `:${enemy.name}:${enemy.fullHP}/${enemy.HP}`
              )
            )}`
          )
        );
        console.log(enemy_team[ui_battle1 - 1].name);
        let target = enemy_team[ui_battle1 - 1];

        console.log(enemy_team);
        techniques.Attack(target, attacker);
       
        if (target.HP <= 0) {
          attacker.exp += target.exp_given;
          console.log(attacker)
          enemy_team.splice(ui_battle1 - 1, 1);
          console.log(enemy_team);
        }
      }
      if (ui_battle === "2") {
      }
      if (ui_battle === "3") {
      }
      if (ui_battle === "4") {
        party;
      }
      if (ui_battle === "5") {
        inventory_inBattle.DisplayInventory();
      }
      if (ui_battle === "8") {
      }
    }

    i++;

    // Check if the end of the order array is reached and reset the loop
    if (i === order.length) {
      i = 0;
    }

    // Add a condition to break out of the loop (e.g., after a certain number of iterations)

    //     break;
    // }
  }
}

function battle() {
  activeBattle(getBattleOrder());
}

//battle(); // Start the battle

///////////////////////////////////////////////////////////////////////////////77

module.exports = {
  start_battle,
  getBattleOrder,
  activeBattle,
  checkBattleEnd,
  battle,
};
