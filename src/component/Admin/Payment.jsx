import { useState } from 'react'
import Layout from './Index.jsx'
const Payment = () => {
    const [payments, setPayments] = useState([
        {
            paymentId: '#1ffsdsd',
            CustomerName: 'abc',
            Email: 123,
            Mobile: 1234567890,
            Product: 'xyz',
            Amount: 101210,
            Date: '10/10/2026',
        },
    ])
    return (
        <Layout>
            <div className='m-4'>
                <h1 className='text-lg font-bold'>payments</h1>
                <table className='w-[100%] mt-6 m-auto'>
                    <thead>
                        <tr className='bg-rose-600 text-white text-left'>
                            <th className='py-4 '>paymentID</th>
                            <th>Customer's Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => (
                                <tr
                                    className='py-4' key={index}
                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : ' white'
                                    }}
                                >
                                    <td className='p-4 flex gap-4'>{payment.paymentId}</td>
                                    <td>{payment.CustomerName}</td>
                                    <td>{payment.Email}</td>
                                    <td>{payment.Mobile}</td>
                                    <td>{payment.Product}</td>
                                    <td>₹{payment.Amount.toLocaleString()}</td>
                                    <td>{payment.Date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>

    )
}
export default Payment