
const btnPreve = document.querySelector(".btnpreve")
const btnNext = document.querySelector(".btnnext")
const ImageContainerSlider = document.querySelector(".abs")
console.log(ImageContainerSlider)


btnNext.addEventListener("click", ()=>{
                  //  alert("btnnext")
                ImageContainerSlider.scrollLeft +=100;
})
btnPreve.addEventListener("click",()=>{
                // alert("btnnext")
                ImageContainerSlider.scrollLeft -=100;
})



const btnPreve1 = document.querySelector(".btnpreve1")
const btnNext1 = document.querySelector(".btnnext1")
const ImageContainerSliderN = document.querySelector(".abs1")
console.log(ImageContainerSliderN)


btnNext1.addEventListener("click", ()=>{
                  //  alert("btnnext")
                ImageContainerSliderN.scrollLeft +=150;
})
btnPreve1.addEventListener("click",()=>{
                // alert("btnnext")
                ImageContainerSliderN.scrollLeft -=150;
})


const signUp = document.querySelector(".css-1")
setInterval(()=>{
   signUp.style.visibility="hidden"
},2000)
setInterval(()=>{
   signUp.style.visibility="visible"
},4000)