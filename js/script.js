/* BEHAVIOR FOR BUTTONS IN MAIN NAVIGATION BAR*/

document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.nav-item a');
    
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all nav items
            navItems.forEach(function (nav) {
                nav.parentElement.classList.remove('active');
            });

            // Add 'active' class to clicked nav item
            this.parentElement.classList.add('active');
        });

        // Hover effect
        item.addEventListener('mouseover', function() {
            navItems.forEach(function (nav) {
                nav.style.backgroundColor = 'black'; // Unselected color
            });
            this.style.backgroundColor = 'steelblue'; // Hover color
        });

        item.addEventListener('mouseout', function() {
            navItems.forEach(function (nav) {
                nav.style.backgroundColor = nav.parentElement.classList.contains('active') ? 'steelblue' : 'black';
            });
        });
    });
});


/* FOR UPDATING CURRENT YEAR (FOOTER) */

var currentYear = new Date().getFullYear();
var yearPlaceholder = document.getElementById('currentYear');
yearPlaceholder.textContent = currentYear;
