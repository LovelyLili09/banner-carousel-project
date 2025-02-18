const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showItem(index) {
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

// 自动播放
let autoPlay = setInterval(nextItem, 3000);

// 手动切换
prevButton.addEventListener('click', () => {
    clearInterval(autoPlay);
    prevItem();
    autoPlay = setInterval(nextItem, 3000);
});

nextButton.addEventListener('click', () => {
    clearInterval(autoPlay);
    nextItem();
    autoPlay = setInterval(nextItem, 3000);
});
