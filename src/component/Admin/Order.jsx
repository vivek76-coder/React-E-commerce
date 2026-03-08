import { useState } from 'react'
import Layout from './Index.jsx'
const Order = () => {
    const [orders, setOrders] = useState([
        {
            OrderId: 1,
            CustomerName: 'abc',
            Email: 123,
            Mobile: 1234567890,
            Product: 'xyz',
            Amount: 101210,
            Date: '10/10/2026',
            Status: 'pending'
        },
        {
            OrderId: 1,
            CustomerName: 'abc',
            Email: 123,
            Mobile: 1234567890,
            Product: 'xyz',
            Amount: 101210,
            Date: '10/10/2026',
            Status: 'pending'
        },
        {
            OrderId: 1,
            CustomerName: 'abc',
            Email: 123,
            Mobile: 1234567890,
            Product: 'xyz',
            Amount: 101210,
            Date: '10/10/2026',
            Status: 'pending'
        },
        {
            OrderId: 1,
            CustomerName: 'abc',
            Email: 123,
            Mobile: 1234567890,
            Product: 'xyz',
            Amount: 101210,
            Date: '10/10/2026',
            Status: 'pending'
        }
    ])
    return (
        <Layout>
            <table className='w-[80%] mt-6 m-auto'>
                <thead>
                    <tr className='bg-rose-600 text-white '>
                        <th className='py-4 '>OrderID</th>
                        <th>Customer's Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => (
                            <tr
                                className='py-4' key={index}
                                style={{
                                    background: (index + 1) % 2 === 0 ? '#f1f5f9' : ' white'
                                }}
                            >
                                <td className='py-4 flex gap-4'>{order.OrderId}</td>
                                <td>{order.CustomerName}</td>
                                <td>{order.Email}</td>
                                <td>{order.Mobile}</td>
                                <td>{order.Product}</td>
                                <td>{order.Amount}</td>
                                <td>{order.Date}</td>
                                <td><select className='border-none py-2'>
                                    <option value='pending'>Pending</option>
                                    <option value='progress'>progressing</option>
                                    <option value='dispatched'>Dispatched</option>
                                    <option value='returned'>Returned</option>
                                </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Layout>

    )
}
export default Order