import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Images.scss'

const s3Images = ['band', 'bigHandsV2', 'brick', 'danHead', 'garage', 'palace', 'daveHead', 'palace1', 'bigHead', 'palace2', 'sit', 'jeffHead', 'smallestToLargest', 'stand', 'walk', 'zachHead']
const items = s3Images.map(image => ({ original: `https://stn-pics.s3.us-east-2.amazonaws.com/${image}.jpg`, thumbnail: `https://stn-pics.s3.us-east-2.amazonaws.com/${image}-thumbnail.jpg`}))

export const Images = () => {
  return (
    <div className="Images">
      <ImageGallery items={items} />
    </div>
  )
}
