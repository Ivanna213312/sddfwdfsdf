

// Текст, який буде відображатися в заголовку
const text = 'Вітаю на сайті таргетолога';

// Функція для анімації печаті тексту
function typeWriter() {
    let i = 0;
    const speed = 50; // Швидкість печаті

    // Вивід тексту посимвольно
    function type() {
        if (i < text.length) {
            document.getElementById("main-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Запускаємо анімацію печаті при завантаженні сторінки
window.onload = typeWriter;

// Функція для надсилання повідомлення на Telegram
function sendTelegramMessage(message) {
    const botToken = '6829434566:AAEcMJO_oK0oj-1-r6TqdruijyR5hc6qlSE'; // Замініть на свій токен бота
    const chatId = '@Maungor'; // Замініть на свій chat_id

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Message sent to Telegram:', data))
    .catch(error => console.error('Error sending message to Telegram:', error));
}

// Функція, яка викликається при натисканні на кнопку "Надіслати"
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    
    if (message.trim() === '') {
        alert('Будь ласка, введіть повідомлення.');
        return;
    }

    sendTelegramMessage(message);
    messageInput.value = ''; // Очищаємо поле вводу
}

