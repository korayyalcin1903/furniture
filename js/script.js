// slider

let slider = document.querySelector(".header-content-item")
let slide = document.querySelectorAll(".header-content-items")
let sliderCount = document.querySelector(".slider-count-text")

if(slider){
  let sliderWidth = slider.clientWidth - slide[slide.length - 1].clientWidth
  let index = slide.length
  let count = 1

  intervalId = setInterval(() => {
    if (index === 0) {
      slider.style.marginLeft = "0px"
      index = slide.length
    } else {
      slider.style.marginLeft = `-${(sliderWidth / (index - 1))}px`
      if (count === slide.length) {
        count = 1
        sliderCount.innerHTML = count
      } else {
        count++
        sliderCount.innerHTML = count
      }
      index--
    }
  }, 2000)
}

// menu

let menuToggle = document.querySelector(".bar-menu")
let menuAnimation = document.querySelectorAll(".bar-menu .bar")
let menu = document.querySelector(".menu")
let menuUl = document.querySelector(".menu ul")
let loginMenu = document.querySelector(".login-menu")
let menuList = ["home","about","shop","furniture","contact us"]


for(let i=0;i<menuList.length;i++){
  if(menuList[i] === "home"){
    let menu = `<li><a href="index.html" class="nav-link">${menuList[i].toUpperCase()}</a></li>`    
    menuUl.insertAdjacentHTML("beforeend",menu)
  } else {
    if(menuList[i] === "home"){
      continue
    } else {
      let menu = `<li><a href="${menuList[i].replace(" ", "-")}.html" class="nav-link">${menuList[i].toUpperCase()}</a></li>`
      menuUl.insertAdjacentHTML("beforeend",menu)
    }
  }
}

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open")
  loginMenu.classList.toggle("open")
  menuAnimation.forEach(menuAni => {
    menuAni.classList.toggle("open")
  })
})


// category

let img = document.querySelector(".categories .right")
let category = document.querySelector(".category")
let categories = {
      Chairs:"./img/t-1.jpg",
      Tables:"./img/t-2.jpg",
      Bads:"./img/t-3.jpg",
      Furnitures:"./img/t-4.jpg"
}

let keys = Object.keys(categories)
let values = Object.values(categories)

if(img){
  for(let i=0;i<img.length;i++){
    if(i%2==0){
      img[i].style.marginTop = "50px"
    }
  }
  
  if(img.children.length <= 0){
    for(let i=0;i<values.length;i++){
      let images = `
        <div><img src="${values[i]}" alt=""></div>
      `
      img.insertAdjacentHTML("beforeend",images)
    }
  }
}

if(category){
  for(let i=0;i<keys.length;i++){
    let index = i+1
    if(0<index && index<10){
      let list = `
          <li key=${index}><span>0${index}</span><span class="line" style="margin: 0 3rem 0 .5rem;"></span>${keys[i]}</li>
      `
      category.insertAdjacentHTML("beforeend",list)
    } else {
      let list = `
          <li key=${index}><span>${index}</span><span class="line" style="margin: 0 3rem 0 .5rem;"></span>${keys[i]}</li>
      `
      category.insertAdjacentHTML("beforeend",list)
    }
  }

  category.addEventListener('click', function(event) {
    let categoryChild = category.children
    for(let i = 0; i<categoryChild.length;i++){
      categoryChild[i].style.color = "var(--dark)"
    }
    event.target.style.color = "var(--primary)"
    img.innerHTML = ""
    let clickedKey = event.target.getAttribute('key')
    let images = `
      <div><img src="${values[clickedKey-1]}" alt=""></div>
    `
     img.insertAdjacentHTML("beforeend",images)
    for(let i=0;i<values.length;i++){
      if(clickedKey-1 === i){
        continue
      } else {
        let images = `
         <div><img src="${values[i]}" alt=""></div>
        `
        img.insertAdjacentHTML("beforeend",images)
      }
    }
  })
}



