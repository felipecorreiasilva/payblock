import React, { ReactNode } from 'react'
import Header from './Header'

interface PropsMainContainer {
    children: ReactNode
}

const MainContainer = (props:PropsMainContainer) => {
  return (
    <div className="bg-stone-950 text-white overflow-x-hidden">
        <Header />
        <main className="container flex justify-center items-center h-screen">
        
        
            
            {props.children}
        
        
    </main>
    <footer className='mt-32 md:mt-64'>
        <div className="text-white p-32 text-center">Footer</div>
      </footer>

    </div>
    
  )
}

export default MainContainer