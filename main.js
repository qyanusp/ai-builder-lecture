document.addEventListener('DOMContentLoaded', () => {
  const generatorBtn = document.getElementById('generator-btn');
  const lottoNumbersContainer = document.getElementById('lotto-numbers-container');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check local storage for theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  }

  // Theme Toggle Handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }

  function getBallColorClass(number) {
    if (number <= 10) return 'ball-range-1';
    if (number <= 20) return 'ball-range-2';
    if (number <= 30) return 'ball-range-3';
    if (number <= 40) return 'ball-range-4';
    return 'ball-range-5';
  }

  if (generatorBtn) {
    generatorBtn.addEventListener('click', () => {
      // Clear previous numbers
      lottoNumbersContainer.innerHTML = '';

      // Generate 5 sets
      for (let i = 0; i < 5; i++) {
        const setContainer = document.createElement('div');
        setContainer.classList.add('lotto-set');

        // Generate 6 unique numbers
        const numbers = new Set();
        while (numbers.size < 6) {
          const randomNumber = Math.floor(Math.random() * 45) + 1;
          numbers.add(randomNumber);
        }

        // Sort numbers numerically
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        // Create and display new number elements
        sortedNumbers.forEach(number => {
          const numberElement = document.createElement('div');
          numberElement.textContent = number;
          numberElement.classList.add('lotto-ball');
          numberElement.classList.add(getBallColorClass(number));
          
          setContainer.appendChild(numberElement);
        });

        lottoNumbersContainer.appendChild(setContainer);
      }
    });
  } else {
    console.error('Generator button not found!');
  }
});