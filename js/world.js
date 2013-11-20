/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/6/13
 * Time: 11:27 AM
 * To change this template use File | Settings | File Templates.
 */

//Building a world in a 10x10 array, with random land types.

//build a world array to contain our world of random land types.
var world1= createWorld();
var quitTest = true;
var x=1;
var y=1;
var charName =prompt('What is your character name');


console.log(worldDisplay(world1,x,y,charName));
do
  {
      var userInput=prompt('Which direction would you like to move? (N,S,E,W,Q)');
      if(userInput==null){quitTest=false;
          break;}
      if(userInput.toUpperCase()=='Q'){quitTest=false;}
      else {
          if(userInput.toUpperCase()=='N'){y--;}
          if(userInput.toUpperCase()=='S'){y++;}
          if(userInput.toUpperCase()=='W'){x--;}
          if(userInput.toUpperCase()=='E'){x++;}
          if(x<0){x=9;}
          if(x>9){x=0;}
          if(y<0){y=9;}
          if(y>9){y=0;}
          console.log(worldDisplay(world1,x,y,charName));
      }
}  while(quitTest);  //this is true













