let c=0;
let cvalue=document.getElementById('count');
console.log(cvalue.textContent);
function incr()
{
    if (c<25)
        c++;
    cvalue.textContent=c;
}
function decr()
{
    if(c>0)
    c--;
    cvalue.textContent=c;
}
function reset()
{
    c=0;
    cvalue.textContent=c;
}