let keyPressed = document.getElementById("key").getElementsByTagName("h3")[0];
let keyCode = document.getElementById("code").getElementsByTagName("h3")[0];
let keyWhich = document.getElementById("which").getElementsByTagName("h3")[0];
let keyMain = document.getElementById("main").getElementsByTagName("h1")[0];
let mobileInstructions = document.getElementById("mobile_instructions");


let mainMovement = anime({
    targets: keyMain,
    translateY: -25, // Moves up the page 25 pixels
    direction: 'alternate', // Resets once the animation is complete
    easing: 'easeInOutSine', // Slows down once it gets close to its end point
    innerText: [0, 8940000],
    duration: 250 // 250ms
});
mainMovement.pause();

let debounce = false;
document.addEventListener("keydown", (keyObject) => {

    
    if(debounce) return;
    debounce = true;

    // Shows everything except the mobile message on keydown
    for(let element of document.body.getElementsByTagName("div")){ 
        if(element.id == "mobile_instructions"){
            element.style.display = "none";
        }
        else{
            element.style.display = "flex";
        }
    }
    /*
    keyWhich.textContent = keyObject.keyCode;  DEPRECATED 
    key.charCodeAt() is the replacement, but is case sensitive
    Converting it to upper case makes it match the "keyCode" value
    */
    let which = keyObject.key.toUpperCase().charCodeAt();
    keyWhich.textContent = which;
    
    keyPressed.textContent = keyObject.key;
    keyCode.textContent = keyObject.code;

    mainMovement.restart();

    anime({
        targets: keyMain,
        innerHTML: which,
        easing: "linear",
        duration: 550,
        round: true,
        update: function(a) {
            keyMain.innerHTML = a.animations[0].currentValue;
        },
        complete: function() {
            debounce = false;
        }
    });

});
