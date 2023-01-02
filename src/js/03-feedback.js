import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const savedObject = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedObject));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
};

const load = key => {
    try {
      const data = localStorage.getItem(key);
      return data === null ? undefined : JSON.parse(data);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
  
  const saveData = load(STORAGE_KEY);
  if (saveData) {
    email.value = saveData.email;
    message.value = saveData.message;
  }
