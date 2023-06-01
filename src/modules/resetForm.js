const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

const resetForm = () => {
  userInput.value = '';
  scoreInput.value = '';
};

export default resetForm;