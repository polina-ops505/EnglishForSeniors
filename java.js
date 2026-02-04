// Симуляция базы данных пользователей
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Регистрация
function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    
    // Проверка существующего пользователя
    if (users.find(u => u.email === email)) {
        alert('Пользователь с таким email уже существует!');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        username,
        email,
        password, // В реальном приложении нужно хэшировать!
        age,
        level: null,
        progress: {},
        registered: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    alert('Регистрация успешна! Сейчас пройдете тест на определение уровня.');
    window.location.href = 'test.html';
}

// Вход
function loginUser(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Вход выполнен успешно!');
        window.location.href = 'profile.html';
    } else {
        alert('Неверный email или пароль!');
    }
}

// Выход
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Проверка авторизации
function checkAuth() {
    if (!currentUser && window.location.pathname.includes('profile')) {
        window.location.href = 'login.html';
    }
}

// Тест на уровень
const testQuestions = [
    {
        question: "Переведите: 'Я читаю книгу'",
        options: ["I read a book", "I is reading book", "I reading book", "I am reading a book"],
        correct: 3,
        level: "beginner"
    },
    {
        question: "Выберите правильную форму: 'She ___ to the store yesterday'",
        options: ["go", "went", "gone", "going"],
        correct: 1,
        level: "elementary"
    },
    {
        question: "Заполните пропуск: 'If I ___ you, I would study more'",
        options: ["am", "was", "were", "be"],
        correct: 2,
        level: "intermediate"
    }
    // Добавьте еще 12 вопросов...
];

