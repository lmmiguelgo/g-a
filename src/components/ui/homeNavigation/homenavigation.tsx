'use client'

import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

const HomeNavigation = () => {
    
  gsap.registerPlugin(ScrollToPlugin);
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState(0);


  //1 Navigation point

  const navToHome = () => {
    gsap.to(window, {
      duration: 0,

      scrollTo: { y: "0" }
    })
  }

   //2 Navigation point
  const navToServices = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "2400" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "4800" }
      
    })
  }
  const navToServices2 = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "6200" }
    })

  }
   //3 Navigation point
  const navToCompany = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "8800" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "12140" }
      
    })
  }

   //4 Navigation point
  const navToLaura = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "12760" }
    })
   
  }

   //5 Navigation point
  const navToIsaac = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "14000" }
    })
   
  }

   //6 Navigation point
  const navToPhilanthropy = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "17800" }
    })
    gsap.to(window, {
      delay: 1,
      duration: 2,
      scrollTo: { y: "21300" }
    })
  }

   //7 Navigation point
  const navToGammys = () => {
    
    gsap.to(window, {
      duration: 2,

      scrollTo: { y: "21800" }
    })
    
  }
  const navToGammysCTA = () => {
    
    gsap.to(window, {
      duration: 2,

      scrollTo: { y: "24800" }
    })
    
  }

   //8 Navigation point
  const navToEdenGlobal = () => {
    gsap.to(window, {
      duration: 2,

      scrollTo: { y: "29000" }
    })
    
  }
  const navToEdenGlobalCTA = () => {
    gsap.to(window, {
      duration: 2,

      scrollTo: { y: "31200" }
    })
    
  }

  const steps = [
    navToHome,
    navToServices,
    navToServices2,
    navToCompany,
    navToLaura,
    navToIsaac,
    navToPhilanthropy,
    navToGammys,
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

  const scrollPositions = [0, 2400, 6200, 8800, 12760, 14000, 17800, 21800, 24800, 29000, 31200];

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
    <div className="hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40 lg:flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl transition-all duration-300 hover:bg-black/50">
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

export default HomeNavigation