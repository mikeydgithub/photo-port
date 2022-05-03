// import react in every file component. also import images or css at the top.
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';


// language called JSX that can represnet HTML in JS.
function App() {
 return (
   <div>
     <Nav></Nav>
     <main>
       <About></About>
     </main>
   </div>
 );
}

export default App;
