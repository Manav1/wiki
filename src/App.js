import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
    </div>
  );
}

export default App;
