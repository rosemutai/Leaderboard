const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JQg6oO2j3TrBWpEacMxL/scores/';
const allScores = document.getElementById('all-scores');

const fetchScores = async () => {
  allScores.innerHTML = '';

  const response = await fetch(url);
  const data = await response.json();

  data.result.sort((a, b) => b.score - a.score)
    .forEach((el) => {
      const pTag = document.createElement('p');
      const formattedName = el.user.split('')[0].toUpperCase() + el.user.slice(1);
      pTag.textContent = `${formattedName}: ${el.score}`;
      allScores.appendChild(pTag);
    });
};

export default fetchScores;