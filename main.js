
function showErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = '0.9rem'
    errorMessage.style.paddingTop = '0.5rem'
    errorMessage.style.paddingBottom = '0.5rem'

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 1500);
}

function showsSuccessMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.style.color = "green"
    errorMessage.style.fontSize = '0.9rem'
    errorMessage.style.paddingTop = '0.5rem'
    errorMessage.style.paddingBottom = '0.5rem'

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 1500);
}

