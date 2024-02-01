//two pointer algorithm
/*let arr1=[11,12,13,15,17];
let arr2=[1,5,7,9,10,14,18];
let i=0;j=0;
let ans=[];
while(i<arr1.length && j<arr2.length)
{
    if(arr1[i]>arr2[j])
    {
        ans.push(arr2[j]);
        j++;
    }
    else 
    {
        ans.push(arr1[i]);
        i++;
    }

}
while(i<arr1.length)
{
    ans.push(arr1[i]);
    i++;
}
while(j<arr2.length[j]);
{
    ans.push(arr2[j]);
    j++;
}
console.log(ans); */
//palindrome or not
/*const str="level";
(function()
{
    const temp=str.split("").reverse().join("");
    if(temp==str){
        console.log("string is palindrome");
    }
    else {
        console.log("string is not palindrome");
    }

})(); */
// to find the kth no of maximum frequent elements  or top k frequent elements
//find kth no of maximum frequent elements. or Top K Frequent Elements
 /*let num=[1,3,2,2,1,3,2,3,1,1,3,4,5,1,2,2,2,2,3,3,3,3];   //1->5, 2->3, 3->4, 4->1, 5->1 //1,3,2,4,5
 let k=3;        
 let maxi = 0;
 num.forEach((data) => {                        //time=n+n+(k*n)==2n+kn==> 2n+n^2=>  0(n^2)  space=o(n) wrost time complexity -->brute force approach.
   if (maxi < data) {  
     maxi = data;
   }
 });
 var count = new Array(maxi + 1).fill(0);
 for(let i = 0; i < num.length; i++){
   count[num[i]]++;
 }
 console.log(count)
 while (k--) {
   let temp = count[0],
     idx = 0;
   for (let i = 0; i < count.length; i++) {
     if (temp < count[i]) {
       temp = count[i]; 
       idx = i;
     }
   }
   count[idx] = 0;
   console.log(idx);
 } */
 let num=[1,3,2,2,1,3,2,3,1,1,3,4,5,1,2,2,2,2,3,3,3,3];   
  let k=2;
 const count = new Map();
 num.forEach((data) => {
   count.set(data, (count.get(data) || 0) + 1);
 });
 console.log(count);
 const sortedCount = [...count.entries()].sort((a,b)=>b[1]-a[1]);     //nlogn->time optimize approach
 console.log(sortedCount)
 let l=0
 while(l<k && l<sortedCount.length){
     //console.log(sortedCount[l][0]);
     l++;
 } 

