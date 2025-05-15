import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import CoinsTable from './components/Market/CoinsTable'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    
      <Router>
        <Routes>
<Route path="/" element={<HomePage/>} />
        <Route path="/market" element={<CoinsTable/>} />
        </Routes>
        
      </Router>
      </div>
    </>
  )
}

export default App
