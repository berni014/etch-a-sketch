const container= document.getElementById("container");
const btn= document.getElementById("btn");


function createGrid(size){
    container.innerHTML="";
for (let i = 0 ;i < size*size; i++ ) {
    

    let miniDiv = document.createElement("div");
    miniDiv.classList.add("square")

    miniDiv.addEventListener("mouseover",() => {
        const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Aplicamos el color usando Template Literals
    miniDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })

    container.appendChild(miniDiv)
}
}

btn.addEventListener("click",()=>{
    let userSize= prompt("how many squares per side do you want(max 100)");
    userSize= parseInt(userSize);
    if(userSize>0 && userSize<= 100){
        createGrid(userSize);
    }
    else {
        alert("Elige un numero entre 1 y 100.")
    }

})

createGrid(16);