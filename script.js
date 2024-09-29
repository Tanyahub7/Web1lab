// Використовуємо метод getElementById для доступу до кнопки "Спеціальні пропозиції"
const specialsButton = document.getElementById('specialsButton');
// Використовуємо querySelector для доступу до списку спеціальних пропозицій
const specialsList = document.querySelector('#specialsList');

// Додаємо Event Listener для кнопки "Спеціальні пропозиції"
specialsButton.addEventListener('click', function() {
    // Перемикаємо видимість списку спеціальних пропозицій
    specialsList.classList.toggle('hidden');
    // Змінюємо текст кнопки залежно від стану списку
    if (specialsList.classList.contains('hidden')) {
        specialsButton.textContent = 'Дізнатись про спеціальні пропозиції';
    } else {
        specialsButton.textContent = 'Сховати спеціальні пропозиції';
    }
});

// Використовуємо getElementsByTagName для доступу до всіх елементів <li>
const specialsItems = document.getElementsByTagName('li');

// Додаємо обробник подій для кожного елементу списку спеціальних пропозицій
for (let i = 0; i < specialsItems.length; i++) {
    specialsItems[i].addEventListener('mouseover', function() {
        specialsItems[i].style.backgroundColor = '#f0e68c';
    });
    specialsItems[i].addEventListener('mouseout', function() {
        specialsItems[i].style.backgroundColor = '';
    });
}

// Додаємо новий Event Listener для кнопки "Змінити фон"
const themeButton = document.getElementById('themeButton');

// Масив кольорів для зміни фону
const colors = ['#f9f9f9', '#e0f7fa', '#fbe9e7', '#f1f8e9', '#ffebee'];
let currentColorIndex = 0;

themeButton.addEventListener('click', function() {
    // Змінюємо фон сторінки по черзі з масиву кольорів
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Зациклюємо індекс
});

// Використовуємо getElementsByClassName для доступу до контактного розділу
const contactInfo = document.getElementsByClassName('contact');

// Додаємо обробник подій keydown для всього документа
document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        alert('Контактна інформація: вул. Кавова, 12, м. Львів');
    }
});
