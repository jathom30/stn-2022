import { AmazonIcon, AppleIcon, BandcampIcon, SpotifyIcon } from 'assets/icons';
import { FlexBox, GridBox } from 'component-library';
import React, { useEffect, useRef } from 'react';
import './Music.scss'

export const Music = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      console.log(ref.current?.getBoundingClientRect().top, window.scrollY)
      console.log('here')
    }
    window.addEventListener('scroll', () => handleScroll())
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="Music">
      <GridBox gap="1rem" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        <div className="Music__iframe">
        <iframe
          title="music-iframe"
          width="400"
          height="340"
          style={{border: 0}}
          src="https://bandcamp.com/EmbeddedPlayer/album=1293610731/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://smalltimenapoleon.bandcamp.com/album/too-big-to-fail">Too Big To Fail by Small Time Napoleon</a>
        </iframe>
        </div>
        <FlexBox flexDirection='column' justifyContent='center' alignItems="center" gap="1rem">
          <h3>Streaming Platforms</h3>
          <FlexBox flexWrap='wrap' gap="1rem" alignItems="center" justifyContent="center">
            <a target="_blank" rel="noreferrer" href="https://geo.itunes.apple.com/us/album/too-big-to-fail-ep/1254499820?mt=1&app=music" className="Music__link">
              <FlexBox gap=".5rem" alignItems="center">
                <AppleIcon />
                <span>Apple Music</span>
              </FlexBox>
            </a>
            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/0mNtsUTeDK3Tnewy9tuD2b" className="Music__link">
              <FlexBox gap=".5rem" alignItems="center">
                <SpotifyIcon />
                <span>Spotify</span>
              </FlexBox>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.amazon.com/Too-Fail-Small-Time-Napoleon/dp/B073PRSLCB/ref=sr_1_2_twi_mus_1?ie=UTF8&qid=1528214595&sr=8-2&keywords=small+time+napoleon" className="Music__link">
              <FlexBox gap=".5rem" alignItems="center">
                <AmazonIcon />
                <span>Amazon</span>
              </FlexBox>
            </a>
            <a target="_blank" rel="noreferrer" href="https://smalltimenapoleon.bandcamp.com/" className="Music__link">
              <FlexBox gap=".5rem" alignItems="center">
                <BandcampIcon />
                <span>Bandcamp</span>
              </FlexBox>
            </a>
          </FlexBox>
        </FlexBox>
      </GridBox>
    </div>
  )
}