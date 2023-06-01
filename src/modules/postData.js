const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JQg6oO2j3TrBWpEacMxL/scores/';
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

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

export default postData;