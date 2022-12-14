
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider, QueryClient } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import CssBaseline from '@mui/material/CssBaseline'

import { App } from './App'

const CLIENT = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ CLIENT }>
      <BrowserRouter>
        <ReactQueryDevtools />
        <CssBaseline />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
