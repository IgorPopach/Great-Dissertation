// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var dropdown = document.getElementById("myDropdown");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");

    // Do something else, like open/close menu
    // Toggle className for dropdown
    dropdown.classList.toggle("show");
});

function isOurDropdown(element) {
    return element.matches('.dropbtn') || element.matches(".hamburger") || element.matches(".hamburger-box")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if ( isOurDropdown(event.target) ) {
        return;
    }
    dropdown.classList.remove("show");
    hamburger.classList.remove("is-active");
};
