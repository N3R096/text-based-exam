console.clear()


console.log(JSON.stringify(interValues.InteractionCheck_speaking, null, 2), interValues.InteractionCheck_speaking);


// // status conditions ------------------------------------------
// function light_poisoned() {
//   selectedTarget.fullhealth - (selectedTarget.fullHealth / 100) * 3;
// }
// function badly_poisoned() {
//   selectedTarget.fullhealth - (selectedTarget.fullHealth / 100) * 8;
// }
// overworld conditions------------------------------------------------------------------
/* 
overworldConditions.timeCounter(0.5);
overworldConditions.TimeOverall();

// Accessing isBattle and currentPosition
console.log(overworldConditions.getIsBattle());        // Get isBattle
console.log(overworldConditions.getCurrentPosition());  // Get currentPosition

// Modifying isBattle and currentPosition
overworldConditions.setIsBattle(true);                  // Set isBattle to true
overworldConditions.setCurrentPosition("SomeLocation");  // Set currentPosition
console.log(overworldConditions.getIsBattle());        // Get isBattle
console.log(overworldConditions.getCurrentPosition()); 
 */
let isBattle = false;

let currentPosition = "";
let overworldTime = {
  hours: 23,
  minutes: 20,
  daysPassed: 0,
  daytime:true,
  nightTime:false,
};
console.log(displayTime());
function displayTime() {
  return (
    overworldTime.hours.toString().padStart(2, "0") +
    ":" +
    overworldTime.minutes.toString().padStart(2, "0")
  );
}



function timeCounter(TimeToAdd) {
  overworldTime.minutes += TimeToAdd *60;
  while (overworldTime.minutes >= 60) {
    overworldTime.hours++;
    overworldTime.minutes -= 60;
  }

  while (overworldTime.hours >= 24) {
    overworldTime.hours -= 24;
    overworldTime.daysPassed++;

  }if (overworldTime.hours >=20 || overworldTime.hours <6){
    overworldTime.nightTime=true;
    overworldTime.daytime=false;
  }else{
    overworldTime.daytime=true;
    overworldTime.nightTime=false;
  }
}
function day_night(){
  if (overworldTime.daytime ){
    return "It is daytime."
  }if (overworldTime.hours >=19 && overworldTime.hours<20){
    return "The sun is starting to go down. You should start to find a place to rest. Stronger Monster will appear soon. Travelling will get harder too."
  }if(overworldTime.nightTime){
    return "It is night. Monsters will attack more frequently and its harder to find items and a place to rest."
  }
}
// Add 100 minutes to the time
timeCounter(0.5);
function TimeOverall(){
  console.log("It is :",displayTime()); // Updated time
console.log("Days Passed:", overworldTime.daysPassed,"||||",";;;...", day_night(),"...;;;")
}
TimeOverall()
// overworld conditions------------------------------------------------------------------

// function for a monster to chose a target
function target_for_monster() {
  let byMonster_selected_target = Math.floor(
    Math.random() * partySlots.length - 1
  );
  selectedTarget = partySlots[byMonster_selected_target];
}

/* function for calculating wether  something happens or not*/
const monster_variants = ["v1", "v2", "v3", "v4", "v5"];
const item_variants = ["v1", "v2", "v3", "v4", "v5"];

function check_for_event() {
  let randomFcheckNumber = Math.floor(Math.random() * 100 + 1);
  // console.log(randomFcheckNumber)
  if (randomFcheckNumber > 85) {
    let isBattle = true;
    console.log("a monster appeared");

    let randomMonster = Math.floor(Math.random() * monster_variants.length);
    let selectedMonster = monster_variants[randomMonster];
    let groupOfMonsters =
      Math.floor(Math.random() * 6 + 1) + ` ${selectedMonster} are attacking`;
    console.log(groupOfMonsters);
  } else if (randomFcheckNumber < 10) {
    let randomItemFound = Math.floor(Math.random() * item_variants.length);
    let selectedItem = item_variants[randomItemFound];
    console.log("you found ", selectedItem);
  } else if (randomFcheckNumber < 85 && randomFcheckNumber > 10) {
    console.log("nothing in sight");
  }
  // else if (chest){
  //     console.log('chest found')
  // }
}

