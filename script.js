window.onload = function() {

    document.getElementById('helloBtn').onclick = function() {
        const message = document.getElementById('message');
        message.textContent = 'Привет! Всё работает!';
        message.classList.remove('fade-in');
        void message.offsetWidth;
        message.classList.add('fade-in');
    };

    document.getElementById('changeImgBtn').onclick = function() {
        document.getElementById('myImage').src = 'https://picsum.photos/300/200';
    };

    document.getElementById('colorBtn').onclick = function() {
        const colors = ['#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;

        document.getElementById('colorMessage').textContent =
            'Цвет изменён на ' + color;
    };

};