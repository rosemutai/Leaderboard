import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JQg6oO2j3TrBWpEacMxL/scores/';
const form = document.getElementById('add-form');
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const allScores = document.getElementById('all-scores');
const refreshBtn = document.getElementById('refresh-btn');

const resetForm = () => {
  userInput.value = '';
  scoreInput.value = '';
};

const postData = async () => {
  const gameData = {
    user: userInput.value,
    score: scoreInput.value,
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(gameData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  resetForm();
});

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

refreshBtn.addEventListener('click', () => {
  fetchScores();
});

fetchScores();