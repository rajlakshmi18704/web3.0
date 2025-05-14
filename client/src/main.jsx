import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CryptoContext, { CryptoState } from './context/CryptoContext.jsx'
import { TransactionProvider } from "./context/TransactionContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TransactionProvider>
        <CryptoContext>

    <App />
    </CryptoContext>
  </TransactionProvider>
  </StrictMode>,
)
