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

function fuckthat(a,b,c){

techniques.Attack(a)
}


module.exports={
 fuckthat,
}