/*navbar*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.visibility=`visible`
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.visibility=`hidden`
}
function showSidebar1(){
    const sidebar = document.querySelector('.sidebar1')
    sidebar.style.visibility=`visible`
}
function hideSidebar1(){
    const sidebar = document.querySelector('.sidebar1')
    sidebar.style.visibility=`hidden`
}

/*headmain*/
let numOfBg=document.querySelector(".num-bg");
let headButt=document.querySelector(".buttons").children
let headMain=document.querySelector(".main-head")
headButt[1].addEventListener('click',()=>{
    for (let i = 0; i < headButt.length; i++) {
        if(headButt[i].className==="active"){
            headButt[i].classList.remove("active");
        }
    }
    headButt[1].className="active";
    numOfBg.innerHTML="02"
})
headButt[0].addEventListener('click',()=>{
    for (let i = 0; i < headButt.length; i++) {
        if(headButt[i].className==="active"){
            headButt[i].classList.remove("active");
        }
    }
    headButt[0].className="active";
    numOfBg.innerHTML="01"
    
})
headButt[2].addEventListener('click',()=>{
    for (let i = 0; i < headButt.length; i++) {
        if(headButt[i].className==="active"){
            headButt[i].classList.remove("active");
        }
    }
    headButt[2].className="active";
    numOfBg.innerHTML="03"
    
})
headButt[3].addEventListener('click',()=>{
    for (let i = 0; i < headButt.length; i++) {
        if(headButt[i].className==="active"){
            headButt[i].classList.remove("active");
        }
    }
    headButt[3].className="active";
    numOfBg.innerHTML="04"
   
})
/*section5*/
let removeText1=document.querySelector(".name i");
let removeText2=document.querySelector(".Email i");
let nameText=document.querySelector(".name input");
let emailText=document.querySelector(".Email input")
removeText1.addEventListener('click',()=>{
  nameText.value='';
})
removeText2.addEventListener('click',()=>{
    emailText.value='';
})
/*control for sec6 flow*/
let myIcons=document.querySelectorAll(".sec6")
let secDiv=document.querySelectorAll(".sec6-part")
myIcons[0].addEventListener('click',()=>{   
    secDiv[0].classList.toggle("sec6-part");  
    secDiv[0].classList.toggle("sec6-partnew");  
    myIcons[0].classList.toggle("icon-reverse")
})
myIcons[1].addEventListener('click',()=>{
    secDiv[1].classList.toggle("sec6-part");  
    secDiv[1].classList.toggle("sec6-partnew");  
    myIcons[1].classList.toggle("icon-reverse")
})
myIcons[2].addEventListener('click',()=>{
    secDiv[2].classList.toggle("sec6-part");  
    secDiv[2].classList.toggle("sec6-partnew");  
    myIcons[2].classList.toggle("icon-reverse")
})
myIcons[3].addEventListener('click',()=>{
    secDiv[3].classList.toggle("sec6-part");  
    secDiv[3].classList.toggle("sec6-partnew");  
    myIcons[3].classList.toggle("icon-reverse")
})
myIcons[4].addEventListener('click',()=>{
    secDiv[4].classList.toggle("sec6-part");  
    secDiv[4].classList.toggle("sec6-partnew");  
    myIcons[4].classList.toggle("icon-reverse")
})
myIcons[5].addEventListener('click',()=>{
    secDiv[5].classList.toggle("sec6-part");  
    secDiv[5].classList.toggle("sec6-partnew");  
    myIcons[5].classList.toggle("icon-reverse")
})

//carousel
const carousel = document.querySelector(".carousel");
const cards = carousel.querySelectorAll(".card")
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper >i");
const carouselChildrens = [...carousel.children];
let isDragging = false, startX, startScrollLeft;
//for silde appear to user
function loadShow(active=3){

  carousel.childNodes[active].style="background-color:white ; position:relative "
  let quote=document.createElement("i")
  quote.className="fa-solid fa-quote-right active-i"
  carousel.childNodes[active].appendChild(quote);
  quote.style="position:absolute;top:-30px;right:20px;color:#e1e5eb;font-size:90px "
}
loadShow();
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  if(!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if(carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
  }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);