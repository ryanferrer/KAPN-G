import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      adjectives: ['adolescent', 'boastful', 'captivating', 'dubious', 'excellent'],
      nouns: ['axolotl', 'bandicoot', 'capybara', 'dalmation', 'echidna'],
      currentAdjective: 'Nonexistent',
      currentNoun: 'Nematode'
    };
  }

  randomlySelectOnePair(){

  }

  render(){
    return (
      <>
        <div>Here's your kick-ass generated name for your next project!!</div>
        <div>{this.state.currentAdjective} {this.state.currentNoun}</div>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));