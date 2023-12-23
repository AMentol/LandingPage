gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})
}
 gsap.fromTo('.hblock', {  boxShadow: "0px 0px 50px 100px #F6F6F6" } , { 
	boxShadow: "0px -200px 150px 100px #F6F6F6",
	scrollTrigger: {
		trigger: '.background',
		start: 'top',
		end: 'bottom',
		scrub: true
	}
 })
gsap.fromTo('.hblock .devimg', { x: -500, opacity: 0 } , { 
	opacity: 1, x: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })
gsap.fromTo('.hblock .devtext', { y: 500, opacity: 0 } , { 
	opacity: 0.7, y: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })
gsap.fromTo('.hblock .devname', { y: 500, opacity: 0 } , { 
	opacity: 1, y: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })
gsap.fromTo('.hblock .remark1', { y: 500, opacity: 0 } , { 
	opacity: 1, y: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })
 gsap.fromTo('.hblock .remark2', { y: 500, opacity: 0 } , { 
	opacity: 1, y: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })
 gsap.fromTo('.hblock .portfolio', { y: 500, opacity: 0 } , { 
	opacity: 1, y: 0,
	ease: "power2.inOut",
	scrollTrigger: {
		trigger: '.hblock',
		start: '-900',
		end: 'top',
		scrub: true
	}
 })