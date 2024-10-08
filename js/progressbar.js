document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        bar.style.width = progressValue + '%'; // Set the width dynamically
    });
});
