/* Start Header */

// control burger and x-mark icon
let burgerIcon = document.querySelector("i.burger");
let XMarkIcon = document.querySelector("i.x-mark");
let navLinksList = document.querySelector(".nav");

burgerIcon.addEventListener('click', (e) => {

    navLinksList.classList.add("move-down");
    e.target.style.display = "none";
    XMarkIcon.style.display = "block";

});

XMarkIcon.addEventListener('click', (e) => {

    navLinksList.classList.remove("move-down");
    e.target.style.display = "none";
    burgerIcon.style.display = "block";

});

// control navbar sections
let navLinks = document.querySelectorAll(".navbar .nav a");

handleSections(navLinks);

function handleSections(ele) {

    ele.forEach((a) => {

        a.addEventListener('click', (e) => {

            e.preventDefault();

            e.target.parentElement.parentElement.querySelectorAll(".active").forEach((e) => {
                e.classList.remove("active");
            });

            e.target.classList.add("active");

            document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
                behavior: 'smooth'
            });

            XMarkIcon.click();

        });

    });

}


// control search form
let searchIcon = document.querySelector(".search-icon");
let searchInput = document.querySelector("[name='search']");

searchIcon.onclick = () => {

    searchInput.classList.add("form-check");
    searchInput.focus();

}

searchInput.onblur = () => {

    searchInput.classList.remove("form-check");
    searchInput.value = "";
    searchIcon.style.color = "var(--text-color)";

}

searchIcon.onmouseover = () => {

    searchIcon.style.color = "var(--main-color)";

}
searchIcon.onmouseleave = () => {

    if (searchInput.classList.contains("form-check")) {
        searchIcon.style.color = "var(--main-color)";
    } else {
        searchIcon.style.color = "var(--text-color)";
    }

}

// control navbar min-height
function handleNavHeight() {

    if (window.pageYOffset > 0) {
        document.documentElement.style.setProperty("--nav-height", "50px");
    } else {
        document.documentElement.style.setProperty("--nav-height", "80px");
    }

}

/* End header */


/* Start video-wrapper */

document.querySelector(".video-wrapper a").addEventListener('click', (e) => {

    let overLay = document.createElement("div");
    let videoContainer = document.createElement("div");
    let video = document.createElement("video");
    let closeMark = document.createElement("span");

    overLay.classList.add("fixed-over-lay");

    videoContainer.classList.add("video-frame");

    video.src = "../video/video_wrapper.mp4"
    video.setAttribute("controls", "controls");

    closeMark.innerHTML = "X";

    videoContainer.appendChild(video);
    videoContainer.appendChild(closeMark);
    document.body.appendChild(overLay);
    document.body.appendChild(videoContainer);

    overLay.onclick = () => {
        overLay.remove();
        videoContainer.remove();
    }

    closeMark.onclick = () => {
        overLay.remove();
        videoContainer.remove();
    }

});

/* End video-wrapper */


/* Start Gallery */

// control gallery nav links and projects portfolio-item
function handleGalleryActive() {

    let galleryNav = document.querySelectorAll(".gallery .nav a");
    let portfolioItems = document.querySelectorAll(".projects .portfolio-item")

    galleryNav.forEach(a => {

        a.addEventListener('click', () => {

            a.parentElement.parentElement.querySelectorAll(".active").forEach(e => {
                e.classList.remove("active");
            });

            a.classList.add("active");

            portfolioItems.forEach(item => {

                item.style.transform = "scale(0)";
                item.style.display = "none";

            });


            switch (a.dataset.filter) {

                case "mix":
                    portfolioItems.forEach(item => {
                        if (item.classList.contains("mix")) {
                            item.style.display = "";
                            item.style.transform = "scale(1)";
                        }
                    });
                    break;

                case "mockups":
                    portfolioItems.forEach(item => {
                        if (item.classList.contains("mockups")) {
                            item.style.display = "";
                            item.style.transform = "scale(1)";
                        }
                    });
                    break;

                case "icons":
                    portfolioItems.forEach(item => {
                        if (item.classList.contains("icons")) {
                            item.style.display = "";
                            item.style.transform = "scale(1)";
                        }
                    });
                    break;

                case "ui-kits":
                    portfolioItems.forEach(item => {
                        if (item.classList.contains("ui-kits")) {
                            item.style.display = "";
                            item.style.transform = "scale(1)";
                        }
                    });
                    break;

                case "templates":
                    portfolioItems.forEach(item => {
                        if (item.classList.contains("templates")) {
                            item.style.display = "";
                            item.style.transform = "scale(1)";
                        }
                    });
                    break;

            }

        });

    });

}

handleGalleryActive();

/* End Gallery */


/* Animation */

let fadeInDown = document.querySelectorAll(".fadeInDown");
let fadeInUP = document.querySelectorAll(".fadeInUp");
let fadeInRight = document.querySelectorAll(".fadeInRight");
let fadeInLeft = document.querySelectorAll(".fadeInLeft");
let zoomIn = document.querySelectorAll(".zoomIn");

function animation(AllEle) {

    AllEle.forEach((e) => {

        if (window.pageYOffset > e.offsetTop - window.innerHeight + 90) {

            e.classList.remove("fadeInDown");
            e.classList.remove("fadeInUp");
            e.classList.remove("fadeInLeft");
            e.classList.remove("fadeInRight");
            e.classList.remove("zoomIn");

        }

    });

}


/* Window Scroll */

window.onscroll = () => {

    handleNavHeight();

    animation(fadeInUP);
    animation(fadeInDown);
    animation(fadeInLeft);
    animation(fadeInRight);
    animation(zoomIn);

}
