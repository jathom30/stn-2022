import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import './theme.css'
import { FlexBox, MaxHeightContainer, Hr } from './component-library';
import { About, Calendar, Contact, Footer, Header, Images, MainCTA, Music, Section, Videos } from './components';

const closestToZero = (tops: {name: string; top: number}[]) =>
  tops.sort((a, b) => Math.abs(0 - a.top) - Math.abs(0 - b.top))[0]

function App() {
  const [width, setWidth] = useState(0)
  const [scrolledSection, setScrolledSection] = useState('cta')
  const ctaRef = useRef<HTMLDivElement>(null)
  const musicRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const picturesRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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

  const handleScroll = (top: number) => {
    // TODO make this not static
    const headerHeight = headerRef.current?.getBoundingClientRect().height || 0
    const refTops = [
      {
        name: 'cta',
        top:ctaRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'music',
        top:musicRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'videos',
        top:videoRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'pictures',
        top:picturesRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'calendar',
        top:calendarRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'about',
        top:aboutRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
      {
        name: 'contact',
        top:contactRef.current?.getBoundingClientRect().top || 0 - headerHeight
      },
    ]
    setScrolledSection(closestToZero(refTops).name)
  }

  return (
    <div className="App">
      <MaxHeightContainer
        fullHeight
        onScroll={handleScroll}
        header={<Header headerRef={headerRef} isMobile={isMobile} defaultActive={scrolledSection} />}
        footer={<Footer />}
      >
        <MainCTA isMobile={isMobile} ctaRef={ctaRef} />
        <div className="App__sections">
          <FlexBox flexDirection='column' justifyContent="stretch" gap="1rem">
            <Section location='music' label="Music" sectionRef={musicRef}>
              <Music />
            </Section>
            <Hr />
            <Section location='videos' label='Videos' sectionRef={videoRef}>
              <Videos />
            </Section>
            <Hr />
            <Section location='pictures' label='Pictures' sectionRef={picturesRef}>
              <Images />
            </Section>
            <Hr />
            <Section location='calendar' label="Calendar" sectionRef={calendarRef}>
              <Calendar />
            </Section>
            <Hr />
            <Section location='about' label='About' sectionRef={aboutRef}>
              <About />
            </Section>
            <Hr />
            <Section location='contact' label='Contact' sectionRef={contactRef}>
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