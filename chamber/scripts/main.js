/* HAMBURGER BUTTON */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

/* TODAY'S DATE IN HEADER */
const todayDateField = document.querySelector("#todaysDate");
const date = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
todayDateField.innerHTML = fulldate;

/* JOIN US BANNER */
/* Display banner if day is Monday or Wednesday, it's forcing to hide it instead */
const meetingBanner = document.querySelector(".home-meeting-banner")

if (date.getDay() === 1 || date.getDay() === 2) {
    meetingBanner.style.display = "block";
}
else {
    meetingBanner.style.display = "none";
}

/* FOOTER COPYRIGHT YEAR AND LAST MODIFIED */
let lastModified = document.querySelector(".lastmodified")
let lastModified2 = document.querySelector(".lastmodified2")
let currentYear = document.querySelector("#currentyear")

const lastModifiedOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
const currentYearOptions = {
    year: "numeric",
}
lastModified.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
lastModified2.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
currentYear.textContent = `${new Date().toLocaleDateString("en-US", currentYearOptions)}`

/* DISCOVER - LAZY LOAD */
const imagesToLoad = document.querySelectorAll(".image-gallery img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}

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
}

/* DISCOVER - LAST VISIT */
let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
    let currentDate = new Date();
    let previousDate = new Date(lastVisit);
    let timeDifference = currentDate.getTime() - previousDate.getTime();

    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.querySelector(".lastVisit p").innerText = `You visited this webpage ${differenceInDays} days ago!`;
}
localStorage.setItem("lastVisit", new Date());

/* JOIN */
function showMembershipInfo(membership) {
    const membershipDiv = document.querySelector(".membership-info");
    var info = "";

    if (membership === "np") {
        info = 
        `
        <ul>
        <li>Monthly price: <b>$0</b></li>
        <li>Access to resources for non-profits</li>
        <li>Listing in member directory for increased opportunities</li>
        </ul>
        `
    }
    else if (membership === "bronze") {
        info = 
        `
        <ul>
        <li>Monthly price: <b>$100</b></li>
        <li>2 professional training sessions per month</li>
        <li>Workshops for professional development</li>
        </ul>
        `
    }
    else if (membership === "silver") {
        info = 
        `
        <ul>
        <li>Monthly price: <b>$250</b></li>
        <li>5 professional training sessions per month</li>
        <li>3 days of advertising in spotlight</li>
        <li>Up to 25% off in association events and conferences</li>
        </ul>
        `
    }
    else if (membership === "gold") {
        info = 
        `
        <ul>
        <li>Monthly price: <b>$400</b></li>
        <li>Unlimited professional training sessions per month</li>
        <li>7 days of advertising in spotlight</li>
        <li>Up to 50% off in association events and conferences</li>
        <li>And many more...</li>
        </ul>
        `
    }
    
    membershipDiv.innerHTML = info;

    /* GET LOCAL DAY */
    let currentDate = new Date().toDateString();
    document.getElementById("hiddenDate").value = currentDate;
}


