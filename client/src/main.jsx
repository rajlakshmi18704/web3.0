import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TransactionProvider } from './context/TransactionContext'
import CryptoContext from '../src/context/CryptoContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionProvider>
<CryptoContext>
    <App />
    </CryptoContext>
    </TransactionProvider>
  </StrictMode>,
)
