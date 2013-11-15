/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/11/13
 * Time: 9:01 AM
 * To change this template use File | Settings | File Templates.
 */



//write a loop that counts from 1 to
// 100 and displays if
// a the incrimentor is divisible
// by 3  and log the value
// if it is.
// But I want it as a single
// string of comma delimited
// values.

var myList='';
for(i=1;i<=100;i++){
    if(i%3==0){
        myList += i+', ';
    }
}
 console.log(myList);


    var x;
    //conditional used to check values against each other
    if(  x
    //stuff to be checked
       //uses && (and) and || (or) for complex values
       //uses ==, <=, >=, != to check values
    )
{
    //stuff done when thing are checked and true

}


 //a for loop is a programing construct which
//is used to repeat actions over and over again.
  for(variableValue=1024 //sets the incrementer and the value
    ; variableValue>10//condition to be met
      ; variableValue =variableValue-100 //   what we do when to the incrementor when it is run

      ){
      //what it is doing over and over...
  }


//day trader
//string of numbers count the number of
// increases/decreases

//create a random LIST of numbers
//house the numbers in an array?
//loop to compare number
//numeric bounds? (1-3)


var storageArray=[];
var storageString=' ';
var storageCounter = 0;
for(i=0;i<20;i=i+1){
    storageArray[i]=Math.ceil(Math.random()*3);
    if(i>0 && storageArray[i-1]> storageArray[i]) {
        storageCounter++;
        storageString +='D, ';

    } else if(i>0 && storageArray[i-1]< storageArray[i])
    {
        storageString +='I, ';
    }
    else {
        storageString +='S, ';
    }

}
console.log(storageArray);
console.log(storageString);
console.log(storageCounter);




