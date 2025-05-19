import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route }  from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import CoinsTable from './components/Market/CoinsTable'
function App() {
  const [count, setCount] = useState(0)
const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600,
          minWidth: 800,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xba3fff,
          backgroundColor: 0x23153c,
          points: 13,
          maxDistance: 20,
          spacing: 15,
          showDots: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
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
