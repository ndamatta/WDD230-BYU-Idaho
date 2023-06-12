const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json()
    console.table(data.prophets)
}