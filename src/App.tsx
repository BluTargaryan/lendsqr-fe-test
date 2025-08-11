import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Login/login'
import UsersPage from './Dashboard/pages/users'
import Dashboard from './Dashboard/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
