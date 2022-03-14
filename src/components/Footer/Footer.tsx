import React from 'react';
import { FlexBox } from 'component-library/Box';

export const Footer = () => {
  return (
    <footer className="Footer">
      <FlexBox gap="1rem" justifyContent="flex-end" padding='.5rem'>
        <a href="#place" className="Footer__link">Link</a>
        <a href="#place" className="Footer__link">Link</a>
        <a href="#place" className="Footer__link">Link</a>
      </FlexBox>
    </footer >
  )
}