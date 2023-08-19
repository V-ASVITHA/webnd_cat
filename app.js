let carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;
const createSlide = () => {
    if(slideIndex >= food.length){
        slideIndex = 0;
    }
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p =document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(food[slideIndex].name));
    p.appendChild(document.createTextNode(food[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = food[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'food-title';
    p.className = 'food-desc';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 7; i++){
    createSlide();
};

setInterval(() => {
    createSlide();
}, 5000);

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let  video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseover', () => {
        let  video = item.children[1];
        video.pause();
    })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})