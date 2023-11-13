const readline = require('readline-sync');
const assistance = require('../../../../../characters/assistance_character'); // Verify the correct path
const Interaction_values=require('../../../InteractionValues')
function Freedom(){

}

function speak_to_Sanctara(){
    readline.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7']});

   let answer1= readline.question(`
    1:"Yeah, Good morning"
    
    2:"Say nothing"
    
    3:"Why do you have to wake me up like that. Who is like that in the morning?"
    
    4:"Turn around and try to fall asleep again"
    
    5:"Start crying"
    
    6:"Punch her"
    
    7:"Kick her"
    
    `
    
    )
return Interaction_values.InteractionCheck_speaking[parseInt(answer1)-1] =true;

}

function Sanctara_Answer(){
if(Interaction_values.InteractionCheck_speaking[0]===true){
console.log(`
Sanctara:"Ok,good! Than get out of bed. Dress up and come down."
`)
    } 
if(Interaction_values.InteractionCheck_speaking[1]===true){
    console.log(`
    Sanctara:"Hello???"
    She waves her hand in front of your eyes.
    At least say something.`)

 function responseMainquest_1_answer2(){
   function get_output_response_1_2(){  readline.setDefaultOptions({limit: ['1', '2', '3']});
    let playerResponse_Mainquest_1_answer_2= readline.question(`
    1: still say nothing
    2: Try to lay down again
    3: get up
    `)
    return playerResponse_Mainquest_1_answer_2}

return    get_output_response_1_2
}

   if(responseMainquest_1_answer2==="1"){
    Interaction_values.InteractionCheck_speaking.sentence_1=true;
   }
    if (playerResponse_Mainquest_1_answer_2_output === "1"){
        Sanctara_Answer("1")
    }
    
 }responseMainquest_1_answer2()}
        
//     }
//  if(answer1==="3"){
//    return console.log(`
//     Sanctara:"You're late already. You said we meet at dawn.
//     I've waited a couple of hours and got pissed that you still asleap."`)
        
//     }
//  if(answer1==="4"){
//     console.log(`
//     As soon as she sees you trying to lay down she graps your arm and pulls you out of bed.
//      `)
        
//     } if(answer1==="5"){
//         console.log(`
//         Irretated of how you could start crying over something like that, she says:
//         Sanctara: Ok, I'm sorry i may overdid it. Come get up. Did you forgot what we wanted to do today?`)
//     }
// if(answer1==="6"){
//     assistance.assistance_Character.health_head -=45;

// }
// if(answer1==="6"){
//     assistance.assistance_Character.health_body -=20;

// }



module.exports={
    speak_to_Sanctara,
    Sanctara_Answer,
    responseMainquest_1_answer2,
}