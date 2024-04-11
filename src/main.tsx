import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import CharacterProvider from './providers/CharacterProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <CharacterProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
     </CharacterProvider>

  </React.StrictMode>,
)
