const mainDiv=document.getElementById("products")
function fetchdata()
{
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(function (mc){
        console.log(mc);
        return mc.json()

    })
    .then(function (data){
        console.log(data);
        displayData(data)

    })
    .catch(function(err){
        console.log("my error is" + err)
    })
    
}
fetchdata();
function displayData(data)
{
    data.forEach(function(c){
        const product = document.createElement('div')
        product.classList.add('product')

        const title=document.createElement('h2')
        title.textContent=c.title

        const description=document.createElement('p')
        description.textContent=c.description

        const ingredients=document.createElement('h3')
        ingredients.textContent=c.ingredients

        const image=document.createElement('img')
        image.src=c.image
        image.alt=c.title
        product.append(image,title,description,ingredients)
        mainDiv.appendChild(product)
        
    })
}