check_for_event();
check_for_event();
check_for_event();

console.log(/----------------------------------/);

// for each loop for level and variant
/* 
do while status condition
obj amount 
player.position.items or monsters
console.table must be array or object 
att */

console.log(/----------------------------------/);

// const m1 = {
//   lvl: [1, 2, 3],
//   attacks: [tackle(), poison()],
// };
// console.log(m1.attacks[0]);
// console.log(setTimeout())
console.log(/----------------------------------/);
// simulating movement

// ----------------------------------



// setTimeout(check_for_event, 2500)
// setTimeout(check_for_event, 3500)

function delay(){
  console.log(`----------------------------------------------------------------------------------------------------`)
 }
 
 setTimeout(delay, 1500)
// setTimeout(check_for_event, 4500)
console.log(/----------------------------------/);

// let town_house_1 = "blablas house";
//     let floor_in_town_r2_h1 = {
//         monster:"",
//         obtainable_items:[v1, v2, v3],
//         person_toInteract_with:"",
//         house_toInteract_with:"",
//     }
//     let floor_in_town_r2_h2 = {
//         monster:"",
//         obtainable_items:[v1, v2, v3],
//         person_toInteract_with:"",
//         house_toInteract_with:"",
//     }
//     let floor_in_town_r2_h3 = {
//         monster:"",
//         obtainable_items:[v1, v2, v3],
//         person_toInteract_with:"",
//         house_toInteract_with:"",
//     }
//     let floor_in_town_r1_h3 = {
//         monster:"",
//         obtainable_items:[v1, v2, v3],
//         person_toInteract_with:"",
//         house_toInteract_with:town_house_1,

//     }

const readline = require("readline-sync");
let userName = readline.question("May I have your name? ");
console.log("Hi " + userName + "!");

// console.log(playerCharacter)

// let floor_in_town_r2_h1_position = readline.question(
//   "do you want to move, left ? right? forward ?",
//   {
//     trueValue: ["left", "forward", "right"],
//   }
// );
// let floor_in_town_r3_h1_position = readline.question(
//   "do you want to move, left ? right? forward ?",
//   {
//     trueValue: ["left", "forward", "right"],
//   }
// );
// let floor_in_town_r1_h1_position = readline.question(
//   "do you want to move, left ? right? forward ?",
//   {}
// );

let playerCharacter = {
  name: userName,
  lvl: 1,
  exp: 0,
  class: "",
  position: "", // als callback playerchar.position ---- if event happened function without event else restart function
  position_inBattle: 1,
  //player condition
  health_head: 100,
  health_body: 100,
  health_leftArm: 100,
  health_rightArm: 100,
  health_leftLeg: 100,
  health_rightLeg: 100,
  get fullHealth() {
    return (
      this.health_head +
      this.health_body +
      this.health_leftArm +
      this.health_leftLeg +
      this.health_rightArm +
      this.health_rightLeg
    );
  },
  // function fullHealth(){ let fullHealth =
  //   playerCharacter.health_body +
  //   playerCharacter.health_head +
  //   playerCharacter.health_leftArm +
  //   playerCharacter.health_leftLeg +
  //   playerCharacter.health_rightArm +
  //   playerCharacter.health_rightLeg;
  // return fullHealth},
  mana: 100,
  status_condition_light_poisened: false,
  status_condition_badly_poisened: false,
  status_condition_confused: false,
  status_condition_frozen: false,
  status_condition_burned: false,
  status_condition_asleep: false,
  status_condition_demoralized: false,
  status_condition_buffed: false,
  //equipement
  equipement_head: "",
  equipement_Arms: "",
  equipement_Legs: "",
  equipement_Body: "",
  Weapon_LeftHand: "",
  Weapon_RightHand: "",
  Weapon_boothHands: "",
  // stats
  Strength: 10,
  Resistance: 10,
  dexterity: 10,
  concentration: 10,
  Speed: 10,
  Charisma: 10,
  Wisdom: 10,
  Luck: 10,
  tesing: function test() {
    console.log(4 + 4);
  },

  //battle condition
  inAttack: false,
  inDefense: false,
};
// let playerCharacter_skills = {
//   Attack: Attack(),
// };

