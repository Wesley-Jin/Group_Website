
function changeButton(element) {
    element.src = element.bln ? "public/menu.svg" : "public/x-circle.svg";
    element.bln = !element.bln;
}

// function showDropdown() {
//     document.getElementById("#navbar").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.menuButton')) {
//       var dropdowns = document.getElementsByClassName("navbarMenu");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


// document.getElementById("#menuButton").addEventListener("click", function()
// {
//     document.getElementById("")
// });

// document.querySelector("#menuButton")