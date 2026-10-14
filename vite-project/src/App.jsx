import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ColorModeDropdown from './components/ColorModeDropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorModeDropdown />
    </>
  )
}

export default App
