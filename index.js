document.addEventListener("DOMContentLoaded", () => {
  
    const text = "I am Genevieve Appiah from Ghana";
    const typewriter = document.getElementById("typewriter");
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    if (typewriter) type();

   
    window.opentab = function (event, tabname) {
        const tablinks = document.getElementsByClassName("tab-links");
        const tabcontents = document.getElementsByClassName("tab-contents");

        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    };

    
    const container = document.getElementById("scroll-container");

    if (container) {
        let scrollAmount = 0;
        let autoScroll;

        function startAutoScroll() {
            autoScroll = setInterval(() => {
                scrollAmount += 1;
                container.scrollLeft = scrollAmount;

             
                if (scrollAmount >= (container.scrollWidth - container.clientWidth)) {
                    scrollAmount = 0;
                    container.scrollLeft = 0; 
                }
            }, 20);
        }

        function stopAutoScroll() {
            clearInterval(autoScroll);
        }

     
        startAutoScroll();

       
        container.addEventListener("mouseenter", stopAutoScroll);
        container.addEventListener("mouseleave", startAutoScroll);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger menu and the navigation bar elements by their IDs
    const hamburger = document.getElementById('hamburger-menu');
    const navBar = document.getElementById('nav');

    // Check if both elements exist to avoid errors
    if (hamburger && navBar) {
        // Add a click event listener to the hamburger menu icon
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation bar
            // This class will show/hide the menu based on the CSS
            navBar.classList.toggle('active');
        });
    }
});