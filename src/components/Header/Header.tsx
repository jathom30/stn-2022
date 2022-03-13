import React, { useEffect, useRef, useState } from 'react';
import { Hamburger } from 'component-library';
import { FlexBox } from 'component-library/Box';
import './Header.scss'
import { useOnClickOutside } from 'hooks';

const links = ['music', 'videos', 'pictures', 'calendar', 'about', 'contact']

export const Header = () => {
  const [width, setWidth] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useOnClickOutside(headerRef, () => setIsOpen(false))

  const handleLinkClick = (link: string) => {
    setIsOpen(false)
    setActiveLink(link)
  }

  const isMobile = width < 600

  return (
    <header className="Header" ref={headerRef}>
      <FlexBox padding='1rem' justifyContent="space-between">
        <Blimp />
        {isMobile ? (
          <button className='Header__hamburger-btn' onClick={() => setIsOpen(!isOpen)}>
            <Hamburger isOpen={isOpen} />
          </button>
        ) : (
          <FlexBox gap="1rem">
            {links.map(link => <HeaderLink key={link} location={link} onClick={() => handleLinkClick(link)} isActive={link === activeLink} />)}
          </FlexBox>
        )}
      </FlexBox>
      {isMobile && isOpen && (
        <FlexBox flexDirection='column' gap="1rem" padding='1rem'>
          {links.map(link => <HeaderLink key={link} location={link} onClick={() => handleLinkClick(link)} isActive={link === activeLink} />)}
        </FlexBox>
      )}
    </header>
  )
}

const HeaderLink = ({ location, isActive, onClick }: { location: string; isActive: boolean; onClick: (link: string) => void }) => (
  <a href={`#${location}`} onClick={() => onClick(location)} className={`HeaderLink ${isActive ? 'HeaderLink--is-active' : ''}`}>{location}</a>
)

const Blimp = () => {
  return (
    <svg className='Blimp' xmlns="http://www.w3.org/2000/svg" width="611.251" height="242.265" viewBox="0 0 611.251 242.265">
      <path id="Layer_3" fill="#FBB040" d="M611.251 73.78c-4.832-1.982-9.858-10.352-17.977-18.883C465.239-91.03 96.408 99.184 89.658 107.719c0 0-4.948-.98-5.576-2.705-5.692.035-24.135 5.788-25.072 6.736-1.387 3.513-1.812 21.461-3.654 24.081-8.615 11.417-10.228 13.906-13.123 21.338-1.768 3.093-27.799 3.742-30.729 5.996-4.183 1.752-10.499 2.732-10.499 2.732s-1.121 1.146-.994 1.919c5.321 1.795 37.311.998 40.117 3.841 1.689 14.114 15.99 23.665 18.294 25.002.024 5.822-2.388 24.713-.706 27.315 23.193 18.36 27.352-3.241 28.081-4.878 6.955.998 7.505-4.264 8.021-5.163 84.246 31.005 270.322 9.798 277.129 7.463 4.543 14.979 18.83 11.063 21.613 12.005.705 2.716-.402 2.494-.875 2.575-12.072-2.825-3.301 13.028.127 2.817 5.459-1.764 4.316-4.345 4.666-5.491 25.537 2.099 13.959-16.671 18.266-18.752C598.628 173.953 603.82 87.333 606.232 82.47c1.277-4.966 2.349-6.359 5.019-8.69z"></path>
    </svg>
  )
}