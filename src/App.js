import React from 'react';
import './App.css';

import UserInterface from "./components/UserInterface"

const App = () => {
  return (
    <main>
     <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
    </main>
  );
}

export default App;