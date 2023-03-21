import React, { useState } from 'react'

const Component = (props) => {
  const [error, setError] = useState(false)
  if (error) {
    throw new Error('Uncaught Exception')
  }
  return (
    <>
      {error && <div>{somethingNotDefined}</div>}
      <button onClick={() => setError(true)}>Throw Error</button>
    </>
  )
}

export default Component
