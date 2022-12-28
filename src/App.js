import React from 'react'
import { Route, Routes } from 'react-router'
import UseInputPage from './pages/UseInputPage'
import UseTabsPage from './pages/UseTabsPage'
import UseTitlePage from './pages/UseTitlePage'
import UseConfirmPage from './pages/UseConfirmPage'

const App = () => {
  return (
    <Routes>
      <Route path="use-input" element={<UseInputPage />} />
      <Route path="use-tabs" element={<UseTabsPage />} />
      <Route path="use-title" element={<UseTitlePage />} />
      <Route path="use-confirm" element={<UseConfirmPage />} />
    </Routes>
  )
}

export default App
