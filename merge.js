document.addEventListener("DOMContentLoaded", function () {
    const scheleteBtn = document.querySelector(".cutie");
    const muschiBtn = document.querySelector(".cutie1");

    const scheleteText = document.querySelector("#schelet");
    const muschiText = document.querySelector("#muschit");
    const content1 = document.querySelector("#carousel");
    const content2 = document.querySelector("#carousel1");


    scheleteBtn.classList.add("active");
    content2.style.display = "none";
    scheleteText.style.display = "block";

    muschiBtn.addEventListener("click", function () {

        scheleteBtn.classList.remove("active");
        muschiBtn.classList.add("active");
        content2.style.display = "block";
        content1.style.display = "none";
    });

    scheleteBtn.addEventListener("click", function () {

        muschiBtn.classList.remove("active");
        scheleteBtn.classList.add("active");
        content1.style.display = "block";
        content2.style.display = "none";
    });
});

scheleteBtn.classList.add("active");
muschiText.style.display = "none";
scheleteText.style.display = "block";