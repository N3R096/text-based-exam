const monster =require('./monsters')


const Vitareinas_Garden ={
    monsters_inArea:[ 
        {name:"greyWolf",
            },
        {name:"Alpha_greyWolf",
            }
    ],
    items_inArea:["Potion","HiPotion"]
}


const mons_array =["Wolf", "AlphaWolf"]



let current_area =Vitareinas_Garden;
module.exports ={
    Vitareinas_Garden,
    current_area,
    mons_array,
}
