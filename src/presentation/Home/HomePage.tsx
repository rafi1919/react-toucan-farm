import { useState } from 'react'
import Header from './Header/Header'
import Description from './Desc/Desc'
import Features from './Feature/Feature'
import Product from './Product/Product'
import Visit from './Visit/Visit'
import Choose from './Choose/Choose'
import Gallery from './Gallery/Gallery'
import Farmer from './Farmer/Farmer'
import Movement from './Movement/Movement'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'


interface Page {
  page: any
}

const HomePage: Page[] =[
  {page:<Header /> },
  {page:<Description /> },
  {page:<Features /> },
  // {page:<Product/> },
  {page:<Visit /> },
  {page:<Choose /> },
  {page:<Gallery /> },
  {page:<Farmer /> },
  {page:<Movement/> },
  {page:<Blog/> },
  // {page:<Footer/> },





]

function Home() {

  return (
    <>
     <div>
      {HomePage.map((item, index)=>(
      <section key={index} className='panel flex-col justify-center'>
        <div className='child'>
          {item.page}
        </div>
      </section>
      ))}
    
     </div>
    </>
  )
}

export default Home
