'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
const products = [...document.querySelectorAll('.product')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#search');
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
let theme = 'all';
function updateProducts() {
  const query = normalize(search.value.trim());
  let count = 0;
  products.forEach(product => {
    const visible = (theme === 'all' || product.dataset.theme === theme) && normalize(product.textContent).includes(query);
    product.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#result-count').textContent = `${count} guide${count === 1 ? '' : 's'} pour t’accompagner`;
  document.querySelector('#no-results').hidden = count !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  theme = button.dataset.filter;
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  updateProducts();
}));
search.addEventListener('input', updateProducts);
document.querySelector('#reset-search').addEventListener('click', () => {
  search.value = '';
  filters[0].click();
  search.focus();
});
