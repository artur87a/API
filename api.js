function fetchRandomDogImage() {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    // Update the src attribute of the img element with the fetched image URL
                    document.getElementById('dog-image').src = data.message;
                })
                .catch(error => console.error('Error fetching dog image:', error));
        }

        // Attach a click event listener to the fetch button
        document.getElementById('fetch-button').addEventListener('click', fetchRandomDogImage);

        // Fetch the first random dog image when the page loads
        fetchRandomDogImage();