//Task 1:



function getFirstLiText() {
 let firstLi = document.querySelector('li');
  return firstLi.textContent;
}
//Task 2:

function getAllLiTexts() {
  let allLis = document.querySelectorAll('li');
  let texts = [];
  allLis.forEach(li => texts.push(li.textContent));
  return texts;
}
//Task 3:

function getListItemsTexts() {
  let listItems = document.querySelectorAll('.list-item');
  let texts = [];
  listItems.forEach(item => texts.push(item.textContent));
  return texts;
}
//Task 4:

function getListItemsClasses() {
  let listItems = document.querySelectorAll('.list-item');
 let classes = [];
  listItems.forEach(item => classes.push(item.getAttribute('class')));
  return classes;
}
//Task 5:

function getDataTestIdValues() {
  let listItems = document.querySelectorAll('.list-item');
  let values = [];
  listItems.forEach(item => values.push(item.getAttribute('data-test-id')));
  return values;
}
//Task 6:

function getBrokenDataTestIdAttributes() {
  let listItems = document.querySelectorAll('.list-item');
  let brokenIds = listItems.filter(item => !item.getAttribute("class").includes(item.textContent))
                             .map(item => item.getAttribute("data-test-id"));
  return brokenIds;
}
//Task 7:

let yourElementsArray = document.querySelectorAll(".list-item");

yourElementsArray.forEach((element, index) => {
  let position = index + 1;
  let text = element.textContent;
  let dataTestId = element.getAttribute("data-test-id");
  
  element.innerHTML = `<li class="list-item green" data-test-id=" ${dataTestId} ">${position} ${text}</li>`;
});
//Task 8:

let inputField = document.querySelector('#secret-login');
inputField.value = 'You were hacked';