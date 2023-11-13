const readline = require('readline-sync');
const assistance = require('../../../characters/assistance_character'); // Verify the correct path
const Interaction_values=require('../InteractionValues');
const playerHome_ownRoom_QUEST  = require('../../Map/playerHome');
function Freedom(){

}

function speak_to_Sanctara(){
    // readline.setDefaultOptions({limit: ['1', '2', '3', '4', '5', '6', '7']});

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


    Interaction_values.InteractionCheck_speaking[`sentence_${answer1}`] = true;

}


function Sanctara_Answer(){
    
    if(Interaction_values.InteractionCheck_speaking.sentence_1){
    console.log(`
    Sanctara:"Ok,good! Then get out of bed. Dress up and get down. 
    I want to leave that town for a while and see somethinig else than the same people over and over again."
    `);
    Interaction_values.InteractionCheck_speaking.sentence_1=false;
        } /////////////////////////////////////////////////////////
    if(Interaction_values.InteractionCheck_speaking.sentence_2){
        console.log(`
        Sanctara:"Hello???"
        She waves her hand in front of your eyes.
        At least say something.`)
    
    // function()()
        Interaction_values.InteractionCheck_speaking.sentence_1 =false;
       
         
        let playerResponse_Mainquest_1_answer_2= readline.question(`
        1: still say nothing
        2: Try to lay down again
        3: get up
        `)
        Interaction_values.InteractionCheck_speaking[`sentence_${playerResponse_Mainquest_1_answer_2}` ]= true; 
        if (Interaction_values.InteractionCheck_speaking.sentence_1 || Interaction_values.InteractionCheck_speaking.sentence_2){
            //-------change the check value of the choosen option-------\\
            //------------------------------------------------------------\\
            Interaction_values.InteractionCheck_speaking.sentence_1 =false;
            Interaction_values.InteractionCheck_speaking.sentence_2=true; 
             //------------------------------------------------------------\\

            Sanctara_Answer()
        }
        if(Interaction_values.InteractionCheck_speaking.sentence_3){
                 //-------change the check value of the choosen option-------\\
            //------------------------------------------------------------\\
            Interaction_values.InteractionCheck_speaking.sentence_3 =false;
            Interaction_values.InteractionCheck_speaking.sentence_1=true; 
             //------------------------------------------------------------\\
            Sanctara_Answer()
          
                }
            
        
        if(Interaction_values.InteractionCheck_speaking.sentence_1 || Interaction_values.InteractionCheck_speaking.sentence_2){
                            console.log(`
                         Sanctara waits a couple of seconds to realize the situation.........
                         She graps your arm and pulls you out your bed.  `)
                           playerHome_ownRoom_QUEST.playerHome_ownRoom_QUEST=true;
            
                              }
         }
    
   
  
    }
    

function speak_to_Sanctara_2(){

} 


module.exports={
    speak_to_Sanctara,
    Sanctara_Answer,
    // responseMainquest_1_answer2,
}