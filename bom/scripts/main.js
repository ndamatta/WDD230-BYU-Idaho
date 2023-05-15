const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    /* Get the value from input */
    myBook = input.value;
    input.value = "";

    /* Create li, span, button elements */
    let liBook = document.createElement('li');
    let liText = document.createElement('span');
    let liButton = document.createElement('button')

    /* Populates the li with the span and X button */
    liBook.appendChild(liText);
    liText.textContent = myBook;
    liBook.appendChild(liButton);
    liButton.textContent = "❌";
    list.appendChild(liBook);

    /* Function to delete last child of li */
    liButton.addEventListener('click', () => {
        list.removeChild(liBook)
    });

    input.focus();
});