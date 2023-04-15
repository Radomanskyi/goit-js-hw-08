import { throttle } from 'lodash';

const email = document.querySelector('input');
const message = document.querySelector('textarea');
const button = document.querySelector('button');
const form = document.querySelector("form");

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const currentObj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
email.value = currentObj.email || '';
message.value = currentObj.message || '';

function onFormInput(event) {
  currentObj[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(currentObj));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Заполните все поля');
  } else {
    const localData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(localData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
