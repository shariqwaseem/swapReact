   window.addEventListener("scroll", function(){
    let selectHeader = document.querySelector('header')
    if (selectHeader) {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      
    }})
    
  
  
  
