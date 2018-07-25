// this is just an output
/*
this is a multi line comment
*/
var derren = 0;
var tengboon = "I am tengboon";
var price = 1.23;

derren += 10;


// access div-change
var divChange = document.querySelector("#div-change");
// just for checking, kiasu and kiasee
console.log(divChange);
divChange.textContent = tengboon + derren;

// create function to make life easier
// call one line code to run many lines
// modular and reusable
// reduce, reuse, recycle, save my world
// similar to methods in Java
function edwin(){
    console.log("hello, welcome to javascript");
    console.log("error here" + derren);
    console.log("line 3");
    divChange.textContent = "You are hacked!!";
}
//change the style class 
divChange.classname="style2";
//change the stlye class (to combine if needed)
divChange.classname="style 2 style 3"

// call or invoke function
// edwin();

// add event listener to my special line
var clickme = document.querySelector("a.clickme");
console.log(clickme);
clickme.addEventListener("click", edwin);