const UI = function (window, document, $) {
  gsap.registerPlugin(ScrollTrigger);

  const introMotion = () => {
    
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? headerAction.play() : headerAction.reverse();
        // console.log(self.direction);
      }
    });

    const headerAction = gsap.from('.header', { 
      yPercent: -130,
      paused: true,
      duration: 0.3
    }).progress(1);


    // gsap.set('.intro-path', { height: 2123 });
    gsap.set('.intro-path', { height: '100%' });

    const tl = gsap.timeline();
    tl
      .fromTo('.header-path', { width: 0 }, { width: '100%', duration: 1, ease: 'circ.out', delay: .5 })
      .fromTo('.intro-path svg', { height: 0 }, { height: '100%', duration: 1, ease: 'circ.out' })
      .fromTo('.showcase-path1', { width: 0 }, { width: '100%', duration: .5, ease: 'none' })
     
    
     

    const txtMove = gsap.timeline();
    
    txtMove
      .fromTo('.intro-section .copy .txt', { y: 150 }, { y: 0, duration: 1, ease: 'circ.out', delay: 1 })
      
      const $accordionHead = document.querySelectorAll('.intro-visual-accordion .head');
      const $accordionBtns = document.querySelectorAll('.intro-visual-accordion .btn-group .btn-arrow');
      let activeIdx = 0;
      
      gsap.set(`.intro-visual-accordion`, { width: '100%' })
      gsap.set(`.intro-visual-accordion .panel${activeIdx}`, { width: '100%' })
      gsap.to(`.intro-visual-accordion .panel${activeIdx} .cont`, { scale: 1, duration: 1, ease: 'power4.out' })
      gsap.set(`.intro-visual-accordion .head`, { autoAlpha: 0 })  

      // const visualScale = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".intro-section",
      //     start: "+=200 top",
      //     toggleActions: "restart none none reverse",
      //   }
      // });
      const introHeight = document.querySelector('.intro-section').clientHeight;
      const visualScale = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          start: "+=200 top",
          end: `+=${introHeight / 4}`,
          scrub: 2.5, 
          // markers: true,
        }
      })


      visualScale
        .addLabel('a')
        .to('.intro-visual-accordion', { scale: 1, marginLeft: 0, duration: .5,  width: 'calc(100% - 90px)', transformOrigin: '50% 50%', ease: 'power0.easeNone', }, 'a')
        .to(`.intro-visual-accordion .panel${activeIdx}`, { width: 'calc(100% - 180px)' }, 'a')
        .to(`.intro-visual-accordion .panel${activeIdx} .txt-wrap .txt-line .txt`, { y: 0, duration: 1, ease: 'circ.out' }, '-=.5')
        .to(`.intro-visual-accordion .head1`, { autoAlpha: 1, }, 'a-=.5')
        .to(`.intro-visual-accordion .head2`, { autoAlpha: 1, }, 'a-=.5')
      
        const accordionAction = (value) => {
          let oldIdx = activeIdx;
            activeIdx = value;
            // if(oldIdx < activeIdx) {
            //   console.log('다음')
            // } else {
            //   console.log('이전')
            // }
  
            const newItemTl = gsap.timeline({ paused: true });
            const oldItemTl = gsap.timeline({ paused: true });
  
            oldItemTl
              .to(`.intro-visual-accordion .panel${oldIdx}`, { width: 90, duration: .5, ease: 'power1.inOut' })
              .to(`.intro-visual-accordion .head${oldIdx}`, { autoAlpha: 1, duration: .1, ease: 'power4.out' }, '-=.5')
              .to(`.intro-visual-accordion .panel${oldIdx} .cont`, { scale: 1.5, duration: 1, ease: 'power4.out' }, '-=.25')
              .to(`.intro-visual-accordion .panel${oldIdx} .txt-wrap .txt-line .txt`, { y: 150, duration: 1, ease: 'circ.out' }, '-=.5')
  
            newItemTl
              .to(`.intro-visual-accordion .panel${value}`, { width: 'calc(100% - 180px)', duration: .5, ease: 'power1.inOut' })
              .to(`.intro-visual-accordion .head${value}`, { autoAlpha: 0, duration: .1, ease: 'power4.out' }, '-=.5')
              .to(`.intro-visual-accordion .panel${value} .cont`, { scale: 1, duration: 1, ease: 'power4.out' }, '-=.25')
              .to(`.intro-visual-accordion .panel${value} .txt-wrap .txt-line .txt`, { y: 0, duration: 1, ease: 'circ.out' }, '-=.5')
           
            switch(value) {
              case value:
                oldItemTl.play();
                newItemTl.play();
                break;  
            }
        }
      
        $accordionHead.forEach((item) => {
        item.addEventListener('click', (e) => {
          // console.log('asdasd')
          const idx = e.currentTarget.dataset.index;
          accordionAction(idx);

        })
      });

      

      $accordionBtns.forEach((item) => {
        item.addEventListener('click', (e) => {
          const idx = e.currentTarget.dataset.index;
          accordionAction(idx);
        })
      });

      

      const searchBoxMove = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          start: "+=90px top",
          // end: "+=90",
          // end: `+=${introHeight / 10}`,
          // scrub: 1.7, 
          toggleActions: "restart none none reverse",
          // markers: true,
        }
      })

      searchBoxMove
        .to('.intro-search-box', { autoAlpha: 0, duration: .25, ease: 'power4.out' })
        .to('.header-search-box', { autoAlpha: 1, duration: .25, ease: 'power4.out' }, '+=.01')

      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section .visual-wrap",
          start: "top top",
          pin: true,
          toggleClass: {
            targets: 'body',
            className: 'sticky-section'
          }
        }
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".showcase-section",
          start: "top top",
          pin: true,
          toggleClass: {
            targets: 'body',
            className: 'sticky-section'
          }
        }
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: ".paperlab-section",
          start: "+=300px top",
          pin: true,
          // markers: true,
          toggleClass: {
            targets: 'body',
            className: 'sticky-section'
          }
        }
      })
  
  }

  const showcaseMotion = () => {
    const pathDraw2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".showcase-section",
        start: "-=100px top",
        // end: '+=100px',
        // scrub: 4, 
        toggleActions: "restart none none reverse",
        // markers: true
      }
    });

    pathDraw2   
      .fromTo('.showcase-path2 .rect1', { height: 0 }, { height: 396, duration: .5, ease: 'none'})
      .fromTo('.showcase-path2 path', { strokeDashoffset: 0,  strokeDasharray: "0, 9999px"}, { strokeDashoffset: 0,  strokeDasharray: "1060px, 9999px", duration: .5, ease: 'none' })
      .fromTo('.showcase-path2 .rect2', { width: 0 }, { width: 2000, ease: 'none', duration: 1 })
      
  }

  const paperlabMotion = () => {
    const pathDraw1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperlab-section",
        start: "-=200px top",
        // end: '+=500px',
        // scrub: 4, 
        toggleActions: "restart none none reverse",
        // markers: true
      }
    });

    const txtMove = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperlab-section",
        start: "top top",
        end: '+=100px',
        scrub: 1.5, 
        // markers: true
      }
    });

    const visualScale = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperlab-section .visual-wrap",
        start: "-=800px top",
        toggleActions: "restart none none reverse",
        // end: '+=100px',
        // scrub: 3, 
        // markers: true,
      }
    });

    txtMove
      .fromTo('.paperlab-section .title-wrap .txt', { y: 150 }, { y: 0, duration: 1, ease: 'circ.out', delay: 1 })

    pathDraw1   
      .fromTo('.paperlab-path1 .rect1', { height: 0 }, { height: 501, duration: .5, ease: 'none' })
      .fromTo('.paperlab-path1 path', { strokeDashoffset: 0,  strokeDasharray: "0, 9999px"}, { strokeDashoffset: 0,  strokeDasharray: "1060px, 9999px", duration: .5, ease: 'none' })
      .fromTo('.paperlab-path1 .rect2', { width: 0 }, { width: 2000, duration: .5, ease: 'none'  })
      .fromTo('.paperlab-path2', { height: 0 }, { height: 1500, duration: 1, ease: 'none' })

    visualScale
      .fromTo('.paperlab-section .visual-wrap', { width: '50%'}, { width: '100%', ease: 'circ.inOut', duration: .5, transformOrigin: '50% 50%' })
      .fromTo('.paperlab-section .visual-wrap .visual', { scale: 1.2}, { scale: 1, duration: 1, ease: 'expo.out', transformOrigin: '50% 50%' })
        

      const contentTxtMove = gsap.timeline({
        scrollTrigger: {
          trigger: ".paperlab-section",
          start: "+=500px top",
          // end: '+=100px',
          // scrub: 4, 
          // markers: true,
          toggleActions: "restart none none reverse",
        }
      });
      const contentMove = gsap.timeline({
        scrollTrigger: {
          trigger: ".paperlab-section",
          start: "+=500px top",
          // end: '+=100px',
          // scrub: 4, 
          // markers: true,
          toggleActions: "restart none none reverse",
        }
      });

      contentTxtMove
        .fromTo('.paperlab-section .cont-wrap .txt-line .txt', { y: 150 }, { y: 0, duration: .5, ease: 'circ.out' })
      
        
      contentMove
        .fromTo('.paperlab-section .cont-wrap .body .item', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: .005, ease: 'none' })  

   
  }

  const activityMotion = () => {
    const pathDraw1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".activity-section",
        start: "-=1000px top",
        // end: '+=100px',
        // scrub: 2, 
        // markers: true,
        toggleActions: "restart none none reverse",
      }
    });

    const pathDraw2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".activity-section",
        start: "-=300px top",
        // end: '+=100px',
        // scrub: 2, 
        // markers: true,
        toggleActions: "restart none none reverse",
      }
    });

    pathDraw1
      .fromTo('.activity-path1', { width: 0 }, { width: '100%', duration: .8, ease: 'none' })
      // .fromTo('.activity-path2', { width: 0 }, { width: '100%', ease: 'none' })

    pathDraw2
      .fromTo('.activity-path2', { width: 0 }, { width: '100%', duration: .8, ease: 'none' })

  }

  const paperuseMotion = () => {
    const pathDraw1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperuse-section",
        start: "-=600px top",
        // end: '+=100px',
        // scrub: 2, 
        toggleActions: "restart none none reverse",
        // markers: true
      }
    });


    const pathDraw2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperuse-section",
        start: "-=600px top",
        // end: '+=100px',
        // scrub: 2,
        toggleActions: "restart none none reverse", 
        // markers: true
      }
    });

    const pathDraw3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".paperuse-section",
        start: "+=400px top",
        // end: '+=200px',
        // scrub: 3, 
        toggleActions: "restart none none reverse",
        // markers: true
      }
    });

    pathDraw1
      .fromTo('.paperuse-path1', { height: 0 }, { height: 201, duration: .5, ease: 'none' })
      .fromTo('.paperuse-path3', { width: 0 }, { width: '100%', duration: .7, ease: 'none' })
      
    pathDraw2
      .fromTo('.paperuse-path2', { height: 0 }, { height: 1850, duration: 1, ease: 'none', delay: 1.5 }) 
      
    pathDraw3
      .fromTo('.sns-path1', { width: 0 }, { width: '100%', duration: .5, ease: 'none' })
      .fromTo('.sns-path3 rect', { width: 0 }, { width: 141, duration: .5, ease: 'none' })
      .fromTo('.sns-path2', { height: 0 }, { height: 700, duration: .5, ease: 'none' })
      .fromTo('.sns-path4 rect', { width: 0 }, { width: 141, duration: .5, ease: 'none' }) 
  }

  const showcaseSwiper = () => {
    const $swiperWrapper = document.querySelector(".showcase-swiper .swiper-wrapper");
    const $lastSwiperSlide = document.querySelector(".showcase-swiper .swiper-slide:last-of-type");
    const $btnNext = document.querySelector('.showcase-info .btn-arrow.next');
    const $btnPrev = document.querySelector('.showcase-info .btn-arrow.prev');

    const swiper = new Swiper(".showcase-swiper", {
      loop: true,
      loopAdditionalSlides: 1,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      // allowTouchMove: false,
      initialSlide: 0,
      spaceBetween: 40,
      slidesOffsetAfter: $swiperWrapper.clientWidth - 40,
    });

    

    $btnPrev.addEventListener('click', () => swiper.slidePrev());
    $btnNext.addEventListener('click', () => swiper.slideNext());

    const $slideItems = document.querySelectorAll('.showcase-swiper .showcase-slide');
    
    

    $slideItems.forEach((item) => {
      
      item.addEventListener('mouseenter', (e) => {
        const idx = e.currentTarget.dataset.index;
        const playAction = gsap.timeline();
        playAction
          .addLabel('a')
          .to(`.showcase-swiper .showcase-slide${idx} .img-wrap`, { y: -200, duration: 1, ease: 'elastic.out(1.2,1)' }, 'a')
          .to(`.showcase-swiper .showcase-slide${idx} .img-wrap .img-off`, { y: -600, duration: .5 }, 'a')
          .to(`.showcase-swiper .showcase-slide${idx} .img-wrap .img-on`, { y: -400, duration: .5 }, 'a')
          .to(`.showcase-swiper .showcase-slide${idx} .info-wrap`, { top: 430 }, 'a')
          .to(`.showcase-swiper .showcase-slide${idx} .info-wrap .name`, { scale: 1, duration: .3 }, 'a+=.1')
          .to(`.showcase-swiper .showcase-slide${idx} .info-wrap .eng-name`, { autoAlpha: 1, duration: .3 }, 'a+=.1')
        
      });
      item.addEventListener('mouseleave', (e) => {
        const idx = e.currentTarget.dataset.index;
        const reverseAction = gsap.timeline();
        reverseAction
          .addLabel('b')
          .to(`.showcase-swiper .showcase-slide .img-wrap`, { y: 0, duration: 1, ease: 'elastic.out(1.2,1)' }, 'b')
          .to(`.showcase-swiper .showcase-slide .img-wrap .img-off`, { y: 0, duration: .5 }, 'b')
          .to(`.showcase-swiper .showcase-slide .img-wrap .img-on`, { y: 0, duration: .5 }, 'b')
          .to(`.showcase-swiper .showcase-slide .info-wrap`, { top: 600 }, 'b')
          .to(`.showcase-swiper .showcase-slide .info-wrap .name`, { scale: .9, duration: .3 }, 'b+=.1')
          .to(`.showcase-swiper .showcase-slide .info-wrap .eng-name`, { autoAlpha: 0, duration: .3 }, 'b+=.1')
      });
    });

  }

  const activitySwiper = () => {
    

    const swiper = new Swiper(".activity-swiper", {
      loop: true,
      loopAdditionalSlides: 1,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      initialSlide: 0,
      spaceBetween: 40,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

  }

  const paperuseSiwper = () => {
    const $swiperWrapper = document.querySelector(".paperuse-swiper .swiper-wrapper");
    const $lastSwiperSlide = document.querySelector(".paperuse-swiper .swiper-slide:last-of-type");
    const $btnNext = document.querySelector('.paperuse-section .top-section .title-box .btn-arrow.next');
    const $btnPrev = document.querySelector('.paperuse-section .top-section .title-box .btn-arrow.prev');
    
    const swiper = new Swiper(".paperuse-swiper", {
      loop: true,
      loopAdditionalSlides: 1,
      direction: 'vertical',
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      allowTouchMove: true,
      initialSlide: 0,
      spaceBetween: 30,
      slidesOffsetAfter: $swiperWrapper.clientWidth - $lastSwiperSlide.clientWidth,
    });

    

    $btnPrev.addEventListener('click', () => swiper.slidePrev())
    $btnNext.addEventListener('click', () => swiper.slideNext())

  }

  const snsSiwper = () => {
    const $swiperWrapper = document.querySelector(".sns-swiper .swiper-wrapper");
    const $lastSwiperSlide = document.querySelector(".sns-swiper .swiper-slide:last-of-type");
    const $btnNext = document.querySelector('.paperuse-section .bot-section .btn-arrow.next');
    const $btnPrev = document.querySelector('.paperuse-section .bot-section .btn-arrow.prev');
    
    const swiper = new Swiper(".sns-swiper", {
      loop: true,
      loopAdditionalSlides: 1,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      initialSlide: 0,
      spaceBetween: 20,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      // slidesOffsetAfter: $swiperWrapper.clientWidth - $lastSwiperSlide.clientWidth,
    });

    

    $btnPrev.addEventListener('click', () => swiper.slidePrev())
    $btnNext.addEventListener('click', () => swiper.slideNext())

  }

  const quickmenu = () => {
    const $btn = document.querySelector('.quick-wrap .btn-quick');
    const $airplane = document.querySelector('.quick-wrap .paper-airplane');
    
    $btn.addEventListener('mouseenter', () => {
      const tl = gsap.timeline();
      tl
        .to($airplane, { top: -20, left: 70, duration: .5, ease: 'circ.out' })
        .to('.quick-wrap .btn-txt', { autoAlpha: 1, duration: .5 }, '> -.5')
    });
    $btn.addEventListener('mouseleave', () => {
      const tl = gsap.timeline();
      tl
        .to('.quick-wrap .btn-txt', { autoAlpha: 0, duration: .5 })
        .fromTo($airplane, { top: 80, left: -60 }, { top: 20, left: 10, duration: .5, ease: 'circ.out' }, '> -.5')
        
    });
  }

  return {
    introMotion,
    showcaseMotion,
    paperlabMotion,
    activityMotion,
    paperuseMotion,
    showcaseSwiper,
    activitySwiper,
    paperuseSiwper,
    snsSiwper,
    quickmenu,
    init() {
      introMotion();
      showcaseMotion();
      paperlabMotion();
      activityMotion();
      paperuseMotion();
      showcaseSwiper();
      activitySwiper();
      paperuseSiwper();
      snsSiwper();
      quickmenu();
      
    },
  }
}(window, document);

window.addEventListener('DOMContentLoaded', function () {
  UI.init();
});