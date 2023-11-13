const character= require('./player');
const assistance =require('./assistance_character');


const TEAM_Character = {
    1:character.playerCharacter.name,
    2:assistance.assistance_Character.name,
}

const status_Characters={
    1:character.playerCharacter,
    2:assistance.assistance_Character,
}

console.log()


module.exports={
    TEAM_Character,
    status_Characters,
    
}