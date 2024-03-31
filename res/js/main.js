let sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
};

function closeMenu(){
    sidemenu.style.right = "-200px";
};

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter

const textArray = ["Our mission is to conserve the life below water.", 
                    "Together we can achieve this goal.", 
                    "Being aware of the problem is the first step to the solution."
                ]; 

let txtIndex = 0; 
let charIndex = 0;

function type() {
    if (charIndex < textArray[txtIndex].length) {
        document.getElementById('typewriter').innerHTML += textArray[txtIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
    } else {
        setTimeout(erase, 1000);
    }
};

function erase() {
    if (charIndex > 0) {
        let text = textArray[txtIndex].substring(0, charIndex - 1);
        document.getElementById('typewriter').innerHTML = text;
        charIndex--;
        setTimeout(erase, 50);
    } else {
        txtIndex = (txtIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
};

// https://forum.freecodecamp.org/t/active-navigation-bar-scroll/332875/7

let mainNavLinks = document.querySelectorAll(".page-link");
let mainSections = document.querySelectorAll(".sections");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

    if (
        section.offsetTop <= fromTop + 55 &&
        section.offsetTop + section.offsetHeight > fromTop + 55
    ) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
    });
});

type();
