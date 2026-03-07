import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Admin/index.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
