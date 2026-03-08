import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './component/Admin/Product.jsx'
import Order from './component/Admin/Order.jsx'
import Dashboard from './component/Admin/Dashboard.jsx'
import Setting from './component/Admin/Setting.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin'>
          <Route path='Product' element={<Product />} />
          <Route path='Order' element={<Order />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Setting' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
