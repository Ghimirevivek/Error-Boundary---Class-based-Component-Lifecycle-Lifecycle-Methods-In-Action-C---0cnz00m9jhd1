import React from 'react'
import '../styles/App.css'
import Component from './Component'
import ErrorBoundary from './ErrorBoundary'
const App = () => {
  const errorGenerator = () => {
    throw new Error('Uncaught Exception Generated')
  }
  const changeFunc = () => {
    // change function implementation
  }
  return (
    <div id="main">
      <h2>React Error Boundaries</h2>
      <ErrorBoundary>
        <Component change={changeFunc} />
      </ErrorBoundary>
      <button id="gen" onClick={errorGenerator}>
        Generate Error
      </button>
    </div>
  )
}

export default App
