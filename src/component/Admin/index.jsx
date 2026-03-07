import { useState } from 'react'
const Layout = () => {
    const [size, setSize] = useState(0)
    const [accountMenu, setAccountMenu] = useState(false)
    return (
        <div className='flex'>
            <aside
                className=' fixed top-0 left-0  h-full bg-fuchsia-500'
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            >

            </aside>
            <section
                className='bg-gray-200 h-screen w-full '
                style={{
                    marginLeft: size,
                    transition: '0.3s'
                }}
            >
                <nav className='bg-white p-8 shadow-lg flex text-center  align-middle justify-between'>
                    <div className='flex gap-4 align-middle'>
                        <button onClick={() => setSize(size === 280 ? 0 : 280)}
                            className='w-8 h-8 border-none hover:text-white hover:rounded-md hover:border-fuchsia-500 hover:bg-fuchsia-500'
                        >
                            <i className="ri-menu-line text-xl font-semibold"></i>
                        </button >
                        <h1 className='text-lg font-semibold '>vivek</h1>
                    </div>

                    <div>
                        <button
                            className='relative'
                            onClick={() => setAccountMenu(!accountMenu)}
                        >
                            <img src='/images/avatar.avif' className='w-10 h-10 rounded-full right-[0%]' />
                            {accountMenu &&
                                <div className='absolute top-16 right-[0%] min-h-[50px] w-52 bg-white shadow-3xl'>
                                    <h1 className=' font-semibold '>vivek</h1>
                                    <p className='text-gray-500'>vs2299043@gmaol.com</p>
                                    <hr className='border-gray-200 m-2' />
                                    <button
                                        className='p-2 font-semibold text-lg text-gray-700'

                                    >
                                        <i className="ri-logout-circle-r-line mx-2"></i>logout
                                    </button>

                                </div>
                            }
                        </button>

                    </div>
                </nav>
            </section>
        </div>
    )
}
export default Layout;
