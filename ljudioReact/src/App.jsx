import { useState } from 'react'
import Start from "./components/Start"
// import Search from "./components/Search"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">
      {/* <Search /> */}
      <Start />
    </div>

  )
}

export default App
