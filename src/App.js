import React, {Component} from 'react';


//1st thing we need is state, we want to have total count in state
class App extends Component {
  state = {
    count: 0
  };
  //update count(increment)
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
//on each click we show total count in the state
  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <button onClick={this.increment}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default App;
