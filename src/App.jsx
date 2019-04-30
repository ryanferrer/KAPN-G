import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return (
      <>
        Boy Howdy!
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));