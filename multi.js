// Данные для карточек
const items = [
    { img: 'items/e1.jpg', title: 'item1', price: '500' },
    { img: 'items/e2.jpg', title: 'item2', price: '500' },
    { img: 'items/e3.jpg', title: 'item3', price: '1250' },
    { img: 'items/m1.jpg', title: 'item4', price: '1250' },
    { img: 'items/m2.jpg', title: 'item5', price: '3000' },
    { img: 'items/l1.jpg', title: 'item6', price: '3500' },
    { img: 'items/l2.jpg', title: 'item7', price: '6200' },
    { img: 'items/s4.jpg', title: 'item8', price: '6200' },
    { img: 'items/s2.jpg', title: 'item9', price: '3500' },
    { img: 'items/l6.jpg', title: 'item10', price: '6200' }
  ];
  
  // Контейнер для карточек
  const container = document.getElementById('card-container');
  
  // Массив для выбранных предметов
  const selectedItems = [];
  
  // Генерация карточек
  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">Цена: ${item.price} souls</p>
      <button type="button" class="btn btn-outline-primary select-btn" data-index="${index}">
        Выбрать
      </button>
    `;
    container.appendChild(card);
  });
  
  // Добавление обработчиков для кнопок "Выбрать"
  container.addEventListener('click', event => {
    if (event.target.classList.contains('select-btn')) {
      const index = event.target.getAttribute('data-index');
      const item = items[index];
  
      // Добавление или удаление предмета из выбранных
      const itemIndex = selectedItems.findIndex(selected => selected.title === item.title);
      if (itemIndex === -1) {
        selectedItems.push(item);
        event.target.textContent = 'Выбрано';
        event.target.classList.replace('btn-outline-primary', 'btn-success');
      } else {
        selectedItems.splice(itemIndex, 1);
        event.target.textContent = 'Выбрать';
        event.target.classList.replace('btn-success', 'btn-outline-primary');
      }
    }
  });
  
  // Обработчик для формы поиска
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', event => {
    const queryInput = document.getElementById('query-input');
    const query = selectedItems.map(item => item.title).join(', ');
    queryInput.value = query;
  
    if (!query) {
      event.preventDefault(); // Предотвращаем отправку, если ничего не выбрано
      alert('Пожалуйста, выберите хотя бы один предмет!');
    }
  });