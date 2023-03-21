import React from 'react'

const Component = ({ change, error }) => {
  if (error) {
    throw new Error('Uncaught Exception')
  }
  return <>{error && <div>{change()}</div>}</>
}

export default Component
