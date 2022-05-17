// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/cors', {mode: 'cors'});
      const data = await response.json();
      console.log({ data });
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React CORS Guide</h1>
    </div>
  );
}

export default App;