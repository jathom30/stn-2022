import React from 'react';
import './App.scss';
import './theme.css'
import { MaxHeightContainer } from './component-library';
import { Footer, Header, MainCTA } from './components';

function App() {
  return (
    <div className="App">
      <MaxHeightContainer
        fullHeight
        header={<Header />}
        footer={<Footer />}
      >
        <MainCTA />
      </MaxHeightContainer>
    </div>
  );
}

export default App;


// TODO music
// TODO videos
// TODO pictures
// TODO calendar
// TODO about
// TODO contact
// TODO footer