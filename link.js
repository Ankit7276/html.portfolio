
<script>

// Get all elements with class "tab-links" and "tab-contents"
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    // Attach a click event listener to each tab link
    tablinks.forEach(function(tablink) {
        tablink.addEventListener("click", function () {
            // Remove the "active-link" class from all tab links
            tablinks.forEach(function (link) {
                link.classList.remove("active-link");
            });

            // Remove the "active-tab" class from all tab contents
            tabcontents.forEach(function (content) {
                content.classList.remove("active-tab");
            });

            // Add the "active-link" class to the clicked tab link
            tablink.classList.add("active-link");

            // Get the data-tab attribute value to determine which tab content to display
            var tabname = tablink.getAttribute("data-tab");
            // Add the "active-tab" class to the corresponding tab content
            document.getElementById(tabname).classList.add("active-tab");
        })
});









</script>
