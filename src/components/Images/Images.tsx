import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Images.scss'

const s3Images = ['band', 'bigHandsV2', 'brick', 'danHead', 'garage', 'palace', 'palace1', 'palace2', 'sit', 'smallestToLargest', 'stand', 'walk']
const items = s3Images.map(image => ({ original: `https://stn-pics.s3.us-east-2.amazonaws.com/${image}.jpg`, thumbnail: `https://stn-pics.s3.us-east-2.amazonaws.com/${image}-thumbnail.jpg`}))

export const Images = () => {
  return (
    <div className="Images">
      <ImageGallery items={items} />
    </div>
  )
}
