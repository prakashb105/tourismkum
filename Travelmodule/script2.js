function toggleNav() {
    var slide = document.getElementById("slide");
    
    
    var bar = document.getElementById("bar");
    bar.classList.toggle("active");
    if (slide.style.width === "220px") {
        slide.style.width = "0"; // Hide the side nav
    } else {
        slide.style.width = "220px"; // Show the side nav
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const suggestions = [
        "Chennai",
        "Tiruchirappalli",
        "Thanjavur",
        "Madurai",
        "Coimbatore",
        "Tirunelveli",
        "Rameswaram",
        "Bengaluru",
        "Mumbai",
        "Karaikal",
        "Villupuram",
        "Salem",
        "Erode",
        "Dindigul",
        "Nagapattinam",
        "Mayiladuthurai",
        "Tiruppur",
        "Cuddalore",
        "Puducherry",
        "Vellore",
        "Tanjore",
        "Virudhachalam",
        "Kanyakumari",
        "Vijayawada"
    
    ];

    // Event listener for input boxf to show suggestions
    const inputBox = document.getElementById('input-boxf');
    
    if (inputBox) {
        inputBox.addEventListener('input', function() {
            const input = this.value.toLowerCase();
            const suggestionBox = document.getElementById('suggestions');

            // Clear previous suggestions
            suggestionBox.innerHTML = '';

            if (input) {
                // Filter the suggestions based on input
                const filteredSuggestions = suggestions.filter(item => item.toLowerCase().startsWith(input));

                if (filteredSuggestions.length > 0) {
                    suggestionBox.style.display = 'block';  // Show suggestions

                    // Append suggestions to the dropdown list
                    filteredSuggestions.forEach(function(item) {
                        const dropdownItem = document.createElement('div');
                        dropdownItem.classList.add('dropdown-item');
                        dropdownItem.textContent = item;
                        
                        // When a suggestion is clicked, set it as the input value
                        dropdownItem.addEventListener('click', function() {
                            inputBox.value = item;
                            suggestionBox.innerHTML = '';  // Clear the dropdown
                            suggestionBox.style.display = 'none';  // Hide the dropdown
                        });
          
                        suggestionBox.appendChild(dropdownItem);
                       
                        
                    });
                } else {
                    suggestionBox.style.display = 'none';  // Hide dropdown if no suggestions
                }
            } else {
                suggestionBox.style.display = 'none';  // Hide dropdown if input is empty
            }
        });
    }

    // Hide suggestions box when clicking outside of it
    document.addEventListener('click', function(e) {
        const suggestionBox = document.getElementById('suggestions');
        if (!suggestionBox.contains(e.target) && e.target.id !== 'input-boxf') {
            suggestionBox.innerHTML = '';
            suggestionBox.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const suggestions = [
        "Chennai",
        "Tiruchirappalli",
        "Thanjavur",
        "Madurai",
        "Coimbatore",
        "Tirunelveli",
        "Rameswaram",
        "Bengaluru",
        "Mumbai",
        "Karaikal",
        "Villupuram",
        "Salem",
        "Erode",
        "Dindigul",
        "Nagapattinam",
        "Mayiladuthurai",
        "Tiruppur",
        "Cuddalore",
        "Puducherry",
        "Vellore",
        "Tanjore",
        "Virudhachalam",
        "Kanyakumari",
        "Vijayawada"
    
    ];

// Event listener for input boxt to show suggestions
const inputBox = document.getElementById('input-boxt');
    
if (inputBox) {
    inputBox.addEventListener('input', function() {
        const input = this.value.toLowerCase();
        const suggestionBox = document.getElementById('suggestions2');

        // Clear previous suggestions
        suggestionBox.innerHTML = '';

        if (input) {
            // Filter the suggestions based on input
            const filteredSuggestions = suggestions.filter(item => item.toLowerCase().startsWith(input));

            if (filteredSuggestions.length > 0) {
                suggestionBox.style.display = 'block';  // Show suggestions

                // Append suggestions to the dropdown list
                filteredSuggestions.forEach(function(item) {
                    const dropdownItem = document.createElement('div');
                    dropdownItem.classList.add('dropdown-item2');
                    dropdownItem.textContent = item;
                    
                    // When a suggestion is clicked, set it as the input value
                    dropdownItem.addEventListener('click', function() {
                        inputBox.value = item;
                        suggestionBox.innerHTML = '';  // Clear the dropdown
                        suggestionBox.style.display = 'none';  // Hide the dropdown
                    });
      
                    suggestionBox.appendChild(dropdownItem);
                   
                    
                });
            } else {
                suggestionBox.style.display = 'none';  // Hide dropdown if no suggestions
            }
        } else {
            suggestionBox.style.display = 'none';  // Hide dropdown if input is empty
        }
    });
}

// Hide suggestions box when clicking outside of it
document.addEventListener('click', function(e) {
    const suggestionBox = document.getElementById('suggestions2');
    if (!suggestionBox.contains(e.target) && e.target.id !== 'input-boxt') {
        suggestionBox.innerHTML = '';
        suggestionBox.style.display = 'none';
    }
});
});

document.querySelector('.toggle').addEventListener('click', function () {
    document.getElementById('slideinput').checked = !document.getElementById('slideinput').checked;
});
