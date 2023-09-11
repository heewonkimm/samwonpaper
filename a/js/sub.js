const ElmainSlider = document.querySelector('.main-slider')
const ElbtnNext = document.querySelector('.btn-next')
const ElThumbList = document.querySelector('.thumbnail-list')
const ElThumbItem = document.querySelectorAll('.thumbnail-list .item')
const ElSlideCloseBtn = document.querySelector('.btn-close.close-slide')
const ElFullBox = document.querySelector('.fullscreen-box')
const ElBtnMove = document.querySelector('.btn-move')
const ElSelectBtn = document.querySelectorAll('.btn-select-option')
const ElSelectColorBtns = document.querySelectorAll('.btn-select-color')

// swiper 설정
const subSlider = new Swiper('.sub-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  allowTouchMove: false,
  navigation: {
    nextEl: '.btn-next'
  }
})
const mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  allowTouchMove: false
})
const fullSlider = new Swiper('.full-slider', {
  slidesPerView: 1,
  loop: false,
  speed: 1000,
  allowTouchMove: false
})

// 슬라이드 넘기기 버튼 제어
ElbtnNext.addEventListener('click', () => {
  subSlider.slideNext()
  mainSlider.slideNext()
})

// 활성화된 풀스크린 슬라이드 인덱스에 따라 썸네일 제어
const controlThumbs = () => {
  const currentIndex = fullSlider.realIndex

  ElThumbItem.forEach((el) => {
    el.classList.remove('is-active')
  })

  ElThumbItem[currentIndex].classList.add('is-active')
}

// 풀스크린 슬라이더 설정
fullSlider.on('slideChange', () => {
  controlThumbs()
})

//메인 슬라이더 설정
mainSlider.on('slideChange', () => {
  const currentIndex = mainSlider.realIndex

  fullSlider.slideTo(currentIndex)
})

// 썸네일 슬라이더 제어
ElThumbItem.forEach(function (item, index) {
  item.addEventListener('click', function () {
    ElThumbItem.forEach(function (el) {
      el.classList.remove('is-active')
    })

    item.classList.add('is-active')

    // Swiper 슬라이드 이동
    fullSlider.slideTo(index)
  })
})

// 풀스크린 슬라이드 열기
ElmainSlider.addEventListener('click', () => {
  if (!ElFullBox.classList.contains('is-open')) {
    ElFullBox.classList.add('is-open')
    ElThumbList.classList.add('start-transition')
  }
})

// 풀스크린 슬라이드 닫기
ElSlideCloseBtn.addEventListener('click', () => {
  if (ElFullBox.classList.contains('is-open')) {
    ElFullBox.classList.remove('is-open')
    ElThumbList.classList.remove('start-transition')

    // 닫을 때 풀스크린 싱크 다시 맞춰놓기
    fullSlider.slideTo(mainSlider.realIndex)
  }
})

// 앵커태그 스크롤
ElBtnMove.addEventListener('click', function (event) {
  event.preventDefault()
  const targetId = event.target.getAttribute('href').substring(1)
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' }) // 스크롤 이동
  }
})

// 면적 옵션(동적으로 생성)
const options = {
  Offset: ['90g/m²', '150g/m²', '200g/m²', '226g/m²', '263g/m²', '295g/m²'],
  'PVP C1S': ['342g/m²'],
  'KIT 7': ['90g/m²', '150g/m²', '226g/m²', '263g/m²'],
  'Base Stock': ['90g/m²', '150g/m²', '200g/m²', '226g/m²', '263g/m²', '295g/m²'],
  'Copy & Text': ['226g/m²', '263g/m²', '295g/m²'],
  MG: ['90g/m²', '226g/m²', '263g/m²', '295g/m²'],
  'Straw Paper': ['90g/m²', '150g/m²', '200g/m²', '263g/m²', '295g/m²']
}

