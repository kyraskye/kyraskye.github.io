document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("introForm");
const message = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (event) {
event.preventDefault();

form.style.display = "none";  
message.style.display = "block"; 
    });
 });