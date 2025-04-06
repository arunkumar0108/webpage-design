var searchImg = document.querySelectorAll(".click-img")
var search = document.querySelectorAll(".search-window")


function click() {

    searchImg.style.display= block;
};


        var Input = document.getElementById("login_form");
        var error = document.getElementById("pass_error");

        let letter=/[a-b]/;
        let number=/[0-9]/;
        let char=/[!@#$%^&*()]/;

        const Namevalidate=()=> {
            if (Input.value===""){
                error.textContent = "please enter Name";
            } else {
                if (Input.value.length < 5) {
                    error.textContent = "Name atleat 5 letter";
                } else if (!letter.test(Input.value)) {
                    error.textContent = "please enter  one letter";
                } else if (!number.test(Input.value)) {
                    error.textContent = "please enter one Number";
                } else if (!char.test(Input.value)) {
                    error.textContent = "please enter one Character !@#$%^&*()";
                } else {
                    error.textContent = "Username is validated ✔";
                    error.style.color= "blue";
                }
            }
        }
        // Input.addEventListener("input", validate);

        
