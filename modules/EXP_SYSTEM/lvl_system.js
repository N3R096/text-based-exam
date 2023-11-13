const player_lvl = require('../characters/player')
const assistanceChar_lvl = require('../characters/assistance_character')
// const c  =require('../classes/archer')
// const c  =require('../classes/magician')
// const c  =require('../classes/thief')
// const c  =require('../classes/warrior')
const playerLevel = {
    1:0,
    2: 253.0,
    3: 380.5,
    4: 508.0,
    5: 635.5,
    6: 763.0,
    7: 890.5,
    8: 1018.0,
    9: 1145.5,
    10: 1273.0,
    11: 1400.5,
    12: 1528.0,
    13: 1655.5,
    14: 1783.0,
    15: 1910.5,
    16: 2038.0,
    17: 2165.5,
    18: 2293.0,
    19: 2420.5,
    20: 2548.0,
    21: 2675.5,
    22: 2803.0,
    23: 2930.5,
    24: 3058.0,
    25: 3185.5,
    26: 3313.0,
    27: 3440.5,
    28: 3568.0,
    29: 3695.5,
    30: 3823.0
  };



const assistanceLevel = {
    1:0,
    2: 253.0,
    3: 380.5,
    4: 508.0,
    5: 635.5,
    6: 763.0,
    7: 890.5,
    8: 1018.0,
    9: 1145.5,
    10: 1273.0,
    11: 1400.5,
    12: 1528.0,
    13: 1655.5,
    14: 1783.0,
    15: 1910.5,
    16: 2038.0,
    17: 2165.5,
    18: 2293.0,
    19: 2420.5,
    20: 2548.0,
    21: 2675.5,
    22: 2803.0,
    23: 2930.5,
    24: 3058.0,
    25: 3185.5,
    26: 3313.0,
    27: 3440.5,
    28: 3568.0,
    29: 3695.5,
    30: 3823.0
  };


  function lvlUp(){
    if (player_lvl.playerCharacter.exp >= player_lvl.playerCharacter.needed_exp){
      player_lvl.playerCharacter.exp -= player_lvl.playerCharacter.needed_exp;
      player_lvl.playerCharacter.lvl+=1
  const newLVL = player_lvl.playerCharacter.lvl+1;
      player_lvl.playerCharacter.needed_exp=playerLevel[newLVL]
      console.log(`||<<--You leveled up!!-->>||`)
      console.table(player_lvl.playerCharacter)
        
    }
  }




  module.exports={
    lvlUp,
    playerLevel,
    assistanceLevel
  }