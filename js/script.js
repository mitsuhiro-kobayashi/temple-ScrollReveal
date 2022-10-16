const sections = document.querySelectorAll('section')

sections.forEach(el => {
    gsap.from(el, .5, {
        opacity: 0,
        y: 20,
        scale: 0.8,
        ease: 'back',
        scrollTrigger: {
            trigger: el,
            start: '10% 80%',
            end: '+=300px',
            markers: true,
        }
    })
})