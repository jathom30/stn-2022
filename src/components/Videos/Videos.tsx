import { FlexBox } from 'component-library';
import React from 'react';
import './Videos.scss'

export const Videos = () => {
  return (
    <div className="Videos">
      <FlexBox flexDirection='column' gap="1rem">
        <YoutubeEmbed embedId='VOorvFGkFmU' />
        <YoutubeEmbed embedId='UpIqZn-E9Ys' />
        <YoutubeEmbed embedId='A-UyZxr2qhQ' />
      </FlexBox>
    </div>
  )
}

const YoutubeEmbed = ({ embedId }: {embedId: string}) => (
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
