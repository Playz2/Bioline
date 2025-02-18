document.addEventListener("DOMContentLoaded", function () {
    const capitolBtns = document.querySelectorAll(".capitol-btn");

    capitolBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const lectii = this.nextElementSibling;
            if (lectii.style.display === "block") {
                lectii.style.display = "none"; 
            } else {
                lectii.style.display = "block"; 
            }
        });
    });
});
