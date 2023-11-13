// overworld.js (CommonJS module)




///----BATTLE-CHECK------\\\\
let isBattle = false;
function getIsBattle() {
  return isBattle;
}

function setIsBattle(value) {
  isBattle = value;
}
///----BATTLE-CHECK------\\\\


////------ PLAYER POSITION ------\\\\\
const currentPosition = {
// current_positon:"Vitareinas_Garden ",
inTown:false,
inDungeon:true,
atOpenField:false,};

function getCurrentPosition() {
  return currentPosition;
}

function setCurrentPosition(value) {
  currentPosition = value;
}


////------ PLAYER POSITION ------\\\\\




////////----TIME------\\\\\\\\\\\\\\\
let overworldTime = {
    hours: 9,
    minutes: 0,
    daysPassed: 0,
    daytime: true,
    nightTime: false,
  
  };
  
  function displayTime() {
    return (
      overworldTime.hours.toString().padStart(2, "0") +
      ":" +
      overworldTime.minutes.toString().padStart(2, "0")
    +`--------DAYS PASSED:>---${overworldTime.daysPassed}`);
  }
  
  function timeCounter(TimeToAdd) {
    overworldTime.minutes += TimeToAdd * 60;
    while (overworldTime.minutes >= 60) {
      overworldTime.hours++;
      overworldTime.minutes -= 60;
    }    
  
    while (overworldTime.hours >= 24) {
      overworldTime.hours -= 24;
      overworldTime.daysPassed++;
    }
    if (overworldTime.hours >= 20 || overworldTime.hours < 6) {
      overworldTime.nightTime = true;
      overworldTime.daytime = false;
    } else {
      overworldTime.daytime = true;
      overworldTime.nightTime = false;
    }
  }
  
  function day_night() {
    if (overworldTime.daytime) {
      return "It is daytime.";
    }
    if (overworldTime.hours >= 19 && overworldTime.hours < 20 && currentPosition.inTown === false) {
      return "The sun is starting to go down. You should start to find a place to rest. Stronger monsters will appear soon. Traveling will get harder too.";
    }
     if (overworldTime.hours >= 19 && overworldTime.hours < 20 && currentPosition.inTown === true) {
      return "The sun is starting to go down. Maybe you should start to find a place to rest. Traveling will take longer.";
    }
    if (overworldTime.nightTime) {
      return "It is night. Monsters will attack more frequently, and it's harder to find items and a place to rest.";
    }
  }
  
  function TimeOverall() {
    console.log("It is:", displayTime()); // Updated time
    console.log(
     
      "|||",
      ";;;...",
      day_night(),
      "...;;;"
    );
  }
////////----TIME------\\\\\\\\\\\\\\\



const status_condition_timer={
  Poison:0,
  Burn:0,
  Confusion:0,
  Frozen:0,
  Demoralized:0,

}






/////----EXPORTS ------\\\\\

module.exports = {
  overworldTime,
  TimeOverall,
  timeCounter,
  displayTime,
  getIsBattle,         // Getter for isBattle
  setIsBattle,         // Setter for isBattle
  getCurrentPosition,  // Getter for currentPosition
  setCurrentPosition,  // Setter for currentPosition
  status_condition_timer,
  currentPosition,

};


/////----EXPORTS ------\\\\\
