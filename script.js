document.getElementById('helloBtn').onclick = function() {
    document.getElementById('message').textContent = 'Привет! Всё работает!';
};
// Первая кнопка
document.getElementById('helloBtn').onclick = function() {
    document.getElementById('message').textContent = 'Привет! Всё работает!';
};

// Вторая кнопка
document.getElementById('changeImgBtn').onclick = function() {
    document.getElementById('myImage').src = 'https://picsum.photos/300/200'; //https://agro-business.com.ua/images/756188213182894_1.jpg
};
// Старая функциональность оставляем
document.getElementById('helloBtn').onclick = function() {
    document.getElementById('message').textContent = 'Привет! Всё работает!';
};

document.getElementById('changeImgBtn').onclick = function() {
    document.getElementById('myImage').src = 'https://picsum.photos/300/200';
};

// Новая кнопка: смена цвета и текста
document.getElementById('colorBtn').onclick = function() {
    // Массив цветов
    const colors = ['#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC', '#FFCCFF', '#CCFFFF'];
    // Случайный цвет
    const color = colors[Math.floor(Math.random() * colors.length)];
    // Меняем фон
    document.body.style.backgroundColor = color;

    // Меняем текст сообщения
    document.getElementById('colorMessage').textContent = `Цвет фона изменён на ${color}`;
};