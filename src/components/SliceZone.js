import * as React from 'react'

// DON'T FORGET to import each slice
import { FullWidthImage } from '../slices/FullWidthImage'
import { ImageGallery } from '../slices/ImageGallery'
import { ImageHighlight } from '../slices/ImageHighlight'
import { Quote } from '../slices/Quote'
import { Text } from '../slices/Text'

const SliceZone = ({ sliceZone }) => {
  // sanity check
  if (!sliceZone) {
    console.error(
      "missing sliceZone data! You probably forgot to query a Body field, or haven't passed it properly to the SliceZone component...",
    )
    return null
  }

  const sliceComponents = {
    full_width_image: FullWidthImage,
    image_gallery: ImageGallery,
    image_highlight: ImageHighlight,
    quote: Quote,
    text: Text,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    console.warn(
      `Can't create Slice Component from ${slice.slice_type}. Did you create the correct component, imported it into SliceZone.js and added it to the sliceComponents array?`,
    )
    return (
      <p>
        Can't process slice of type: <strong>{slice.slice_type}</strong>. See
        console for details.
      </p>
    )
  })

  // return sliceZone.map((slice, index) => <p key={index}>{slice.slice_type}</p>)

  return <main className="container">{sliceZoneContent}</main>
}

export default SliceZone
