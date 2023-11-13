//let playercheck = require('/home/dci-student/Desktop/text-based-exam/new_beginning')
//--------WARRIOR --------\\\\\

// const { playerCharacter } = require("../characters/player")
function char_class__ARCHER(playerCharacter) {
  if (playerCharacter.class === "Archer") {
    playerCharacter.health_head -= 20;
    playerCharacter.health_body -= 20;
    playerCharacter.health_leftArm -= 20;
    playerCharacter.health_rightArm -= 20;
    playerCharacter.health_leftLeg -= 20;
    playerCharacter.health_rightLeg -= 20;
    playerCharacter.Mana += 50;
    playerCharacter.Endurance+=50;
    playerCharacter.Strength -= 3;
    playerCharacter.Speed+=4;
    playerCharacter.Resistance-=2;
    playerCharacter.Dexterity +=4
    playerCharacter.Concentration+=9;
    playerCharacter.Charisma+=2;
    playerCharacter.Wisdom +=0;
    playerCharacter.Luck+=3;
    
  //   player.skills={
  //     double_slash:"double_slash"
  //   }
  }
  return playerCharacter;
}

function char_lvlUp__ARCHER(playerCharacter) {
  if (playerCharacter.class === "Archer") {
    playerCharacter.health_head += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.health_body += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.health_leftArm += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.health_rightArm += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.health_leftLeg += 8*((playerCharacter.lvl/2)+8);
    playerCharacter.health_rightLeg += 8*((playerCharacter.lvl/2)+8);
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
  char_class__ARCHER,
char_lvlUp__ARCHER,
}
/////----EXPORTS ------\\\\\
