let path = window.location.pathname.replace('/', '').split('.')[0];
if (!path) {
    path = 'index';
}
const links = document.querySelectorAll('nav ul li a');

for (link of links) {
    const linkname = link.dataset.link;
    if (linkname === path) {
        link.classList.add('active');
        break;
    }

    if (link.classList.contains('active')) {
        link.classList.remove('active');
    }
}