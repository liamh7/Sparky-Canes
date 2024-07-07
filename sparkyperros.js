function adjustContentMargin() {
    var cabezaHeight = document.querySelector('.cabeza').offsetHeight;
    var extraMargin = 0; // Pixeles adicionales que quieres añadir
    document.documentElement.style.setProperty('--cabeza-height', cabezaHeight + 'px');
    document.documentElement.style.setProperty('--extra-margin', extraMargin + 'px');
}

window.onload = adjustContentMargin;
window.onresize = adjustContentMargin;