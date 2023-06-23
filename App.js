const heading =  React.createElement(
    "div",
    {id:'heading'}, 
    React.createElement(
        "div",{id:'heading'},
        React.createElement("h1",{id:'heading'},"this is h1tag"))
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);