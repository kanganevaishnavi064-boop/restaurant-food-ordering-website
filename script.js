

window.onload = function () {
    console.log("Welcome to Taste of Nashik");
};


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {

    if(slides.length === 0) return;

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

showSlides();



function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let guests = document.getElementById("guests").value;

    if(name === ""){
        alert("Please enter your name");
        return false;
    }

    if(email === ""){
        alert("Please enter your email");
        return false;
    }

    if(phone.length < 10){
        alert("Please enter a valid mobile number");
        return false;
    }

    if(guests <= 0){
        alert("Please enter valid number of guests");
        return false;
    }

    alert("Table Booked Successfully!");

    return true;
}


const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

