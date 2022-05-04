/* eslint-disable no-unused-vars */
// import react in every file component. also import images or css at the top.
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';


// language called JSX that can represnet HTML in JS.
function App() {
 return (
   <div>
     <Nav></Nav>
     <main>
       <Gallery></Gallery>
       <About></About>
     </main>
   </div>
 );
}

export default App;
