import React from 'react';

//import React, { useState } from 'react';
//import Header from './Header';

import './global.css';

import Logon from './pages/Logon';


function App() {

  return (
    <Logon />
  ) ;
}



/*const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
      <div>
        <Header>Contador: {counter}</Header>
        <button onClick={increment}>Incrementar</button>
      </div>
      
    );
}*/


export default App;
