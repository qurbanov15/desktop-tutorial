const product=document.querySelector(".product")
fetch("https://northwind.vercel.app/api/categories")
.then(res=> res.json())
.then(data=> {
    console.log(data);
    data.forEach(element => {
        cards(element)
    });
})
function cards(elm){
    const card=document.createElement("div")
    card.className="card"
    const name=document.createElement("h5")
    name.innerText=elm.name
    const link=document.createElement("a")
    link.innerText="link"
    link.href=`./addCard.html#${elm.id}`
    card.append(name,link)
    product.append(card)
}
