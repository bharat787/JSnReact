import React from 'react';
import TodoItems from './TodoItems'
import Contact from './Contact'
import todoData from './todoData'

// to convert from JSX to JS we use {} to incorporate
// JS code
// objects in JS are placed between {}

function App() {
  const fName = "bharat"      //JS
  const lName = "gupta"       //JS
  const date = new Date()
  const todoItem = todoData.map(item => <TodoItems key={item.id} item={item}/>)
  // just declare all styles outside then use inline
  // inline styles are used to make dynamic stuff happen
  // else declare most things in css
  const styles = {
    color: "#1AA39C",
    backgroundColor: "#D2E6F1"
  }
  return (
    <div className="todo-list">     
      <h1>Hello {`${fName} ${lName}`}</h1>
      <h2 style={styles}>It's currently about {date.getHours() % 12} o'clock</h2>
      {todoItem}
      

      <Contact
      name="stiffy"
      imgUrl="http://placekitten.com/200/300"
      phone="9876543210"/>

      <Contact
      name="stiffly"
      imgUrl="http://placekitten.com/300/300"
      phone="9876543210"/>
    </div>
  );
}

export default App;
