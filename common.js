function showSuccessPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}