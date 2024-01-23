var r=[10,20,30,40,50];
 var sum=0;
 var count=0;
for(var i=0;i<r.length;i++)
{
    sum=sum+r[i];
    
}
var mid=sum/2;
console.log("sum= "+sum);
console.log("mid="+mid);
for(var i=0;i<r.length;i++)
{
    if(r[i]+r[i]>=mid)
    {
        count++;

    }
}
console.log("pairs are"+count);


