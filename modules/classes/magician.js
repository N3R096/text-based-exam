//let playercheck = require('/home/dci-student/Desktop/text-based-exam/new_beginning')
//--------WARRIOR --------\\\\\

// const { playerCharacter } = require("../characters/player")

function char_class__MAGICIAN(playerCharacter) {
  if (playerCharacter.class === "Magician") {
    playerCharacter.health_head += 20;
    playerCharacter.health_body += 20;
    playerCharacter.health_leftArm += 20;
    playerCharacter.health_rightArm += 20;
    playerCharacter.health_leftLeg += 20;
    playerCharacter.health_rightLeg += 20;
    playerCharacter.Mana += 150;
    playerCharacter.Endurance-=30;
    playerCharacter.Strength -= 4;
    playerCharacter.Speed-=2;
    playerCharacter.Resistance+=1;
    playerCharacter.Dexterity +=3
    playerCharacter.Concentration+=7;
    playerCharacter.Charisma+=2;
    playerCharacter.Wisdom +=7;
    playerCharacter.Luck+=2;
    
  //   player.skills={
  //     double_slash:"double_slash"
  //   }
  }
  return playerCharacter;
}
function char_lvlUp_MAGICIAN(playerCharacter) {
  if (playerCharacter.class === "Magician") {
    playerCharacter.health_head += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.health_body += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.health_leftArm += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.health_rightArm += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.health_leftLeg += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.health_rightLeg += 2*((playerCharacter.lvl/2)+8);
    playerCharacter.Mana += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.Endurance+=15*((playerCharacter.lvl/2)+8);
    playerCharacter.Strength += 0;
    playerCharacter.Speed+=0;
    playerCharacter.Resistance+=0;
    playerCharacter.Dexterity +=0
    playerCharacter.Concentration+=0;
    playerCharacter.Charisma+=0;
    playerCharacter.Wisdom +=0;
    playerCharacter.Luck+=0;
    
  //   player.skills={
  //     double_slash:"double_slash"
  //   }
  }
  return playerCharacter;
}


/////----EXPORTS ------\\\\\
module.exports = {
    char_class__MAGICIAN,
char_lvlUp_MAGICIAN,
}




/////----EXPORTS ------\\\\\


