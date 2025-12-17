function calculateYears() {
            const birthYearInput = document.getElementById('birthYear').value;
            const birthYear = parseInt(birthYearInput);

            const referenceYear = 1100;

            const currentYear = new Date().getFullYear();

            const resultDiv = document.getElementById('result');


            if (isNaN(birthYear) || birthYearInput.trim() === '') {
                resultDiv.textContent = "Please enter a valid numerical year.";
                return;
            }

            if (birthYear > currentYear) {
                resultDiv.textContent = `Your birth year (${birthYear}) cannot be in the future!`;
                return;
            }

            if (birthYear < referenceYear) {
                resultDiv.textContent = "Error. The year you entered must be 1100 or later.";
                return;
            }

            const difference = birthYear - referenceYear;

            let message = '';
            
            const yearsSinceReference = currentYear - referenceYear;
            message += `It has been ${yearsSinceReference} years since the first lacrosse game.<br><br>`;
            
            if (birthYear >= referenceYear) {
                message += `Your birth year is ${difference} years after the first game.`;
            } else

resultDiv.innerHTML = message;
}