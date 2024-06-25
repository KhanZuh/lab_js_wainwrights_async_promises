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

}

// display Wainwrights in the HTML
function displayWainwrights(wainwrights) {
    const wainwrightsList = document.querySelector("#wainwrights-list");
    
    // Clear existing list
    wainwrightsList.innerText = '';
    
    // Create and append list items for each Wainwright
    // iterate over each with a foreach loop
    wainwrights.forEach(wainwright => {
    // Create a new list item element for each Wainwright
        const listItem = document.createElement('li');
        // Set the inner HTML of the list item
        // This creates a structure with the fell's name, height, and area
        listItem.innerHTML = `
            <h2>${wainwright.name}</h2>
            <p>Height: ${wainwright.heightMetres} meters</p>
            <p>Area: ${wainwright.area.areaName}</p>
        `;
        // Add the newly created list item to the wainwrights list
        wainwrightsList.appendChild(listItem);
    });
}

// filtering Wainwrights based on search value
// function named 'filterWainwrights' that takes a 'searchValue' parameter
function filterWainwrights(searchValue) {
    // new array 'filteredWainwrights' by filtering the 'allWainwrights' array
    const filteredWainwrights = allWainwrights.filter(wainwright => 
        // For each 'wainwright' object in the array, check if:
        // 1. The 'name' property (converted to lowercase) includes the searchValue (also converted to lowercase)
        wainwright.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    // Call the 'displayWainwrights' function, passing filtered array as an arg
    displayWainwrights(filteredWainwrights);
}

// handle form submission
function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the search input element using querySelector
    // This selects the first element that matches the CSS selector '#searchInput'
    const searchInput = document.querySelector('#search-input');

    // Get the value of the search input --> trim() added as when search bowfell with spaces (e.g. "___bowfell") led to nothing being returned --> solve trailing whitespaces
    const searchValue = searchInput.value.trim();

    // Log the cleaned search value to the console
    console.log('Search value:', searchValue);
    filterWainwrights(searchValue); // added for filtering search values
}

// Add event listener to the form
document.querySelector('#search-form').addEventListener('submit', handleSubmit);





//function is called at the end of the script to initiate the process of fetching and displaying the Wainwrights data
getAllWainwrights();
// By placing this function call at the end, the script ensures that all necessary components are in place before starting the main operation of fetching and displaying the Wainwrights data.




