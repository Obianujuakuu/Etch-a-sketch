let clear = document.querySelector("button");
let container = document.querySelector(".container");
 

 // adding Event LIsteners
 clear.addEventListener('click', ()=>{ 
    resetSize()
})


//function to reset the grid square size
const resetSize = () => {
        
    let number = prompt("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number); 
}       

//function to create a 16x16 grid
const createGrid = (size) => {

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "black";
        container.appendChild(square);

 //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = "white";
        })


//function to reset the grid
        const clearGrid = () => {
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "black"
           })
        }
        

        clearGrid();    
    }
}

createGrid(16);