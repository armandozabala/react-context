import React from 'react'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import HolaProvider from './context/HolaProvider';
import ThemeProvider from './context/ThemeProvider'

function App() {

  return (
      <div> 
         <ThemeProvider>
           <HolaProvider>
               <Navbar/>
               <Principal/>
           </HolaProvider>
         </ThemeProvider>
      </div>
  );
}

export default App;
