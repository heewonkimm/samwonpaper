gsap.registerPlugin(ScrollTrigger);


/* 로드모션 */
const loadMotion = gsap.timeline();
const gsapEase1 = CustomEase.create("custom", "M0,0 C0.25,0 0.328,0.037 0.372,0.072 0.47,0.15 0.466,0.292 0.498,0.502 0.532,0.73 0.536,0.808 0.618,0.918 0.651,0.962 0.698,1 1,1")

loadMotion
.addLabel('a')
.from('.story .sc-main .group-img img', {ease: 'power2.in', opacity: 0, duration: 1}, 'a')
.from('.lnb', {ease: 'power2.in', opacity: 0, duration: 1}, 'a')
.from('.story .sc-main .group-img img', {ease: 'power1.inOut', scale: 3.15, marginTop: '0.5vw', marginLeft: '-45.5vw', duration: 1.3}, 'a+=1.2')
.from('.story .sc-main .main-area .text', {ease: gsapEase1, fontSize: '23.5vw', y: '1.8vw', duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .text2 .e-img', {ease: gsapEase1, scale: 1.53, top: '4.47vw', duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .text4 .e-img', {ease: gsapEase1, scale: 1.53, top: '4.47vw', right: '12vw', duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .main-area .wrap:nth-child(1)', {ease: gsapEase1, marginTop: '3.5vw', marginBottom: '-2vw', marginLeft: '6.8vw', marginRight: '9.8vw', paddingRight: '0',duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .main-area .wrap:nth-child(2)', {ease: gsapEase1, x: '2.8vw', gap: '11.5vw', duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .main-area .wrap:nth-child(3)', {ease: gsapEase1, x: '-11vw', duration: 2.5}, 'a+=1.5')
.from('.story .sc-main .main-area .box', {ease: gsapEase1, opacity: 0,duration: 0.6}, 'a+=2.3')
.from('.story .sc-main .main-area .box1', {ease: gsapEase1,duration: 2.5}, 'a+=0.15')
.from('.story .sc-main .main-area .box2', {ease: gsapEase1, x: '2.5vw',duration: 2.5}, 'a+=0.15')
.from('.story .sc-main .main-area .box3', {ease: gsapEase1, x:'27vw', y: '-10.5vw',duration: 2.5}, 'a+=0.15')

.addLabel('b')
.to('.bar', {background: '#fff'}, 'b+=0.5')
.to('.bar1', {color: '#fff'}, 'b+=0.5')
.to('.story .sc-main .group-img img', {scale: 2.09, marginTop: '-20.8vw', marginLeft: '42.1vw', duration: 0.8},'b+=0.5')
.to('.story .sc-main .main-area', {opacity: 0}, 'b+=0.5')

.addLabel('c')
.from('.story .sc-main .exper-area .wrap span', {ease: "power3.out", opacity: 0, y: '7vw', duration: 1}, 'c')
.from('.story .sc-main .exper-area .box02', {ease: "power3.out", opacity: 0, x: '7vw', duration: 1}, 'c+=0.7')
.to('.story .sc-main .group-img', {ease: "power4.out", scale: 1.3, duration: 4}, 'c+=1.3')

.addLabel('d')
.to('.horizontal', {x: '-100vw', ease: 'power2.inOut', duration: 1.2}, 'd')
.to('.bar', {background: '#000'}, 'd+=0.5')
.to('.bar1', {color: '#000'}, 'd+=0.5')




/* 가로스크롤, lnb */
const $btnNext = document.querySelectorAll('.btn-next');

$btnNext.forEach((btnNext, i) => {
  btnNext.addEventListener('click',()=>{
    const xValue = (i+2) * -100;
    gsap.to('.horizontal', { x: `${xValue}vw` ,  duration: 1.2, ease: "power2.inOut"});
    
    const spaceMotion = gsap.timeline();// 다시


    
    console.log(i)
    const $bar = document.querySelector('.bar1');
    const $bar2 = document.querySelector('.bar2');
    const $bar3 = document.querySelector('.bar3');
    const $bar4 = document.querySelector('.bar4');
    const $bar5 = document.querySelector('.bar5');
    
    if(i === 0) {
      $bar.classList.remove('active')
      $bar2.classList.add('active')

      spaceMotion
      .addLabel('f')
      .to('.bar', {background: '#fff'}, 'f')
      .to('.horizontal', {x: `${(i + 3) * -100}vw`, duration: 1.2, ease: "power2.inOut"}, 'f+=2.5')
      .to('.bar', {display: 'none'}, 'f+=2.7')// 다시
      .from('.scale-img', {scale: 5.2, marginTop: '16vw', marginLeft: '11.5vw', duration: 1.3, ease: "power2.inOut"}, 'f+=4')
      .to('.bar', {display: 'block'}, 'f+=5')// 다시
      .to('.bar', {background: '#000'}, 'f+=4.5')
      .to('.bar2', {color: '#000'}, 'f+=4.5')
      .to('.scale-img', {display: 'none', ease: "power3.inOut"}, 'f+=5')
    } else if(i === 1) {
      $bar2.classList.remove('active')
      $bar3.classList.add('active')

      spaceMotion
      .addLabel('g')
      .to('.horizontal', {x: `${(i + 3) * -100}vw`,  duration: 1.2, ease: "power2.inOut"}, 'g')
      .to('.horizontal', {x: `${(i + 4) * -100}vw`,  duration: 1.2, ease: "power2.inOut"}, 'g+=3.5')
    } else if(i === 4) {
      $bar3.classList.remove('active')
      $bar4.classList.add('active')

      spaceMotion
      .addLabel('h')
      .to('.bar', {background: '#fff'}, 'h')
      .to('.horizontal', {x: `${(i + 3) * -100}vw`,  duration: 1.2,  ease: "power2.inOut"}, 'h+=2.5')
      .to('.bar', {background: '#000'}, 'h+=2.7')
      .to('.bar4', {color: '#000'}, 'h+=2.7')
    } else if(i === 6){
      $bar4.classList.remove('active')
      $bar5.classList.add('active')
    }
  })
});

/* space 관련 모션 */
const $scSpace = document.querySelector('.sc-space');
const $space = $scSpace.querySelectorAll('.space');
const $mapLink = $scSpace.querySelectorAll('.map-link');

$mapLink.forEach((mapLink) => {
  mapLink.addEventListener('click',(e)=>{
    e.preventDefault();
    $space.forEach((space) => {
        if (space.classList.contains('on')) {
          space.classList.remove('on');
        } else {
          space.classList.add('on');
        }
    });
  })
});

const $scaleBtn = $scSpace.querySelectorAll('.scale-btn');

$scaleBtn.forEach((scaleBtn) => {
  scaleBtn.addEventListener('click', ()=> {
    $space.forEach((space) => {
      if(space.classList.contains('scale-motion')){
        space.classList.remove('scale-motion')
      } else {
        space.classList.add('scale-motion')
      }
    });
  })
});


//open-intro
//horizontal 모션으로 뻬기