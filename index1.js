let container = document.getElementById('main_container');
let clear = document.getElementById('clearBtn');
let bwB = document.getElementById('bw');
let colorbtn = document.getElementById('color');
let color = 1;

clear.addEventListener('click',clearGrid);
colorbtn.addEventListener('click',colorGrid);
bwB.addEventListener("click", bw);

function paint(){
    if(color == 1){
        this.style.backgroundColor = "black";
    }else if(color = 2){
        let random1 = Math.floor(Math.random()*256);
        let random2 = Math.floor(Math.random()*256);
        let random3 = Math.floor(Math.random()*256);
        this.style.backgroundColor = "rgb("+random1+", "+random2+", "+random3+")";
        // console.log(this.style.backgroundColor);
    }
}

function colorGrid(){
    let newGrid = prompt("Please enter desired grid size (e.g. 16 will result in a 16x16 grid)");
    newGrid = parseInt(newGrid);
    container.innerHTML = "";
    while(!newGrid || newGrid > 64 || newGrid < 1){
        alert("Try again. Must enter an integer between 1 and 64.");
        newGrid = prompt("Please enter desired grid size.");
    }
    makeRows(newGrid, newGrid);
    color = 2;
}





function clearGrid(){
    let x = prompt("Please enter the size of grid:");
    x = parseInt(x);
    container.innerHTML = "";

    while (!x || x < 1 || x > 64)
    {
        alert("Enter between 1 and 64");
        x = prompt("Please enter:");
    }
    makeRows(x,x);
    
}


function makeRows(rows, cols) {
    
    let sz = 576.6/rows;
    let sz1 = 550/cols;

    for (let i = 0; i < rows * cols; i++)
    {
        let ele = document.createElement('div');
        ele.style.float = "left";
        ele.style.width = sz + "px";
        ele.style.height = sz1 +"px";
        ele.style.backgroundColor = "grey";
        ele.addEventListener("mouseover",paint);
        container.appendChild(ele);

    }
    
}
makeRows(16,16);



