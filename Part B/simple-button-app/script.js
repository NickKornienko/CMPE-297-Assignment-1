document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('lightButton');
    
    button.addEventListener('click', () => {
        button.classList.toggle('lit');
        
        if (button.classList.contains('lit')) {
            button.textContent = "I'm Lit!";
        } else {
            button.textContent = "Light Me Up!";
        }
    });
});