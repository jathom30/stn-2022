import { FlexBox } from 'component-library';
import React, { ReactNode } from 'react';
import './Section.scss'

export const Section = ({ children, location, label }: { children: ReactNode; location: string; label: string }) => {
  return (
    <div className="Section" id={location}>
      <FlexBox flexDirection='column' gap="1rem">
        <h2>{label}</h2>
        {children}
      </FlexBox>
    </div>
  )
}