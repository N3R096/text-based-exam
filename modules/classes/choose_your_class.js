// const { playerCharacter } = require("../characters/player");

// const { player } = require("../../new_beginning");
// const { playerCharacter } = require("../characters/player");
// const { char_class__ARCHER } = require("./archer");
// const { char_class__WARRIOR } = require("./warrior");
const player   = require('../characters/player')
const warrior  = require('./warrior')
const archer   = require('./archer')
const magician = require('./magician')
const thief    = require('./thief')
const assistance = require('../characters/assistance_character')





function choose_your_class(playerCharacter){
    if(playerCharacter.class === "Magician"){
        magician.char_class__MAGICIAN(player.playerCharacter);
    } 
    if(playerCharacter.class === "Warrior"){
        warrior.char_class__WARRIOR(player.playerCharacter);
    } 
    if(playerCharacter.class === "Thief"){
        thief.char_class__THIEF(player.playerCharacter);
    } 
    if(playerCharacter.class === "Archer"){
        archer.char_class__ARCHER(player.playerCharacter);
    } return playerCharacter
}
function assistance_class(assistance_Character){
    
        magician.char_class__MAGICIAN(assistance.assistance_Character);
return assistance_Character
}
function assignCLass(choosen_Class){
    if (choosen_Class === "1"){
        player.playerCharacter.class = "Warrior";

    }
    if (choosen_Class === "2"){
        player.playerCharacter.class = "Magician";

    }
    if (choosen_Class === "3"){
        player.playerCharacter.class = "Archer";

    }
    if (choosen_Class === "4"){
        player.playerCharacter.class = "Thief";

    } 
   
}



module.exports = {
    choose_your_class,
    assignCLass,
    assistance_class,

}
