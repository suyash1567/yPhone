
gsap.from('.tophead',{
  
    opacity:0,
    duration:1,
    y:-50
    
})
gsap.from('.subhead', {
   
    opacity:0,
    duration:1,
    y:50,
    delay:1
})

gsap.from(".right-top",{
    scrollTrigger :{ 
       trigger: '.landing',
       scrub:1,
    start:20,
    },
    x:300,
    y:-100,
    opacity:0,
    ease:Expo.easeOut
    }
    )
gsap.from(".left-top",{
        scrollTrigger :{ 
           trigger: '.landing',
           scrub:1,
        start:20,
        },
        x:-300,
        y:-100,
        opacity:0,
        ease:Expo.easeOut
        }
        )

gsap.from(".left-bot",{
            scrollTrigger :{ 
               trigger: '.landing',
               scrub:1,
            start:20,
            },
            x:-300,
            y:100,
            opacity:0,
            ease:Expo.easeOut
            }
            )
          
            gsap.from(".right-bot",{
                scrollTrigger :{ 
                   trigger: '.landing',
                   scrub:1,
                start:20,
                },
                x:300,
                y:100,
                opacity:0,
                ease:Expo.easeOut
            
                
                }
                )
    
gsap.to(".headcover",{
    scrollTrigger:{
        trigger:'.headcover',
        toggleActions:"restart none none none"
    },
    duration:3.5,
    x:-1000,
    ease:Power4.easeout
})
gsap.to(".paracover",{
    scrollTrigger:{
        trigger:'.paracover',
        toggleActions:"restart none none none"
    },
    duration:3.5,
    x:1000,
    ease:Power4.easeout
})

gsap.to(".circle",{
    scrollTrigger:{
        trigger: ".camera",
        scrub:1,
    },
    
    duration : 2,
    opacity:1,
    ease:Power4.easein
})

gsap.to(".right",{
    scrollTrigger:{
        trigger:".circle",
        toggleActions:"restart none none none"
    },
    duration:2,
   ease:Power4.easein
})

gsap.to(".capture-cover",{
    scrollTrigger:{
        
        trigger:'.text-cover',
        toggleActions:"restart none none none",
        scrub:1,
    },
    
    duration:5,
    x:1000,
    ease:Power0.easeout
})
        
gsap.to(".text-cover",{
    scrollTrigger:{
        scrub:1,
        trigger:'.text-cover',
        toggleActions:"restart none none none"
    },
    
    duration:5,
    x:1000,
    ease:Power0.easeout
})
gsap.to(".dslr-cover",{
    scrollTrigger:{
       scrub:1,
        trigger:'.dslr-cover',
        toggleActions:"restart none none none"
    },
    
    duration:5,
    x:1000,
    ease:Power0.easeout
})
           
gsap.to(".red",{
    scrollTrigger:{
        trigger:'.fast',
        toggleActions:"restart none none none",
        scrub:2,
        
        
    },
    duration:6,
    x:3000,
    ease:Power0.easeOut
})

gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });
  
  
  ScrollTrigger.create({
    snap: 1 / 4 // snap whole page to the closest section!
  });