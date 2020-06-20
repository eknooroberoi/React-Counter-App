import React, {Component, useState} from 'react';


//1st thing we need is state, we want to have total count in state
// class App extends Component {
//   state = {
//     count: 0
//   };
//   //update count(increment)
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
// //on each click we show total count in the state
//   render() {
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }





//useState enables us to use state without writing class components
//useState function returns 2 things 1)current state value(count) 2) function(setCount)- that will let us update state value
//instead of setState we are using setCount to update count in state
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
          <div>
            <h2>Counter App</h2>
            <button onClick={increment}>
              Clicked {count} times
            </button>
          </div>
        );
};

//write counter app using hooks
export default App;
