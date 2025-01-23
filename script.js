// Legg til event listeners for touch og klikk hendelser for å vise verktøytips
document.addEventListener('DOMContentLoaded', function () {
  const tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', function () {
      const tooltipText = this.querySelector('.tooltiptext');
      if (tooltipText.style.visibility === 'visible') {
        // Skjul verktøytips
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      } else {
        // Vis verktøytips
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      }
    });

    tooltip.addEventListener('touchstart', function (event) {
      event.preventDefault(); // Forhindre at touch hendelse utløser mouse events
      const tooltipText = this.querySelector('.tooltiptext');
      if (tooltipText.style.visibility === 'visible') {
        // Skjul verktøytips
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      } else {
        // Vis verktøytips
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
      }
    });
  });
});
