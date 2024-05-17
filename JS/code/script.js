//console.log("hello")
//console.error("hello");
//alert("mukhesh");
//var b = confirm("Are you sure?");
//console.log(b)
//console.log(math.abs(-10))
var str="js is very easy"
//console.log(str.length);
//console.log(str .toUpperCase());
//console.log(str .toLowerCase());
console.log(str.indexOf('e'));
console.log(str.charAt(3))
console.log(str.replace ('e','a'));
console.log(str.slice(1,5));
//boolean
console.log(true);
console.log(+true);
console.log(false);
console.log(+false);
console.log(+false,5+'4')
console.log(+false,5+4);
//mukhesh
console.log("mukhesh".split('').reverse().join(' '))

//undefined 
//var y=null
//var z=undefinedconsole.log(y,z,type(y),type(z))
//console.log(null==undefined)


// /*DATA TYPES*/
// Hoisting --> declaration/usage preceeds over initialization 
//debugger;
console.log(x) //undefined
 console.log(y) //error not defined
var x = 20;
console.log(x);
var y = 50;
function display ()
{
    var a = 25;
    console.log(a)
}
display()

