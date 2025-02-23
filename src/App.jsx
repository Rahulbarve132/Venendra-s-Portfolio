import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonial"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import { GlowingEffectDemo } from "./components/GlowingEffect"
import { HeroHighlightDemo } from "./components/HeroHighlight"
import Approach from "./components/MyApproach"
import {ThreeDCardDemo} from "./components/RecentProjects"


function App() {
  return (
    <main className="relative bg-[#010217] flex justify-center items-center flex-col overflow-hidden ">
    <div className="w-full dark flex justify-center items-center flex-col gap-10 ">
     <HeroHighlightDemo/>
     <div className="md:px-10 px-10">
     <GlowingEffectDemo/>
     <ThreeDCardDemo/>
     <Experience/>
     <AnimatedTestimonialsDemo/>
     <Approach/>
     <Footer/>

     </div>

     

    </div>
    </main>
  )
}

export default App
