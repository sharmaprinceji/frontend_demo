// (function(){
//     var a=b=3;
//     console.log("a--->inner? :",(typeof a));  //its local scope.
// })();
// console.log("a? :",(typeof a )); //not accessible form out side the function.
// console.log("b? :",(typeof b ));  //its global nature.


// console.log(0.1+0.2) //0.300000000000004
// console.log(0.1+0.2>=0.3) //0.30000000000004==0.30

// console.log((function f(n){
//     return (n > 1) ? n * f(n - 1) : n;
// })(10));  // f(10)-->10*f(9)-->9*f(8)-->8*f(7)------------>2*f(1)--->1
             //f(1)=1--->2*1
             //3*2*1-->4*3*2*1--->5*4*3*2*1------------->10*9*8*7*6*5*4*3*2*1


// (function(){
//     try {
//         throw new Error(); 
//      } catch (x) {
//          var x=1,y=2;
//          console.log(x)
//      }
//      console.log(x)
//      console.log(y)
// })();

