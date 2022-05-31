import './HomeWork.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const HomeWork = () => {

    const image1 = useRef(null)
    const image3 = useRef(null)

    useEffect(() => {
        window.requestAnimationFrame(() => {
            //image 1
            gsap.fromTo(image1.current, { y: 100 }, { y: -150, scrollTrigger: { trigger: image1.current, scrub: .9, }, })

            //image 3
            gsap.fromTo(image3.current, { y: -50 }, { y: 100, scrollTrigger: { trigger: image3.current, scrub: .9, }, })
        })
    }, [])

    return (
        <section className="column content-width" id="home-work-section">
            <h1>Work</h1>
            <div className="row">
                <div id="block-0" className="block">
                    <img src="/home/work/ali-ali-hero.webp" height="3113" alt="Ottografie" loading="lazy"/>
                    <video playsinline="" loop="loop" muted="muted" disablepictureinpicture="">
                        <source src="https://a.storyblok.com/f/133769/x/4d7b412c76/hover-ali.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="column" id="home-work-right-section">
                    <div className="row">
                        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                        <span>Featured Projects</span>
                    </div>
                    <p>Highlights of cases that we<br />passionately built with forward-<br />thinking clients and friends over<br />the years.</p>
                    <div id="block-1" className="block" ref={image1}>
                        <img src="/home/work/ottografie-hero.webp" />
                        <video playsinline="" loop="loop" muted="muted" disablepictureinpicture="">
                            <source src="https://a.storyblok.com/f/133769/x/a02005ba43/hover-otto.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="block-3" className="block" ref={image3}>
                    <img src="/home/work/aebele-interiors-hero.webp" />
                </div>
                <div id="block-2" className="block">
                    <img src="/home/work/rino-pelle-hero.webp" />
                </div>
            </div>
        </section>
    )
}

export default HomeWork