import React from 'react';
import './App.css';
import Conditional from './conditional';

/* function App() {
  return (
    <div >
      
    </div>
  );
} */

class App extends React.Component {

  // yourMethodsHere()

  // addign states
    constructor() {
      super()
      this.state = {
        answer: "NO",
        num: 0,
        isLoading: true
      }
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500 )
    }
    
    handleClick() {
      this.setState(prevState => {
        return {
          num : prevState.num + 1
        }
      })
    }

    render() {
      let wordDisplay
      if (this.state.answer === "yes") {
        wordDisplay = "yes"
      }
      else {
        wordDisplay = "No"
      }
    // all style or constants can go here before return
    // const style = this.yourMethodHere()
      return (
        <div >
          <Conditional isLoading={this.state.isLoading}/>
          <h1>is there a state? {wordDisplay}</h1>
          <h2>{this.state.num}</h2>
          <p>click the button to see state change</p>
          <button onClick={this.handleClick}>Change</button>
        </div>
    );
  }
}

export default App;
