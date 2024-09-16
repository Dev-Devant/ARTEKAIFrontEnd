let translations = {};

fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
  });