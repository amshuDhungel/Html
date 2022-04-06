const productcontainer = [document.querySelectorAll('.book-container')];
const nextbutton = [...document.querySelectorAll('.next-button')];
const prebutton = [...document.querySelectorAll('.pre-button')];

productcontainer.forEach((item, i) => {
    let containerdimension = item.getBoundingClientRect();
    let containerwidth = containerdimension.width;

    nextbutton[i].addEventListener('click', () =>{
        item.scrollleft  += containerwidth;
    })

    prebutton[i].addEventListener('click', () =>{
        item.scrollleft -= containerwidth;
    })
});