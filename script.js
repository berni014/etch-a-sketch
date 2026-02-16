const container= document.getElementById("container");

let totalCuadrados= 16*16;

for (let i = 0 ;i < totalCuadrados; i++ ) {
    
    let miniDiv = document.createElement("div");
    miniDiv.classList.add("square")

    miniDiv.addEventListener("mouseover",() => {
        miniDiv.style.backgroundColor= "blue";
    })

    container.appendChild(miniDiv)
}


