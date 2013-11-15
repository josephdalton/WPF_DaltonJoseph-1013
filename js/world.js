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


  function worldDisplay(worldArray,xyz,yyy){
      console.clear();
      //input world array from the creation
      //Make this into a formatted grid with even spacing
      var formattedResult='';
      for(i=0;i<worldArray.length;i++){
          for(j=0;j<worldArray[i].length;j++)
          {
              if(i==yyy &&j==xyz){ formattedResult+='<******> '}
              else{
              formattedResult+= worldArray[i][j] +' ';
              if(worldArray[i][j].length==0){formattedResult+='        '}
              if(worldArray[i][j].length==1){formattedResult+='       '}
              if(worldArray[i][j].length==2){formattedResult+='      '}
              if(worldArray[i][j].length==3){formattedResult+='     '}
              if(worldArray[i][j].length==4){formattedResult+='    '}
              if(worldArray[i][j].length==5){formattedResult+='   '}
              if(worldArray[i][j].length==6){formattedResult+='  '}
              if(worldArray[i][j].length==7){formattedResult+=' '}
          }        }
          formattedResult+='\n';
      }
      return formattedResult;

    //output the formatted version of the world array
  }


var world1= createWorld();



var quitTest = true;
var x=1;
var y=1;
console.log(worldDisplay(world1,x,y));
do
  {//do this stuff
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
          console.log(worldDisplay(world1,x,y));
      }
}  while(quitTest);  //this is true


/*
* Example,
* eXample
* EXample
*
* */














