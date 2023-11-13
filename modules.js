// const  playerCharacter  = require("./modules/characters/player");
// const assistantCharacter = require("./modules/characters/assistance_character");


export * from './modules/characters/player';
export * from './modules/characters/assistance_character';









function inBattle_user_interface(){
    OW_condition.TimeOverall()
    // userInterface_rl.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7']});
    const battle_interaction = userInterface_rl.question(`
    
    ||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
    |...................................................................................................................................|
    |>>--||1:-- Attack ||2:-- Techniques  ||3:-- Spells || 4:-- Team || 5:-- Inventory ||8:-- Settings||--<<|
    |-----------------------------------------------------------------------------------------------------------------------------------|
    
    <- Your input ? ->`)
    const battle_interaction_input = battle_interaction;
    console.log(battle_interaction_input)
    //////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="1"){}
    
    
    /////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="2"){}
    
    
    /////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="3"){}
    
    
    /////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="4"){
    console.log(TEAM.TEAM_Character)
    const whichCharacterStatus = rl.question(`<_--Which status do you want to see ?
    
    `)
    
    
    console.table(TEAM.status_Characters[whichCharacterStatus])
       inBattle_user_interface() 
    }
    
    /////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="5"){
    
    console.table(inventory.DisplayInventory())
    inBattle_user_interface()}
    
    /////////////////////////////////////////
    /////////////////////////////////////////
    
    if (battle_interaction_input==="6"){`coming soon`
    inBattle_user_interface()}
    
    /////////////////////////////////////////
    /////////////////////////////////////////
  
    }



    function useSpell(char){
        
    }














/* 

function battle(){
   //////////////////////////////////////////////////
   function start_battle(enemy_inArea, team){
     const partyMember = team;
     const enemyNumber_check = Math.floor(Math.random()* 40);
     
     if (enemyNumber_check>= 0 && enemyNumber_check<10){
   const m1 = Math.floor(Math.random() * enemy_inArea.length)
   const m2 = Math.floor(Math.random() * enemy_inArea.length)
  //
  const attackingM1=Object.create(monster[monsterinArea.mons_array[m1]]); 
  attackingM1.battleId1_health=attackingM1.HP
  const attackingM2= Object.create(monster[monsterinArea.mons_array[m2]]);
  attackingM2.battleId2_health=attackingM2.HP
 //
   const participants=[attackingM1, attackingM2,partyMember[1],partyMember[2]]
   return participants
     }
   
   
     if (enemyNumber_check>= 10 &&enemyNumber_check<20){ 
     const m1 = Math.floor(Math.random() * enemy_inArea.length)
     const m2 = Math.floor(Math.random() * enemy_inArea.length)
     const m3 = Math.floor(Math.random() * enemy_inArea.length)
   //
   const attackingM1=Object.create(monster[monsterinArea.mons_array[m1]]); 
   attackingM1.battleId1_health=attackingM1.HP
   const attackingM2= Object.create(monster[monsterinArea.mons_array[m2]]);
   attackingM2.battleId2_health=attackingM2.HP
   const attackingM3=Object.create(monster[monsterinArea.mons_array[m3]]); 
   attackingM3.battleId3_health=attackingM3.HP
 
     //
     const participants=[attackingM1, attackingM2, attackingM3,partyMember[1],partyMember[2]]
     return participants
       }
   
     if (enemyNumber_check>= 20 && enemyNumber_check<35){
   const m1 = Math.floor(Math.random() * enemy_inArea.length)
   const m2 = Math.floor(Math.random() * enemy_inArea.length)
   const m3 = Math.floor(Math.random() * enemy_inArea.length)
   const m4 = Math.floor(Math.random() * enemy_inArea.length)
   //
   const attackingM1=Object.create(monster[monsterinArea.mons_array[m1]]); 
   attackingM1.battleId1_health=attackingM1.HP
   const attackingM2= Object.create(monster[monsterinArea.mons_array[m2]]);
   attackingM2.battleId2_health=attackingM2.HP
   const attackingM3=Object.create(monster[monsterinArea.mons_array[m3]]); 
   attackingM3.battleId3_health=attackingM3.HP
   const attackingM4=Object.create(monster[monsterinArea.mons_array[m4]]);
   attackingM4.battleId4_health=attackingM4.HP 
   //  
   const participants=[attackingM1, attackingM2, attackingM3, attackingM4,partyMember[1],partyMember[2]]
 
   return participants
     }
     
   
   
     if (enemyNumber_check>= 35){
   const m1 = Math.floor(Math.random() * enemy_inArea.length)
   const m2 = Math.floor(Math.random() * enemy_inArea.length)
   const m3 = Math.floor(Math.random() * enemy_inArea.length)
   const m4 = Math.floor(Math.random() * enemy_inArea.length)
   const m5 = Math.floor(Math.random() * enemy_inArea.length)
   //
   const attackingM1=Object.create(monster[monsterinArea.mons_array[m1]]); 
   attackingM1.battleId1_health=attackingM1.HP
   const attackingM2= Object.create(monster[monsterinArea.mons_array[m2]]);
   attackingM2.battleId2_health=attackingM2.HP
   const attackingM3=Object.create(monster[monsterinArea.mons_array[m3]]); 
   attackingM3.battleId3_health=attackingM3.HP
   const attackingM4=Object.create(monster[monsterinArea.mons_array[m4]]);
   attackingM4.battleId4_health=attackingM4.HP 
   const attackingM5=Object.create(monster[monsterinArea.mons_array[m5]]);
   attackingM5.battleId5_health=attackingM5.HP
   //  
   const participants=[attackingM1, attackingM2, attackingM3, attackingM4, attackingM5,partyMember[1],partyMember[2]]
   return participants
     }
   }////////////////////////////////////////////////////
 
  function getBattleOrder(){
    const battle_order=start_battle(monsterinArea.mons_array, party.status_Characters)
   
  
  battle_order.sort((a,b) => b.Speed - a.Speed);
  
  console.log(battle_order)
 
  }
 getBattleOrder()
  */