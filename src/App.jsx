import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './component/Admin/Product.jsx'
import Order from './component/Admin/Order.jsx'
import Dashboard from './component/Admin/Dashboard.jsx'
import Setting from './component/Admin/Setting.jsx'
import Customer from './component/Admin/Customers.jsx'
import Payment from './component/Admin/Payment.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin'>
          <Route path='Product' element={<Product />} />
          <Route path='Order' element={<Order />} />
          <Route path='' element={<Dashboard />} />
          <Route path='Setting' element={<Setting />} />
          <Route path='Customers' element={<Customer />} />
          <Route path='Payments' element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
