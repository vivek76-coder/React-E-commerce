import { useState } from 'react'
import Layout from './Index.jsx'
const Customer = () => {
    const [customers, setCustomers] = useState([
        {
            CustomerName: 'Game',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'Game1',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        },
        {
            CustomerName: 'abc',
            Email: '123@.com',
            Mobile: 1234567890,
            Date: '10/10/2026',
        }
    ])
    return (
        <Layout>
            <div className='m-5'>
                <h1 className='text-lg font-bold'>Customers</h1>


                <table className='w-[100%] mt-6 m-auto'>
                    <thead>
                        <tr className='bg-rose-600 text-white text-left'>
                            <th className='p-4'>Customer's Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer, index) => (
                                <tr
                                    className='py-4' key={index}
                                    style={{
                                        background: (index + 1) % 2 === 0 ? '#f1f5f9' : ' white'
                                    }}
                                >
                                    <td className='py-4 flex gap-4'>
                                        <div className='flex gap-4 px-4 '>
                                            <img src='/images/avatar.avif' className='w-10 h-10 rounded-full' />
                                            <div className='flex flex-col'>
                                                <span className='font-semibold'>
                                                    {customer.CustomerName}
                                                </span>
                                                <div className='text-gray-500'>
                                                    {customer.Date}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{customer.Email}</td>
                                    <td>{customer.Mobile}</td>
                                    <td>{customer.Date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
export default Customer