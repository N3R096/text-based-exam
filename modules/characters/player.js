
const exp_system =require('../EXP_SYSTEM/lvl_system.js');
const  Potions = require('../Items/potions/potion');
const spells = require('../skills/spells')

let playerCharacter = {
    name: "j",
    lvl: 1,
    exp: 300,
    needed_exp:253,
    class: "",
    position: "", // als callback playerchar.position ---- if event happened function without event else restart function
    position_inBattle: 1,
    //player condition
    health_head: 10,
    health_body: 10,
    health_leftArm: 10,
    health_rightArm: 10,
    health_leftLeg: 10,
    health_rightLeg: 10,
    get currentHealth() {
      return (
        this.health_head +
        this.health_body +
        this.health_leftArm +
        this.health_leftLeg +
        this.health_rightArm +
        this.health_rightLeg
      );
    },
    full_health_head: 100,
    full_health_body: 100,
    full_health_leftArm: 100,
    full_health_rightArm: 100,
    full_health_leftLeg: 100,
    full_health_rightLeg: 100,
    get fullHealth() {
      return (
        this.full_health_head +
        this.full_health_body +
        this.full_health_leftArm +
        this.full_health_leftLeg +
        this.full_health_rightArm +
        this.full_health_rightLeg
      );
    },
    // function fullHealth(){ let fullHealth =
    //   playerCharacter.health_body +
    //   playerCharacter.health_head +
    //   playerCharacter.health_leftArm +
    //   playerCharacter.health_leftLeg +
    //   playerCharacter.health_rightArm +
    //   playerCharacter.health_rightL  // function toss_Item(string){
    
  //   const removableitem = string.findIndex( string => string.name === rl1)
  //  console.log(removableitem)
   
  //     if (removableitem !== -1) {
  //       // Remove the item from the inventory
  //       playerCharacter_Inventory.splice(removableitem, 1);
  //       console.log(`Item '${rl1}' removed from the inventory.`);
  //     } else {
  //       console.log(`Item '${rl1}' not found in the inventory.`);
  //     }}


//   // }toss_Item(playerCharacter_Inventory)
// }
// itemd()
    fullMana: 100,
    currentMana:100,
    fullEndurance:100,
    currentEndurance:100,
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
    Dexterity: 10,
    Concentration: 10,
    Speed: 20,
    Charisma: 10,
    Wisdom: 10,
    Luck: 10,
    full_Inventory_weight:170,
    used_Inventory_weight:0,
    
     Techniques:["Attack"],



     playableChar:true,
  };
  // let playerCharacter_skills = {
  //   Attack: Attack(),
  // };


module.exports= {
playerCharacter,



}














// PLAYER CHARACTER ICON MALE \\\\\



