/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/18/13
 * Time: 10:29 AM
 * To change this template use File | Settings | File Templates.
 */

function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
        world[o]=[];
        for(i=0;i<10;i++){
            //I want to choose between 4 random land types
            var landName=0;
            var monsterList=1;
            var landSelection = Math.ceil(4*Math.random());
            world[o][i]=[];
            if(landSelection==1){world[o][i][landName]='Swamp';}
            else if(landSelection==2){world[o][i][landName]='Desert';}
            else if(landSelection==3){world[o][i][landName]='Mountain';}
            else (world[o][i][landName]='Forest');
            world[o][i][monsterList]=  monsterGen(world[o][i][landName]);
            }
    }
    return world;
}


function monsterGen(landType){
    //create an array of monsters for our world.
    //select monsters appropriate for our land type.
    //condition to check land types.
    //randomly assign monsters to each land location.
    var randomEvent=Math.random();
    var monsterArray=[];
    if(landType=='Forest'){
        //bugbears (50%), kobolds(40%), dragons(10%)
         if(randomEvent<.25){
            if(randomEvent<.125){
               monsterArray[0]='Bugbears'
            } else if(randomEvent<.225){
                monsterArray[0]='Kobolds'
            }
              else{monsterArray[0]='Dragons'
            }
         }
    }
    return monsterArray;
}


//treasure generation
//gold (random amount) 1-1000, gems 1-4, weapon 1 (generic for now).
//

function treasureGen(monsterName){ //adding monsterName parameter for later use.
   //treasure is an array
    var treasure =[];
    var treasureType=Math.random();
    var treasureAmount=Math.random();
    var minGold =0;
    var maxGold=0;
    var minGems =0;
    var maxGems=0;
    var minWeapons=0;
    var maxWeapons=0;

    if(monsterName){
        minGold = 1;
        maxGold=1000;
        minGems=1;
        maxGems=4;
        minWeapons=1;
        maxWeapons=1;
    }

    //there is a chance you will get gold, and/or gems, and/or weapons
    //10% gold, 5% others, else null.
    if(treasureType<=.1){} //gold
    else if(treasureType<=.15){} //gems
    else if(treasureType<=.2){}  //weapons
    else if(treasureType<=.25){} //gold, gems
    else if(treasureType<=.30){} //gold, weapons
    else if(treasureType<=.35){} //weapons, gems
    else if(treasureType<=.40){} //gold, weapons, gems
    else {treasure[0]='You got hosed!';}   //crap

    return treasure;
}




