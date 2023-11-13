

const OW_VALUES = require('../../overworld/overworld_conditions')
const UI= require('../user_interface')
const rl =require('readline-sync')
const check =require('../../Battle/battle')
const mons_perArea=require('../../monsters/monsterPer_Area')
const itemAdd=require('../inventory')


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
   check.battle()
    } 
    ///else if (randomFcheckNumber < 10) {
    //   let randomItemFound = Math.floor(Math.random() * mons_perArea[current_area].items_inArea.length);
    //   let selectedItem = item_variants[randomItemFound];
    //   console.log("you found ", selectedItem);
 //} 
  if (randomFcheckNumber < 85 && randomFcheckNumber > 0) {
      console.log("nothing in sight");
    }
    // else if (chest){
    //     console.log('chest found')
    // }
  }
  
  







function waiting(){
if (OW_VALUES.currentPosition.inTown){
    OW_VALUES.timeCounter(0.5)
   

}
if (OW_VALUES.currentPosition.inDungeon){
    OW_VALUES.timeCounter(1)
check_for_event()

}
if (OW_VALUES.currentPosition.atOpenField){
    OW_VALUES.timeCounter(30)
   check_for_event()


}}


function resting(){
  if (OW_VALUES.currentPosition.inTown){
    console.log(`<-|You cannot rest inside a town or a city. People don't want camping people in the middle of the streets.
    You need to go to an inn or your own House or appartment.|->`)
  
  }
  if (!OW_VALUES.currentPosition.inTown){
  rl.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']});

  const addNumber=rl.question(`||||||||<----How long do you want to rest?-------------------------------------------------------------------------<<|
  ||||||| >--Input a number between 1-48<-- |||||||`)
OW_VALUES.timeCounter(addNumber)

check_for_event()

  }



}






module.exports={
    waiting,
  resting,
}





















