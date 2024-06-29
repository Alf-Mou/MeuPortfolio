document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        const file = el.getAttribute('id') + '.html';
        fetch('includes/' + file)
            .then(response => response.text())
            .then(data => el.innerHTML = data)
            .catch(error => console.log('Error:', error));
    });
}
