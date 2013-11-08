/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/8/13
 * Time: 9:12 AM
 * To change this template use File | Settings | File Templates.
 */

//Dog years problem.

//var humanYear = parseInt(prompt('How many dog years'));
//var dogYears = humanYear*7;
//console.log('I am '+humanYear+' therefore sparky is '+dogYears);


//Functions
//inputs are 2 of 3 values
//output is to calculate the third value.
var global_a =prompt('A value');
var global_b=prompt('B value');
var global_c = prompt('C value');

function pythagorean(a,b,c){
    if(a=='')
    {
        a=null;
    }
    if(b=='')
    {
        b=null;
    }
    if(c=='')
    {
        c=null;
    }
  if((a==null && b==null && c==null) ||
        (a==null && b==null && c!=null) ||
        (a==null && b!=null && c==null) ||
        (a!=null && b==null && c==null)

        )
    {
       return 'You haven\'t entered enough data';
    } else if(a && b!=null && c==null){
        return Math.sqrt(a*a+b*b);
    } else if(a!=null && b==null && c!=null){
        return Math.sqrt(c*c-a*a);
    } else if(a==null && b!=null && c!=null){
        return Math.sqrt(c*c-b*b);
    } else {
        if(Math.sqrt(a*a+b*b)==c){return 'This is a good set of data'}
        else {return 'Your numbers don\'t add up'}

    }




//  if(c==null){
//  return Math.sqrt(a*a+b*b);
//  }
}




console.log(pythagorean(null,null,null));
console.log(pythagorean(1,null,null));
console.log(pythagorean(null,1,null));
console.log(pythagorean(null,null,1));
console.log(pythagorean(3,4,null));
console.log(pythagorean(3,null,5));
console.log(pythagorean(null,4,5));
console.log(pythagorean(3,4,5));
console.log(pythagorean(3,4,6));

var nanCheck = '3s';
console.log(isNaN(nanCheck));
nanCheck = 7;
console.log(isNaN(nanCheck));



//if(pythagorean(null,null,null)==
//    'You haven\'t entered enough data')
//{console.log('(null, null, null) --Passed all null conditions ')}
// else {console.log('Failed')}

