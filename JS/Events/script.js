function fun()
{
    alert("item clicked")
}
document.getElementById('btn').addEventListener('click',fun)
/* design a simple input box which takes a string and returns reversed string */
/*event propagation:capturing and bubbling,capturing*/
document.getElementById("c").addEventListener("clickme", function ()
{
    alert("child called")
},{capture:true})

document.getElementById('p').addEventListener("click", function () {
 	alert("parent called")

}),
document.getElementById("gp").addEventListener("click", function () {
	alert("grandparent called")
}, { capture: true })

document.getElementById('myDiv')
addEventListener(click,mylogic)
function mylogic(e)
{
    alert(e.target.textContent+" is clicked")
}
