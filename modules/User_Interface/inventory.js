// const item_list_potions = require('../Items/potions/potion')

// let rl = require('readline-sync')

// const playerCharacter_Inventory =
// [];
/////////////////////////////////////////////////////////////////7
const item_list_potions = require("../Items/potions/potion");
const rl = require("readline-sync");
const  full_user_interface  = require("./user_interface");
const  OWC  = require("../overworld/overworld_conditions");
const  playerCharacter  = require("../characters/player");





let playerCharacter_Inventory = [];

function addItem_toInventory(item, amount) {
  // Check if the item already exists in the inventory
  const existingItem = playerCharacter_Inventory.find(
    (inventoryItem) => inventoryItem.item === item
  );

  if (existingItem) {
    // Update the quantity of the existing item
    existingItem.amount += amount;
  } else {
    // Add the item with the given amount to the inventory
    playerCharacter_Inventory.push({ item, amount });
  }
}


///////////////////////////////////////////////////////////////
// IT DIDN'T WORK BECAUSE OBJ ALREADY HAS THE MODULE VARIABLE ATTACHED TO IT 
function use_item(obj,playerCharacter){
  

obj.effect(playerCharacter.playerCharacter)
playerCharacter_Inventory.obj.amount-=1
}


/* ||||||||||---INVENTORY------|||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
function DisplayInventory() {
  console.table(playerCharacter_Inventory);
  const rl1 = rl.question(playerCharacter_Inventory,"What do you want to do ?", );
  const selectedItem = item_list_potions[rl1];
  console.table(selectedItem);
  /////////////////////////////////////////////////////////
  const item_usage = rl.question( `What do you want to do with the item?
1:Use item 
2:Toss item
3:Equip item
4:Back to inventory
5:Out of inventory
`);
  ////////////////////////////////////////////////////////////////////////////////
  if (
    item_usage === "1" ||
    item_usage === "2" ||
    item_usage === "3" ||
    item_usage === "4" ||
    item_usage === "5"
  ) {
    function item_interaction(item_usage) {
      const item_usage_interaction = item_usage;
      if (item_usage_interaction === "1") {
        use_item(selectedItem, playerCharacter);
      }
      if (item_usage_interaction === "2") {
        function toss_item(selectedItem) {
          if (selectedItem.amount === "1") {
            const index_selected_item =
              playerCharacter_Inventory.indexOf(selectedItem);
            playerCharacter_Inventory.splice(index_selected_item, 1);
          }
          if (selectedItem.amount > 1) {
            const amount_toToss = rl.question(`
      How many?`);
            if (amount_toToss > selectedItem.amount) {
              console.log(
                `Sorry please choose the right amount. I'll work on that.`
              );
            } else {
              selectedItem.amount -= amount_toToss;
            }
          }
        }
        toss_item(selectedItem);
        DisplayInventory();
      }
      if (item_usage_interaction === "3") {
        if (!selectedItem.equipable) {
          console.log(`This item is not equipable!!!`);
        
          // console.table(selectedItem)
          DisplayInventory();
        }
      }
      if (item_usage_interaction === "4" || item_usage_interaction === "5") {
        full_user_interface
      }
    }
    item_interaction(item_usage);
  }
}
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */


/////////////-----DELETE ITEM----///////////////////
module.exports ={
  addItem_toInventory,
  playerCharacter_Inventory,
  DisplayInventory,
  use_item,
}
