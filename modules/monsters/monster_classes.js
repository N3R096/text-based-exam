const party = require('../characters/TEAM')
const monsterinArea=require('../monsters/monsterPer_Area')
const monster=require('../monsters/monsters')
const enemy_classes=require('../monsters/monster_classes')
const rl =require('readline-sync')
const techniques =require('../skills/techniques')
const spells =require('../skills/spells')
const inventory_inBattle =require('../User_Interface/inventory')
const ui = require('../User_Interface/user_interface')
const owc =require('../overworld/overworld_conditions')






class Creature {
    constructor(name, type, color, HP,fullHP, Strength, Resistance, Dexterity, Concentration, Speed, Charisma, Wisdom, Luck,Boolean,given_exp) {
      this.name = name;
      this.type = type;
      this.color = color;
      this.HP = HP;
      this.fullHP=fullHP;
      this.Strength = Strength;
      this.Resistance = Resistance;
      this.Dexterity = Dexterity;
      this.Concentration = Concentration;
      this.Speed = Speed;
      this.Charisma = Charisma;
      this.Wisdom = Wisdom;
      this.Luck = Luck;
      this.playableChar=Boolean;
      this.exp_given=given_exp;
    }

  }
  
  class Wolf extends Creature {
    constructor(name) {
      super(name, "animal", "grey", 115,115, 5, 2, 1, 8, 13, 1, 1, 2,false,13);
      this.techniques = [  
      "Attack"]
    }
  }
  
  class AlphaWolf extends Creature {
    constructor(name) {
      super(name, "Alpha animal", "grey", 175,175, 8, 4, 1, 10, 18, 1, 3, 4,false,18);
      this.techniques = 
        //1: "Bite",
      [  "Attack",
         ]
        //4: "Howl",
        //5: "RulerS_Howl"
      
    }
  }
  
  // Create instances of the Wolf and AlphaWolf classes
  const greyWolf = new Wolf("Grey Wolf");
  const alphaGreyWolf = new AlphaWolf("Alpha Grey")


  module.exports ={
    Creature,
    AlphaWolf,
    Wolf,

  }
  