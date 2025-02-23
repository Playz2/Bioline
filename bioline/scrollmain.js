document.addEventListener("DOMContentLoaded", function () {
    const scheleteBtn = document.querySelector(".cutie");
    const muschiBtn = document.querySelector(".cutie1");
    const scheleteText = document.querySelector("#schelet");
    const muschiText = document.querySelector("#muschi");

    const carouselSchelete = document.querySelector("#carousel");
    const slidesSchelete = document.querySelectorAll("#carousel .slide");
    const dotsSchelete = document.querySelectorAll(".dots .dot");

    const carouselMuschi = document.querySelector("#carousel1");
    const slidesMuschi = document.querySelectorAll("#carousel1 .slide");
    const dotsMuschi = document.querySelectorAll(".dots1 .dot1");

    let scheleteIndex = 0;
    let muschiIndex = 0;
    let scheleteInterval, muschiInterval;

    function showScheleteSlide(index) {
        scheleteIndex = index;
        if (scheleteIndex >= slidesSchelete.length) scheleteIndex = 0;
        if (scheleteIndex < 0) scheleteIndex = slidesSchelete.length - 1;

        carouselSchelete.style.transform = `translateX(-${scheleteIndex * 100}%)`;

        dotsSchelete.forEach(dot => dot.classList.remove("active"));
        dotsSchelete[scheleteIndex].classList.add("active");
    }

    function showMuschiSlide(index) {
        muschiIndex = index;
        if (muschiIndex >= slidesMuschi.length) muschiIndex = 0;
        if (muschiIndex < 0) muschiIndex = slidesMuschi.length - 1;

        carouselMuschi.style.transform = `translateX(-${muschiIndex * 100}%)`;

        dotsMuschi.forEach(dot => dot.classList.remove("active"));
        dotsMuschi[muschiIndex].classList.add("active");
    }

    function nextScheleteSlide() {
        showScheleteSlide(scheleteIndex + 1);
    }

    function nextMuschiSlide() {
        showMuschiSlide(muschiIndex + 1);
    }

    function startScheleteAutoScroll() {
        clearInterval(scheleteInterval);
        scheleteInterval = setInterval(nextScheleteSlide, 5000);
    }

    function startMuschiAutoScroll() {
        clearInterval(muschiInterval);
        muschiInterval = setInterval(nextMuschiSlide, 5000);
    }


    dotsSchelete.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showScheleteSlide(i);
            startScheleteAutoScroll();
        });
    });


    dotsMuschi.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showMuschiSlide(i);
            startMuschiAutoScroll();
        });
    });

    
    scheleteBtn.classList.add("active");
    muschiText.style.display = "none";
    scheleteText.style.display = "block";

    muschiBtn.addEventListener("click", function () {
        scheleteBtn.classList.remove("active");
        muschiBtn.classList.add("active");
        scheleteText.style.display = "none";
        muschiText.style.display = "block";

        showMuschiSlide(0);
        startMuschiAutoScroll();
    });

    scheleteBtn.addEventListener("click", function () {
        muschiBtn.classList.remove("active");
        scheleteBtn.classList.add("active");
        muschiText.style.display = "none";
        scheleteText.style.display = "block";

        showScheleteSlide(0);
        startScheleteAutoScroll();
    });

    showScheleteSlide(0);
    showMuschiSlide(0);
    startScheleteAutoScroll();
    startMuschiAutoScroll();
});
