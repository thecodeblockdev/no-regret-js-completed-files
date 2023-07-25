"use strict";
console.log(React);
console.log(ReactDOM);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
    return <></>;
}

const myFirstList = React.createElement("ul", null, [
    React.createElement("li", null, "Item1"),
    React.createElement("li", null, "Item2"),
]);

root.render(<App />);

// Before react 18, in react 17 we used to do it like this

// const rootEl = document.getElementById("root");

// ReactDOM.render("lol", rootEl);
