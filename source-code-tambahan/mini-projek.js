// nentuin item mana yang mau di kasih efek
const navbarItems = document.querySelectorAll('.navbar li');

navbarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // nge adain blur buat item yang lagi ngga dihover 
        navbarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('blur');
            }
        });
    });

    // buat ngilangin blur pas ngga dihover
    item.addEventListener('mouseleave', () => {
        navbarItems.forEach(otherItem => {
            otherItem.classList.remove('blur');
        });
    });
});

