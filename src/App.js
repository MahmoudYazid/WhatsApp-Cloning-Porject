
import './App.css';
import react from 'react';
import Navbar from './navbar';
import Part1 from './part1';
import Part2 from './part2';
import Part3 from "./part3";
import Part4 from './part4'
import Part5 from './part5';
const App=()=> {
  document.title = "WhatApp CLone By MahmoudYazid";
  return (
    <div className="Maincontainer">
      <Navbar></Navbar>
      <Part1></Part1>
      <Part2></Part2>
      <Part3></Part3>
      <Part4></Part4>
      <Part5></Part5>
    </div>
  );
}

export default App;