function submitTest() {
    let score = 0;
    const answers = [];
    
    testQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            answers.push(parseInt(selected.value));
            if (parseInt(selected.value) === q.correct) {
                score++;
            }
        }
    });
    
    // Определение уровня
    let level;
    if (score <= 5) level = "beginner";
    else if (score <= 10) level = "elementary";
    else if (score <= 13) level = "intermediate";
    else level = "advanced";
    
    // Сохранение результата
    if (currentUser) {
        currentUser.level = level;
        currentUser.testScore = score;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Обновляем в массиве пользователей
        const index = users.findIndex(u => u.id === currentUser.id);
        if (index !== -1) {
            users[index] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
    
    alert(`Ваш уровень: ${level.toUpperCase()}! Результат: ${score}/15`);
    window.location.href = 'courses.html';
}

// Словарь из 150 слов (сокращенный пример)
const dictionary = [
    { english: "Hello", russian: "Привет", transcription: "[həˈləʊ]", category: "Приветствия" },
    { english: "Goodbye", russian: "До свидания", transcription: "[ɡʊdˈbaɪ]", category: "Приветствия" },
    { english: "Thank you", russian: "Спасибо", transcription: "[ˈθæŋk juː]", category: "Вежливость" },
    { english: "Please", russian: "Пожалуйста", transcription: "[pliːz]", category: "Вежливость" },
    { english: "Family", russian: "Семья", transcription: "[ˈfæməli]", category: "Семья" },
    // ... добавьте остальные 145 слов
];

function displayDictionary() {
    const container = document.getElementById('dictionary-container');
    if (!container) return;
    
    let html = '<div class="dictionary-grid">';
    
    dictionary.forEach(word => {
        html += `
            <div class="word-card">
                <h3>${word.english}</h3>
                <p><strong>Перевод:</strong> ${word.russian}</p>
                <p><strong>Произношение:</strong> ${word.transcription}</p>
                <p><strong>Категория:</strong> ${word.category}</p>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    displayDictionary();
    
    // Назначение обработчиков событий
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const testForm = document.getElementById('test-form');
    
    if (registerForm) registerForm.addEventListener('submit', registerUser);
    if (loginForm) loginForm.addEventListener('submit', loginUser);
    if (testForm) testForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitTest();
    });
    
    // Отображение информации пользователя
    if (currentUser && document.getElementById('user-info')) {
        document.getElementById('user-name').textContent = currentUser.username;
        document.getElementById('user-level').textContent = currentUser.level || 'Не определен';
        document.getElementById('user-age').textContent = currentUser.age;
    }
// Проверка доступа к тесту
function checkTestAccess() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        alert('Пожалуйста, войдите или зарегистрируйтесь для прохождения теста');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Получение рекомендаций по курсу на основе уровня
function getCourseByLevel(level) {
    const courses = {
        'beginner': 'Начальный курс',
        'elementary': 'Курс Elementary',
        'intermediate': 'Курс Intermediate',
        'upper-intermediate': 'Курс Upper-Intermediate',
        'advanced': 'Продвинутый курс'
    };
    return courses[level] || 'Начальный курс';
}

// Сохранение результатов теста в профиль
function saveTestResults(level, score) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        user.level = level;
        user.testScore = score;
        user.lastTestDate = new Date().toISOString();
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Обновляем в массиве пользователей
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index] = user;
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        return true;
    }
    return false;
}
// Функции для навигационной шторки
function initSidebar() {
    // Создаем элементы шторки
    const sidebarHTML = `
        <div class="sidebar-overlay" onclick="closeSidebar()"></div>
        
        <button class="sidebar-toggle" onclick="toggleSidebar()">
            <i class="fas fa-bars"></i>
        </button>
        
        <div class="nav-sidebar" id="navSidebar">
            <div class="sidebar-header">
                <h3><i class="fas fa-book-open"></i> EnglishForSeniors</h3>
                <p style="margin-top: 5px; font-size: 0.9rem; color: #ffd700;">
                    "Московское Долголетие"
                </p>
            </div>
            
            <div class="sidebar-nav">
                <a href="index.html" id="nav-home">
                    <i class="fas fa-home"></i> Главная
                </a>
                <a href="courses.html" id="nav-courses">
                    <i class="fas fa-graduation-cap"></i> Курсы
                </a>
                <a href="dictionary.html" id="nav-dictionary">
                    <i class="fas fa-book"></i> Словарь
                </a>
                <a href="test.html" id="nav-test">
                    <i class="fas fa-clipboard-check"></i> Тест на уровень
                </a>
                <a href="profile.html" id="nav-profile">
                    <i class="fas fa-user-circle"></i> Личный кабинет
                </a>
                <a href="login.html" id="nav-login">
                    <i class="fas fa-sign-in-alt"></i> Войти
                </a>
                <a href="register.html" id="nav-register">
                    <i class="fas fa-user-plus"></i> Регистрация
                </a>
                
                <div style="padding: 20px 25px; margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <h4 style="color: #ffd700; margin-bottom: 10px;">Быстрые ссылки</h4>
                    <a href="course-beginner.html" style="font-size: 1rem; padding: 10px 15px;">
                        <i class="fas fa-play-circle"></i> Начать урок
                    </a>
                    <a href="dictionary.html#popular" style="font-size: 1rem; padding: 10px 15px;">
                        <i class="fas fa-star"></i> Популярные слова
                    </a>
                </div>
            </div>
            
            <div class="sidebar-footer">
                <p>Проект "Московское Долголетие" <i class="fas fa-heart"></i> 2024</p>
                <p style="font-size: 0.8rem; margin-top: 5px;">
                    "Век живи - век учись!"
                </p>
            </div>
        </div>
        
        <button class="quick-test-btn" onclick="goToTest()">
            <i class="fas fa-bolt"></i> Тест знаний
        </button>
    `;
    
    // Вставляем шторку в body
    document.body.insertAdjacentHTML('beforeend', sidebarHTML);
    
    // Определяем текущую страницу и выделяем активный пункт
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = {
        'index.html': 'nav-home',
        'courses.html': 'nav-courses',
        'dictionary.html': 'nav-dictionary',
        'test.html': 'nav-test',
        'profile.html': 'nav-profile',
        'login.html': 'nav-login',
        'register.html': 'nav-register'
    };
    
    const activeNavId = navItems[currentPage];
    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }
    
    // Показываем/скрываем кнопку теста в зависимости от страницы
    const hideTestBtnOn = ['test.html'];
    if (hideTestBtnOn.includes(currentPage)) {
        document.querySelector('.quick-test-btn').style.display = 'none';
    }
    
    // Проверяем авторизацию и обновляем меню
    updateAuthMenu();
}

// Переключение шторки
function toggleSidebar() {
    const sidebar = document.getElementById('navSidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Блокируем прокрутку body при открытой шторке
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Закрытие шторки
function closeSidebar() {
    const sidebar = document.getElementById('navSidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Обновление меню в зависимости от авторизации
function updateAuthMenu() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const loginBtn = document.getElementById('nav-login');
    const registerBtn = document.getElementById('nav-register');
    const profileBtn = document.getElementById('nav-profile');
    
    if (user) {
        // Пользователь авторизован
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (profileBtn) {
            profileBtn.innerHTML = '<i class="fas fa-user-circle"></i> ' + user.username;
        }
    } else {
        // Пользователь не авторизован
        if (profileBtn) profileBtn.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'block';
        if (registerBtn) registerBtn.style.display = 'block';
    }
}

// Переход к тесту
function goToTest() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        window.location.href = 'test.html';
    } else {
        if (confirm('Для прохождения теста нужно войти в систему. Перейти на страницу входа?')) {
            window.location.href = 'login.html';
        }
    }
}

// Инициализация шторки при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    
    // Закрытие шторки при нажатии ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
    
    // Закрытие шторки при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
});
});
// В разделе с другими функциями (можно добавить после функции playAudio)
function speakText(text, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.8; // Медленнее для удобства восприятия
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Останавливаем предыдущее воспроизведение
        speechSynthesis.cancel();
        
        // Воспроизводим
        speechSynthesis.speak(utterance);
        
        return true;
    } else {
        alert('Ваш браузер не поддерживает синтез речи. Попробуйте использовать Chrome или Edge.');
        return false;
    }
}

// Функция для чтения всего задания
function readAssignmentAloud() {
    const taskInfo = getCurrentTaskInfo();
    if (!taskInfo) return;
    
    const instruction = taskInfo.instruction || '';
    const description = taskInfo.description || '';
    const title = taskInfo.title || '';
    
    // Составляем текст для озвучивания
    let textToRead = `${title}. ${description}. ${instruction}`;
    
    // Для заданий с аудио добавляем аудиотекст
    if (taskInfo.audioText) {
        textToRead += `. ${taskInfo.audioText}`;
    }
    
    // Для вопросов добавляем вопрос
    if (taskInfo.question) {
        textToRead += `. ${taskInfo.question}`;
    }
    
    // Для заданий с вариантами ответов
    if (taskInfo.options && taskInfo.options.length > 0) {
        textToRead += '. Варианты ответов: ';
        taskInfo.options.forEach((option, index) => {
            textToRead += `Вариант ${index + 1}: ${option.text}. `;
        });
    }
    
    // Для подсказок
    const hintElement = document.querySelector('.hint-box');
    if (hintElement) {
        const hintText = hintElement.textContent.replace('Подсказка:', '').trim();
        textToRead += `. Подсказка: ${hintText}`;
    }
    
    return speakText(textToRead, 'ru-RU'); // Используем русский для инструкций
}

// Функция для получения информации о текущем задании
function getCurrentTaskInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course') || 'beginner';
    const lesson = parseInt(urlParams.get('lesson')) || 1;
    const task = parseInt(urlParams.get('task')) || 1;
    
    return taskData[course]?.[lesson]?.[task];
}

// Функция для чтения текста на английском (для практики произношения)
function readEnglishText(text) {
    return speakText(text, 'en-US');
}

// Функция для остановки воспроизведения
function stopReading() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
}

// Функция для проверки поддержки синтеза речи
function checkSpeechSupport() {
    if ('speechSynthesis' in window) {
        const voices = speechSynthesis.getVoices();
        console.log('Доступные голоса:', voices);
        return voices.length > 0;
    }
    return false;
}

// Обновляем функцию showAssignment, чтобы добавить кнопку озвучивания
// В функции showAssignment, после заголовка задания, добавляем:
function showAssignment(course, lesson, task) {
    const taskInfo = taskData[course]?.[lesson]?.[task];
    
    if (!taskInfo) {
        document.getElementById('assignmentContainer').innerHTML = `
            <div class="header ${course}">
                <h1><i class="fas fa-exclamation-triangle"></i> Задание не найдено</h1>
            </div>
            <div class="assignment-content">
                <p>Извините, это задание еще не готово.</p>
                <a href="course.html?level=${course}" class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> Вернуться к урокам
                </a>
            </div>
        `;
        return;
    }
    
    // Теория урока (упрощенная версия)
    const theoryContent = getTheoryContent(course, lesson);
    
    document.getElementById('assignmentContainer').innerHTML = `
        <div class="header ${course}">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1><i class="${getTaskIcon(taskInfo.type)}"></i> ${taskInfo.title}</h1>
                    <p>Урок ${lesson} • Задание ${task} • ${taskInfo.description}</p>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-secondary" onclick="readAssignmentAloud()" title="Прослушать задание">
                        <i class="fas fa-volume-up"></i> Прослушать
                    </button>
                    <button class="btn btn-secondary" onclick="stopReading()" title="Остановить воспроизведение">
                        <i class="fas fa-stop"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="assignment-content">
            <!-- Теория -->
            ${theoryContent ? `
                <div class="theory-box">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3><i class="fas fa-book"></i> Повторите теорию:</h3>
                        <button class="btn" onclick="speakText('${theoryContent.replace(/'/g, "\\'").replace(/<[^>]*>/g, '')}', 'ru-RU')" 
                                style="background: transparent; padding: 5px 10px; font-size: 14px;">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                    ${theoryContent}
                </div>
            ` : ''}
            
            <!-- Задание -->
            <div class="task-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3><i class="fas fa-tasks"></i> Ваше задание:</h3>
                    <button class="btn" onclick="readAssignmentAloud()" 
                            style="background: transparent; padding: 5px 10px;">
                        <i class="fas fa-volume-up"></i> Прослушать
                    </button>
                </div>
                <p id="instructionText">${taskInfo.instruction}</p>
                
                ${taskInfo.hint ? `
                    <div class="hint-box">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <i class="fas fa-lightbulb"></i> <strong>Подсказка:</strong> ${taskInfo.hint}
                            </div>
                            <button class="btn" onclick="speakText('${taskInfo.hint.replace(/'/g, "\\'")}', 'ru-RU')" 
                                    style="background: transparent; padding: 5px 10px;">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>
                ` : ''}
                
                ${taskInfo.example ? `
                    <div class="hint-box" style="background: #e3f2fd; border-color: #2196F3;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <i class="fas fa-eye"></i> <strong>Пример:</strong> ${taskInfo.example}
                            </div>
                            <button class="btn" onclick="speakText('Пример. ${taskInfo.example.replace(/'/g, "\\'")}', 'ru-RU')" 
                                    style="background: transparent; padding: 5px 10px;">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </div>
                    </div>
                ` : ''}
                
                <!-- Контент задания в зависимости от типа -->
                <div id="taskContent">
                    ${generateTaskContent(taskInfo)}
                </div>
                
                <!-- Кнопка проверки -->
                <button id="checkButton" class="btn btn-primary" onclick="checkAnswer('${course}', ${lesson}, ${task})" style="margin-top: 20px;">
                    <i class="fas fa-check-circle"></i> Проверить ответ
                </button>
                
                <!-- Результат проверки -->
                <div id="resultMessage" class="result-message"></div>
            </div>
            
            <!-- Навигация -->
            <div class="navigation">
                ${task > 1 ? `
                    <button class="btn btn-secondary" onclick="navigateToTask(${lesson}, ${task - 1}, '${course}')">
                        <i class="fas fa-arrow-left"></i> Предыдущее задание
                    </button>
                ` : `
                    <button class="btn btn-secondary" onclick="window.location.href='course.html?level=${course}'">
                        <i class="fas fa-arrow-left"></i> Вернуться к урокам
                    </button>
                `}
                
                ${task < 5 ? `
                    <button id="nextButton" class="btn btn-primary" onclick="navigateToTask(${lesson}, ${task + 1}, '${course}')" style="display: none;">
                        Следующее задание <i class="fas fa-arrow-right"></i>
                    </button>
                ` : `
                    <button id="completeButton" class="btn btn-primary" onclick="completeLesson('${course}', ${lesson})" style="display: none;">
                        Завершить урок <i class="fas fa-check-circle"></i>
                    </button>
                `}
            </div>
        </div>
    `;
    
    // Инициализация задания
    initializeTask(taskInfo);
    
    // Проверяем поддержку синтеза речи
    if (!checkSpeechSupport()) {
        console.warn('Синтез речи не поддерживается или нет доступных голосов');
    }
}

// Добавляем функцию для текстовых полей, чтобы можно было прослушать написанный текст
function addTextToSpeechForTextAreas() {
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textarea => {
        const parent = textarea.parentElement;
        const speakBtn = document.createElement('button');
        speakBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakBtn.className = 'btn';
        speakBtn.style.cssText = 'position: absolute; right: 10px; bottom: 10px; background: transparent; padding: 5px;';
        speakBtn.onclick = () => {
            if (textarea.value.trim()) {
                speakText(textarea.value, 'en-US');
            }
        };
        
        if (parent.style.position !== 'relative') {
            parent.style.position = 'relative';
        }
        parent.appendChild(speakBtn);
    });
}

// Обновляем функцию initializeTask
function initializeTask(taskInfo) {
    // Инициализация для конкретных типов заданий
    if (taskInfo.type === 'matching') {
        initializeMatching();
    }
    
    // Добавляем кнопки для прослушивания текста
    setTimeout(addTextToSpeechForTextAreas, 100);
}

// Обновляем функцию generateTaskContent для текстовых заданий
function generateTaskContent(taskInfo) {
    switch(taskInfo.type) {
        case 'text':
            return `
                <div style="position: relative;">
                    <textarea id="answerInput" class="task-textarea" rows="4" 
                              placeholder="Введите ваш ответ здесь..."></textarea>
                    <button class="btn" onclick="if(document.getElementById('answerInput').value.trim()) speakText(document.getElementById('answerInput').value, 'en-US')" 
                            style="position: absolute; right: 10px; bottom: 10px; background: transparent; padding: 5px;">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div id="answerFeedback" class="answer-feedback"></div>
            `;
    }
}