import React from 'react';
import { FlexBox, GridBox } from 'component-library';
import Jeff from 'assets/jeff.jpg'
import Dan from 'assets/dan.jpg'
import Dave from 'assets/dave.jpg'
import Zack from 'assets/zack.jpg'
import './About.scss'

const members = [
  {
    name: 'Dan Hardin',
    instrument: 'Vocals, Guitar',
    image: Dan,
  },
  {
    name: 'Jeff Thomas',
    instrument: 'Vocals, Guitar',
    image: Jeff,
  },
  {
    name: 'Dave Neill',
    instrument: 'Bass, Vocals',
    image: Dave,
  },
  {
    name: 'Zack Kennedy',
    instrument: 'Drums, Percussion',
    image: Zack,
  },
]

export const About = () => {
  return (
    <div className="About">
      <FlexBox flexDirection='column' gap="1rem">
        <p>Small Time Napoleon is the combination of new ideas and old sounds. Their interest in the jazz standards of the swing-era shine through in their voices, writing, and playing, while their ear for new sounds and ideas constantly drives them forward. The product of this pairing is what Kyle Ware of Insider Louisville has called “a mad science blend of western swing, hot jazz and folk,” which is “already starting to gel into something wholly singular.”</p>
        <p>STN was born in the spring of 2013 after Dan Hardin and Jeff Thomas sought to expand their sound beyond the acoustic duo they had become comfortable with. Dave Neill (bass) and Ryan Fowler (drums) were hired for the recording sessions of the debut EP recorded that spring and ultimately decided to stay on as apart of the group’s permanent lineup. With this, the band grew to work as a unit. Each member now has a say in any song’s feel, tempo, mood, and overall composure. This lead to the recording and recent release of “Cloud Machine” in May of 2015, the band’s first full length album. Johnny Gutterman of Louisville.com believes, “This is the sound of a band so connected in vision and so united upon it’s path, that they come off sounding more like they’ve been playing together for decades.” Laura Shine, Assistant Program Director/On-Air Host at Louisville’s own WFPK, says of the band, “Small Time Napoleon is poised for big time things. They are truly one of the most unique and exciting bands I’ve seen come out of Louisville in a very long time. Their music and instrumentation and vocals are exquisite!”</p>
        <p>The band has been featured on The World Cafe as apart of David Dye’s “Sense of Place” series and was listed as one of Louisville’s 5 Best Local Acts, had the opportunity to play along side The Wood Brothers twice, played large festival style shows, including WFPK’s Waterfront Wednesday, and currently hold the record for most pre-sale tickets for a local show at The Clifton Center.</p>
        <h3>Members</h3>
        <GridBox gridTemplateColumns='repeat(auto-fit, minmax(150px, 1fr))' gap="1rem">
          {members.map(member => (
            <Member key={member.name} image={member.image} name={member.name} instrument={member.instrument} />
          ))}
        </GridBox>
      </FlexBox>
    </div>
  )
}

const Member = ({image, name, instrument}: {image: string; name: string; instrument: string}) => {
  return (
    <div className="Member">
      <img src={image} alt={name} />
      <p><span>{name}</span>: {instrument}</p>
    </div>
  )
}