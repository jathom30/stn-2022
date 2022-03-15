import React from 'react';
import ImageGallery from 'react-image-gallery';
import bigHands from 'assets/bigHandsV2.jpg'
import danHead from 'assets/danHead.jpg'
import sizing from 'assets/smallestToLargest.jpg'
import band from 'assets/band.jpg'
import brick from 'assets/brick.jpg'
import garage from 'assets/garage.jpg'
import palace from 'assets/palace.jpg'
import palace1 from 'assets/palace1.jpg'
import palace2 from 'assets/palace2.jpg'
import sit from 'assets/sit.jpg'
import stand from 'assets/stand.jpg'
import walk from 'assets/walk.jpg'
import './Images.scss'

const images = [
  {
    original: brick,
    thumbnail: brick,
  },
  {
    original: palace2,
    thumbnail: palace2,
  },
  {
    original: bigHands,
    thumbnail: bigHands,
  },
  {
    original: walk,
    thumbnail: walk,
  },
  {
    original: garage,
    thumbnail: garage,
  },
  {
    original: palace1,
    thumbnail: palace1,
  },
  {
    original: danHead,
    thumbnail: danHead,
  },
  {
    original: palace,
    thumbnail: palace,
  },
  {
    original: sizing,
    thumbnail: sizing,
  },
  {
    original: band,
    thumbnail: band,
  },
  {
    original: sit,
    thumbnail: sit,
  },
  {
    original: stand,
    thumbnail: stand,
  },
]

export const Images = () => {
  return (
    <div className="Images">
      <ImageGallery items={images} />
    </div>
  )
}