// characty assistance
let playerCharacter2 = {
  name: userName,
  lvl: 1,
  exp: 0,
  class: "",
  position: "", // als callback playerchar.position ---- if event happened function without event else restart function
  position_inBattle: 1,
  //player condition
  health_head: 100,
  health_body: 100,
  health_leftArm: 100,
  health_rightArm: 100,
  health_leftLeg: 100,
  health_rightLeg: 100,
  get fullHealth() {
    return (
      this.health_head +
      this.health_body +
      this.health_leftArm +
      this.health_leftLeg +
      this.health_rightArm +
      this.health_rightLeg
    );
  },
  mana: 100,
  status_condition_light_poisened: false,
  status_condition_badly_poisened: false,
  status_condition_confused: false,
  status_condition_frozen: false,
  status_condition_burned: false,
  status_condition_asleep: false,
  status_condition_demoralized: false,
  status_condition_buffed: false,
  //equipement
  equipement_head: "",
  equipement_Arms: "",
  equipement_Legs: "",
  equipement_Body: "",
  Weapon_LeftHand: "",
  Weapon_RightHand: "",
  Weapon_boothHands: "",
  // stats
  Strength: 10,
  Resistance: 10,
  dexterity: 10,
  concentration: 10,
  Speed: 10,
  Charisma: 10,
  Wisdom: 10,
  Luck: 10,

  //battle condition
  inAttack: false,
  inDefense: false,
};
// let playerCharacter2_skills = {
//   Attack: Attack(),
// };
////////////////////////////////////////////77

let playerCharacter3 = {
  name: userName,
  lvl: 1,
  exp: 0,
  class: "",
  position: "", // als callback playerchar.position ---- if event happened function without event else restart function
  position_inBattle: 1,
  //player condition
  health_head: 100,
  health_body: 100,
  health_leftArm: 100,
  health_rightArm: 100,
  health_leftLeg: 100,
  health_rightLeg: 100,
  get fullHealth() {
    return (
      this.health_head +
      this.health_body +
      this.health_leftArm +
      this.health_leftLeg +
      this.health_rightArm +
      this.health_rightLeg
    );
  },
  mana: 100,
  status_condition_light_poisened: false,
  status_condition_badly_poisened: false,
  status_condition_confused: false,
  status_condition_frozen: false,
  status_condition_burned: false,
  status_condition_asleep: false,
  status_condition_demoralized: false,
  status_condition_buffed: false,
  //equipement
};

//////////////////////////////////////////
// Party slots (for each für den battle simulator um status conditionen zu checken)
let partySlots = {
  slot1: playerCharacter.name,
  slot2: playerCharacter2.name,
};
let partySlots_fullstatus = [
  { slot1: playerCharacter },
  { slot2: playerCharacter2 },
  { slot3: playerCharacter3 },
];
//character classes---------------------
function warrior() {
  playerCharacter.health_head + 150;
  playerCharacter.health_body + 100;
  playerCharacter.health_leftArm + 100;
  playerCharacter.health_rightArm + 100;
  playerCharacter.health_leftLeg + 100;
  playerCharacter.health_rightLeg + 100;
}


//// function choose class and inspect needed 
//// callback to readline sync needed after inspect
//// Create story parameters or event parameters
// als callback playerchar.position ---- if event happened function without event else restart function



/* player character  - black haired --- fantasy video game -- male young --- medival like beginner light-armor made  out of leather */
//character classes---------------------

// function Action_Move() {
//   console.log(playerCharacter.position);
//   if (floor_in_town_r2_h1_position === "left") {
//     check_for_event();
//     playerCharacter.position = floor_in_town_r1_h1_position;

//     console.log(playerCharacter.position);
//   }
//   if (floor_in_town_r2_h1_position === "right") {
//     check_for_event();
//     playerCharacter.position = floor_in_town_r3_h1_position;

//     console.log(playerCharacter.position);
//   }
// }

// let floor_in_town_r2_h1_position = readline.question('do you want to move, left ? right? forward ?', {
//     trueValue:['left', 'forward', 'right']
// });
// let floor_in_town_r3_h1_position = readline.question('do you want to move, left ? right? forward ?', {
//     trueValue:['left', 'forward', 'right']
// });
// let floor_in_town_r1_h1_position = readline.question('do you want to move, left ? right? forward ?', {Action_Move

