import React from 'react'
import { ModeToggle } from '../ModeToggle'

const Header = () => {
  return (
    <main className='w-full max-w-screen-lg px-4 mx-auto flex justify-between items-center py-6 bg-inherit sticky top-0'>
     
<h2 className='font-bold text-3xl'>HS<span className='text-primary'>Blogs</span></h2>
<div><ModeToggle /></div>
       
    </main>
  )
}

export default Header
