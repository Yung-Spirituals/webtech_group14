export function activate(){
    window.addEventListener('scroll', reveal)
}

/**
 * Checks if elements with the reveal class are in the viewport, if they are, gives them the active class,
 * which is then removed again when the elements are out of the viewport
 */
function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}