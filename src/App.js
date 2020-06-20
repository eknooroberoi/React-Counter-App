
//earlier state was used in class component only
//with the help of HOOKS we can use state in functional components as well, using HOOK called useState(), 
//other hooks example useEffect()- to handle side effects(when state changes or update, useEffect will run)
//so we don't have to write componentDidMount(), componentDidUpdate() life cycle methods
/*
We have to use class cpmponents for following reasons-
1) to keep data in state
2) to use lifecycle methods
3)to pass props from classes to functional components
However with react hooks, we can do all this without writing class components
*/

//const { useState, useEffect } = require("react")


// import React, {Component, useState, useEffect} from 'react';

// //useState enables us to use state without writing class components
// //useState function returns 2 things 1)current state value(count) 2) function(setCount)- that will let us update state value
// //instead of setState we are using setCount to update count in state
// const App = () => {
//   const [count, setCount] = useState(0);
//   //useEffect updates every time state(count) updates/changes. Itruns automatically on state change
//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   });
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//           <div>
//             <h2>Counter App</h2>
//             <button onClick={increment}>
//               Clicked {count} times
//             </button>
//           </div>
//         );
// };






//1st thing we need is state, we want to have total count in state
//write using life cycle methods
/*Creating 2 life cycle methods
1) componentDidMount
2) componentDidUpdate
*/

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
//   //set document title based on how many counts we have
//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//  // to reflect update, without it ,on increasing count by clicking on button, title won't change . Therefore DidUpdate is needed so that we can see changes in title
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

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




//write counter app using hooks
// export default App;










/////////////////////////////////////////////////////////NEWS APP USING HOOKS////////////////////////////////////////////////////////////////////////////////////////////////////



import React, {Component, useState, useEffect} from 'react';
const App =() => {
  //state
  //by default news array is []
  const [news, setNews] = useState([])
  //fetch news from hack and news Api
  const fetchNews = () => {
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));
  };
  // to get news we need to execute this method, it will not run by itself
  useEffect(() => {
    fetchNews()
  })
  return (
    <div>
      <h2>News</h2>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
        ))}
    </div>
  );
};

//write counter app using hooks
export default App;
