let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + ']').classList.add
                ('active')
            })
        }

    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-menu');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu icon and the navigation bar
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Check if both elements exist before adding the event listener
    if (menuIcon && navbar) {
        // Add a click event listener to the menu icon
        menuIcon.addEventListener('click', () => {
            // Toggle the 'active' class on the navbar
            // This class, when present, will make the navbar visible as per your CSS
            navbar.classList.toggle('active');

            // Optional: If you have an icon library like Boxicons (e.g., 'bx bx-menu' and 'bx bx-x')
            // you can also toggle the icon itself to indicate the menu state.
            // For example, if your menu icon starts with 'bx bx-menu':
            // menuIcon.classList.toggle('bx-x');
            // menuIcon.classList.toggle('bx-menu');
        });
    } else {
        // Log a warning if elements are not found, useful for debugging
        console.warn('Menu icon or navbar element not found. Ensure IDs/classes are correct.');
    }
});
