import { links } from '@/constants/NavLinks'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=''>
        <ul className='flex justify-between p-10'>
            <div className="">
                <li>
                    <Link
                    href={'/'}

                    >LOGO</Link>
                </li>
            </div>

            <div className="flex space-x-8">
                
                    {links.map((link:any, i:number)=>{
                        return (
                            <li className='hover:border-b border-white' key={i}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        )
                    })}
                
            </div>
            
        </ul>
    </nav>
  )
}

export default Navbar