const clock=document.getElementById('clock');
function getTime()
{
    const date=new Date();
    console.log(date.toLocaleTimeString())
    clock.textContent=date.toLocaleDateString()

}
getTime();
/*
function hello(){
    alert("hello");
}*/

setTimeout(getTime,1000)
console.log("hello world")
function mylogic(a,b)
{
    console.log(a+b)
}
mylogic("mukhesh","kondeti")
mylogic("mukhesh","kondeti")
mylogic("mukhesh","kondeti")
mylogic("mukhesh","kondeti")