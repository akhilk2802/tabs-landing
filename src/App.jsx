import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['sales pitches', 'engineering docs', 'HR Policies', 'project docs',]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <div className="background-gradient"></div>
      <div className="home">
        <div className="content-wrapper">
          <h1 className="title">
            <span className="title-main">Tabs</span>
            <span className="title-dot">.</span>
          </h1>
          <div className="rotating-text">
            <span className="constant">write </span>
            <span className="rotating" key={currentIndex}>
              {texts[currentIndex]}
            </span>
          </div>
          <div className="coming-soon-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Coming Soon</span>
          </div>
          <div className="waitlist">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="notify-button">Notify me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

