const items = document.querySelectorAll('.highItem');
const highLight = document.querySelector('.highLight');


function highLightLink() {
    const itemData = this.getBoundingClientRect();
    const scrollx = window.scrollX;
    const scrolly = window.scrollY;
    highLight.style.transform = `translateX(${itemData.left + scrollx}px) translateY(${itemData.top + scrolly}px)`;
    highLight.style.width = `${itemData.width}px`;
    highLight.style.height = `${itemData.height}px`;
};

items.forEach(item => item.addEventListener('mouseenter', highLightLink));