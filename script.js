// wrapper interactividad 

const wrapper = document.querySelector ('.wrapper');
const loginlink = document.querySelector ('.login-link');
const registerlink = document.querySelector ('.register-link');
const btnPopup = document.querySelector ('.btnLogin-popup');
const iconClose = document.querySelector ('.icon-close');

registerlink.addEventListener('click', ()=> {
wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const btnToggle = document.querySelector('.btnToggle');
const navigation = document.querySelector('.navigation');


// interactividad de .btnToggle

const navbtnToggle = document.querySelector(".nav-btnToggle")
const navMenu = document.querySelector(".nav-menu")

navbtnToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

// El header se oculta al hacer scroll

let lastScrollTop = 0;
const header = document.querySelector('.header');
const navHide = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowWidth = window.innerWidth; // Obtener el ancho de la ventana actual

    // Definir el ancho máximo para aplicar el efecto de scroll (840px en este caso)
    const maxWidthForScrollEffect = 840;

    // Verificar si el ancho de la ventana es mayor que el ancho máximo para aplicar el efecto
    if (windowWidth > maxWidthForScrollEffect) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.top = `-${header.offsetHeight}px`; // Oculta el header moviéndolo hacia arriba
            navHide.style.top = `-${navHide.offsetHeight}px`; // Oculta el nav-menu moviéndolo hacia arriba
        } else {
            // Scrolling up
            header.style.top = '0'; // Muestra nuevamente el header
            navHide.style.top = '0'; // Muestra nuevamente el nav-menu
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Actualiza la posición de desplazamiento anterior
});
