document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const loveText = document.getElementById('love-text');

    let countdown = 5;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            progressContainer.style.display = 'block';
            loveText.style.display = 'block';

            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 500);
        }
    }, 1000);
});