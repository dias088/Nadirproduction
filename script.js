document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('hero-text').classList.add('show');

    const courseBoxes = document.querySelectorAll('.course-box');
    const courseTitle = document.querySelector('.course-title');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        courseBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            }
        });

        const titleTop = courseTitle.getBoundingClientRect().top;
        if (titleTop < triggerBottom) {
            courseTitle.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

function toggleLanguage() {
    const langBtn = document.getElementById('lang-btn');
    const isRussian = langBtn.innerText === "Қазақша";

    const translations = {
        "portfolio-link": { ru: "Портфолио", kz: "Портфолио" },
        "contact-link": { ru: "Контакты", kz: "Байланыс" },
        "hero-text": { 
            ru: "Обучение профессиональной фото и видеосъемке.<br>Высококачественный монтаж и обработка фото.", 
            kz: "Кәсіби фото және видео түсіру курсы.<br>Жоғары сапалы монтаж және фото өңдеу." 
        },
        "video-title": { ru: "🎬 Видео съемка на заказ", kz: "🎬 Тапсырыс бойынша бейне түсіру" },
        "video-text": { 
            ru: "Если вам нужно видео любого направления, переходите в WhatsApp.<br>Варианты съемки:<br>• экспертный🎥<br>• таргетный⚡<br>• мерекелік кештер🎉<br>• креативный контент📱<br>• и многое другое.", 
            kz: "Егер сізге кез-келген бағытта видео қажет болса, WhatsApp-қа өтіңіз.<br>Түсірілім бағыттары:<br>• эксперттік🎥<br>• таргетинг⚡<br>• мерекелік кештер🎉<br>• креативті контент📱<br>• және басқа да видеолар." 
        },
        "course-title": { ru: "МОБИЛОГРАФИЯ КУРС", kz: "МОБИЛОГРАФИЯ КУРСЫ" },
        "day1-title": { ru: "📱 1 день: Основы мобильной съемки", kz: "📱 1-күн: Мобилография негіздері" },
        "day1-text": { ru: "Настройки камеры, работа с CapCut, экспозиция, планы съемки.", kz: "Камера баптаулары, CapCut қолдану, экспозиция, түсірілім жоспарлары." },
        "day2-title": { ru: "📢 2 день: Маркетинг", kz: "📢 2-күн: Маркетинг" },
        "day2-text": { ru: "Поиск клиентов, ведение Instagram, монтажные приложения.", kz: "Клиенттерді табу, Instagram жүргізу, монтаж бағдарламалары." },
        "day3-title": { ru: "🎥 3 день: Практика", kz: "🎥 3-күн: Практика" },
        "day3-text": { ru: "Съемка в магазине, создание эстетических видео.", kz: "Дүкенде түсірілім жасау, эстетикалық видеолар әзірлеу." },
        "day4-title": { ru: "✂️ 4 день: Монтаж", kz: "✂️ 4-күн: Монтаж" },
        "day4-text": { ru: "Эстетический и динамический монтаж, рекламные видео.", kz: "Эстетикалық және динамикалық монтаж, жарнамалық видеолар." },
        "contact-text": { ru: "По поводу съёмки/проекта пишите в Whatsapp⤵", kz: "Түсірілім/жоба бойынша WhatsApp-қа жазыңыз⤵" }
    };

    for (let id in translations) {
        let element = document.getElementById(id);
        if (element) {
            if (id === "hero-text" || id === "video-text") {
                element.innerHTML = isRussian ? translations[id].kz : translations[id].ru;
            } else {
                element.innerText = isRussian ? translations[id].kz : translations[id].ru;
            }
            
        }
    }

    langBtn.innerText = isRussian ? "Русский" : "Қазақша";
}
