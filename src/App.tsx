import React from 'react';
import './App.scss';
import './theme.css'
import { FlexBox, MaxHeightContainer } from './component-library';
import { About, Calendar, Footer, Header, MainCTA, Section } from './components';
import { Hr } from 'component-library/Hr';

function App() {
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
        </FlexBox>
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