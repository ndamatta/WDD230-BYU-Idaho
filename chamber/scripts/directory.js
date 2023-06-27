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
    const checkIfDirectory = document.querySelector(".directory-main");
    const checkIfMain = document.querySelector(".index-main");
    const response = await fetch(urlBusiness);
    const data = await response.json();
    const sortedBusiness = sortBusinessByMembership(data.business);
    if (checkIfDirectory) {
        displayBusiness("directory", sortedBusiness);
    }
    if (checkIfMain){
        displayBusiness("main", data.business)
    }
}

const membershipOrder = ["gold", "silver", "bronze", "np"];

const sortBusinessByMembership = (business) => {
    return business.sort((a, b) => {
        const membershipA = membershipOrder.indexOf(a.membership);
        const membershipB = membershipOrder.indexOf(b.membership);
        return membershipA - membershipB;
    });
    };

function setMembershipColor(membership) {
    if (membership == "gold") {return "gold"};
    if (membership == "silver") {return "silver"};
    if (membership == "bronze") {return "bronze"};
    if (membership == "np") {return "np"};
}

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
            h3.setAttribute("class", setMembershipColor(business.membership));
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
        })
        break;

        case "main":
            let spotlightNumber = 0;
            const div = document.querySelector(".home-spotlight");
            const filteredBusinesses = business.filter(business => business.membership === "gold" || business.membership === "silver");
            const selectedBusinesses = getRandomBusinesses(filteredBusinesses, 3);

            selectedBusinesses.forEach((business, index) => {
                spotlightNumber ++;

                const sectionMain = document.createElement("section");
                const h2Main = document.createElement("h2");
                const div1Main = document.createElement("div");
                const imgMain = document.createElement("img");
                const p1Main = document.createElement("p");
                const div2Main = document.createElement("div");
                const p2Main = document.createElement("p");
                const p3Main = document.createElement("p");
                const h3main = document.createElement("h3");
    
                h2Main.textContent = `${business.name}`
                h3main.textContent = `${business.membership.toUpperCase()}` ;
                p1Main.textContent = `${business.description}`;
                p2Main.textContent = `${business.email}`;
                p3Main.textContent = `${business.phone} | ${business.url}`;
    
                sectionMain.setAttribute("id", `spotlight${spotlightNumber}`);
                div1Main.setAttribute("class", "home-spotlight-section1"); 
                div2Main.setAttribute("class", "home-spotlight-section2"); 
                h3main.setAttribute("class", setMembershipColor(business.membership));
                imgMain.setAttribute("src", `images/${business.img}`);
                imgMain.setAttribute("alt", `Logo of ${business.name}`);

                div.append(sectionMain);
                sectionMain.append(div1Main);
                sectionMain.append(div2Main);
                div1Main.append(h2Main);
                div1Main.append(h3main);
                div1Main.append(imgMain);
                div1Main.append(p1Main);
                div2Main.append(p2Main);
                div2Main.append(p3Main);

                if (index === 2){
                    sectionMain.classList.add("hide-spotlight");
                }
            }
            )
            function getRandomBusinesses(array, count) {
                const shuffled = array.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
              }
    };
}
getBusinessData();
