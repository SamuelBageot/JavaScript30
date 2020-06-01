function shadow(e) {
    const xPosition = e.clientX - window.innerWidth/2;
    const yPosition = e.clientY - window.innerHeight/2;

    document.querySelector('h1').style.textShadow = `
    ${(xPosition)/4}px ${(yPosition)/2}px #FF4CFF,
    ${-(xPosition)/4}px ${(yPosition)/2}px #4CFFFF,
    ${(yPosition)/2}px ${-(xPosition)/4}px #4CFF4C,
    ${-(yPosition)/2}px ${(xPosition)/4}px #4C4CFF
    `;
}

window.addEventListener('mousemove', shadow);