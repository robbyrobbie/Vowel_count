const inputWord = document.getElementById('userWord');
const inputCount = document.getElementById('userCount');
const inputResult = document.getElementById('userResult');

inputCount.addEventListener('click', () => {
  
  const compWord = inputWord.value;
  // Spread to correctly handle multi-byte characters
  const word = [...compWord];

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    // Checking both cases manually as to avoid an extra function call with the .toLowerCase()
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      
      count++;
    }
  }

  inputResult.textContent = count;
});