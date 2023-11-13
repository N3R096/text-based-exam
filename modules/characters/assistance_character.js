
let assistance_Character = {
    name: "Sanctara",
    lvl: 1,
    exp: 0,
    class: "Magician",
    // als callback playerchar.position ---- if event happened function without event else restart function
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
    Mana: 100,
    Endurance:100,
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
    Speed: 10,
    Charisma: 10,
    Wisdom: 10,
    Luck: 10,
    
   Techniques:["Attack"],
   Spells:["FireBall","Healing"],
   playableChar:true,
    //battle condition
    inAttack: false,
    inDefense: false,
  };
  // let playerCharacter_skills = {
  //   Attack: Attack(),
  // };

 


module.exports= {

assistance_Character  ,



}















