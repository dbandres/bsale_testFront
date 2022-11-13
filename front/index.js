
const productContainer = document.createElement("div");
const spiner = document.querySelector("#spiner")
productContainer.classList.add("container")
document.body.appendChild(productContainer)
const previous = document.querySelector("#previous")
const next = document.querySelector("#next")

const input = document.querySelector("#input");
const btn = document.querySelector("#submit");

let valueInput;

input.addEventListener("keyup", (event) =>{
        valueInput = event.target.value
    })


function pathInput (){
    btn.addEventListener("click", (event) =>{
        console.log(valueInput)
    })
    return valueInput;
}
const valor = pathInput()



let offset = 1;
let limit = 4;

previous.addEventListener("click", ()=>{
    if( offset != 1){
        offset -= 8;
        removeChilNode(productContainer)
        fetchProductos(offset, limit)
    }
})

next.addEventListener("click", () =>{
    offset += 9;
    removeChilNode(productContainer)
    fetchProductos(offset, limit)
})



function fetchProducto(id){
    fetch(`http://localhost:3000/${id}`)
    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        create(data)
        spiner.style.display = "none";
    })
}

function fectchProductoByName(name){
    fetch(`http://localhost:3000/?name=${name}`)
        .then((res) => res.json())
        .then(data =>{
            console.log(data.price)
        })
}


function fetchProductos(offset, limit){
    spiner.style.display = "block";
    for(let i=offset; i<=offset + limit; i++){
        fetchProducto(i);
    }
}

function create(data){
    const divCard = document.createElement("div")
        divCard.classList.add("div_card")
        const tittle = document.createElement("p")
        tittle.classList.add("tittle")
        tittle.textContent = data.name
        const img = document.createElement("img")
        img.src = data.url_image
        const precio = document.createElement("p")
        precio.textContent = `$${data.price}`
        divCard.appendChild(img)
        divCard.appendChild(tittle)
        divCard.appendChild(precio)
        productContainer.appendChild(divCard)
}

function removeChilNode(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


fetchProductos(offset, limit);

const opcion1 = document.querySelector("#energetica");

opcion1.addEventListener("click", () =>{
    
    fetEnergProduct()
})

function fetchCategory(){
    fetch("http://localhost:3000")
        .then((res) => res.json())
        .then(categorias =>{
            console.log(categorias)
        })
}

function fetEnergProduct(){
    fetch("http://localhost:3000/energizante")
        .then((res) => res.json())
        .then(energ =>{
            console.log(energ)
    })
}

