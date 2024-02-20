function getData(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const selectedHobbies = [];
    const hobbies = document.getElementsByName('hobbies');
    for (const hobby of hobbies) {
        if (hobby.checked) {
            selectedHobbies.push(hobby.value);
        }
    }

    const selectedAge = document.querySelector('input[name="age"]:checked');
    let selectedAgeValue = '';
    if (selectedAge) {
        selectedAgeValue = selectedAge.value;
    }

    const selectedCity = document.getElementById('favourite').value;

    const data = {
        "selectedHobbies": selectedHobbies,
        "selectedAgeRange": selectedAgeValue,
        "selectedCity": selectedCity
    };

    // Log the selected choices in the console
    console.log(data);

    // Display selected choices in one line on the webpage
    const selectedDataElement = document.getElementById('selectedData');
    selectedDataElement.textContent = `Selected Hobbies: ${selectedHobbies.join(', ')}, Age Range: ${selectedAgeValue}, Favorite City: ${selectedCity}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('postBtn');

    btn.addEventListener('click', function() {
        // Create a new div element
        const newDiv = document.createElement('article');

        // Create an h2 element
        const newH2 = document.createElement('h2');
        newH2.textContent = document.getElementById('postTitle').value;

        // Create a p element
        const date = new Date();
        const newDate = document.createElement('p');
        newDate.textContent = "Posted on " + date.toLocaleDateString() + " by " + document.getElementById('postAuthor').value;;

        // Create a p element
        const newP = document.createElement('p');
        newP.textContent = document.getElementById('postP').value;

        // Append the h2 and p elements to the div
        newDiv.appendChild(newH2);
        newDiv.appendChild(newDate);
        newDiv.appendChild(newP);

        // Append the new div to the body
        document.body.appendChild(newDiv);
    });
});
