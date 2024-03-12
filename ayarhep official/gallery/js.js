document.getElementById('animatedLogo').addEventListener('click', function() {
    this.style.animationPlayState = (this.style.animationPlayState === 'running') ? 'paused' : 'running';
  });