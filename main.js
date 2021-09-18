const btnSubmit = document.querySelector('.email__btn');
const emailInput = document.querySelector('.email__input');
const invalidImg = document.querySelector('.email__invalid-img');
const invalidMsg = document.querySelector('.invalid');

btnSubmit.addEventListener('click', validateEmail);

function validateEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailInput.value.match(mailformat)) {
    invalidImg.classList.remove('hidden');
    invalidMsg.classList.remove('hidden');
    emailInput.style.border = '2px solid var(--clr-primary-strong)';
  } else {
    invalidImg.classList.add('hidden');
    invalidMsg.classList.add('hidden');
    emailInput.style.border = '2px solid hsl(0, 10%, 70%)';
  }
}
