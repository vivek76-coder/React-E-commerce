import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Admin/index.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'<h1>jai shree ram </h1>'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
