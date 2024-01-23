var a=[1,2,3,3,2,6,7,6,6,10]; //no  of duplicates

var b=new Set();
for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            b.add(a[i]);
        }
    }
}
//console.log("no of duplicates are",b.size);
//console.log("no of duplicates are",b);
/*var c=new Set();
for(var i=0;i<a.length;i++)
{
    c.add(a[i]);
}
console.log(c);
var ans=[...c];//spread operator
console.log(ans);*/
/*var d=["abc",1,2,"bgf",4,5,6];
for(var i=0;i<d.length;i++)
{
    /*if(isNaN(d[i]))//to filter string 
    {
        console.log(d[i]);
    }*/
    //if(typeof(d[i])=="string") //2nd type to filter string out of no array.
    /*{
        console.log(d[i]);
    }*/
var  e=["abc","defhgkj","ghi","jklkjl","mno"]
for(var i=0;i<e.length;)






