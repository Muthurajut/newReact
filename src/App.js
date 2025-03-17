import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import MyBanner from './components/Banner';
import MyAccordionWithImage from './components/MyAccordionWithImage';
import ColorSection from './components/ColorSection';



function App() {
  return (
    <div>
      <NavbarComponent />
      <MyBanner />
      <ColorSection />
      <MyAccordionWithImage />
      <ColorSection />
    
    </div>
  );
}

export default App;
