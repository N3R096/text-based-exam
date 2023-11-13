
//// ------ MINOR POTION -------\\\\\\\\\\\\\\\\\\\\\\\\\

const { playerCharacter } = require("../../characters/player")
const checkStatus_condition = require("../../overworld/overworld_conditions")

const Potion={
  name:"Potion",
effect:function (onWho){
    function potionBody(onWho){
      if(onWho.health_body <= (onWho.full_health_body -80)){
       return onWho.health_body+=80
      }else{return onWho.health_body=onWho.full_health_body}
    }
    function potionHead(onWho){
      if(onWho.health_head <= (onWho.full_health_head -80)){
        onWho.health_head+=80
      }else{onWho.health_head=onWho.full_health_head}
  
    } function potionLeftLeg(onWho){
      if(onWho.health_leftLeg <= (onWho.full_health_leftLeg -80)){
        onWho.health_leftLeg+=80
      }else{onWho.health_leftLeg=onWho.full_health_leftLeg}
  
    } function potionRightLeg(onWho){
      if(onWho.health_rightLeg <= (onWho.full_health_rightLeg -80)){
        onWho.health_rightLeg+=80
      }else{onWho.health_rightLeg=onWho.full_health_rightLeg}
  
    } function potionleftArm(onWho){
      if(onWho.health_leftArm <= (onWho.full_health_leftArm -80)){
        onWho.health_leftArm+=80
      }else{onWho.health_leftArm=onWho.full_health_leftArm}
  
    } function potionrightArm(onWho){
      if(onWho.health_rightArm <= (onWho.full_health_rightArm -80)){
        onWho.health_rightArm+=80
      }else{onWho.health_rightArm=onWho.full_health_rightArm}
    }
  
    potionHead(onWho)
    potionBody(onWho)
    potionLeftLeg(onWho)
    potionleftArm(onWho)
    potionRightLeg(onWho)
    potionrightArm(onWho)
}, 
amount:3,
full_value:300,
weight:0.1,
get full_weight(){return (this.amount * this.weight);},
descritpion:"This minor potion heals all your body parts for 80hp. Doesn't heal status conditions. Can't heal lost body parts. ",
equipable:false,
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const HiPotion = {
    name:"HiPotion",
    effect:function (onWho){
      function Hi_potionBody(onWho){
        if(onWho.health_body <= (onWho.full_health_body -150)){
         return onWho.health_body+=150
        }else{return onWho.health_body=onWho.full_health_body}
      }
      function Hi_potionHead(onWho){
        if(onWho.health_head <= (onWho.full_health_head -150)){
          onWho.health_head+=150
        }else{onWho.health_head=onWho.full_health_head}
    
      } function Hi_potionLeftLeg(onWho){
        if(onWho.health_leftLeg <= (onWho.full_health_leftLeg -150)){
          onWho.health_leftLeg+=150
        }else{onWho.health_leftLeg=onWho.full_health_leftLeg}
    
      } function Hi_potionRightLeg(onWho){
        if(onWho.health_rightLeg <= (onWho.full_health_rightLeg -150)){
          onWho.health_rightLeg+=150
        }else{onWho.health_rightLeg=onWho.full_health_rightLeg}
    
      } function Hi_potionleftArm(onWho){
        if(onWho.health_leftArm <= (onWho.full_health_leftArm -150)){
          onWho.health_leftArm+=150
        }else{onWho.health_leftArm=onWho.full_health_leftArm}
    
      } function Hi_potionrightArm(onWho){
        if(onWho.health_rightArm <= (onWho.full_health_rightArm -150)){
          onWho.health_rightArm+=150
        }else{onWho.health_rightArm=onWho.full_health_rightArm}
      }
    
      Hi_potionHead(onWho)
      Hi_potionBody(onWho)
      Hi_potionLeftLeg(onWho)
      Hi_potionleftArm(onWho)
      Hi_potionRightLeg(onWho)
      Hi_potionrightArm(onWho)
  }, 
    amount:1,
    full_value:550,
    weight:0.205,
    get full_weight(){return (this.amount * this.weight);},
    descritpion:"This potion heals all your body parts for 150hp. Doesn't heal status conditions. Can't heal lost body parts. ",
    equipable:false,
}///ruby 
const GiPotion = {
  name:"GiPotion",
  effect:function (onWho){
    function Gi_potionBody(onWho){
      if(onWho.health_body <= (onWho.full_health_body -270)){
       return onWho.health_body+=270
      }else{return onWho.health_body=onWho.full_health_body}
    }
    function Gi_potionHead(onWho){
      if(onWho.health_head <= (onWho.full_health_head -270)){
        onWho.health_head+=270
      }else{onWho.health_head=onWho.full_health_head}
  
    } function Gi_potionLeftLeg(onWho){
      if(onWho.health_leftLeg <= (onWho.full_health_leftLeg -270)){
        onWho.health_leftLeg+=270
      }else{onWho.health_leftLeg=onWho.full_health_leftLeg}
  
    } function Gi_potionRightLeg(onWho){
      if(onWho.health_rightLeg <= (onWho.full_health_rightLeg -270)){
        onWho.health_rightLeg+=270
      }else{onWho.health_rightLeg=onWho.full_health_rightLeg}
  
    } function Gi_potionleftArm(onWho){
      if(onWho.health_leftArm <= (onWho.full_health_leftArm -270)){
        onWho.health_leftArm+=270
      }else{onWho.health_leftArm=onWho.full_health_leftArm}
  
    } function Gi_potionrightArm(onWho){
      if(onWho.health_rightArm <= (onWho.full_health_rightArm -270)){
        onWho.health_rightArm+=270
      }else{onWho.health_rightArm=onWho.full_health_rightArm}
    }
  
    Gi_potionHead(onWho)
    Gi_potionBody(onWho)
    Gi_potionLeftLeg(onWho)
    Gi_potionleftArm(onWho)
    Gi_potionRightLeg(onWho)
    Gi_potionrightArm(onWho)
}, 
  amount:1,
  full_value:800,
  weight:0.25,
  get full_weight(){return (this.amount * this.weight);},
  descritpion:"This potion heals all your body parts for 270hp. Doesn't heal status conditions. Can't heal lost body parts. ",
  equipable:false,
}



const potion_cure_poison= {
name:"Poison cure potion",
effect:function cureNormalPoison(){
  if (playerCharacter.status_condition_light_poisened){
    playerCharacter.status_condition_light_poisened=false;}},
full_value:400,
weight:0.12,
Description:"This potion heals a light poison."


}
let playerCharacter_Inventory1=[]
module.exports ={
Potion,
HiPotion,
GiPotion,

}