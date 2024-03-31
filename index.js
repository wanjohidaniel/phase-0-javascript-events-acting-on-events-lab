const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    if (leftPosition > 0) {
        dodger.style.left = `${leftPosition - 1}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left.replace('px', ''));
    const newPosition = currentPosition + 10; 

    if (newPosition > 179) {
        dodger.style.left = `${newPosition}px`;
    }
}