import './style.css';
import postData from './modules/postData.js';
import resetForm from './modules/resetForm.js';
import fetchScores from './modules/fetchScores.js';

const form = document.getElementById('add-form');
const refreshBtn = document.getElementById('refresh-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  resetForm();
});

refreshBtn.addEventListener('click', () => {
  fetchScores();
});

fetchScores();