//if statement
var num=24;
if (num%2==0)
{
    console.log(`${num} is even`)
}//simple if

else{
    console.log(`${num} is odd`)
}

function eligibility(age)
{
    if(age>=18)
        {
            return true
        }
    else{
        return false
    }
}
console.log(eligibility(22))

//waf to print large small(5,8,6)
largesmall(5,8,6)
function largesmall(a,b,c)
{
    console.log("largest value is "+ Math.max(a,b,c))
    console.log("smallest value is "+ Math.min(a,b,c))
}

//waf
/*function welcome(userType) {
	switch (userType) {
		case "Teacher":
			console.log("Hello " + userType)
			break
		case "Student":
			console.log("Hello " + userType)
			break
		case "Staff":
			console.log("Hello " + userType)
			break
		case "Admin":
			console.log("Hello " + userType)
			break
		default:
			console.log("Hello Stranger")
    }
}*/

//while
var k=25
while (k<=30)
{
    console.log(k)
    k++
}

//do while
var p=25
do
{
    console.log(p)
    p++;
}while (p>=30)

//25 to 0 even number
var x=25
while(x>=0)
{
    if (x%2==0)
        console.log(x)
    x--;
}