import React from 'react'

const ShortDesc = ({ text, maxChars = 100 }) => {
// Truncate the text based on maxChars
const previewText = text.length > maxChars ? text.slice(0, maxChars) + " ..." : text;


  return (
    <div className="mb-4">
      {previewText}
    </div>
  )
}

export default ShortDesc