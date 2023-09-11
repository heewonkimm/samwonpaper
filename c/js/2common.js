gsap.registerPlugin(ScrollTrigger);

/* 로딩페이지모션 */
// const loadMotion = gsap.timeline();

// loadMotion
// .to('.loadig-bar', {opacity: 1, ease: 'Power1.easeInOut', duration: 1, delay: 0.5})
// .to('.loadig-bar', {width: '100vw', ease: 'Power1.easeOut', duration: 0.8})
// .to('.loadig-bar', {display: 'none', duration: 0.1, delay: 0.2})
// .addLabel('a')
// .to('.top-blind, .bottom-blind', {height: 0, ease: 'Power4.easeOut', duration: 1.5}, 'a')
// .to('.shadow-box', {opacity: 0, duration: 1.5}, 'a')

// .to('.shadow-box', {onComplete: mainPageMotion, duration: 0.5})
// .to('.loading-page', {display: 'none', duration: 0.01})


const mainMotion = gsap.timeline();
function mainPageMotion(){
    // const gsapEase1 = CustomEase.create("custom", "M0,0 C0.25,0 0.328,0.037 0.372,0.072 0.47,0.15 0.466,0.292 0.498,0.502 0.532,0.73 0.536,0.808 0.618,0.918 0.651,0.962 0.698,1 1,1")
    // const gsapEase2 = CustomEase.create("custom2", ".17,.67,.83,.67");

    /* 메인페이지모션 */
    mainMotion
    .addLabel('a')
    .to('.sc-story .main-area .wrap', {opacity: 1}, 'a+=0.5')
    .addLabel('b')
    .to('.sc-story .main-area .wrap', {scale: 1.05, ease: 'power1.Out', duration: 0.5}, 'b')
    .addLabel('c')
    .to('.sc-story .group-img .img-box', {scale: 2.1, x: '-3.5vw', y: '-26.1vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .text2', {gap: '0.4vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .text', {fontSize: '13.96vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .e-bar', {gap: '1.9vw',marginTop: '0.8vw' ,ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .e-bar span', {width: '7.17vw',height: '1.56vw',marginTop: '1vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .wrap', {scale: 1, ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.lnb .bar', {backgroundColor: '#fff', color: '#fff', duration: 0.2}, 'c-=0.12')

    .to('.sc-story .main-area .wrap:nth-child(1)', {paddingLeft: '9vw', paddingRight: '24.96vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .wrap:nth-child(2)', {paddingLeft: '15vw', paddingRight: '8vw', marginLeft: 0, marginRight: 0, ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .wrap:nth-child(3)', {x: '-11vw', gap: '1vw', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .box', {opacity: 1, ease: "Power4.easeInOut", duration: 0.6}, 'c+=0.4')
    .to('.sc-story .main-area .box1', {y: '0', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .box2', {x: '0', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area .box3', {x:'0', y: '0', ease: "Power4.easeInOut", duration: 1.4}, 'c-=0.17')
    .to('.sc-story .main-area', {opacity: 0},'c+=2.5')
    .addLabel('d')
    .to('.sc-story .group-img .img-box', {scale: 2.09, y: '-20.8vw', x: '27.6vw', duration: 1.5, ease: 'Power1.easeOut'},'d')
    .to('.exper-area .title-wrap .box1 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.5')
    .to('.exper-area .title-wrap .box1 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.56')
    .to('.exper-area .title-wrap .box2 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.62')
    .to('.exper-area .title-wrap .box2 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.68')
    .to('.exper-area .title-wrap .box2 span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.74')
    .to('.exper-area .title-wrap .box2 span:nth-child(4)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.80')
    .to('.exper-area .title-wrap .box2 span:nth-child(5)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.86')
    .to('.exper-area .title-wrap .box2 span:nth-child(6)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.92')
    .to('.exper-area .title-wrap .box3 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=0.98')
    .to('.exper-area .title-wrap .box3 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=1.04')
    .to('.exper-area .title-wrap .box3 span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=1.1')
    .to('.exper-area .title-wrap .box3 span:nth-child(4)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=1.22')
    .to('.exper-area .title-wrap .box3 span:nth-child(5)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=1.28')
    .to('.exper-area .title-wrap .box3 span:nth-child(6)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'd+=1.34')
    .to('.exper-area .desc-wrap', {y: 0, opacity:1 , ease: 'Power2.easeOut', duration: 1}, 'd+=1')
    .to('.sc-story .group-img img',{x: '10vw', duration: 9, ease: 'Power0.easeNone'},'d-=2.5')
    
    /* 페이지 전환2 */
    // .addLabel('e')
    // .to('.sc-story .group-main',{width: '0', duration: 1.2, ease: 'Power2.easeOut', onComplete: ideaPageMotion},'e-=2.5')
    .addLabel('e')
        .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'e-=3.5')
        // .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'e-=2.5')
        .addLabel('f')
        .to(('.sc-story .group-main'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'f-=3')
        .addLabel('g')
        .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'g-=1.3')
        .to('.contents', {onComplete: ideaPageMotion, duration: 0.7},'g-=1.5')

    .to('.lnb .bar', {backgroundColor: '#000', color: '#000', duration: 0.2}, 'g-=1.5')


    // /* 페이지 전환3 ----2랑 같은 효과*/
    // .addLabel('e')
    // .to('.group-main',{width: '0', duration: 1.2, ease: 'Power2.easeOut', onComplete: ideaPageMotion},'e-=1')

    /* 페이지 전환2 */
    // .addLabel('e')
    // .to('.sc-story .group-main',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'e-=1.7')
    // .to('.sc-story .group-main .shadow',{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'e-=1.7')
    // .to('.sc-story .group-main',{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'e-=1.2')
    // .to('.sc-story .group-idea', {ease: Power2.easeInOut, duration: 0.7, onComplete: ideaPageMotion},'e-=1')
}
mainPageMotion()

const ideaMotion = gsap.timeline();
function ideaPageMotion(){
    const gsapBounce = CustomEase.create("custom","M0,0 C0,0 0.014,0.001 0.022,0.003 0.031,0.006 0.037,0.01 0.045,0.015 0.054,0.021 0.06,0.027 0.068,0.035 0.077,0.044 0.083,0.05 0.09,0.061 0.108,0.089 0.12,0.107 0.135,0.137 0.155,0.179 0.165,0.205 0.181,0.249 0.201,0.305 0.211,0.336 0.228,0.394 0.247,0.46 0.256,0.497 0.273,0.565 0.292,0.644 0.301,0.686 0.318,0.766 0.337,0.858 0.359,0.98 0.363,0.998 0.367,0.989 0.39,0.927 0.411,0.885 0.426,0.855 0.425,0.875 0.444,0.848 0.451,0.836 0.47,0.825 0.48,0.816 0.487,0.808 0.537,0.798 0.546,0.796 0.553,0.793 0.594,0.808 0.602,0.816 0.611,0.826 0.632,0.826 0.64,0.838 0.658,0.866 0.667,0.86 0.682,0.892 0.701,0.931 0.72,0.982 0.726,0.998 0.73,0.994 0.743,0.979 0.754,0.968 0.761,0.961 0.766,0.957 0.774,0.952 0.782,0.947 0.788,0.943 0.796,0.941 0.804,0.938 0.811,0.937 0.819,0.937 0.827,0.937 0.833,0.938 0.841,0.941 0.85,0.944 0.855,0.947 0.863,0.952 0.872,0.958 0.877,0.963 0.885,0.971 0.894,0.981 0.902,0.992 0.908,0.998 0.914,0.996 0.923,0.99 0.933,0.987 0.941,0.985 0.947,0.984 0.955,0.984 0.964,0.984 0.97,0.985 0.978,0.988 0.986,0.991 1,1 1,1 ")

    ideaMotion
    .addLabel('a')
    .to('.group-idea .title-area span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a')
    .to('.group-idea .title-area span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.06')
    .to('.group-idea .title-area span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.12')
    .to('.group-idea .title-area span:nth-child(4)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.18')
    .to('.group-idea .title-area span:nth-child(5)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.24')
    .to('.group-idea .title-area span:nth-child(6)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.3')
    .to('.group-idea .title-area span:nth-child(7)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.36')
    .to('.group-idea .title-area span:nth-child(8)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.42')
    .to('.group-idea .title-area span:nth-child(9)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.48')
    .to('.group-idea .title-area span:nth-child(10)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.54')
    .to('.group-idea .title-area span:nth-child(11)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.6')
    .to('.group-idea .title-area span:nth-child(12)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.66')
    .to('.group-idea .title-area span:nth-child(13)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.72')
    .to('.group-idea .title-area .sub-wrap', {opacity:1, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.4')
    
    .addLabel('b')
    .to('.group-idea .hide-box', {display:'none', duration:0.3, ease: gsapBounce}, 'b-=0.2')
    .to('.group-idea .shape01', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b')
    .to('.group-idea .shape02', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.2')
    .to('.group-idea .shape03', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.15')
    .to('.group-idea .shape04', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.4')
    .to('.group-idea .shape05', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.2')
    .to('.group-idea .shape06', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b')
    .to('.group-idea .shape07', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.1')
    .to('.group-idea .shape08', {y:0, rotate:0 , duration:1.8, ease: gsapBounce}, 'b+=0.4')
    .to('.group-idea .number, .group-idea .desc', {opacity: 1, duration: 1}, 'b+=0.2')
	}

	
// spacePageMotion()

const spaceMotion = gsap.timeline();
function spacePageMotion(){
    
    spaceMotion
    .addLabel('a')
    .to('.sc-space .title-area .box1 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a')
    .to('.sc-space .title-area .box1 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.06')
    .to('.sc-space .title-area .box1 span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.12')
    .to('.sc-space .title-area .box2 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.18')
    .to('.sc-space .title-area .box2 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.24')
    .to('.sc-space .title-area .box2 span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.3')
    .to('.sc-space .title-area .box2 span:nth-child(4)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.36')
    .to('.sc-space .title-area .box2 span:nth-child(5)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.42')
    .to('.sc-space .desc', {opacity: 1, y: 0, duration: 1}, 'a+=0.2')

    // .to('.sc-space .bg-area img',{x: '-3vw', y: '-3vw', duration: 6, ease: 'Power0.easeNone'},'a-=1.8')

    
    .addLabel('b')
    .to('.sc-space .group-main', {width: 0, duration: 1.2, ease: 'Power2.easeOut'}, 'b+=1.5')
    .to('.lnb .bar', {opacity: 0}, 'b+=1.7')

		.addLabel('c')
    .to('.sc-space .page-switch', {scale: 3, duration: 0.6, ease: 'power1.Out'}, 'c-=0.5')
    .to('.sc-space .page-switch', {scale: 1, width: '63.54vw',top: '50%', left: '7.2vw', y: '-50%', ease: "Power4.easeInOut", duration: 1.4}, 'c')
    .to('.sc-space .page-switch', {display: 'none', duration: 0.1}, 'c+=1.4')
    .to('.lnb .bar', {backgroundColor: '#000', color: '#000', duration: 0.2}, 'c-=0.2')
    .to('.lnb .bar', {opacity: 1}, 'c+=0.65')

		
	
}
// spacePageMotion()

const serviceMotion = gsap.timeline();
function servicePageMotion(){
	
	serviceMotion
	.addLabel('a')
	.to('.sc-service .group-step .title-box', {y: 0, ease: 'Power2.easeOut', duration: 0.8}, 'a')
	.to('.sc-service .group-step .desc', {opacity: 1, ease: 'Power1.easeOut', duration: 0.8}, 'a')
	// .to('.sc-service .desc', {opacity: 1, ease: 'Power2.easeOut', duration: 0.8}, 'a+=0.4')
	.addLabel('b')
	.to('.sc-service .cont:nth-child(1)', {y:0, opacity: 1, ease: 'Power1.easeOut', duration: 0.8}, 'b')
	.to('.sc-service .cont:nth-child(2)', {y:0, opacity: 1, ease: 'Power1.easeOut', duration: 0.8}, 'b+=0.15')
	.to('.sc-service .cont:nth-child(3)', {y:0, opacity: 1, ease: 'Power1.easeOut', duration: 0.8}, 'b+=0.3')
	.to('.sc-service .cont:nth-child(4)', {y:0, opacity: 1, ease: 'Power1.easeOut', duration: 0.8}, 'b+=0.45')

	.addLabel('c')
  .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'c')
  // .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'c')
  .addLabel('d')
  .to(('.sc-service .inner1'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'d-=0.1')
  .addLabel('e')
  .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'e-=0.3')

	.addLabel('f')
	.to('.sc-service .group-resv span', {y: 0, ease: 'Power2.easeOut', duration: 0.8}, 'f')
	.to('.sc-service .group-resv .cont-area', {y: 0, opacity:1, ease: 'Power2.easeOut', duration: 0.8}, 'f+=0.8')
}


const tourMotion = gsap.timeline();
function tourPageMotion(){
    
	tourMotion
	.addLabel('a')
	.to('.sc-tour .title-area .box1 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a')
	.to('.sc-tour .title-area .box1 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.06')
	.to('.sc-tour .title-area .box2 span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.12')
	.to('.sc-tour .title-area .box2 span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.18')
	.to('.sc-tour .title-area .box2 span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.24')
	.to('.sc-tour .title-area .box2 span:nth-child(4)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.3')
	.to('.sc-tour .title-area .box2 span:nth-child(5)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.36')
	.to('.sc-tour .inner .column-right', {y: 0, opacity:1, ease: 'Power2.easeOut', duration: 1.2}, 'a+=0.8')
	.to('.sc-tour .inner .desc', {opacity:1, ease: 'Power2.easeOut', duration: 1.2}, 'a+=0.8')
	.to('.sc-tour .group-program', {width:0, duration: 1.2, ease: 'Power2.easeOut'}, 'a+=3')

	.addLabel('b')
  .to('.lnb .bar', {backgroundColor: '#000', color: '#000', duration: 0.2}, 'b-=0.3')
	.to('.group-form .hide-box ', {width: '0', ease: 'Power1.easeOut', duration: 1.3}, 'b')
    .addLabel('c')
	.to('.group-form .title-area span', {opacity: 1, duration:0.1}, 'c')
	.to('.group-form .title-area span', {y: 0, ease: 'Power2.easeOut', duration: 0.8}, 'c')
	.to('.group-form .check-area', {opacity: 1, ease: 'Power2.easeOut', duration: 0.8}, 'c+=0.2')
	.to('.group-form .row-bottom', {opacity: 1, ease: 'Power2.easeOut', duration: 0.8}, 'c+=0.2')
    .addLabel('d')
	.to('.group-form .cont-area div:nth-child(1)', {x: 0, opacity: 1, ease: 'Power2.easeOut', duration:0.8}, 'd')
	.to('.group-form .cont-area div:nth-child(2)', {x: 0, opacity: 1, ease: 'Power2.easeOut', duration:0.8}, 'd+=0.2')
	.to('.group-form .cont-area div:nth-child(3)', {x: 0, opacity: 1, ease: 'Power2.easeOut', duration:0.8}, 'd+=0.4')
}


const faqMotion = gsap.timeline();
function faqPageMotion(){
    
	faqMotion
    .addLabel('a')
    .to('.sc-faq .title-area span:nth-child(1)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a')
	.to('.sc-faq .title-area span:nth-child(2)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.06')
	.to('.sc-faq .title-area span:nth-child(3)', {y: 0, rotate: 0, ease: 'Power2.easeOut', duration: 0.6}, 'a+=0.12')
    .addLabel('b')
	.to('.sc-faq .cont-area', {y: 0, opacity: 1, ease: 'Power2.easeOut', duration: 0.6}, 'b')

}




/* space 관련 모션 */
const $scSpace = document.querySelector('.group-space');
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
		// gsap.to('.space .row-top .text-area', {y: 0})
        }
    });
    })
});



const $scaleBtn = $scSpace.querySelectorAll('.scale-btn');
const scaleMotion = gsap.timeline();

$scaleBtn.forEach((scaleBtn) => {
  scaleBtn.addEventListener('click', () => {

    const space = scaleBtn.closest('.space');

    if (space) {
      if (space.classList.contains('scale-motion')) {
        space.classList.remove('scale-motion');

        scaleMotion
          .addLabel('a')
          .to(space.querySelector('.group-space .img-box'),{width: '63.54vw', scale: 1, duration: 0.45, ease: 'power1.Out' },'a')
          .to(space.querySelector('.group-space .img-box'),{height: 'auto', scale: 1.04, duration: 0.01, ease: 'power1.Out' },'a-=0.5')
					.to(space.querySelector('.group-space .btn-box'),{opacity: 0, duration: 0.2, ease: 'power1.Out' },'b+=0.1')
          .to(space.querySelector('.group-space .btn-box'),{opacity: 1, duration: 0.2, ease: 'power1.Out' },'b+=0.5')
      } else {
        space.classList.add('scale-motion');
        scaleMotion
          .addLabel('b')
          .to(space.querySelector('.group-space .img-box'),{width: '100vw', scale: 1.04, duration: 0.45, ease: 'power1.Out' },'b')
          .to(space.querySelector('.group-space .img-box'),{height: '100vh', scale: 1.04, duration: 0.01, ease: 'power1.Out' },'b+=0.3')
          .to(space.querySelector('.group-space .btn-box'),{opacity: 0, duration: 0.2, ease: 'power1.Out' },'b+=0.1')
          .to(space.querySelector('.group-space .btn-box'),{opacity: 1, duration: 0.2, ease: 'power1.Out' },'b+=0.5')
      }
    }
  });
});




const $bar = document.querySelector('.bar1');
const $bar2 = document.querySelector('.bar2');
const $bar3 = document.querySelector('.bar3');
const $bar4 = document.querySelector('.bar4');
const $bar5 = document.querySelector('.bar5');
    


/* 페이지 전환2 */
const $page = document.querySelectorAll('.page');

const pageTransition = gsap.timeline();
$page.forEach((page, i) => {
	page.addEventListener('click', ()=>{
		console.log(i)

		const pageShadow = page.querySelector('.shadow')

		if(i === 0) {
			pageTransition
        .addLabel('a')
        .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'a')
        .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'a')
        .addLabel('b')
        .to(('.sc-story'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'b-=0.1')
        .addLabel('c')
        .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'c-=0.3')
        .to('.contents', {duration: 0.7, onComplete: spacePageMotion},'c-=0.2')
        $bar.classList.remove('active')
        $bar2.classList.add('active')

      
		} else if(i === 2){
			pageTransition
      .addLabel('a')
        .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'a')
        .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'a')
        .addLabel('b')
        .to(('.sc-space'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'b-=0.1')
        .addLabel('c')
        .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'c-=0.3')
        .to('.contents', {onComplete: servicePageMotion},'c-=0.8')
        to('.inquiry2',{opacity: '1', duration: 0.1})
        $bar2.classList.remove('active')
        $bar3.classList.add('active')

		} else if(i === 3){
			pageTransition
        .addLabel('a')
        .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'a')
        .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'a')
        .addLabel('b')
        .to(('.sc-service'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'b-=0.1')
        .addLabel('c')
        .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'c-=0.3')
        .to('.contents', {onComplete: tourPageMotion},'c-=0.8')
        $bar3.classList.remove('active')
        $bar4.classList.add('active')
		} else if(i === 4){
			pageTransition
        .addLabel('a')
        .to('.contents',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'a')
        .to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'a')
        .addLabel('b')
        .to(('.sc-tour'),{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'b-=0.1')
        .addLabel('c')
        .to('.contents', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'c-=0.3')
        .to('.contents', {onComplete: faqPageMotion},'c-=1.15')
      $bar4.classList.remove('active')
      $bar5.classList.add('active')
		} else if(i === 5){
      pageTransition
      .to('.mainpage-img',{display:'block', opacity: 1, duration:0.5})
      .to('.mainpage-img',{opacity: 1, duration:0.5})
		}
    else if(i === 6){
      pageTransition
      .to('.mainpage-img',{display:'block', opacity: 1, duration:0.5})
      .to('.mainpage-img',{opacity: 1, duration:0.5})
		}
		
	})
});





// const resetButton = document.getElementById('reset-button');
// resetButton.addEventListener('click', () => {
//     // 각 모션을 일시 중지하고 초기 상태로 복원
//     loadMotion.pause().seek(0);
//     mainMotion.pause().seek(0);
//     ideaMotion.pause().seek(0);
//     spaceMotion.pause().seek(0);
//     serviceMotion.pause().seek(0);
//     tourMotion.pause().seek(0);
//     faqMotion.pause().seek(0);
// });
/* 페이지 전환1 */
// const $page = document.querySelectorAll('.page');

// $page.forEach((page) => {
// 	const pageTransition = gsap.timeline();

// 	page.addEventListener('click', ()=>{
// 		const pageShadow = page.querySelector('.shadow')

// 		pageTransition
// 		.addLabel('a')
// 		.to('.page',{scale: 0.95, ease: Power2.easeInOut, duration: 0.7},'a')
// 		.to(pageShadow,{opacity: 1, ease: Power2.easeInOut, duration: 0.7},'a')
// 		.addLabel('b')
// 		.to(page,{x: '-100vw', ease: Power3.easeInOut, duration: 1.5},'b-=0.1')
// 		.addLabel('c')
// 		.to('.page', {scale: 1, ease: Power2.easeInOut, duration: 0.7},'c-=0.3')
// 	})
// });


// const htht = document.querySelector('.hhhhh')
	
// htht.addEventListener('click',()=>{
// 	mainMotion.reverse(0.1);
// 	ideaMotion.reverse(0.1);
// 	spaceMotion.reverse(0.1);
// 	serviceMotion.reverse(0.1);
// 	tourMotion.reverse(0.1);
// 	faqMotion.reverse(0.1);
// 	pageTransition.reverse(0.1);
// })

const tttt = document.querySelector('.ttttt')
tttt.addEventListener('click',()=>{
	// mainMotion.play();
	// ideaMotion.play(); // ideaMotion을 역재생하는 대신 play 메서드를 사용하여 재생합니다.
	// pageTransition.play()
})


// const htht = document.querySelector('.hhhhh')
// htht.addEventListener('click',()=>{
//   console.log('888')
// 	// myTween.kill();
//   // 	mainMotion.kill(0.1);
// 	// ideaMotion.kill(0.1);
// 	// spaceMotion.kill(0.1);
// 	// serviceMotion.kill(0.1);
// 	// tourMotion.kill(0.1);
// 	// faqMotion.kill(0.1);
// 	// pageTransition.kill(0.1);
// })