// 색상 옵션(요소에서 일치하는 값 찾아서 보여줌)
const colors = {
  Offset: ['natural'],
  'PVP C1S': ['natural', 'white'],
  'KIT 7': ['natural', 'white'],
  'Base Stock': ['natural', 'white'],
  'Copy & Text': ['natural', 'white'],
  MG: ['natural', 'white'],
  'Straw Paper': ['natural', 'white']
}

const initailOption = document.querySelector('.btn-select-option')
const optionButtons = document.querySelectorAll('.btn-select-option[data-option]')
const areaOptionList = document.getElementById('areaOptionList')
const colorButtons = document.querySelectorAll('.btn-select-color')

//초깃값 설정
const initialData = initailOption.getAttribute('data-option')

initailOption.classList.add('is-active')

options[initialData].forEach((el, idx) => {
  const initialLi = document.createElement('li')
  let optionBtn
  initialLi.className = 'item'

  if (idx === 0) {
    optionBtn = `<button type="button" class="btn-select-option is-active">${el}</button>`
  } else {
    optionBtn = `<button type="button" class="btn-select-option">${el}</button>`
  }

  initialLi.innerHTML = optionBtn

  // 클릭 이벤트를 부여
  const buttonElement = initialLi.querySelector('.btn-select-option')
  buttonElement.addEventListener('click', function (event) {
    // 모든 .btn-select-option 요소에서 is-active 클래스 제거
    const allButtons = document.querySelectorAll('#areaOptionList li .btn-select-option')
    allButtons.forEach((el) => {
      el.classList.remove('is-active')
    })

    // 클릭된 버튼에만 is-active 클래스 추가
    event.target.classList.add('is-active')
  })

  areaOptionList.appendChild(initialLi)
})

colors[initialData].forEach((color) => {
  const selectedButton = document.querySelector(`.btn-select-color.${color}`)
  if (selectedButton) {
    selectedButton.style.display = 'flex'
  }
})

// 면적 옵션 제어
optionButtons.forEach((el) => {
  el.addEventListener('click', function (event) {
    // 이전에 활성화된 옵션 버튼의 is-active 클래스 제거
    optionButtons.forEach((el) => {
      el.classList.remove('is-active')
    })

    // 클릭한 버튼에 is-active 클래스 추가
    event.currentTarget.classList.add('is-active')

    const selectedOption = event.currentTarget.getAttribute('data-option')
    const selectedAreas = options[selectedOption] || []

    // 면적 옵션을 동적으로 생성하고 추가
    areaOptionList.innerHTML = ''
    selectedAreas.forEach((el, idx) => {
      const areaOptionItem = document.createElement('li')
      areaOptionItem.className = 'item'

      if (idx === 0) {
        areaOptionItem.innerHTML = `<button type="button" 
        class="btn-select-option is-active">${el}</button>`
      } else {
        areaOptionItem.innerHTML = `<button type="button" 
        class="btn-select-option">${el}</button>`
      }

      // 클릭 이벤트를 부여
      const buttonElement = areaOptionItem.querySelector('.btn-select-option')
      buttonElement.addEventListener('click', function (event) {
        // 모든 .btn-select-option 요소에서 is-active 클래스 제거
        const allButtons = document.querySelectorAll('#areaOptionList li .btn-select-option')
        allButtons.forEach((el) => {
          el.classList.remove('is-active')
        })

        // 클릭된 버튼에만 is-active 클래스 추가
        event.target.classList.add('is-active')
      })

      areaOptionList.appendChild(areaOptionItem)
    })
  })
})

// 색상 옵션
const selectNaturalBtn = document.querySelector('.btn-select-color.natural')
const selectWhiteBtn = document.querySelector('.btn-select-color.white')
const ElWillChangeImges = document.querySelectorAll('.color-info img')
const ElWillChangeThumb = document.querySelector('.thumb-color img')
const ElWillChangeFullSlideImg = document.querySelector('.full-color-info img')

