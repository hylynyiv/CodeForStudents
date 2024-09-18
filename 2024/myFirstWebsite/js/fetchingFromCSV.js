// Function to fetch and display words from a CSV or text file
function fetchAndDisplayWords() {
    // Path to the file (adjust the path if necessary)
    const filePath = 'words.csv'; // Or 'words.txt' if it's a simple text file

    // Fetch the file
    fetch(filePath)
        .then(response => response.text()) // Parse the file content as plain text
        .then(text => {
            // Split the text by commas and create an array of words
            const words = text.split(',');

            // Display the words in the HTML
            const wordListDiv = document.getElementById('word-list');
            words.forEach(word => {
                // Create a new paragraph element for each word
                const wordElement = document.createElement('p');
                wordElement.textContent = word.trim(); // Trim any extra whitespace
                wordListDiv.appendChild(wordElement); // Append the word to the word list div
            });
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}

// Call the function to fetch and display the words
fetchAndDisplayWords();
