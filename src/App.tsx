import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Login/login'
import Dashboard from './Dashboard/dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
