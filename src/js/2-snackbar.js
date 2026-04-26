import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/style.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(res => {
      iziToast.success({
        message: `Fulfilled promise in ${res} ms`,
      });
    })
    .catch(err => {
      iziToast.error({
        message: `Rejected promise in ${err} ms`,
      });
    });
}
