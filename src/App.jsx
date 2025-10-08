import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Quiz from './components/quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Quiz Show</h1>

      <Quiz />
    </div>
  )
}

export default App;
