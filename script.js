const checkbox = document.getElementById("promise")
const procedi = document.getElementsByClassName("procedi")

//event listener se la checkbox non è checcata il pulsante procedi non funziona

//if la checkbox

checkbox.addEventListener("change", checkato(){
    procedi.disabled = !checkbox.checked
});

// function checkato() {


//     !checkbox.checked = procedi.disabled
// }


procedi.addEventListener("click", cambia())

function cambia() {
    window.location.href = ""

}

