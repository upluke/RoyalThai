import React from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Categories from './Categories/Categories'
import Footer from './Footer/Footer'




 

export default function IndexPage() {
 
    return (
   
            <div style={{backgroundColor:"#F7F7F7"}} >
                <NavBar/>
                <Hero />
                <Categories />
                <Footer />
                
            </div>
     
    )
}
