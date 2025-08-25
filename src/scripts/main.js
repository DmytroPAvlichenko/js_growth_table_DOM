'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const firstRow = document.querySelector('tbody tr');

const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');

let rowCount = firstRow.querySelectorAll('td').length;
let columCount = table.querySelectorAll('tbody tr').length;

function buttonDisabled() {
  removeCol.disabled = columCount <= 2;
  removeRow.disabled = rowCount <= 2;
  appendCol.disabled = columCount >= 10;
  appendRow.disabled = rowCount >= 10;
}

buttonDisabled();

container.addEventListener('click', (ave) => {
  go(ave.target.classList[0]);
  buttonDisabled();
});

function go(clasName) {
  switch (clasName) {
    case 'append-column':
      table.querySelectorAll('tr').forEach((element) => {
        const td = document.createElement('td');

        element.append(td);
      });

      columCount++;

      break;

    case 'append-row':
      const tr = document.createElement('tr');

      firstRow.querySelectorAll('td').forEach(() => {
        const td = document.createElement('td');

        tr.append(td);
      });

      table.querySelector('tbody').append(tr);

      rowCount++;
      break;

    case 'remove-row':
      table.querySelector('tbody').lastElementChild.remove();
      rowCount--;
      break;

    case 'remove-column':
      table.querySelectorAll('tr').forEach((row) => {
        row.lastElementChild.remove();
      });

      columCount--;
      break;
    default:
      break;
  }
}
