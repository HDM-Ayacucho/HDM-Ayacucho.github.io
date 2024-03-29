const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');


audio.addEventListener('ended', () => {
  playPauseBtn.classList.remove('pause');
  playPauseBtn.classList.add('play');
});
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
  } else {
    audio.pause();
    playPauseBtn.classList.remove('pause');
    playPauseBtn.classList.add('play');
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});