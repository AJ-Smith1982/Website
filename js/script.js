/* FOR TABS IN MAIN NAVIGATION BAR*/

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


/* FOR DOWNLOADING EXAMPLE DATA */

document.getElementById('download-button').addEventListener('click', function() {
    
    const link = document.createElement('a');
    link.href = '../misc/example-data.csv'; 
    link.download = 'download.csv';

    document.body.appendChild(link); /* Adds link to DOM */
    link.click(); /* Triggers download */
    document.body.removeChild(link); /* Removes link from DOM */
});
