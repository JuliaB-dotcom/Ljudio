import React from 'react'
import ReactDOM from 'react-dom'
import './CSS/index.css'
import App from './App'
import PlayerContextProvider from './contexts/PlayerContexts'

//render app in HTML
ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
