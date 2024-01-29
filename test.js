 /* qs 1 const sum=(arr)=> 
 {
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            sum=sum+arr[i];
        }
    }
    return sum;
 }
 const arr=[1,2,3,4,5,6,7];
 //const ans=sum(arr);
 //console.log(ans); */
 
 /* qs2 function reverse(arr)
 {
    let start =0;
    let last=arr.length-1;
    while(start<last)
    {
        const temp=arr[start];
        arr[start]=arr[last];
        arr[last]=temp;
        start++;
        last--;

    }
 }
 let arr=[1,2,3,4,5,6];
 reverse(arr);
 console.log(arr);
 for(let i=0;i<arr.length;i++)
 {
    if(arr[i]==5)
    {
        console.log("5 is present");
    }
 } */
 function palindrome(str)
 {
    const temp=str.split("").reverse().join("");
    if(temp==str)
    {
        console.log(str);
    }
    

 }
 const str=["mom","abc","non","hgf","hgd","lol"];
 for(let i=0;i<str.length;i++)
 {
    palindrome(str[i]);

 }