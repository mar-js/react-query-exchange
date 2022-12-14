import { Route, Routes } from 'react-router-dom'

import { Home } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      { /* <Route path="*" element={ <NotFound /> } /> */ }
    </Routes>
  )
}
