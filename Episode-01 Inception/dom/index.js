console.log("connected with html file!")

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements

let heading1 = document.createElement("h1");
heading1.innerText = "Heading1 tag is created by pure DOM!";
heading1.style.backgroundColor = "red";
heading1.style.color = "white";

// access the root element to insert new heading tag
let root = document.getElementById("root");
// console the root of element
console.log(root)

// append heading1(child) into parent
root.appendChild(heading1);

// you have a specific heading1 element in your JavaScript. 
// This code will iterate through all its current style properties 
// then apply them as inline style attributes in the HTML:
let heading2 = document.createElement("h2");
heading2.innerText = "Heading2 tag is created by pure DOM!";
heading2.style.backgroundColor = "black";
heading2.style.color = "white";

root.appendChild(heading2);