import { FlexBox } from 'component-library';
import React, { ReactNode, RefObject } from 'react';
import './Section.scss'

export const Section = ({ children, location, label, sectionRef }: { children: ReactNode; location: string; label: string; sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <div ref={sectionRef} className="Section" id={location}>
      <FlexBox flexDirection='column' gap="1rem">
        <h2>{label}</h2>
        {children}
      </FlexBox>
    </div>
  )
}