// });

// Attacks ----------------------------------------------------------
const poisonAttack = function poison() {
  let poisondamage = 27;

  let Condition_checkNumber = Math.floor(Math.random() * 100 + 1);
  if (!playerCharacter && Condition_checkNumber < 85) {
    return poisondamage;
  }
  if (playerCharacter && Condition_checkNumber < 85) {
    playerCharacter.mana - 35;
    return poisondamage;
  }
  if (
    !playerCharacter &&
    Condition_checkNumber > 85 &&
    Condition_checkNumber < 98
  ) {
    selectedTarget.status_condition_poisened = true;
    return poisondamage;
  }
  if (
    playerCharacter &&
    Condition_checkNumber > 85 &&
    Condition_checkNumber < 98
  ) {
    playerCharacter.mana - 35;
    // selectedMonster.status_condition_poisened=true;
    return poisondamage;
  }
  if (
    !playerCharacter &&
    Condition_checkNumber >= 98 &&
    selectedTarget.status_condition_badly_poisened === false
  ) {
    selectedTarget.status_condition_badly_poisened = true;
  }
  //    if (playerCharacter && Condition_checkNumber>=98 && selectedMonster.status_condition_badly_poisened===false ){
  //     selectedMonster.status_condition_badly_poisened=true;

  //    }
};
const Attack = function tackle() {
  let tackledamage = 20;
  console.log(tackledamage);
};
// Attacks ----------------------------------------------------------

// battle ---------------------------------------------------------

// const battle = function battleMechanic()

console.table(playerCharacter);
console.log(playerCharacter.fullHealth);

// battle ---------------------------------------------------------
// show character stats and status----------------------------------------------------------
function displayStatus_outsideBattle() {
  console.table(partySlots);

  let displayedStatus_outsideBattle = readline.question(
    "which status you want to see. Input the index number displayed before to show the status. Write esc to go back to menu"
  );
  const characterIndex = parseInt(displayedStatus_outsideBattle);
  console.table(playerCharacter[characterIndex]);
}

//show character stats and status----------------------------------------------------------
displayStatus_outsideBattle();

playerCharacter.class = warrior();
console.table(playerCharacter);








































