const slides = document.querySelectorAll('.slide')

function slidePlugin(activeSlide = 0) {
  let w = activeSlide
  slides[activeSlide].classList.add('active')

  for (const slide of slides) { //"for" creates the cycle of 3 expressions
    slide.addEventListener('click', () => { //addEventListener add an event that happens after clicking
      clearActiveClasses() //event itself, removes active classes

      slide.classList.add('active') //shows the now active slide
    })
  }

  document.querySelector(".rightArr").addEventListener("click", () => {
    clearActiveClasses()

    console.log(w + " RightARR")
    
    if(w == slides.length - 1){
      w++
      w = 0
      slides[w].classList.add('active')
    }else{
      w++
      slides[w].classList.add('active')
    }
    
  })

  document.querySelector(".leftArr").addEventListener("click", () => {
    clearActiveClasses()

    console.log(w + " LEFTARR")

    if(w == 0){
      w = slides.length
      w--
      slides[w].classList.add('active')
    }else{
      w--
      slides[w].classList.add('active')
    }
    
  })

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidePlugin ()


