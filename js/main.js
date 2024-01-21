async function getproduct(){
    const products = await fetch("https://dummyjson.com/products");
    const posts = await products.json();

    console.log(posts);

    const task = posts.products;

    const result = task.map(function(ele){
        return `
        <div class="recipe">
        <h2>${ele.title}</h2>
        <p>${ele.price}</p>
        <img src=${ele.thumbnail} />
        </div>
        `;
    });

    document.querySelector(".task").innerHTML = result;
}
getproduct();