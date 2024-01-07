function getdata(){
    document.getElementById("xyz").innerHTML=Date();
  //document.write('hjgliukjbjb');
  //window.alert('heloo !')
  //console.log('hello prince !')
  // window.print('welcome to javascript tutorials!'
}

//normal function
// function test(x,y){
//     // let x=20;
//     // let y=20;
//     return x +" "+ y;
// }

//esc-5 or 6//arrow function.
// let test=(x,y)=>{return x+" "+y};
// const result=test('shweeta','bharti');

// console.log("multiplication of x and y is :",result);

 const arr=[10,20,30,40,50,60,70,80,90,100];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%6==0){
//     console.log('elements of loop:',arr[i]);
//    }
// }

// arr.forEach((data)=>{
//  if(data%6==0){
//   console.log('elements of for each:',data);
//  }
// });

// const ans=arr.map((data)=>{
//   if(data%6==0){
//      return data;
//    }
// });
// console.log(ans);

// function myFunction(value) {
//   return value%6==0;
// }
// const res=arr.filter(myFunction);
// console.log(res);

let sum = arr.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(sum);