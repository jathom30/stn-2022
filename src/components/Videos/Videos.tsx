import { FlexBox, GridBox } from 'component-library';
import React from 'react';
import './Videos.scss'

export const Videos = () => {
  return (
    <div className="Videos">
      <FlexBox flexDirection='column' gap="1rem">
        <YoutubeEmbed embedId='JPb-I9_j6cc' />
        <GridBox gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="1rem">
          <YoutubeEmbed embedId='VOorvFGkFmU' />
          <YoutubeEmbed embedId='UpIqZn-E9Ys' />
        </GridBox>
        <span>Visit our <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/stnapoleonband">youtube channel</a> for more.</span>
      </FlexBox>
    </div>
  )
}

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="YoutubeEmbed">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
