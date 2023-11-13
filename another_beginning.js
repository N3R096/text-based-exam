//................IMPORTS...................\
const overworldConditions = require('./modules/overworld/overworld_conditions');
const player   = require('./modules/characters/player')
const assistance = require('./modules/characters/assistance_character')
const warrior  = require('./modules/classes/warrior')
const archer   = require('./modules/classes/archer')
const magician = require('./modules/classes/magician')
const thief    = require('./modules/classes/thief')
const class_choosen = require('./modules/classes/choose_your_class')
const readline = require("readline-sync");
const progressing=require('./modules/User_Interface/Interactions/progressing')
const Worldmap      = require('./modules/overworld/Map/playerHome')
const quest    = require('./modules/overworld/Events/quests/mainQuest_1.copy')
const interValues= require('./modules/overworld/Events/InteractionValues')
const regular_ui=require('./modules/User_Interface/user_interface')
const battle_activation=require('./modules/Battle/battle')
const inventar =require('./modules/User_Interface/inventory')
//................IMPORTS...................\\



/////----EXPORTS ------\\\\\
module.exports = {
    player,

}




/////----EXPORTS ------\\\\\

overworldConditions.timeCounter(0.5);
overworldConditions.TimeOverall();


// Modifying isBattle and currentPosition
// overworldConditions.setIsBattle(true);                  // Set isBattle to true
// overworldConditions.setCurrentPosition("SomeLocation");  // Set currentPosition
// console.log(overworldConditions.getIsBattle());        // Get isBattle
// console.log(overworldConditions.getCurrentPosition()); 

// --------------------------\\
//----------START------------\\
let userName = readline.question("May I have your name? ");
console.log("Hi " + userName + "!");
console.log("We will now create your character.")
player.playerCharacter.name = userName;

console.log("Right now, these are you starting stats.")
console.table(player.playerCharacter)
console.log(`Please choose your class!
You can choose between the following ones:
/////////////
1: WARRIOR    --- Inspect the changes to your character: 01
--------------
2: MAGICIAN   --- Inspect the changes to your character: 02
--------------
3: ARCHER     --- Inspect the changes to your character: 03
--------------
4: THIEF      --- Inspect the changes to your character: 04
////////////`)
// readline.setDefaultOptions({limit: ['1', '2', '3', '4', '01', '02', '03', '04']});
const choosen_Class = readline.question(`Please choose wisely.
To inspect each class beforehand, type the number at the end.
Input the number before the different classes to choose your class.
There cannot be changes made again afterwards.
You would need to restart the game.
-------------------------------------------------------------------
YOUR INPUT:
`)

class_choosen.assignCLass(choosen_Class)
class_choosen.choose_your_class(player.playerCharacter)
class_choosen.assistance_class(assistance.assistance_Character)
console.log(`These are your new stats :
--------------------------------------------------------------------`)
// class_choosen.assistance_class(assistance.assistance_Character)




console.log(`------------------------------------------------------





`)
console.table(player.playerCharacter)


// console.table(assistance.assistance_Character)
// // player.playerCharacter.class = "Warrior";
// class_choosen.choose_your_class(player.playerCharacter)
// console.table(player.playerCharacter)
// readline.setDefaultOptions({limit: ['y']});
let p1 = readline.question(`Progress? Type in : y

-------------------------------------------------------------------
YOUR INPUT:
`)
              
console.log(`
During the game, you will have a assigned support character. For now her default class is magician.
She will also lvl up and learn new skills along the way.
The distribution of lvl-up points and skills will be automatic.
I'll work on that.
Her name is Sanctara.
She's your childhood friend and lives in the same village as you.
Sometimes during Interactions, whatever ones they may be, she will add something to it.

These are her current stats:
-------------------------------------------------------------------------

`)

 
console.table(assistance.assistance_Character)
progressing.progress()

console.log('--------------------')
console.log(`
The game will start after the next progress input. 
This is a ALPHA VERSION 0.1 that will end after you leave your room.
I will continue to develop this game further.
Feel free to leave me a message on my socials:

INSTAGRAM: 
FACEBOOK:
LinkedIn:




`)
progressing.progress()
console.log(`
In a time long past, where the true events have faded into obscurity, known to only a handful today
The Kingdom of Terrasangvio was one of the most developed countrys of eurean.
A strong army, flourishing economy, a huge population and a big variety of flora, fauna and resourcess in their lands.

Two Teenager who just grew old enough to leave the town on their on are starting their adventure.
You live in Vitareina, a litte village in Terrasangvio surrounded by vast forrest. Travellers and merchants often come trough 
since it lays next to a road to the capital Marisvio. They often visit the old temple of the Blood-Queen while they are here.
You too want to finally further explore the temple. Since there are monsters deeper in the restricted areas, 
you weren't allowed to do so.
The chapel of the temple is the only place you've seen until now.
It was a gigantic room. In the past, many people must have attended the rituals.
Benches and some religious artefacts were still there.
The walls are high. Maybe around 35m, painted in purple and a dark tone of red with black ornaments.
The windows are still intact to this day and are looking like they would be cleaned very regulary.
They are showing storys of old humans fighting alongside old gods and demons against the souleaters.
Behind the altair are doors that leave to the underground parts of the temple.
Only by the villages elders allowed people or these with a proof of a high enough rank are allowed to enter the underground.


A couple of days ago you got 16 and now the chief of the village allowed you to go into the forest without the villages hunters.
He said that that you should come over to his place today to collect a late birthday gift from him.
Sanctara will join you.
Afterwards, you both want to visit the temple and try to get into the underground even without approval. 






`)

progressing.progress()
overworldConditions.TimeOverall()
console.log(`
Current AREA :

VITAREINA

YOUR HOME


`)

console.log(`
Sanctara:"Hey ${player.playerCharacter.name}!!!!
It's already late."
............
...............
.......
Sanctara:"GET OUT OF BED ALREADY"

Sanctara proceeds to pull away your blanket.
Sanctara: "Come on, I finally want to leave this village for a bit and we have to visit the eldest before."

Slightly shocked from the loss of your blanket and her aggresive aproach, you slowly get awake.
The sun is shining strong trough your window directly into your room. It's hard to see.
You look over to her.
She is looking straight into your eyes.  Visibly annoyed she asks:
Sanctara:"You finally awake?"




`)
quest.speak_to_Sanctara()
console.log(`

----------------------------------------------------------------------------------------------


`)
quest.Sanctara_Answer()
////////////////////////////////////////////////////////////////
console.log(`
Your are now in your room.
.
.
.
.
.
.`)
inventar.addItem_toInventory("Potion",6)
 regular_ui.full_user_interface()
 progressing.progress()
// const responseMainquest_1 =quest.speak_to_Sanctara()
// quest.Sanctara_Answer(responseMainquest_1)