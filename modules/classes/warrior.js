//let playercheck = require('/home/dci-student/Desktop/text-based-exam/new_beginning')
//--------WARRIOR --------\\\\\

// const { playerCharacter } = require("../characters/player")

function char_class__WARRIOR(playerCharacter) {
    if (playerCharacter.class === "Warrior") {
      playerCharacter.health_head += 80;
      playerCharacter.health_body += 80;
      playerCharacter.health_leftArm += 80;
      playerCharacter.health_rightArm += 80;
      playerCharacter.health_leftLeg += 80;
      playerCharacter.health_rightLeg += 80;
      playerCharacter.Mana -=30;
      playerCharacter.Endurance+=150
      playerCharacter.Strength += 7;
      playerCharacter.Speed-=2;
      playerCharacter.Resistance+=7;
      playerCharacter.Dexterity +=2
      playerCharacter.Concentration+=4
      playerCharacter.Charisma+=0;
      playerCharacter.Wisdom -=4;
      playerCharacter.Luck+=0;
      
    //   player.skills={
    //     double_slash:"double_slash"
    //   }
    }
    return playerCharacter;
  }
  

  function char_lvlUp_WARRIOR(playerCharacter) {
    if (playerCharacter.class === "Warrior") {
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
    char_class__WARRIOR,
 char_lvlUp_WARRIOR,
}




/////----EXPORTS ------\\\\\