optionButtons.forEach((el) => {
  el.addEventListener('click', (event) => {
    const selectedOption = event.currentTarget.getAttribute('data-option')
    const selectedColors = colors[selectedOption] || []

    //변경된 이미지 src 첫 번째 색상으로 되돌리기
    ElWillChangeImges.forEach((el) => {
      if ((el.src = './img/sub/banner01-natural-narrow.png')) {
        return
      }

      const ElParentBox = el.parentElement
      ElParentBox.style.opacity = '0'

      setTimeout(() => {
        el.src = './img/sub/banner01-natural-narrow.png'
        ElParentBox.style.opacity = '1'
      }, 300)
    })

    ElWillChangeThumb.src = './img/sub/banner01-natural-narrow.png'
    ElWillChangeFullSlideImg.src = './img/sub/banner01-natural-wide.png'

    // 컬러버튼 제어
    colorButtons.forEach((el, idx) => {
      el.style.display = 'none'
    })

    if (selectedColors) {
      selectedColors.forEach((color, idx) => {
        const selectedButton = document.querySelector(`.btn-select-color.${color}`)
        selectedButton.style.display = 'flex'
        selectedButton.classList.remove('is-active')

        if (idx === 0) {
          selectedButton.classList.add('is-active')
        }
      })
    }
  })
})

const onClickNaturalColorBtn = () => {
  const newImgSrc = './img/sub/banner01-natural-narrow.png'
  const newImgSrcWide = './img/sub/banner01-natural-wide.png'

  ElSelectColorBtns.forEach((el) => {
    el.classList.remove('is-active')
  })

  document.querySelector('.natural').classList.add('is-active')

  ElWillChangeImges.forEach((el) => {
    let currentImgSrc = el.src

    const ElParentBox = el.parentElement

    ElParentBox.style.opacity = '0'

    setTimeout(() => {
      el.src = newImgSrc
      currentImgSrc = newImgSrc
      ElParentBox.style.opacity = '1'
    }, 300)
  })

  ElWillChangeThumb.src = newImgSrc
  ElWillChangeFullSlideImg.src = newImgSrcWide
}

const onClickWhiteColorBtn = (event) => {
  const newImgSrc = './img/sub/banner01-white-narrow.png'
  const newImgSrcWide = './img/sub/banner01-white-wide.png'

  ElSelectColorBtns.forEach((el) => {
    el.classList.remove('is-active')
  })

  event.currentTarget.classList.add('is-active')

  ElWillChangeImges.forEach((el) => {
    let currentImgSrc = el.src
    const ElParentBox = el.parentElement

    ElParentBox.style.opacity = '0'

    setTimeout(() => {
      el.src = newImgSrc
      currentImgSrc = newImgSrc
      ElParentBox.style.opacity = '1'
    }, 300)
  })

  ElWillChangeThumb.src = newImgSrc
  ElWillChangeFullSlideImg.src = newImgSrcWide
}

selectNaturalBtn.addEventListener('click', (event) => {
  onClickNaturalColorBtn(event)
})

selectWhiteBtn.addEventListener('click', (event) => {
  onClickWhiteColorBtn(event)
})

// 담기 버튼 클릭 이벤트
document.querySelector('.btn-add').addEventListener('click', function () {
  var numElement = document.querySelector('.num')
  var currentNum = parseInt(numElement.textContent, 10)

  var newNum = currentNum + 1
  numElement.textContent = newNum
})

// 툴팁
const tooltip = document.querySelector('.tooltip.pvp-c1s')
const tooltipMark = tooltip.querySelector('.tooltip-mark')
const tooltipContent = tooltip.querySelector('.tooltip-content')
const tooltipCloseBtn = tooltip.querySelector('.btn-close')

// tooltip 클릭 이벤트
tooltipMark.addEventListener('click', () => {
  tooltipContent.classList.toggle('is-open')
})

tooltipCloseBtn.addEventListener('click', () => {
  tooltipContent.classList.remove('is-open')
})
