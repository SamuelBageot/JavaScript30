function time() {

    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    const secValMvt = 90 + (sec * 6) + 2;
    const secVal = 90 + (sec * 6);
    const minVal = 90 + (min * 6) + (sec * 0.1);
    const hourVal = 90 + ((hour-12) * 30) + (min * 0.5);

    
    document.querySelector('.second-hand').style.transform = `rotate(${secValMvt}deg)`;
    setTimeout(() => {
        document.querySelector('.second-hand').style.transform = `rotate(${secVal}deg)`;        
    }, 8);
    document.querySelector('.min-hand').style.transform = `rotate(${minVal}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourVal}deg)`;

}

time();

window.setInterval(time, 1000);