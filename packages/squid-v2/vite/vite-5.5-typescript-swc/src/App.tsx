// @ts-expect-error - Required top-level React import for vite typescript swc plugin
import React from 'react';
import './App.css'
import { SquidWidget } from '@0xsquid/widget'

function App() {
  return (
    <>
      <h1 className='title'>Vite + Squid</h1>
      <SquidWidget
        config={{
          integratorId: "<your-integrator-id>"
        }}
      />
    </>
  )
}

export default App
