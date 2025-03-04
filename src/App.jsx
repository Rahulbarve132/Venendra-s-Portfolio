import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonial"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import { GlowingEffectDemoSecond } from "./components/GlowingEffect"
import { HeroHighlightDemo } from "./components/HeroHighlight"
import Approach from "./components/MyApproach"

import {ThreeDCardDemo} from "./components/RecentProjects"
import { Services } from "./components/Services"


function App() {
  return (
    <main className="relative bg-[#03030f] flex justify-center items-center flex-col overflow-hidden ">
      
    <div className="w-full dark flex justify-center items-center flex-col gap-10 ">
   
     <HeroHighlightDemo/>
     <div className="md:px-10 px-10">
     <GlowingEffectDemoSecond/>
     <Experience/>
     <ThreeDCardDemo/>
     <Services/>
     <AnimatedTestimonialsDemo/>
     <Approach/>
     <Footer/>  

     </div>

     

    </div>
    </main>
  )
}

export default App
