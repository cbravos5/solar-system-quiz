const correctAnswers = ['B', 'C', 'A', 'D', 'B', 'C'];

const form = document.querySelector('form');
const result = document.querySelector('.result');
const resultText = result.querySelector('span');

const animateResult = (result) => {
  let counter = 0;
  const timer = setInterval(() => {
    if (counter >= result) {
      clearInterval(timer);
      return;
    }
    counter++;
    resultText.textContent = `${counter}%`;
  }, 50);
};

const getHits = (answers) => {
  let hits = 0;

  answers.forEach((answer, index) => {
    const isCorrect = answer === correctAnswers[index];

    if (isCorrect) {
      hits++;
    }
  });

  return hits;
};

const insertResult = (percentage) => {
  setTimeout(() => {
    result.classList.remove('d-none');
    animateResult(percentage);
  }, 100);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const answers = [
    form.question1radio.value,
    form.question2radio.value,
    form.question3radio.value,
    form.question4radio.value,
    form.question5radio.value,
    form.question6radio.value,
  ];

  let hits = getHits(answers);

  const percentage = Math.trunc((100 * hits) / 6);

  window.scroll({
    top: 0,
    behavior: 'smooth',
  });

  insertResult(percentage);
});
