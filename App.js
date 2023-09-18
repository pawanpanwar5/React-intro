
//  Parcel - Created a server,
//  HMR - Hot Module Replacement responsible for refreshing the browser
//  file watcher algorithm - keeping track of changes in files
//  building, minify, cleaning code, dev & prod build
//  super fast build algo, image optimization, caching while developing
//  compression, compatible with older versions of browsers
//  https on dev, manages port number, consistent hashing algorithm 
//  zero config, tree shaking- remove unwanted code

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id: "title",
    key: "h1",
}, "Namaste React");
const heading2 = React.createElement("h2", {
    id: "title",
    key: "h2",
}, "Heading2");
    
/*
    <div class="header">
        <h1> Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
*/

//JSX - how to create element in jsx format eg:heading3 below

const title = (
    <h1 id="title" key="h3">
        Namaste React var
        </h1>
    );
const Title = () => (
<h1 id="Title" key="h4">
    Namaste React fn
    </h1>
);

//React Componenet
// Functional component

const HeaderComponent = () => {
    return (
    <div>
        {title}
        <Title/>  
        {/* component composition - use of component inside a component */}
        {Title()}
        <h2>Namaste React functional component</h2>
        <h2>This is a h2 tag</h2>
    </div>
    
    // if multiple line then we have to use paranthesis and for single line only ; is enough
    );
};

const container = React.createElement(
    "div", 
    {
        id: "container",
        hello: "world", 
    },
    [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//root.render(container);
root.render(<HeaderComponent/>); //rendering functional component
