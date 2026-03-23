import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './pages/Dashboard'
import Deployments from './pages/Deployments'
import Logs from './pages/Logs'
import './App.css'

// ✏️ Change this object to update name across the whole app
const currentUser = {
  name: 'Karan S.',
  role: 'Frontend Dev',
  initials: 'KS',
}

function App() {
  const [expanded, setExpanded] = useState(true)

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar expanded={expanded} setExpanded={setExpanded} user={currentUser} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <Navbar expanded={expanded} user={currentUser} />
          <main style={{
            flex: 1,
            padding: expanded ? '32px' : '24px',
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
            transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflowX: 'hidden',
          }}>
            <Routes>
              <Route path="/"            element={<Dashboard user={currentUser} />} />
              <Route path="/deployments" element={<Deployments />} />
              <Route path="/logs"        element={<Logs />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App