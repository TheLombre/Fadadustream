document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    let isMuted = false;
    backgroundMusic.play();
    muteButton.addEventListener('click', () => {
        isMuted = !isMuted;
        backgroundMusic.muted = isMuted;
        muteButton.textContent = isMuted ? 'Activer le son' : 'Couper le son';
    });