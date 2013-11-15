/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/6/13
 * Time: 11:27 AM
 * To change this template use File | Settings | File Templates.
 */

//Building a world in a 10x10 array, with random land types.

//build a world array to contain our world of random land types.


function createWorld(){
    var world=[];

    for(o=0;o<10;o++){
       world[o]=[];
       for(i=0;i<10;i++){
           //I want to choose between 4 random land types
           var landSelection = Math.ceil(4*Math.random());
           if(landSelection==1){world[o][i]='Swamp';}
           else if(landSelection==2){world[o][i]='Desert';}
           else if(landSelection==3){world[o][i]='Mountain';}
           else (world[o][i]='Forest');

       }
    }

    return world;

}


//console.log(world[o]);
/*
 Forest
 Swamp
 Desert
 Mountain
 */
//
var world1= createWorld();
var world2= createWorld();
console.log('*****UGLY VERSION*****')
for(i=0;i<world1.length;i++){
        console.log(world1[i]);
  }


  function worldDisplay(worldArray){
      //input world array from the creation
      //Make this into a formatted grid with even spacing
      var formattedResult='';
      for(i=0;i<worldArray.length;i++){
          for(j=0;j<worldArray[i].length;j++)
          {



              formattedResult+= worldArray[i][j] +' ';

          }
          formattedResult+='\n';
      }


      return formattedResult;

    //output the formatted version of the world array
  }

console.log(worldDisplay(world1));





