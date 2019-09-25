'use strict';

const table = document.getElementById('table');
const firstInput = document.getElementById('first-name-input');
const secondInput = document.getElementById('second-name-input');
const emailInput = document.getElementById('email-input');
const button = document.getElementById('btn');
let firstInputText = null;
let secondInputText = null;
let emailInputText = null;

button.addEventListener('click', addPerson);

function addPerson(){
  getInputValue();
  if(validate() === 0){
    return;
  }
  validate();
  addNewElement();
  clearInput();
}

function validate(){
    if(firstInput.value === ''){
      alert('Please, enter the first name!!!');
      return 0;
    }else if(secondInput.value === ''){
      alert('Please, enter the second name!!!');
      return 0;
    }else if(emailInput.value === ''){
      alert('Please, enter the email!!!');
      return 0;
    }

    let at = emailInput.value.indexOf('@');
    let dot = emailInput.value.indexOf('.');

    if(at < 1 || dot < 1){
      alert('not a valid email');
      return 0;
    }
}

function getInputValue(){
  firstInputText = firstInput.value;
  secondInputText = secondInput.value;
  emailInputText = emailInput.value;
}

function addNewElement(){
  const newRow = document.createElement('tr');
  const newTd1 = document.createElement('td');
  newTd1.append(document.createTextNode(firstInputText));
  const newTd2 = document.createElement('td');
  newTd2.append(document.createTextNode(secondInputText));
  const newTd3 = document.createElement('td');
  newTd3.append(document.createTextNode(emailInputText));
  const newTbody = document.createElement('tbody');

  newRow.append(newTd1);
  newRow.append(newTd2);
  newRow.append(newTd3);
  newTbody.append(newRow);
  table.append(newTbody);

  newRow.classList.add('new-row');


}

function clearInput(){
  firstInput.value = '';
  secondInput.value = '';
  emailInput.value = '';
}
