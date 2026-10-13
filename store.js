const notice = document.querySelector('#notice');
function inform(message) {
  document.querySelector('#notice-text').textContent = message;
  notice.showModal();
}
document.querySelector('#close-notice').addEventListener('click', () => notice.close());
document.querySelectorAll('[data-info]').forEach(button => button.addEventListener('click', () => inform(button.dataset.info)));
document.querySelector('#search-toggle').addEventListener('click', () => {
  const form = document.querySelector('#search-form');
  form.hidden = !form.hidden;
  if (!form.hidden) document.querySelector('#search').focus();
});
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  const query = normalize(document.querySelector('#search').value.trim());
  let count = 0;
  let first = null;
  document.querySelectorAll('.product, .resource-mini').forEach(product => {
    product.hidden = !normalize(product.textContent).includes(query);
    if (!product.hidden) { count++; first ??= product; }
  });
  document.querySelector('#no-results').hidden = count > 0;
  (first || document.querySelector('#bestsellers')).scrollIntoView({block: 'center'});
});
