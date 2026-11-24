import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('loading...')
  
    useEffect(() => {
      fetch('/api/ping')
        .then(res => res.text())
        .then(setMessage)
        .catch(() => setMessage('API not reachable'))
    }, [])
  
    return <h1>API says: {message}</h1>
  }
  
  export default App