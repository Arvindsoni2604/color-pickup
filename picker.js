var noOfSquares = 6;

// palette
var arr = [];

// color picked for target
var picked;

// to get all the squares div 
var squares = document.getElementsByClassName("square");

// to get all the RGB display
var targetColor = document.getElementById("targetColor");

// message that can be empty , try again or correct 
var message = document.getElementById("message");

// heading 
var head = document.querySelector("h1");

// reset button
var reset = document.getElementById("NewColor");

init();

function init() {
    // generate random colored palette 
    arr = generateRandomColor(noOfSquares);

    // get target color randomly from the array size 
    picked = arr[randomPickedColorIndex()];

    // updating target RGB display 
    targetColor.textContent = picked;
    {
    
    for (var i = 0; i < squares.length; i++) {
        // setting square's color one by one to palette color 
        squares[i].style.backgroundColor = arr[i];

        // add event listener to squares
        squares[i].addEventListener("click", function (){
            if  (picked===this.style.backgroundColor)
                {
                message.textContent = "Correct";
                message.style.color = "green";

                // when correct, set everything to the target color and set newcolor to play again
      changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again?";
            }
             else
             {
                message.textContent = "Try Again";
                message.style.color = "red";

                // to hide the wrong square, set it to background color 
                this.style.backgroundColor = "#232323";}
            })
        }
    
    }
};
    


// Reset button event listener
reset.addEventListener("click", resetIn);

function randomPickedColorIndex() {
    return Math.floor(Math.random()*arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i= 0; i<limit; i++) {
        color.push(rgbGenerator());
    }
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}

function changeColor(color) 
{

    for (var i = 0; i<squares.length; i++) 
        squares[i].style.backgroundColor = color;
    
    head.style.backgroundColor = color;
}

function resetIn() {
    arr = generateRandomColor(noOfSquares);
    picked = arr[randomPickedColorIndex()];
    targetColor.textContent = picked;
    message.textContent = "";
    head.style.backgroundColor = "steelblue";
    
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = arr[i];
    }
}