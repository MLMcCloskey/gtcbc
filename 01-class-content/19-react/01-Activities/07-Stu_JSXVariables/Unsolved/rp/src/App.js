import React from "react";
import JSXVariables from "./components/JSXVariables";

const people = [
    {name: 'Mike',
    thoughts: 'i love react'},
    {name: 'Matt',
    thoughts: "i'm leraning to  love react"},
    {name: 'Garland',
    thoughts: 'i love react too'},

]
const App = () => people.map((person,i) => <JSXVariables key={i} {...person}/>);

export default App;
