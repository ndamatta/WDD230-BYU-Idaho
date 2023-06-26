/* DISCOVER - LAZY LOAD */
const imagesToLoad = document.querySelectorAll(".image-gallery img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
image.setAttribute("src", image.getAttribute("data-src"));
image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
};

/* DISCOVER - LAST VISIT */
let lastVisit = localStorage.getItem("lastVisit");
const lastVisitElement = document.querySelector("#lastVisit p");

if (lastVisitElement != null) {
    if (lastVisit) {
        let currentDate = new Date();
        let previousDate = new Date(lastVisit);
        let timeDifference = currentDate.getTime() - previousDate.getTime();
    
        let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
        lastVisitElement.innerText = `You visited this webpage ${differenceInDays} days ago!`;
    }
    localStorage.setItem("lastVisit", new Date());
};