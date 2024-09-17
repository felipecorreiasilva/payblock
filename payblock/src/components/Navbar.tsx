import { links } from '@/constants/NavLinks'
import Link from 'next/link'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className=''>

        <ul className='hidden sm:flex justify-between p-10'>
            <div className="">
                <li>
                    <Link
                    href={'/'}

                    >LOGO</Link>
                </li>
            </div>

            <div className="sm:flex space-x-8">
                
                    {links.map((link:any, i:number)=>{
                        return (
                            <li className='hover:border-b border-white' key={i}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        )
                    })}
                
            </div>
            
        </ul>
        
        <ul className='sm:hidden flex justify-between p-8'>
            
                <li>
                    <Link
                    href={'/'}

                    >LOGO</Link>
                </li>
            
                <li className=''>
                    <button >
                        <IoMenu className='h-6 w-6' />
                    </button>
                    
                </li>
        </ul>
        
    </nav>
  )
}

export default Navbar