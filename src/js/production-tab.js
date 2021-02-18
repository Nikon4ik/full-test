function Select(event) {
    document.querySelectorAll(".select-box__item").forEach((item) => {
        item.style.display = "initial";
    });
    event.currentTarget.style.display = "none";
}

function Current() {
    const item = document.querySelector(".select-box__current");
    item.classList.toggle("select-box__current_active");
    
    document.querySelectorAll(".select-box__input").forEach((input) => {
        if( input.checked == true ) {
            document.querySelector(".select-box .p3").style.top = "6px";
        }
    });
}

function Remove() {
    document.querySelectorAll(".select-box__input").forEach((input) => {
        input.checked = false;
    });

    document.querySelectorAll(".select-box__item").forEach((item) => {
        item.style.display = "initial";
    });

    document.querySelector(".select-box .p3").style.top = "calc(50% - 10px)";
}

(function () {
    const item = document.querySelector(".select-box__current");
    document.onclick = function(event) {
        const classList = event.target.classList;
        if( classList.contains("select-box__current") != true && classList.contains("select-box__input-text") != true && classList.contains("p3") != true && classList.contains("select-box__icon") != true && classList.contains("select-box__close-button") != true ) {
            item.classList.remove("select-box__current_active");
        }
    }
}());