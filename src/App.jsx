

import Banner from './components/Banner'
import Faq from './components/Faq'
import LastBanner from './components/LastBanner'
import Mission from './components/Mission'
import Navbar from './components/Navbar'
import Service from './components/Service'

import Stats from './components/Stats'
import Testimonial from './components/Testimonial'


function App() {


  return (
    <>
     <div className=' px-1 py-1 bg-white'>
       <Navbar></Navbar>

       <Banner></Banner>
       <Stats></Stats>

       <Mission></Mission>
       <Service></Service>
       <Testimonial></Testimonial>
       <Faq></Faq>
       <LastBanner></LastBanner>

     
     </div>
  
    </>
  )
}

export default App
