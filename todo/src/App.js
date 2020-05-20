import React from 'react';
import CheckBox from './CheckBox'
import Contact from './Contact'
//import Contact from '../../hey/src/Contact';

// to convert from JSX to JS we use {} to incorporate
// JS code
// objects in JS are placed between {}

function App() {
  const fName = "bharat"      //JS
  const lName = "gupta"       //JS
  const date = new Date()
  // just declare all styles outside then use inline
  // inline styles are used to make dynamic stuff happen
  // else declare most things in css
  const styles = {
    color: "#1AA39C",
    backgroundColor: "#D2E6F1"
  }
  return (
   
    <div className="Contact">
      name="stiffy"
      imgUrl="http://placekitten.com/200/300"
      phone="9876543210"
    </div>
  );
}

export default App;
