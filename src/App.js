/* eslint-disable no-unused-vars */
// import react in every file component. also import images or css at the top.
import { useState } from 'react'
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';


// language called JSX that can represnet HTML in JS.
function App() {
  const [categories] = useState([
    {name: 'commercial', description: 'Photoes of grocery stores, food trucks, and other commercial projects'},
    {name: 'portraits', description: 'Portraits of people in my life' },
    {name: 'food', description: 'Delicious delicacies'},
    {name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature'},
  ]);

  const[currentCategory, setCurrentCategory] = useState(categories[0]);

 return (
   <div>
     <Nav
     categories={categories}
     setCurrentCategory={setCurrentCategory}
     currentCategory={currentCategory}
     ></Nav>
     
     <main>
       <Gallery currentCategory={currentCategory}></Gallery>
       <About></About>
     </main>
   </div>
 );
}

export default App;
