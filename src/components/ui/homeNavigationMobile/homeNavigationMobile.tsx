'use client'

import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function HomeMobileNavigation() {
    
  gsap.registerPlugin(ScrollToPlugin);
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState(0);


  //1 Navigation point

  const navToHome = () => {
    gsap.to(window, {
      duration: 1,

      scrollTo: { y: "0" }
    })
  }

   //2 Navigation point
  const navToServices = () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "2400" },
      
    })
    gsap.to(window, {
      
      duration: 4,
      scrollTo: { y: "2600" }
      
    })
  }
 
   //3 Navigation point
  const navToCompany = () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "6400" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 4,
      scrollTo: { y: "7480" }
      
    })
  }

   //4 Navigation point
  const navToLaura = () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "9250" }
    })
   
  }

   //5 Navigation point
  const navToIsaac = () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "11420" }
    })
   
  }

   //6 Navigation point
  const navToPhilanthropy = () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "14000" }
    })
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: "15300" }
    })
  }

   //7 Navigation point
  
  const navToGammysCTA = () => {
    
    gsap.to(window, {
      duration: 4,

      scrollTo: { y: "17800" }
    })
    
  }

   //8 Navigation point
  const navToEdenGlobal = () => {
    gsap.to(window, {
      duration: 4,

      scrollTo: { y: "19200" }
    })
    
  }
  const navToEdenGlobalCTA = () => {
    gsap.to(window, {
      duration: 4,

      scrollTo: { y: "20400" }
    })
    
  }

  const steps = [
    navToHome,
    navToServices,
    navToCompany,
    navToLaura,
    navToIsaac,
    navToPhilanthropy,
    navToGammysCTA,
    navToEdenGlobal,
    navToEdenGlobalCTA
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
        const next = currentStep + 1;
        setCurrentStep(next);
        steps[next]();
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
        const prev = currentStep - 1;
        setCurrentStep(prev);
        steps[prev]();
    }
  }

  const scrollPositions = [0, 2400, 6400, 9250, 11420, 14000, 17800, 19200, 20400];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = scrollY + (window.innerHeight / 3); 

      let newStep = 0;
      for (let i = 0; i < scrollPositions.length; i++) {
        if (triggerPoint >= scrollPositions[i]) {
            newStep = i;
        }
      }
      
      setCurrentStep((prev) => (prev !== newStep ? newStep : prev));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname !== '/') return null;

  return (
    <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl transition-all duration-300 hover:bg-black/50">
        <button 
            onClick={() => {
              steps[0]();
              setCurrentStep(0);
            }}
            className="transition-all duration-300 opacity-100 hover:text-accent-primary hover:scale-110 cursor-pointer border-r border-white/20 pr-4 -mr-2.5"
            aria-label="Go to Start"
            title="Back to Top"
        >
            <Home size={20} className="text-white" />
        </button>
        <button 
            onClick={handlePrev} 
            disabled={currentStep === 0} 
            className={`transition-all duration-300 ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:text-accent-primary hover:scale-110 cursor-pointer'}`}
            aria-label="Previous Section"
        >
            <ChevronLeft size={24} className="text-white" />
        </button>
        
        {/* Optional: Indicator dots or text */}
        <div className="flex gap-2">
            {steps.map((_, index) => (
                <div 
                    key={index} 
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentStep ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                />
            ))}
        </div>

        <button 
            onClick={handleNext} 
            disabled={currentStep === steps.length - 1} 
            className={`transition-all duration-300 ${currentStep === steps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:text-accent-primary hover:scale-110 cursor-pointer'}`}
            aria-label="Next Section"
        >
            <ChevronRight size={24} className="text-white" />
        </button>
    </div>
  )
}