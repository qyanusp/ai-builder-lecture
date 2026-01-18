document.addEventListener('DOMContentLoaded', () => {
  const generatorBtn = document.getElementById('generator-btn');
  const lottoNumbersContainer = document.getElementById('lotto-numbers-container');

  if (generatorBtn) {
    generatorBtn.addEventListener('click', () => {
      // Clear previous numbers
      lottoNumbersContainer.innerHTML = '';

      // Generate 5 unique numbers
      const numbers = new Set();
      while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
      }

      // Create and display new number elements
      numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.textContent = number;
        
        // Style the element directly with JS
        numberElement.style.display = 'inline-flex';
        numberElement.style.justifyContent = 'center';
        numberElement.style.alignItems = 'center';
        numberElement.style.width = '50px';
        numberElement.style.height = '50px';
        numberElement.style.margin = '5px';
        numberElement.style.borderRadius = '50%';
        numberElement.style.backgroundColor = '#4CAF50';
        numberElement.style.color = 'white';
        numberElement.style.fontSize = '20px';
        numberElement.style.fontWeight = 'bold';
        numberElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

        lottoNumbersContainer.appendChild(numberElement);
      });
    });
  } else {
    console.error('Generator button not found!');
  }
});
