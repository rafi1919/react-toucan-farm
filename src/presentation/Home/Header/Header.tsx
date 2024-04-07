// import { useState } from 'react'
import Button from '../../UI/Components/Button/Button'


function Header() {

  return (
    <>
      <div className='w-full h-full '>
        <div className='mx-auto max-w-[960px] h-full overflow-hidden'>
          <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  w-full h-full rounded-xl bg-green mt-20 items-center'>
              <div className='flex flex-col gap-4 md:p-8 p-6 '>
                <h1 className='text-h1 text-white'>Organic Food is Good For Health</h1>
                <p className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique earum illum, suscipit temporibus voluptatibus tenetur cum eum quisquam ipsum non nulla</p>
                <Button 
                  text='Read more' 
                  className='bg-red'
                  onClick={function (): void {
                    throw new Error('Function not implemented.')
                  } } />
              </div>
              <div className='-mb-[20px]'>
                <img src='/image/header.png'  alt='farmer'/>
              </div>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Header
