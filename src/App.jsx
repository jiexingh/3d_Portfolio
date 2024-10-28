
/** Learnning from
 * https://www.youtube.com/watch?v=0fYi8SGA20k 
 */

import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience,Feedbacks,Hero,Navbar,Works,StarsCanvas, Tech } from './components'
const App = () => {
  return (
   <BrowserRouter>
     <div className="relative z-0 bg-pr
     ">
      <div className="bg-hero-pattern bg-co
       bg-no-repeatb bg-center">
          <Navbar />
          <Hero />
       </div>

       <About />
       <Experience/>
       <Tech />
       <Works />
       <Feedbacks/>

       <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
       </div>
     </div>
   </BrowserRouter>
  )
}

export default App
