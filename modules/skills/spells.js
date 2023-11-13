const rl =require('readline-sync');
const player  = require('../characters/player');
const  assistance_Character = require('../characters/assistance_character')

const fireBall={
    Name:"Fireball",
    damage:30,
    Accuracy:95,
    mana:30,
    Description:"Shoots a ball of fire at the opponent. May burn the target.",
   

}

 function FireBall(selectedTarget){
        const burn_check=Math.floor(Math.random()*100)
        if (selectedTarget.name !== player.playerCharacter.name||selectedTarget.name!==assistance_Character.assistance_Character.name)
        {
            selectedTarget.currentHP -=70;
            if (burn_check>=87){
                selectedTarget.status_condition_burned=true;
            }
        }
        if (selectedTarget.name === player.playerCharacter.name||selectedTarget.name===assistance_Character.assistance_Character.name)
        {
            selectedTarget.health_head-=30;
            selectedTarget.health_body-=30;
            selectedTarget.health_leftArm-=30;
            selectedTarget.health_rightArm-=30;
            selectedTarget.health_leftLeg-=30;
            selectedTarget.health_rightLeg-=30;
            if (burn_check>=87){
                selectedTarget.status_condition_burned=true;

            }
        }return selectedTarget
    }









const waterBall ={
    damage:20,
    Accuracy:95,
    mana :15,
    Description:"Shoots a ball of compressed water at the opponent.",
    effect:function (selectedTarget){
      
        if (selectedTarget !== player.playerCharacter.name||selectedTarget!==assistance_Character.assistance_Character.name)
        {
            selectedTarget.currentHP -=this.damage;
          
        }
        if (selectedTarget === player.playerCharacter.name||selectedTarget===assistance_Character.assistance_Character.name)
        {
            selectedTarget.health_head-=15;
            selectedTarget.health_body-=20;
            selectedTarget.health_leftArm-=5;
            selectedTarget.health_rightArm-=5;
            selectedTarget.health_leftLeg-=5;
            selectedTarget.health_rightLeg-=5;
         
        }
    } 
}

const Heal={
    Name:"Healing",
    damage:0,
    healing:15,
    Accuracy:100,
    Description:"Minor heals the Target by 15 points on each body part.",
    mana :40,
   
}



function Healing (selectedTarget){
      
        if (selectedTarget.name !== player.playerCharacter.name||selectedTarget.name!==assistance_Character.assistance_Character.name)
        {
            selectedTarget.currentHP +=40;
          
        }
        if (selectedTarget.name === player.playerCharacter.name||selectedTarget.name===assistance_Character.assistance_Character.name)
        {
            selectedTarget.health_head+=15;
            selectedTarget.health_body+=15;
            selectedTarget.health_leftArm+=15;
            selectedTarget.health_rightArm+=15;
            selectedTarget.health_leftLeg+=15;
            selectedTarget.health_rightLeg+=15;
         
        }return selectedTarget
    } 



















module.exports={
    fireBall,
    FireBall,
    Healing,
    Heal,
    // waterBall,
    // Heal,
}