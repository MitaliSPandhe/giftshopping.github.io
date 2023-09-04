(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

// sample ai logic
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    
  e.preventDefault();

  // Get user input values from the form
  const relationship = document.getElementById("relationship").value;
  const age = document.getElementById("age").value;
  const occasion = document.getElementById("occasion").value;
  const interests = document.getElementById("interests").value;
  const budget = document.getElementById("budget").value;

  // Call a function to fetch or generate gift suggestions based on the input values
  const giftSuggestions = getGiftSuggestions(relationship, age, occasion, interests, budget);

  
  const suggestionResult = document.getElementById("suggestionResult");
  suggestionResult.innerHTML = "Gift Suggestions: " + giftSuggestions.join(', ');
});

// Function to generate sample gift suggestions
  

    function getGiftSuggestions(relationship, age, occasion, interests, budget) {
        return ["Cakes", "Flowers", "Gourmet","Smart Watch","Plants"];
      }




