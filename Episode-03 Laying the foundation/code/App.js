
// JavaScript Code :  Manipulating the HTML DOM using Javscript
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!"
const root = document.getElementById("root");
root.appendChild(heading);
*/ 

// const heading = React.createElement("h1", {}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// creating Nested React Elements Object: Here h1 is an React Object not HTML Element
// creating Nested React Elements Object

/*
 - creating Nested React Elements Object
 *  <div id="parent">
 *     <h1 id="child1">I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
*/

/**
 * JSX: JavaScript XML
 * JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render) => DOM(Browser)
 *
 * JSX is a syntactic sugar for React.createElement
 * JSX is not a valid JavaScript, it needs to be transpiled using Bable to React.createElement before it can be rendered in the browser using ReactDOM
 * JSX (transpiled before it can be rendered in the browser using ReactDOM) => Parcel (Bundler) => Babel (Transpiler) => React.createElement => ReactDOM
 * JSX is optional, you can write React without JSX
 * JSX is more readable and easy to write
 * JSX is more like HTML
 * JSX is look like HTML or XML like syntax, but it's not HTML or XML. It's a syntax extension of JavaScript.
 * JSX is mixed of JavaScript and HTML like syntax that allows us to write HTML like code in React. 
 * JSX prevents cross-site injection attacks by escaping any values embedded in JSX before rendering them. 
 * 
 * Babel is a transpiler that converts JSX into React.createElement calls before it can be rendered in the browser using ReactDOM
 * Babel: JavaScript compiler that takes your modern JavaScript code (ES6) and returns code that most browsers can understand.
 */
/*
const jsxHeading = <h1 id="heading">Namasate React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
*/

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" id="heading">
    <h1 style={{color: "red"}}>{elem}</h1>
    Namaste React using JSX 🚀
  </h1>
);

console.log(Title)

const HeaderComponent = () =>{
    return(
        <div>
           <h1>HeaderComponent Upper Bounder</h1>
           <Title/>
           <h1>HeaderComponent Lower Bounder</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)