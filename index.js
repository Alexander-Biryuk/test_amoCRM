const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const min = Math.floor(seconds % 3600 / 60);
    const sec = Math.floor(seconds % 60);
    timerEl.innerText = `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

    let start = Math.floor(Date.now() / 1000) + seconds;

    const timerId = setInterval(() => {
      const timer = start - Math.floor(Date.now() / 1000);
      const hours = Math.floor(timer / 3600);
      const min = Math.floor(timer % 3600 / 60);
      const sec = Math.floor(timer % 60);
      timerEl.innerText = `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
      if (timer < 1) clearInterval(timerId);
    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  if (+e.target.value ?? false) {
    inputEl.value = e.target.value
  } else {
    inputEl.value = '';
  }
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
