let sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
};

function closeMenu(){
    sidemenu.style.right = "-200px";
};

document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

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
}

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
}

type();
