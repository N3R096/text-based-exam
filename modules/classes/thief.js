//let playercheck = require('/home/dci-student/Desktop/text-based-exam/new_beginning')
//--------WARRIOR --------\\\\\

// const { playerCharacter } = require("../characters/player")

function char_class__THIEF(playerCharacter) {
  if (playerCharacter.class === "Thief") {
    playerCharacter.health_head += 20;
    playerCharacter.health_body += 20;
    playerCharacter.health_leftArm += 20;
    playerCharacter.health_rightArm += 20;
    playerCharacter.health_leftLeg += 20;
    playerCharacter.health_rightLeg += 20;
    playerCharacter.Mana -= 30;
    playerCharacter.Endurance+=0;
    playerCharacter.Strength -= 2;
    playerCharacter.Speed+=7;
    playerCharacter.Resistance-=1;
    playerCharacter.Dexterity +=3
    playerCharacter.Concentration+=2;
    playerCharacter.Charisma+=4;
    playerCharacter.Wisdom -=2;
    playerCharacter.Luck+=7;
    
  //   player.skills={
  //     double_slash:"double_slash"
  //   }
  }
  return playerCharacter;
}
function char_lvlUp_THIEF(playerCharacter) {
  if (playerCharacter.class === "Thief") {
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
    char_class__THIEF,
char_lvlUp_THIEF,
}




/////----EXPORTS ------\\\\\


