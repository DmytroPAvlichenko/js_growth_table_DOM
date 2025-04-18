'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tbody = table.querySelector('tbody');

let rows = 4;
let cols = 4;

function updateButtons() {
  appendRowButton.disabled = rows === 10;
  removeRowButton.disabled = rows === 2;
  appendColumnButton.disabled = cols === 10;
  removeColumnButton.disabled = cols === 2;
}

appendColumnButton.addEventListener('click', () => {
  if (cols < 10) {
    cols++;

    const allRows = table.querySelectorAll('tr');

    allRows.forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (cols > 2) {
    cols--;

    const allRows = table.querySelectorAll('tr');

    allRows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    updateButtons();
  }
});

appendRowButton.addEventListener('click', () => {
  if (rows < 10) {
    rows++;

    const newRow = document.createElement('tr');

    for (let i = 0; i < cols; i++) {
      const td = document.createElement('td');

      newRow.appendChild(td);
    }

    tbody.appendChild(newRow);
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const allRows = table.rows;

  if (rows > 2) {
    rows--;

    table.deleteRow(allRows.length - 1);

    updateButtons();
  }
});

updateButtons();
