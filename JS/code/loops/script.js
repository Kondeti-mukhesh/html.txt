console.log("for loop");
console.log(a)
//console.log(b,c)
var a=10;
let b=20;
var a=30;
let b1=30;
const c=10;
a=50; //var is reassign
b=25; //let is reassign
//c=20; //const reassign is not possible

function x()
{
    var a=10;
    if (true)
        {
            var b=30;
        }
        console.log(b)
}
x()

//for loop
for (let i=0;i<=20;i++)
{
    console.log(i)
}

for (let i=100;i>=0;i=i-5)
{
    console.log(i)
}
//[2,4,6,8,10]
for (let i=2;i<=10;i=i+2)
{
    console.log(i)
}

//[2,5,7,9] print all elements of array for loop
const arr=[2,5,7,9]
for (let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
for (let i of arr)
{
    console.log(i)
}

for (let i in arr)
{
    console.log(i)
}