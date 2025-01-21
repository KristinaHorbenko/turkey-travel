const playButton = document.querySelector('.video-play-btn'); // Кнопка Play
const video = document.querySelector('.video-background__content'); // Видео

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i> '; // Меняем текст кнопки на Pause
    } else {
        video.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Меняем текст кнопки на Play
    }
});