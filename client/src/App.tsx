import React from 'react';
import Header from "./components/Header";
import Users from "./components/Users";
import './style.scss'
function App() {
  return (
    <div className="app">
      <Header/>
      <Users/>
    </div>
  );
}

export default App;
