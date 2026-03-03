import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ErrorBoundary } from './components/ErrorBoundary.jsx'
import './index.css'

const root = document.getElementById('root')
if (!root) {
  document.body.innerHTML = '<p style="padding:2rem;color:#2B3210;">Root element missing.</p>'
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    )
  } catch (e) {
    root.innerHTML = `<p style="padding:2rem;color:#c00;">Load error: ${e?.message ?? String(e)}</p>`
  }
}
