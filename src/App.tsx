import React, { useEffect } from 'react';
import './App.scss';
import './theme.css'
import { FlexBox, MaxHeightContainer, Hr } from './component-library';
import { About, Calendar, Contact, Footer, Header, MainCTA, Section } from './components';

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
        <FlexBox flexDirection='column' justifyContent="stretch" gap="1rem">
          <Section location='music' label="Music">
            music
          </Section>
          <Hr />
          <Section location='videos' label='Videos'>
            videos
          </Section>
          <Hr />
          <Section location='pictures' label='Pictures'>
            pictures
          </Section>
          <Hr />
          <Section location='calendar' label="Calendar">
            <Calendar />
          </Section>
          <Hr />
          <Section location='about' label='About'>
            <About />
          </Section>
          <Section location='contact' label='Contact'>
            <Contact />
          </Section>
        </FlexBox>
      </MaxHeightContainer>
    </div>
  );
}

export default App;

// TODO music
// TODO videos
// TODO pictures