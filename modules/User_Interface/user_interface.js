const spell = require('../skills/spells')
const techniques=require('../skills/techniques')
const att =require('../Battle/attack')
const inventory = require('../User_Interface/inventory')
const OW_condition = require('../overworld/overworld_conditions')
const background_values=require('../overworld/Events/InteractionValues')
const userInterface_rl=require('readline-sync')
const character =require('../characters/player')
const wait = require('../User_Interface/Interactions/wating')
const  TEAM  = require('../characters/TEAM')
const rl = require('readline-sync')
const assistance=require('../characters/assistance_character')

function full_user_interface(){
OW_condition.TimeOverall()
// userInterface_rl.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7']});
const do_interaction = userInterface_rl.question(`

||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
|...................................................................................................................................|
|>>--||1:-- Move ||2:-- Interact  ||3:-- Search Area || 4:-- Team || 5:-- Inventory || 6:-- Wait || 7:-- Rest  ||8:-- Settings||--<<|
|-----------------------------------------------------------------------------------------------------------------------------------|

<- Your input ? ->`)
const interaction_input = do_interaction;
console.log(interaction_input)
//////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="1"){}


/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="2"){}


/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="3"){}


/////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="4"){
console.log(TEAM.TEAM_Character)
const whichCharacterStatus = rl.question(`<_--Which status do you want to see ?

`)


console.table(TEAM.status_Characters[whichCharacterStatus])
   full_user_interface() 
}

/////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="5"){

console.table(inventory.DisplayInventory())
full_user_interface()}

/////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="6"){wait.waiting()
full_user_interface()}

/////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="7"){wait.resting()
    full_user_interface()
}

/////////////////////////////////////////
/////////////////////////////////////////

if (interaction_input==="8"){}

/////////////////////////////////////////
/////////////////////////////////////////
}
// full_user_interface()





// function full_user_interface(){
//     OW_condition.TimeOverall()
//     // userInterface_rl.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7']});
//     const battle_interaction = userInterface_rl.question(`
    
//     ||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
//     |...................................................................................................................................|
//     |>>--||1:-- Attack ||2:-- Techniques  ||3:-- Spells || 4:-- Team || 5:-- Inventory ||8:-- Settings||--<<|
//     |-----------------------------------------------------------------------------------------------------------------------------------|
    
