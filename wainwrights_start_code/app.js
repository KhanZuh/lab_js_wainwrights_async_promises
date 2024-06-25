// Global variable to store all Wainwrights data
let allWainwrights = [];

// fetch all Wainwrights data
async function getAllWainwrights() {
    try { // The function's body is wrapped in a try-catch block to handle any errors that might occur during execution.

        // Fetch data from the API
        const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
        
        // Parse the JSON response
        allWainwrights = await response.json();
        
        // Call function to display all Wainwrights
        displayWainwrights(allWainwrights);
    } catch (error) {
        console.error('Error fetching Wainwrights:', error);
    }



// display Wainwrights in the HTML
function displayWainwrights(wainwrights) {
    const wainwrightsList = document.querySelector("#wainwrights-list");
    
    // Clear existing list
    wainwrightsList.innerText = '';
    
    // Create and append list items for each Wainwright
    wainwrights.forEach(wainwright => {
        const listItem = document.createElement('li');
        // assigning a new value to the innerHTML property of listItem element --> replace any existing content inside that element. 
        // backticks used to create a template literal --> multi-line strings and embedded expressions
        listItem.innerHTML = `
            <h2>${wainwright.name}</h2>
            <p>Height: ${wainwright.heightMetres} meters</p>
            <p>Area: ${wainwright.area}</p>
        `;
        wainwrightsList.appendChild(listItem);
    });
}


}
