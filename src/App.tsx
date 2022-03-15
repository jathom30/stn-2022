import React, { useEffect } from 'react';
import './App.scss';
import './theme.css'
import { FlexBox, MaxHeightContainer, Hr } from './component-library';
import { About, Calendar, Contact, Footer, Header, Images, MainCTA, Music, Section, Videos } from './components';

function App() {

  useEffect(() => {
    const handleResize = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <MaxHeightContainer
        fullHeight
        header={<Header />}
        footer={<Footer />}
      >
        <MainCTA />
        <div className="App__sections">
          <FlexBox flexDirection='column' justifyContent="stretch" gap="1rem">
            <Section location='music' label="Music">
              <Music />
            </Section>
            <Hr />
            <Section location='videos' label='Videos'>
              <Videos />
            </Section>
            <Hr />
            <Section location='pictures' label='Pictures'>
              <Images />
            </Section>
            <Hr />
            <Section location='calendar' label="Calendar">
              <Calendar />
            </Section>
            <Hr />
            <Section location='about' label='About'>
              <About />
            </Section>
            <Hr />
            <Section location='contact' label='Contact'>
              <Contact />
            </Section>
          </FlexBox>
        </div>
      </MaxHeightContainer>
    </div>
  );
}

export default App;

// TODO music
// TODO videos
// TODO pictures