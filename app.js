document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const workHistoryContent = document.querySelector('.work-history-container .work-history');
    const collapsibleButtons = document.querySelectorAll('.collapsible');
    const workHistoryButton = document.querySelector('.work-history-container .collapsible');
    const middleContainer = document.querySelector('.middle-container');
    const workHistoryContainer = document.querySelector('.work-history-container');
    const cursor = document.getElementById('cursor'); // Add cursor selection

    let openMenu = null; // Variable to keep track of currently open menu

    if(hamburger && navMenu && workHistoryContent && collapsibleButtons && workHistoryButton && middleContainer && workHistoryContainer && cursor) {
        // Code only executes if all necessary elements are found

        // Remove the active class from all menu elements
        navMenu.classList.remove('active');
        workHistoryContent.classList.remove('active');
        collapsibleButtons.forEach(button => button.classList.remove('active'));

        // Ensure all menus are collapsed by default
        collapsibleButtons.forEach(button => {
            button.nextElementSibling.style.display = 'none';
        });

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            // Close the currently open menu when the navigation menu is opened
            if (openMenu) {
                openMenu.classList.remove('active');
                openMenu.nextElementSibling.style.display = 'none';
                openMenu = null;
            }

            // Remove the active class from all menu elements
            workHistoryContent.classList.remove('active');
            collapsibleButtons.forEach(button => button.classList.remove('active'));
        });

        // Toggle the visibility of work history content
        workHistoryButton.addEventListener('click', function() {
            workHistoryContent.classList.toggle('active');
            workHistoryButton.classList.toggle('active');

            // Close other open menus when work history is opened
            if (openMenu && openMenu !== this) {
                openMenu.classList.remove('active');
                openMenu.nextElementSibling.style.display = 'none';
                openMenu = null;
            }
        });

        // Toggle collapsible sections
        collapsibleButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (openMenu === this) {
                    // Toggle the clicked menu
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                } else {
                    // Close the currently open menu
                    if (openMenu) {
                        openMenu.classList.remove('active');
                        openMenu.nextElementSibling.style.display = 'none';
                    }
                    // Open the clicked menu
                    this.classList.add('active');
                    this.nextElementSibling.style.display = 'block';
                    openMenu = this;
                }
            });
        });

        // Close menus when clicking away
        document.body.addEventListener('click', function(event) {
            // Check if the clicked element is a menu button or inside a menu
            if (!event.target.closest('.collapsible') && !event.target.closest('.work-history-container')) {
                // Collapse any open menus
                if (openMenu) {
                    openMenu.classList.remove('active');
                    openMenu.nextElementSibling.style.display = 'none';
                    openMenu = null;
                }
            }
        });

        // Add event listener to the work history container to handle button clicks
        workHistoryContainer.addEventListener('click', function(event) {
            // Check if the clicked element is a button and its text content is "RCR Mining Technologies"
            if (event.target.tagName === 'BUTTON' && event.target.textContent === 'RCR Mining Technologies') {
                // Toggle the visibility of the middle container
                if (middleContainer.style.display === 'none') {
                    middleContainer.style.display = 'block';
                } else {
                    middleContainer.style.display = 'none';
                }
            }
        });
    }

    // Cursor movement
    document.addEventListener('mousemove', function(e) {
        var x = e.clientX - cursor.offsetWidth / 2;
        var y = e.clientY - cursor.offsetHeight / 2;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
});
