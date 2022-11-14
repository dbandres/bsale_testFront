const productContainer = document.createElement("div");
const productos = document.querySelector("#allProducts");
const formInput = document.querySelector("#formInput");
productContainer.classList.add("container")
document.body.appendChild(productContainer)
const input = document.querySelector("#input");
const submit = document.querySelector("#submit")
const checkEnerg = document.querySelector("#chec");
const checkPisco = document.querySelector("#checP");
const checkRon = document.querySelector("#checR");
const checkBebida = document.querySelector("#checB");
const checkSnack = document.querySelector("#checS");
const checkCerveza = document.querySelector("#checCer");
const checkVod = document.querySelector("#checVod");


let checkValue; 

checkEnerg.addEventListener("change", ()=>{
    if(checkEnerg.checked && checkEnerg.value === "on"){
        removeChilNode(productContainer)
        checkValue = 1
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkPisco.addEventListener("change", () =>{
    if(checkPisco.checked && checkPisco.value === "on"){
        removeChilNode(productContainer)
        checkValue = 2
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkRon.addEventListener("change", () =>{
    if(checkRon.checked && checkRon.value === "on"){
        removeChilNode(productContainer)
        checkValue = 3
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkBebida.addEventListener("change", () =>{
    if(checkBebida.checked && checkBebida.value === "on"){
        removeChilNode(productContainer)
        checkValue = 4
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkSnack.addEventListener("change", () =>{
    if(checkSnack.checked && checkSnack.value === "on"){
        removeChilNode(productContainer)
        checkValue = 5
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkCerveza.addEventListener("change", () =>{
    if(checkCerveza.checked && checkCerveza.value === "on"){
        removeChilNode(productContainer)
        checkValue = 6
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})

checkVod.addEventListener("change", () =>{
    if(checkVod.checked && checkVod.value === "on"){
        removeChilNode(productContainer)
        checkValue = 7
        console.log(checkValue)
        getProductByCategory(checkValue)
        
    } 
    else removeChilNode(productContainer)
})




// FET PRODUCTS CATEGORY
function getProductByCategory(category){
    fetch(`https://bsaletest-production-8998.up.railway.app/category?category=${category}`)
    .then((res) => res.json())
    .then(data =>{
        for(let i = 1; i<= data.length; i++){
            console.log(data[i])
            create(data[i])
        }
    })
}

//PREVENT DEFAULT
formInput.addEventListener("submit", (e)=>{
    e.preventDefault();
})

//FETCH AND CREATE CARD ALL PRODUCTS

function fetchAllProcuts(){
    fetch("https://bsaletest-production-8998.up.railway.app/")
        .then((res) => res.json())
        .then(data =>{
           for(let i = 1; i<= data.length; i++){
                console.log(data[i])
                create(data[i])
           } 
        })
}

productos.addEventListener("click", ()=>{
    removeChilNode(productContainer)
    fetchAllProcuts()
})

//CREATE CARD 
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

//CAPTURAR INPUT

let inputValue

input.addEventListener("keyup", (e)=>{
    inputValue = e.target.value;
})

submit.addEventListener("click", ()=>{
    removeChilNode(productContainer)
    fectchProductoByName(inputValue)
})

//FETCH PRODUCT BY NAME

let name = "ENERGETICA RED BULL"

function fectchProductoByName(name){
    fetch(`https://bsaletest-production-8998.up.railway.app/product/?name=${name}`)
        .then((res) => res.json())
        .then(data =>{
            console.log(data[0])
            create(data[0])
        })
}

//REMOVE PRUEBA

function removeChilNode(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
