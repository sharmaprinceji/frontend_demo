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

//6
const arr=[12,23,11,34,72,45,90];
let maxi=0;
// arr.forEach((data)=>{
//   if(maxi<data){
//     maxi=data;
//   }
// })

// arr.map((data)=>{
//     if(data>maxi){
//         maxi=data;
//     }
// })
//console.log(maxi);

//7.two pointer algorithm.
let arr1=[11,12,13,14,15,17];
let arr2=[1,5,7,9,10,18];
let ans=[]
let i=0,j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]>arr2[j]){
        ans.push(arr2[j]);
        j++;
    }
    else{
        ans.push(arr1[i]);
        i++;
    }
}

while(i<arr1.length){
    ans.push(arr1[i]);
    i++;
}

while(j<arr2.length){
    ans.push(arr2[j]);
    j++;
}

//console.log(ans);
//8.
// const str="mom";
// (function(){
//     const temp=str.split("").reverse().join("");
//     if(temp==str){
//         console.log('string is palindrom!');
//     }
//     else{
//         console.log('string is not palindrom!');
//     }
// })();



