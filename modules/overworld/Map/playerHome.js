const { full_user_interface } = require("../../User_Interface/user_interface");
const { setCurrentPosition } = require("../overworld_conditions");

const playerHome_ownRoom_QUEST=false;
function playerHome_ownRoom(){
setCurrentPosition(playerHome_ownRoom)
full_user_interface
}





module.exports= {
    playerHome_ownRoom,
    playerHome_ownRoom_QUEST,
}