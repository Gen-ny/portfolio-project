document.addEventListener("DOMContentLoaded", () => {
  // ✅ Auto-Type Effect
  const text = "I am Genevieve Appiah from Ghana";
  const typewriter = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // typing speed
    }
  }
  if (typewriter) type();

  // ✅ Tab Switching
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

  // ✅ Auto-Horizontal Scroll for Projects Sectiondocument.addEventListener("DOMContentLoaded", () => {
  // Get the scroll container
  const container = document.getElementById("scroll-container");

  if (container) {
    let scrollAmount = 0;
    let autoScroll;

    function startAutoScroll() {
      autoScroll = setInterval(() => {
        scrollAmount += 1;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }, 20); // Speed of scroll
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    // Start scrolling when page loads
    startAutoScroll();

    // Pause on hover
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);
  }
});
