
function init() {
    let button = document.getElementByID("China");
    let paris = document.getElementById("France");
    let vegas = document.getElementById("Southwest");
    let maui = document.getElementById("Hawaii");

    button.addEventListener("click", function(event) {
        location.href = "China.html";
    });
    paris.addEventListener("click", function(event) {
        location.href = "France.html";
    });
    vegas.addEventListener("click", function(event) {
        location.href = "Southwest.html";
    });
    maui.addEventListener("click", function(event) {
        location.href = "Hawaii.html";
    });
};

window.onload=(init)