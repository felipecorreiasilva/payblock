import React, { ReactNode } from 'react'
import Header from './Header'

interface PropsMainContainer {
    children: ReactNode
}

const MainContainer = (props:PropsMainContainer) => {
  return (
    <main className=" bg-stone-950 text-white">
        <Header />
        <div className="flex justify-center items-center h-screen">
            
            {props.children}
        </div>
        
    </main>
  )
}

export default MainContainer