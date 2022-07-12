let section=document.querySelector("#section");
let input=document.querySelector("input")
let url="https://dummyjson.com/products";

// input.addEventListener("keyup",e=>{

    
// })

async function mobile(){
    let data=await fetch(url);
    let res=await data.json();
    res=res.products;
    console.log(res)
    res.map((ele, ind)=>{
        let {id, title, description, price, discountPercentage, rating, stock, images,thumbnail }=ele
        section.innerHTML+=`<section>
        <div id="main">
        <figure>
        <img src=${thumbnail} alt="">
        </figure>
        <h1>${title}</h1>
        <h1 id="id">${id}</h1>
        <h2>${description.slice(0,45)}</h2>
        <div id="details"><h3>RS : <span>${price}</span></h3><h3>Discount : <span>${discountPercentage}</span></h3>
        <h3>Rating  <span style="color : ${rating < 4.5 ? 'red': 'green'}"> ${rating}⭐⭐⭐⭐</span></h3><h3>Stock :<span style="color : ${stock < 50? 'red': 'green'}"> ${stock}</span></h3></div>
        </div>
        </section>
        `
    })
}
mobile()


