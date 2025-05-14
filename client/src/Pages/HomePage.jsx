import { Navbar,Welcome,Services,Transactions,Footer} from "../components/index";
import React from 'react'

function HomePage() {
  return (
    <>
     <div className="gradient-bg-welcome">
      <Navbar />
   
       <Welcome />
    </div> 
    <Services /> 
  <Transactions />

    <Footer />  
    </>
   
  )
}

export default HomePage