//     <- Your input ? ->`)
//     const interaction_input = do_interaction;
//     console.log(interaction_input)
//     //////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="1"){}
    
    
//     /////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="2"){}
    
    
//     /////////////////////////////////////////
//     ///////////////////////////////////////////////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="3"){}
    
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="4"){
//     console.log(TEAM.TEAM_Character)
//     const whichCharacterStatus = rl.question(`<_--Which status do you want to see ?
    
//     `)
    
    
//     console.table(TEAM.status_Characters[whichCharacterStatus])
//        full_user_interface() 
//     }
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="5"){
    
//     console.table(inventory.DisplayInventory())
//     full_user_interface()}
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="6"){wait.waiting()
//     full_user_interface()}
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="7"){wait.resting()
//         full_user_interface()
//     }
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
    
//     if (interaction_input==="8"){}
    
//     /////////////////////////////////////////
//     /////////////////////////////////////////
//     }



//     ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// userinterface.js
// // userinterface.js
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// function inBattle_user_interface(battleOrder) {
//     OW_condition.TimeOverall();

//     const action_taker1 = character.playerCharacter;
//     const action_taker2 = assistance.assistance_Character;

//     const battle_interaction = userInterface_rl.question(`
    
//     ||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
//     |...................................................................................................................................|
//     |>>--||1:-- Attack ||2:-- Techniques  ||3:-- Spells || 4:-- Team || 5:-- Inventory ||8:-- Settings||--<<|
//     |-----------------------------------------------------------------------------------------------------------------------------------|
    
//     <- Your input ? ->`);

//     const battle_interaction = battle_interaction;
//     console.log(battle_interaction);

//     if (battle_interaction === "1") {
//         // Handle Attack
//     } else if (battle_interaction === "2") {
//         // Handle Techniques
//         if (background_values.inBattleCharacter.player) {
//             console.table(action_taker1.Techniques);
//         }
//         if (background_values.inBattleCharacter.assistant) {
//             console.table(action_taker2.Techniques);
//         }

//         const nav_techniques = userInterface_rl.question(`||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
//         <<--- INPUT THE NAME OF THE TECHNIQUE TO USE IT.--->>>Back to ui = 5
//         INPUT THE NAME OF THE TECHNIQUE-> TechniqueName.Description <<-_for a more specific review of the skill.
        
//         `);

//         if (nav_techniques === "5") {
//             inBattle_user_interface(battleOrder);
//         } else {
//             console.log(`Current Participants:`);
//             if (battleOrder) {
//                 battleOrder.forEach((participant, index) => {
//                     console.log(`${index + 1}. ${participant.name}`);
//                 });

//                 const targetIndex = userInterface_rl.question(`Choose the target (number): `);
//                 const selectedTarget = battleOrder[targetIndex - 1];
//                 console.log(`Selected Target: ${selectedTarget.name}`);

//                 console.log(`Participant 1: ${action_taker1.name}`);
//                 console.log(`Participant 2: ${action_taker2.name}`);
//                 att.playerAttack(nav_techniques, selectedTarget);
//             } else {
//                 console.log("No participants in the battle order.");
//             }
//         }
//     } else if (battle_interaction === "3") {
//         // Handle Spells
//     } else if (battle_interaction === "4") {
//         // Handle Team
//         console.log(TEAM.TEAM_Character);
//         const whichCharacterStatus = rl.question(`<_--Which status do you want to see ?
    
//         `);

//         console.table(TEAM.status_Characters[whichCharacterStatus]);
//         inBattle_user_interface(battleOrder);
//     } else if (battle_interaction === "5") {
//         // Handle Inventory
//         console.table(inventory.DisplayInventory());
//         inBattle_user_interface(battleOrder);
//     } else if (battle_interaction === "6") {
//         // Handle Wait
//         wait.waiting();
//         inBattle_user_interface(battleOrder);
//     } else if (battle_interaction === "7") {
//         // Handle Rest
//         wait.resting();
//         inBattle_user_interface(battleOrder);
//     } else if (battle_interaction === "8") {
//         // Handle Settings
//     } else {
//         console.log("Invalid input. Please choose a valid option.");
//         inBattle_user_interface(battleOrder);
//     }
// }

// inBattle_user_interface(); // Called the function initially









////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


//     // userinterface.js
// function inBattle_user_interface(battleOrder) {
   

//     const battle_interaction_input = userInterface_rl.question(`
    
//     ||||||||<----What do you want to do?-------------------------------------------------------------------------<<|
//     |...................................................................................................................................|
//     |>>--||1:-- Attack ||2:-- Techniques  ||3:-- Spells || 4:-- Team || 5:-- Inventory ||8:-- Settings||--<<|
//     |-----------------------------------------------------------------------------------------------------------------------------------|
    
//     <- Your input ? ->`);

//     console.log(battle_interaction_input);






// /* ||||||||||||| STATUS DISPLAY  ||||||||||||||||| */
// if (battle_interaction_input==="4"){console.log(TEAM.TEAM_Character)
//     const whichCharacterStatus = rl.question(`<_--Which status do you want to see ?

// `)
// console.table(TEAM.status_Characters[whichCharacterStatus]),inBattle_user_interface(battleOrder)}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* ||||||||||||  INVENTORY DISPLAY |||||||||||||||||||||| */
// if (battle_interaction_input==="5"){"0000000000000",inventory.DisplayInventory}
// // inBattle_user_interface(); // Called the function initially
// }




module.exports={
    full_user_interface,
    
}