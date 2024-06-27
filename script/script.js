document.addEventListener("DOMContentLoaded", function () {
  const locationInput = document.getElementById("locationInput");
  const suggestionsList = document.getElementById("suggestionsList");

  // Sample list of suggestions (replace with your actual suggestions)
  const suggestionData = ["North York", "Scarborough", "Toronto", "Mississaga", "Brampton"];

  locationInput.addEventListener("input", function () {
    const inputValue = locationInput.value.toLowerCase();
    suggestionsList.innerHTML = "";

    const filteredSuggestions = suggestionData.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue)
    );

    filteredSuggestions.forEach(suggestion => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      suggestionsList.appendChild(li);
    });

    if (inputValue && filteredSuggestions.length > 0) {
      suggestionsList.style.display = "block";
    } else {
      suggestionsList.style.display = "none";
    }
  });

  suggestionsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      locationInput.value = event.target.textContent;
      suggestionsList.style.display = "none";
    }
  });

  // Hide suggestions when clicking outside
  document.addEventListener("click", function (event) {
    if (!locationInput.contains(event.target)) {
      suggestionsList.style.display = "none";
    }
  });
});
