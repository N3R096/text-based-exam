const rl =require('readline-sync');
const player  = require('../characters/player');
const  assistance_Character = require('../characters/assistance_character')
const team = require('../characters/TEAM')
const att =require('../Battle/attack')



////////--------Techniques---------------////////////////////

  const Normal_Attack = {
     damage: 20,
    Accuracy:97,
    Description:"A normal attack.",
    effect:"",
   }
/////////////////////////////////////////////
function Attack (target_, attacker_,index,order_,byPlayer_selectedTarget,Attacking_Player ){
  if(target_.playableChar===true){
    target_.health_head-=10;
    target_.health_body-= 10;
    target_.health_leftArm-= 10;
    target_.health_rightArm-=10;
    target_.health_leftLeg-= 10;
    target_.health_rightLeg-=10;
    console.log(target_.currentHealth,target_.name)
    
  }

  console.log("Attack starts here ")  
  if (attacker_.playableChar) {console.log(("trolololol"))
console.log( `>>>>>>>>>>>>>>><
`,attacker_.name,`attacked`,target_.name,`>>>>>>>>>>>>>>>>>>>>><<<<<<`)
target_.HP-=60
console.log(target_)} 

  
} 

   ////////////////////////////////////////////////////////////////////)
   function Bite (target_, attacker_,order_ ){
    if(target_.playableChar===true){
      target_.health_head-=0;
      target_.health_body-= 30;
      target_.health_leftArm-= 0;
      target_.health_rightArm-=0;
      target_.health_leftLeg-= 0;
      target_.health_rightLeg-=0;
      console.log(target_)
      console.log("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")}
  
    console.log("Attack starts here ")  
    if (attacker_.playableChar) {console.log(("trolololol"))} 
  
    
  } 
   ////////////////////////////////////////////////////////////////////)







  const Howl = {
    damage: 0,
   Accuracy:70,
   Description:"Can cause demoralization. Always strengthens the user.",
   effect:"",
  }
  const RulerS_Howl = {
    damage: 0,
   Accuracy:100,
   Description:"Can cause demoralization. Strenghtens the user's party",
   effect:function (){

   },
  }

  const doubleSlasch ={
    damage:17,
    Accuracy:97,
    Descritpion:"Two slashes, usually executed with claws or a sword. Can cause bleeding, the loss of a body part or a 1H-KO.",
    effect:"",
  }
  ////////////////////////////////////////////


  //////////////////////////////////////////////////



  module.exports={
    Normal_Attack,
      Attack,
    
    
  }




















  