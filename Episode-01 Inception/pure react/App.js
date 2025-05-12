
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

// React.createElement("tagname","attribute","content")
// Multiple childrens = [child1,child2]

// Solution1:
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("h1",{id:"child1"},"I am an h1 tag"),
    React.createElement("h2",{id:"child2"},"I am an h2 tag"),
    React.createElement("h3",{id:"child3"},"I am an h3 tag"),
    React.createElement("h4",{id:"child4"},"I am an h4 tag"),
    React.createElement("h5",{id:"child5"},"I am an h5 tag"),
    React.createElement("h6",{id:"child6"},"I am an h6 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


/*
 - creating Sibling React Elements Object 
 * <div id="mainParent" style="background: skyblue;">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */


// solution2:
const mainParent = React.createElement("div",{id:"mainParent"},[
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
    ]),
    React.createElement("div",{id:"parent"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag"),
    ])
]);

console.log(mainParent);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
console.log(root2);
root2.render(mainParent);