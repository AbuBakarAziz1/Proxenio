document.getElementById('dropdownNavbarLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const dropdown = document.getElementById('dropdownNavbar');
    dropdown.classList.toggle('hidden'); // Toggle the "hidden" class
});


const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbar = document.getElementById('navbar-default');

toggleButton.addEventListener('click', function () {
    navbar.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the navbar
    const isExpanded = navbar.classList.contains('hidden') ? 'false' : 'true';
    toggleButton.setAttribute('aria-expanded', isExpanded); // Update the aria-expanded attribute
});
