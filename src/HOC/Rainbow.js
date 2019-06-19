import React from 'react'


// it's just a task to practise HOC
// randomize text color Component(HOC) that takes lower comp as argument
const Rainbow = (WrappedComponent) => {

// random colors array
const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
const randomColour = colours[Math.floor(Math.random() * 6)];
// random value is assigned to randomColour;
const className = randomColour + '-text';

// return comp with wrapped comp inside with new color
return (props) => (
    
    <li className={className}>
    <WrappedComponent {...props} />
  </li> 
)

}

export default Rainbow;