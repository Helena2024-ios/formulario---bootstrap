document.getElementById('personal-data-form').addEventListener('submit', function(event) {
    var form = event.target;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
});

// Las Funciones para cambiar estilos

function applyHighContrast() {
    document.getElementById('form-container').classList.remove('style-one');
    document.getElementById('form-container').classList.add('high-contrast');
}
function applyStyleOne() {
    document.getElementById('form-container').classList.remove('high-contrast');
    document.getElementById('form-container').classList.add('style-one');
}

