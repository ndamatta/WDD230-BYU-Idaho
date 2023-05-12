/* HAMBURGER BUTTON */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

/* TODAY'S DATE IN HEADER */
const todayDateField = document.querySelector("#todaysDate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
todayDateField.innerHTML = fulldate;

/* FOOTER COPYRIGHT YEAR AND LAST MODIFIED */
let lastModified = document.querySelector(".lastmodified")
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
currentYear.textContent = `${new Date().toLocaleDateString("en-US", currentYearOptions)}`