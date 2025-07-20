import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children,cart}) => {
  return (
    <div>
      <Navbar cart={cart}/>
      <div>{children}</div>
      <Footer/>
      </div>
  )
}

export default Layout