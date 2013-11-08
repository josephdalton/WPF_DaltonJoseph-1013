/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 11/4/13
 * Time: 9:19 AM
 * To change this template use File | Settings | File Templates.
 */
 var i;
for(i=0;i<10;i++){
    var test=i%2;
    if(test==0){console.log(i)}

//    if(i<=5){
//    console.log(i);
//    } else if(i<=7) {
//        console.log(10-i);
//    } else {console.log('>7')}
}

//(condition to be met) ? first set of stuff : else stuff;


var tern = Math.random();
(Math.round(tern)==0)
    ?
    console.log('heads')
    :
    console.log('tails');
