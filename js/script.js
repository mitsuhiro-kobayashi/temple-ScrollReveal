//sectionのふわっと出てくるアニメーション
const sections = document.querySelectorAll('section')

sections.forEach(el => {
    gsap.from(el, .5, {
        opacity: 0,
        y: 20,
        scale: 0.6,//伸縮
        // ease: 'back',
        scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: '+=300px',
            markers: true,
            scrub: true,//スクロール量に応じて動く
            // once: true,//一回こっきりかどうか
        }
    })
})

gsap.to('.firstview', 1, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.firstview',
        start: '30% 20%',
        end: '70% 20%',
        opacity: 1,
        markers: true,
        scrub: true,
    }
})