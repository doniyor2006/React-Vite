import { useState } from 'react'
import '../src/assets/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
