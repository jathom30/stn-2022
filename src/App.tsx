import React, { useEffect, useState } from 'react';
import './App.scss';
import './theme.css'
import { FlexBox, MaxHeightContainer, Hr } from './component-library';
import { About, Calendar, Contact, Footer, Header, Images, MainCTA, Music, Section, Videos } from './components';

function App() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = width < 600

  return (
    <div className="App">
      <MaxHeightContainer
        fullHeight
        header={<Header isMobile={isMobile} />}
        footer={<Footer />}
      >
        <MainCTA isMobile={isMobile} />
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

// TODO header active tracking