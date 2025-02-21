import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonial"
import { GlowingEffectDemo } from "./components/GlowingEffect"
import { HeroHighlightDemo } from "./components/HeroHighlight"
import Approach from "./components/MyApproach"
import {ThreeDCardDemo} from "./components/RecentProjects"


function App() {
  return (
    <main className="relative bg-[#010217] flex justify-center items-center flex-col overflow-hidden ">
    <div className="w-full dark flex justify-center items-center flex-col gap-10 ">
     <HeroHighlightDemo/>
     <div className="px-10">
     <GlowingEffectDemo/>
     <ThreeDCardDemo/>
     <AnimatedTestimonialsDemo/>
     <Approach/>

     </div>

     

    </div>
    </main>
  )
}

export default App
