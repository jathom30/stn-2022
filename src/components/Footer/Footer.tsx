import React from 'react';
import { FlexBox } from 'component-library';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'assets/icons';
import './Footer.scss'


export const Footer = () => {
  return (
    <footer className="Footer">
      <FlexBox justifyContent="space-between" alignItems="center" padding='.5rem'>
        <span>© Small Time Napoleon 2022</span>
        <FlexBox gap="1rem" alignItems="center">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/smalltimenapoleonband" className="Footer__link"><FacebookIcon /></a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/smalltime_napoleon/" className="Footer__link"><InstagramIcon /></a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/stnapoleonband" className="Footer__link"><YoutubeIcon /></a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/stnapoleonband/" className="Footer__link"><TwitterIcon /></a>
        </FlexBox>
      </FlexBox>
    </footer >
  )
}