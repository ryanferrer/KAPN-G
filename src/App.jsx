import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Randomize from './components/Randomize.jsx'

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

  randomlySelectOnePair(e){
    e.preventDefault();

    let n = 5;
    let adjectives = this.state.adjectives;
    let nouns = this.state.nouns;

    let selectIndex = Math.floor(n * Math.random());
    console.log(selectIndex);
    this.setState({
      currentAdjective: adjectives[selectIndex],
      currentNoun: nouns[selectIndex]
    });
  }

  render(){
    return (
      <>
        <div>Here's your kick-ass generated name for your next project!!</div>
        <div>{this.state.currentAdjective} {this.state.currentNoun}</div>
        <Randomize handleClick={this.randomlySelectOnePair.bind(this)}/>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));