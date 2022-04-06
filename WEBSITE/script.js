const wrapper = document.querySelector(".slidewrapper")
const menuitems = document.querySelector(".menuItem")

menuitems.for((item,index) => {
    item.addEventListener("click", ()=>{
        wrapper.style.transform= `translateX($(-100* index)vw)`;
    })    
});