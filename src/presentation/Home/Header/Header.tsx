import { useState } from 'react'
import Button from '../../UI/Components/Button/Button'


function Header() {

  return (
    <>
      <div className='w-full h-[70vh] bg-pink '>
        <div className='mx-auto max-w-[960px] px-6 md:px-3'>
          <div className='md:max-w-[400px] w-full pt-20'>
            <h1 className='text-h1 font-Playpen-Sans text-green'>Organic Food is Good For Health</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique earum illum, suscipit temporibus voluptatibus tenetur cum eum quisquam ipsum non nulla</p>
          </div>
          
          <div className='flex flex-row gap-7 mt-4'>
            <Button 
            text='learn more' 
            onClick={function (): void {
              throw new Error('Function not implemented.')
            } } />
            <Button 
            text='read more' 
            className='bg-yellow'
            onClick={function (): void {
              throw new Error('Function not implemented.')
            } } />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header
