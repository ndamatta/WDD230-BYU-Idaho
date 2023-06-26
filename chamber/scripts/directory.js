/* SHOW LIST OR GRID BUTTONS */

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector(".directory-main article");

if (gridBtn != null) {
gridBtn.addEventListener("click", () => {
    updateView("grid")
    })
listBtn.addEventListener("click", () => {
    updateView("list")
    })
} ;
function updateView(view) {
display.classList.toggle("grid", view === "grid");
display.classList.toggle("list", view === "list");
}
/* CREATE CARDS FROM API */
const urlBusiness = "https://ndamatta.github.io/wdd230/chamber/data.json"
const checkDirectory = document.querySelector(".directory-main article");

async function getBusinessData() {
    const response = await fetch(urlBusiness);
    const data = await response.json();
    const sortedBusiness = sortBusinessByMembership(data.business);
    displayBusiness("directory", sortedBusiness);
}

const membershipOrder = ["gold", "silver", "bronze", "np"];

const sortBusinessByMembership = (business) => {
    return business.sort((a, b) => {
        const membershipA = membershipOrder.indexOf(a.membership);
        const membershipB = membershipOrder.indexOf(b.membership);
        return membershipA - membershipB;
    });
    };

function displayBusiness(webpage, business) {
    switch(webpage){
        case "directory":
        const cards = document.querySelector(".directory-main article");

        business.forEach((business) => {
            let card = document.createElement("section");
            let name = document.createElement("div");
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("a");
    
            h2.textContent = `${business.name}`;
            h3.textContent = `${business.membership.toUpperCase()}` ;
            address.textContent = `${business.address}`;
            phone.textContent = `${business.phone}`;
            url.textContent = `${business.url}`;
            
            img.setAttribute("src", `images/${business.img}`);
            img.setAttribute("alt", `Logo of ${business.name}`)
            h3.setAttribute("class", setMembershipColor());
            address.setAttribute("class", "directory-address");
            phone.setAttribute("class", "directory-phone");
            url.setAttribute("href", `https://${business.url}`);
            url.setAttribute("target", "_blank");
    
            card.appendChild(img);
            name.appendChild(h2);
            name.appendChild(h3);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
    
            if (cards != null) {
                cards.appendChild(card)
            }
            function setMembershipColor() {
                if (business.membership == "np") {
                    return "np";
                }
                if (business.membership == "bronze") {
                    return "bronze";
                }
                    if (business.membership == "silver") {
                    return "silver";
                }
                    if (business.membership == "gold") {
                    return "gold";
                }
            }
        })
        break;

        case "main":
    };
}
getBusinessData();
