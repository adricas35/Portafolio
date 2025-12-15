
document.addEventListener('click', function (event) {

    const parentItem = event.target.parentElement;
    let idElement = '';
    if (window.matchMedia("(max-width: 767px)").matches) {
        if (parentItem.classList.contains('tarjeta')) {
            idElement = parentItem.id;
        }
        if (parentItem.classList.contains('carousel-item')) {
            const primerHijo = parentItem.firstElementChild;
            idElement = primerHijo.id;
        }


    } else{
        if (event.target.tagName === 'BUTTON') {
            idElement = event.target.id;
        }
    }


    switch (idElement) {
        case 'rumbo':
            window.open('https://adricas35.github.io/Rumbo-practica--html-css/', '_blank');
            break;
        case
            'vehiculos_dinamicos':
            window.open('https://adricas35.github.io/Protecto_vehiculos_dinamicos/', '_blank');
            break;
        case
            'tematicas':
            window.open('https://adricas35.github.io/Taller-practico-HTML-mas-CSS-tematicas/', '_blank');
            break;
        case 'nivelacion':
            window.open('https://adricas35.github.io/Algoritmos-nivelaci-n-JS/', '_blank');
            break;
        case
            'algoritmos':
            window.open('https://adricas35.github.io/Algotritmos-practica-js/', '_blank');
            break;
        case 'gym':
            window.open('https://adricas35.github.io/WEBSITE-CON-BOOTSTRAP-GYM/', '_blank');
            break;
        case 'algoritmos_itermedio':
            window.open('https://adricas35.github.io/Algoritmos-intermedios_avanzado/', '_blank');
            break;
        case 'web_resposive':
            window.open('https://adricas35.github.io/Web-Site-Responsive/', '_blank');
            break;
        case 'web_localStorage':
            window.open('https://adricas35.github.io/Proyecto-LocalStorage/', '_blank');
            break;
        default:
            break;
    }


});