import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['sales pitches', 'eng docs', 'HR Policies']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2000) // Change text every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <div className="home">
        <h1>Tabsiuhiuuih</h1>
        <div className="rotating-text">
          <span className="constant">write </span>
          <span className="rotating" key={currentIndex}>
            {texts[currentIndex]}
          </span>
        </div>
        <p>coming soon</p>
      </div>
    </div>
  )
}

export default App

