if (module.hot) {
  module.hot.accept();
}

import "normalize";
import "@fontsource/prata";

// Получаем элемент header
const header = document.querySelector("header");
// Вычисляем его высоту
const headerHeight = header.offsetHeight;
// Функция для обработки события прокрутки
function handleScroll() {
  // Получаем текущее значение прокрутки
  const scrollY = window.scrollY || window.pageYOffset;
  // Проверяем, прокручено ли больше чем две высоты header
  if (scrollY > headerHeight) {
    // Добавляем класс
    header.classList.add("colored");
  } else {
    // Убираем класс
    header.classList.remove("colored");
  }
}

// Добавляем обработчик события прокрутки
window.addEventListener("scroll", handleScroll);

document.querySelectorAll(".slow").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const target = this.getAttribute("href"); // Получаем значение атрибута href
    if (!target || !target.startsWith("#")) return false; // Проверяем, что это якорная ссылка

    const targetElement = document.querySelector(target); // Находим целевой элемент
    if (!targetElement) return false; // Если элемент не найден, завершаем выполнение

    const targetPosition = targetElement.offsetTop; // Получаем позицию целевого элемента

    // Плавная прокрутка к целевой позиции
    window.scrollTo({
      top: targetPosition - headerHeight,
      behavior: "smooth",
    });

    return false; // Предотвращаем дальнейшие действия
  });
});

// Выбор всех элементов input и textarea
const inputsAndTextareas = document.querySelectorAll("input, textarea");

// Добавление обработчиков событий для фокуса и потери фокуса
inputsAndTextareas.forEach((element) => {
  if (element.getAttribute("type") != "tel") {
    element.addEventListener("focus", () => {
      // Сохранение атрибута placeholder в data-атрибут
      element.dataset.placeholder = element.getAttribute("placeholder");
      // Удаление атрибута placeholder
      element.setAttribute("placeholder", "");
    });

    element.addEventListener("blur", () => {
      // Восстановление атрибута placeholder из data-атрибута
      element.setAttribute("placeholder", element.dataset.placeholder);
    });
  }
});

document.getElementById('burgerMenu').addEventListener('click', function() {
  var nav = document.getElementById('nav');
  nav.classList.toggle('active');
});