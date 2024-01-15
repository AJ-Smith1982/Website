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

/* HIGHLIGHTING NAV LINKS (SCROLLY STUFF) */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", navHighlight);

function navHighlight() {

  // Get current scroll position
  let scrollY = window.scrollY;

  // Now loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
  
    /*
    If our current scroll position enters the space where current section 
    on screen is, add .active class to corresponding navigation link, else remove it
    */
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".index-container a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".index-container a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


/* FOR UPDATING CURRENT YEAR (FOOTER) */

var currentYear = new Date().getFullYear();
var yearPlaceholder = document.getElementById('currentYear');
yearPlaceholder.textContent = currentYear;


/* FOR DOWNLOADING EXAMPLE DATA */

document.getElementById('download-button').addEventListener('click', function() {
    
    const link = document.createElement('a');
    link.href = '../misc/example_dataset_filtering.xlsx'; 
    link.download = 'example_dataset_filtering.xlsx';

    document.body.appendChild(link); /* Adds link to DOM */
    link.click(); /* Triggers download */
    document.body.removeChild(link); /* Removes link from DOM */
});