console.log(`
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░      ░░      ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ ░░  ░░░░░    ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░      ░░░░░░░░░░░   ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░ ░ ░  ░ ░░░░░░░░░░░░░    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░   ░   ░░░░░░░░░░░░░░ ░   ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░ ░░      ░░░░░░░░░░░░░░  ░░  ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░▒░░░░░░░░   ░░░░░░░░░░░░░░░     ░  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░ ░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░    ░ ▒▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░   ░░░░░░░░░░░░░░▓░░░░░░░░░░░░  ░   ░         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░  ░  ░░░░░░░░░░░▒█▒░░░░░░░░░             ░   ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░   ░ ░  ░░░░░░░░░▓██▒░░░░░░░ ░░░               ░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░    ░  ░░░░ ░ ░░████▒░░   ░    ░      ░       ▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓  ░ ░  ░░░ ░ ░ ░▒████▓░░░░  ░   ░      ░░░   ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒
▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓  ░ ░ ░░▓░░   ░░▓▒░░░▓██▓░░░░░   ░ ░   ░░░░  ░▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
▒▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░▓░ ░   ▒▒▒░░░░ ░░░▒▒▒▒▒▒▒▒▒▒▒░░░░   ░░░░░░░░░ ░░▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░  ░░ ░░░░░░▒▒▒▒▒░▒░░  ░▒▓░░ ░   ░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░   ░░▓░░░▒▒▒▒▓▓█▓██▓▒▒▒▓█▓░░░░ ░░░░░▒░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░   ░▒▒▒▒▓▓██▓▓███████████▒░░░ ░░░░▒▒  ░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░     ▒▓▓▓▓▓██▓███████████▓░░░ ░░░▒▒▒ ░░░░░░░░░░▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░      ▒▓▓▓▓▓██▓▓▓████████▓▒░░░ ░░▒▒  ░░░░░░░░░░░░▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░        ░▒▓▓▓▒▓▓▒▒▒███████▓▒░░░░░░░   ░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▒░░░   ░▒░░ ░  ▒▒▓▓▒░░▓████████▓░▒▒░░░░░░  ░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
▓▓▓▓▓▓▓▓▓▒▒▒▓▓▒▒▒░░░░    ▒▓▓░░░░▓░  ▒▒▒▓▓▓▓▓██▓▓▓▓▓▓▓▒▒░░░░░░ ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒
▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░    ░▓▓▓▓░░░░░▓░   ▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒
▒▓▓▓▓▓▓▓▓▒▒▒▒░░░░  ░▒▓▓▓▓▓░░░░░▓▓░     ▒▒▒░░▒▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▒▒▓▓▓▓▓▓▓▓▒▒▒▒
▓▓▓▓▓▓▓▒▒▓▓░░░░░░▓▓▓▓▓▓▓▒░░░░▒▓▓▒░      ░▒▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓░░░░░░▒▓▓▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▒▒▓▓▒░░░░▒▓▓▓▒▓▓▓▓▓░░░░▓▓▓░░         ░▒▒▒░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▒░░░░░▒▓▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▒▓▓▓▒░░░▒▓▓▓▓▓▒▓▓▓▒░░░▓▓▒░░░░ ░░ ░░        ░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▒░░░░▒▓▓▓▓▓▒▒▒▒
▒▓▓▒▓▓▓▒▒▒▒▓▓▓▓▓▓▓░▓▓▒░▒▒▒░░░░░░░░░░░░░       ░░░░░▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▒▒▒░░░▒▓▓▓▒▒▒▒
▒▓▒▓▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓░░░░░░░░░░░ ░░░░░░░░░  ░░░░ ░░░░░ ░░░░░░░░░ ░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▒▒░░░░▒▓▒▒▒▒
▒▓▒▓▓▒▒▒▒▒▓▓▓▓▓░░░░░░░░░░░░░░░▒░░░░░░░░░░ ░░░░░░░░░░░░░░░░░░░░  ░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▒░░░▒▓▒▒▒
▓▓▒▓▒▓▒▒▒▒▓▓░░░░░░░░░░░░░░▓▓▓▓░░░░░░░░░░   ░░░░░░░░░░░░░░░░░░    ░░░░░░░░░░░░░░░░░░░░▒▓▓▓▓▓▓▒░░░▒▒▒▒
▓▒▒▒▓▓▓▒▒▒░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓░░░░░░░░░░    ░░░░░░░░░░░░░░░░░░     ░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓░░▒▒▒▒
▒▓▓▒▓▓▓▓▒░░░░░░▓▓▓▒▓▓▓▓▓▓▓▓▒░░░░░░░░░     ░  ░▒▒▒░░░░░░░░░░░        ░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▒░▒▒▒
▒▓▓▒▒▓▓▓░░░░░▓▓▓▓▒▓▓▓▓▓▓▓▒░░░░░░░░░  ░ ░░░░░▒▒▓▓▓▒░░░░░░░░░░    ░░▒▒▒░░░░░░░░░░░░░░░░░░▒▓▒▓▓▓▓▓▒▒▒▒▒
▓▓▓▓▒▓▓▒░▒░░▓▓▓▒▒▓▓▓▓▓▒░░░░░░░░░      ░░░░░▒▓▓▓▒░░░░░░░░░░░ ░░▒▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░░░░░▒▒▓▓▓▓▓▒▒▒▒▒
▓▓▓▓▓▒▓▒░▓▒▒▓▓▓▒▓▒▒░░░░░░░░░         ░░░░░░▓▓▒░░░░░░░░░░░░░ ░▒▓▓▓███▓▓▒▒▒░░░░░░░░░░░░░░░░▒▓▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓▒░▓▒▒▓▓░░░░░░░░░             ░░░░░░░░░░░░ ░░░░░░░░░░░▒▓▓▓██████▓▒▒▒░░░░░░░░░░░░░▒░░▓▓▓▓▓▒▒▒▒▒
▓▓▓▓▓▓▓▓▒▒▒░░            ░▒▓▓▒░░░░░  ░░░░░░░░░   ░░░░░░░░░░▒▒▓▓▓███████▓▒▒░░░░░░░░░░░░░▓░░▒▓▓▓▓▒▒▒▒▒
▓▓▓▓▓▓▓▓▒░░░░     ░▒▒▓▒▒▓▓▓▓▓░░░░   ░░░░░░░░░░  ░░░░░░░░░░░▒▒▓▓▓███████▓▓▒▒░░░░░░░░░░░░▒▒░▒▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▓░▒▓░   ░▒▓▓▓▓▓▒▓▓▓▓▓▓▒      ░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓▓▓▓███████▓▓▒░░░░░░░░░░░▒▒▒░░▓▓▓▓▒▒▒▒▒
▒▓▓▓▓▓▒▓▓░░░░▒▒▓▓▓▓▓▓▓▓▓▓▒░   ░  ░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓███████▓▓▒░░░░░░░░░░▒▒░▒░░▓▓▓▓▒▒▒▒▒
▒▒▓▓▓▓▓▓░░░▒▓▓▓▓▒▓▓▓▓▓▓▒░  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓██████▓▓▓░░░░░░░░░░▒▓▒▒▒░░▓▓▓▒▒▒▒▒▒
▒▒▓▓▒▓▓░░░▒▓▓▓▓▓▓▓▓▒▓▓░░ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓█████▓▓▓░░░░░░░░░▒▓▓▒▒▒░▒▓▓▒▒▒▒▒▒▒
▒▒▒▒▒▓▓▒░▒▓▓▓▓▓▓▓▓▓▓▒░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░░░▒▒▒▓▓▓█████▓▓▒░░░░░░░░▒▒▓▒▒▒░░▒▓▓▒▒▒▒▒▒▒
▒▒▒▒▒▒▓▒▒▒▓▓▓▓▓▓▓▓▓▓░░░░░░▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░░░▒▒▒▓▓▓███▓▓▓░░░░░░░░▒▒▓▓▒▒▒░▒▓▓▓▓▒▒▒▒▒▒
▒▒▒▒▒▒▒▓▒▒▓▓▓▓▓▓▓▓▓▓▒░░░░▒▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▓▓▓▓█▓▓▓░░░░░░░▒▒▒▒▒▒▒▒░░▓▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░▒▒▒▒▓▓▓▓▓▒░░░ ░░░▒▒▓▒▒▒▒▒░░▒▓▓▓▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ▒▒▒▒▓▓▒░░░░░░░░▒▒▓▓▓▓▒▒▒░▒▓▓▓▓▓▓▓▓▓▓▒▒▒
▒▒▒▒▒▒▒▒▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓▒░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ░░░░░░░░░░░░▒▒▒▒▒▒▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▓▒▒▒▒▒▒▒▓▓▓▓▓▓█▓▓█▓▓▓▓▓▒▒
▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▓▓▓█████▓▓████▓█▓▓▒▒
▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒▒















▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██▓        ░███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓              ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██                 ███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██          ░         ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██   █                 ████▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█     ██                  ▓██▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓███    █         ▒░          ▒▒▒▓█▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓░░▒       ▒██████████           ░░ ░▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓██         ███████           █ ██  █▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▒   ▓         █        ▓█   ░█████ ▒▓▓▓▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓██      █████████████ ▒           ██▓▓▓▓▓▒▒▒▓▓▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▓▓▒▓▓▓▓▓██       ████▒█▓███▓█         ██████▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▓▓▒▒▓▓██       ████   █████              ░▓▓▓▓▓▓▒▓▓▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▒▒▒▒▒▓▒▓▓▓▓█▒░     ░ ██▒░░   ██▒   █     ███████▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▒▓▓▓▓▓▓▓▒▓▓░▒█▓   ██  ░░█████▒  ░  █▒     ▒▓░▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▒▒▓▓▓▓▓▓▒▒▒▓███▓   ███░▒   ░   ░██  ░░██████▓██▓▒▓▓▓▓▓▓▓▒▓▓▓▓▓▓▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▓▓▒▒▒▓████          ███     ██           ▓█████▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▓▒▒▓▓▓▒███░▒            ████░░███                 ████▓▒▓▓▓▓▓▓▓▓▒▓▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▒▒▓▒▓▒▒▓██░        ▒░      ███████           █▒        ███▓▓▓▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██            █░  ▒    ██     ░ ░░   ░█           ▒▓▓▓▓▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▓▓▒██    ░ ░  ████ ███     ░   ▒██▓░░░      ██▒▒▓██▓    ▒██▒▒▒▓▓▒▒▓▒▒▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒▒▓▒█        ░   ▒                ▓█░ ░        ███▓       ███▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██    ▒        ██   ░▓██   ░█▒░  ▓█▒▒▒░         ███▒    ░█▓▓▓▓▓▓▓▓▓▒▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▓█    ▒       ▓           ██▒ ░      ▒▒░░                ███▒▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒    ▓▒ ▒▒ ░█░  ▒      ▒█  ▓     ▓▓  ░░      ▒▒░         ██▓▓▓▓▓▓▓▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒█░ ▒ ▓███ ░          ▒▓░░░     ░░░▒▒░    █▓  ▓███ ▓        ██▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒█████░        ░▒        ▒▒░             █████  ░█▒  ░▒ █▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒█░ ░██████▓              ░                  ███████       ███▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▒░████████████                   ▒▒          ▓████████████ ▒█▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░██▒████████▓█              ░                 ▒▒███████████▒█▒▒▓▓▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▓█▒█████████░ █                                ▒▒█████████████░▒▒▓▓▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░████████████▒  █░                                 ███████████████▒▒▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ██▓▓▒███████▒░ ▓██             ░▒░░              ░ ████████████████▓▒▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ ███▒█▒▓██████░▒░█▓██                             ██░▓█████████████████░▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ███████▓▓████▒▒ ▒█▒▓█                            ██▓▒▒▓█████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░████████████▒▒▒ ██▒▓██                          ██▓▒▒██████████████████▓░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░ ░▒░░░░█████▒░ █▓▒▒██                          ██▓▓████▒ ░███████▓███▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░█▓░▒▓██   ▓███▒ ▓▓▓███                         ██▓▓▓█▒▒░ ██▓▒████▓███▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░██▓▒▓█████▒  ░▒▓█▒██                            ███▒▓ ▒██▓▒▒████████▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░██       ▓██▒░░██▒█         ▓▓███▓          ░     ██▓░  ▓▓▓██████████▒ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░           ▒▓▒▒▒██  ░▓▓█▒      ▒████            ░█▓█▓   ▒▓█▓████▒  ░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█            █▓▒▒██           ░█░     ░▓▒   ▒▒     █▓▓▓▒ ▓██████     ▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█           ░█▒▓██    ░░                 ▒░       ▒█▒▒▓█▒ ░           █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░          ████ ▓       ▒▒   ██                  ▓█▒▒▒▒▓█            █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█          ██   █░            ▒█▒█▒░░       ░▒     █▓▒▒▒▒██       ▒▒  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░   ░░   ░█▓▓▓▒▒                      ▒▓     ░     █▒▒▒▒▒█▒      ▒░  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▓        █▓▒▒██            ██░  ▒█▓█▒  ░░   ▓░     █▓▒▒▒▒▓█          █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▓       ██▒▒▓█      ░                     ▒▓        █▓▒▒▒▒█      ▓░  █████▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█        █▒▒▒█  ▒                             ░▒░    ▒█▒▒▒▒█▒         ▒    ▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓░   ░    █▒▒▓  █   ▒ █░                 ▓▒  ░         ▓▓▒▒▒▓█             ▒▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓       ██▒▒▒  █    █                   █▓█ ▓          █▒▒▒▒█░         ███▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█        █▒▒▓▒█    ░            ▒        █  ██         ▓▒▒▒▒█         ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓█        ▒█▒▒▒█   ▒                       ▒  ░        ██▒▒▒▒██        ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 
 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓  ░      ▓▒▒▓▓                       ░   ░           ██▒▒▒██          █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 

`)        














/// CLEARING THE TERMINAL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const { exec } = require("child_process");

// // Function to clear the terminal
// function clearTerminal() {
//   const clearCommand = process.platform === "win32" ? "cls" : "clear";
//   exec(clearCommand, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error clearing the terminal: ${error.message}`);
//       return;
//     }
//     console.log("Terminal cleared.");
//   });
// }

// // Use this function whenever you want to clear the terminal
// clearTerminal();


module.exports={
  check_for_event,
}