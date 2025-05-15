import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { SimpleForm } from './SimpleForm'
import { PokeApi } from './PokeApi'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <PokeApi />
  //</StrictMode>,
)
