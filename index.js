function opentab(event, tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    // Deactivate all tabs and hide all content
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Activate the clicked tab and show the corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// script.js

document.addEventListener("DOMContentLoaded", function () {
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

  type();
});


window.addEventListener('load', () => {
  const scroller = document.getElementById('scroll-container');
  let scrollAmount = 0;

  setInterval(() => {
    if (scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
      scrollAmount = 0; // Reset to start
    } else {
      scrollAmount += 1; // Pixels to scroll each tick
    }
    scroller.scrollLeft = scrollAmount;
  }, 20); // Speed (lower = faster)
});