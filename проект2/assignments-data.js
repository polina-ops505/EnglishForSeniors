// assignments-data.js
const assignmentsData = {
    beginner: {
        title: "Курс для начинающих",
        lessons: [
            {
                id: 1,
                title: "Приветствия и знакомство",
                description: "Учимся здороваться, представляться и прощаться",
                tasks: [
                    {
                        id: 1,
                        title: "Повторите фразы приветствия",
                        type: "audio",
                        description: "Прослушайте и повторите базовые приветствия на английском",
                        icon: "fas fa-microphone",
                        difficulty: "Легко",
                        audioText: "Hello! Hi! Good morning! Good afternoon! Good evening! How are you?",
                        question: "Как сказать 'Доброе утро' по-английски?",
                        hint: "Обратите внимание на произношение звука 'g' в слове 'good'",
                        // Удаляем audioFile, используем TTS
                        speakText: function() {
                            return speakEnglish(this.audioText);
                        }
                    },
                    {
                        id: 2,
                        title: "Напишите свое имя по-английски",
                        type: "text",
                        description: "Попрактикуйтесь в написании имен на английском языке",
                        icon: "fas fa-keyboard",
                        difficulty: "Легко",
                        instruction: "Напишите свое полное имя, используя английские буквы",
                        example: "Иван → Ivan\nМария → Maria\nАлександр → Alexander",
                        placeholder: "Введите ваше имя по-английски...",
                        rows: 3,
                        speakText: function() {
                            return speakEnglish("Write your name using English letters");
                        }
                    },
                    {
                        id: 3,
                        title: "Прослушайте диалог",
                        type: "audio",
                        description: "Прослушайте диалог знакомства и ответьте на вопросы",
                        icon: "fas fa-headphones",
                        difficulty: "Средне",
                        audioText: "Hello! My name is John. What's your name? Hi John! I'm Anna. Nice to meet you! Nice to meet you too, Anna!",
                        dialogText: [
                            { speaker: "John", text: "Hello! My name is John. What's your name?" },
                            { speaker: "Anna", text: "Hi John! I'm Anna. Nice to meet you!" },
                            { speaker: "John", text: "Nice to meet you too, Anna!" }
                        ],
                        question: "Как зовут девушку в диалоге?",
                        translation: "- Привет! Меня зовут Джон. Как тебя зовут? - Привет, Джон! Я Анна. Приятно познакомиться! - Мне тоже приятно, Анна!",
                        hint: "Обратите внимание на вопросительную форму What's your name?",
                        speakText: function() {
                            // Произносим диалог по частям
                            this.dialogText.forEach((line, index) => {
                                setTimeout(() => {
                                    speakEnglish(line.text);
                                }, index * 2500);
                            });
                        }
                    },
                    {
                        id: 4,
                        title: "Составьте диалог 'Знакомство'",
                        type: "text",
                        description: "Составьте простой диалог для знакомства с новым человеком",
                        icon: "fas fa-comments",
                        difficulty: "Средне",
                        instruction: "Напишите диалог из 4-6 реплик, где два человека знакомятся",
                        example: "A: Hello! What's your name?\nB: Hi! I'm Maria. And you?\nA: I'm John. Nice to meet you!\nB: Nice to meet you too!",
                        placeholder: "Начните свой диалог здесь...",
                        rows: 6,
                        speakText: function() {
                            return speakEnglish("Create a simple introduction dialogue");
                        }
                    },
                    {
                        id: 5,
                        title: "Игра 'Найди пару'",
                        type: "matching",
                        description: "Сопоставьте русские приветствия с английскими переводами",
                        icon: "fas fa-gamepad",
                        difficulty: "Легко",
                        instruction: "Перетащите английские фразы к соответствующим русским переводам",
                        pairs: [
                            { russian: "Привет!", english: "Hello!", speak: function() { speakEnglish("Hello!"); } },
                            { russian: "Доброе утро!", english: "Good morning!", speak: function() { speakEnglish("Good morning!"); } },
                            { russian: "Как дела?", english: "How are you?", speak: function() { speakEnglish("How are you?"); } },
                            { russian: "До свидания!", english: "Goodbye!", speak: function() { speakEnglish("Goodbye!"); } },
                            { russian: "Приятно познакомиться!", english: "Nice to meet you!", speak: function() { speakEnglish("Nice to meet you!"); } }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Числа 1-20",
                description: "Учимся считать и использовать числа в речи",
                tasks: [
                    {
                        id: 1,
                        title: "Запишите числа от 1 до 10",
                        type: "text",
                        description: "Напишите английские названия чисел от одного до десяти",
                        icon: "fas fa-sort-numeric-up",
                        difficulty: "Легко",
                        instruction: "Напишите числа от 1 до 10 на английском через запятую",
                        example: "1 - one, 2 - two, 3 - three...",
                        placeholder: "one, two, three...",
                        rows: 3,
                        speakText: function() {
                            const numbers = "one, two, three, four, five, six, seven, eight, nine, ten";
                            return speakEnglish(numbers);
                        }
                    },
                    {
                        id: 2,
                        title: "Назовите номер телефона",
                        type: "choice",
                        description: "Выберите правильное произношение телефонного номера",
                        icon: "fas fa-phone",
                        difficulty: "Средне",
                        question: "Как правильно произнести номер 555-1234?",
                        options: [
                            { text: "five five five, one two three four", correct: false },
                            { text: "double five five, one two three four", correct: false },
                            { text: "five five five, twelve thirty-four", correct: false },
                            { text: "five five five, one two three four", correct: true }
                        ],
                        feedback: "В английском номера произносятся по одной цифре",
                        speakText: function() {
                            return speakEnglish("five five five, one two three four");
                        }
                    },
                    {
                        id: 3,
                        title: "Сосчитайте предметы",
                        type: "choice",
                        description: "Посчитайте предметы на картинке и выберите правильный ответ",
                        icon: "fas fa-shopping-cart",
                        difficulty: "Легко",
                        question: "Сколько яблок на картинке?",
                        options: [
                            { text: "ten apples", correct: false },
                            { text: "twelve apples", correct: true },
                            { text: "fifteen apples", correct: false },
                            { text: "twenty apples", correct: false }
                        ],
                        speakText: function() {
                            return speakEnglish("twelve apples");
                        }
                    },
                    {
                        id: 4,
                        title: "Напишите свой возраст",
                        type: "text",
                        description: "Напишите предложение о своем возрасте на английском",
                        icon: "fas fa-birthday-cake",
                        difficulty: "Легко",
                        instruction: "Напишите: 'Мне X лет' на английском",
                        example: "Мне 25 лет → I am twenty-five years old",
                        placeholder: "I am ... years old",
                        rows: 2,
                        speakText: function() {
                            return speakEnglish("I am twenty-five years old");
                        }
                    },
                    {
                        id: 5,
                        title: "Назовите время",
                        type: "choice",
                        description: "Выберите правильное произношение времени",
                        icon: "fas fa-clock",
                        difficulty: "Средне",
                        question: "Как сказать '3:15'?",
                        options: [
                            { text: "three fifteen", correct: true, speak: function() { speakEnglish("three fifteen"); } },
                            { text: "fifteen past three", correct: true, speak: function() { speakEnglish("fifteen past three"); } },
                            { text: "quarter past three", correct: true, speak: function() { speakEnglish("quarter past three"); } },
                            { text: "three and fifteen", correct: false }
                        ],
                        feedback: "В английском есть несколько способов сказать время"
                    }
                ]
            },
            {
                id: 3,
                title: "Семья и профессии",
                description: "Учим слова о семье и распространенные профессии",
                tasks: [
                    {
                        id: 1,
                        title: "Составьте генеалогическое древо",
                        type: "text",
                        description: "Опишите свою семью, используя родственные термины",
                        icon: "fas fa-users",
                        difficulty: "Средне",
                        instruction: "Напишите о членах вашей семьи (минимум 5 человек)",
                        example: "My father's name is... He is a doctor. My mother...",
                        placeholder: "My family consists of...",
                        rows: 6,
                        speakText: function() {
                            return speakEnglish("Describe your family using family terms");
                        }
                    },
                    {
                        id: 2,
                        title: "Назовите 5 профессий",
                        type: "text",
                        description: "Напишите 5 профессий на английском с переводом",
                        icon: "fas fa-briefcase",
                        difficulty: "Легко",
                        instruction: "Напишите профессии и их перевод на русский",
                        placeholder: "doctor - врач\nteacher - учитель\n...",
                        rows: 5,
                        speakText: function() {
                            return speakEnglish("doctor, teacher, engineer, driver, cook");
                        }
                    },
                    {
                        id: 3,
                        title: "Опишите профессию родителей",
                        type: "text",
                        description: "Напишите о профессиях ваших родителей",
                        icon: "fas fa-user-tie",
                        difficulty: "Средне",
                        instruction: "Опишите, кем работают ваши родители",
                        hint: "Используйте фразы: works as, is a, his/her job is",
                        rows: 4,
                        speakText: function() {
                            return speakEnglish("My father is a doctor. My mother is a teacher.");
                        }
                    },
                    {
                        id: 4,
                        title: "Сопоставьте профессии",
                        type: "matching",
                        description: "Сопоставьте английские названия профессий с русскими",
                        icon: "fas fa-link",
                        difficulty: "Легко",
                        pairs: [
                            { english: "Doctor", russian: "Врач", speak: function() { speakEnglish("Doctor"); } },
                            { english: "Teacher", russian: "Учитель", speak: function() { speakEnglish("Teacher"); } },
                            { english: "Engineer", russian: "Инженер", speak: function() { speakEnglish("Engineer"); } },
                            { english: "Driver", russian: "Водитель", speak: function() { speakEnglish("Driver"); } },
                            { english: "Cook", russian: "Повар", speak: function() { speakEnglish("Cook"); } }
                        ]
                    },
                    {
                        id: 5,
                        title: "Рассказ о семье",
                        type: "text",
                        description: "Напишите короткий рассказ о своей семье",
                        icon: "fas fa-heart",
                        difficulty: "Сложно",
                        instruction: "Напишите рассказ о вашей семье (8-10 предложений)",
                        hint: "Опишите: кто члены семьи, их имена, возраст, профессии, хобби",
                        rows: 8,
                        speakText: function() {
                            return speakEnglish("Write a short story about your family");
                        }
                    }
                ]
            }
        ]
    }
};

// Утилитные функции для работы с аудио
const AudioUtils = {
    // Проверка поддержки Web Speech API
    isSpeechSupported: function() {
        return 'speechSynthesis' in window;
    },
    
    // Получение доступных голосов
    getVoices: function() {
        return new Promise((resolve) => {
            const voices = speechSynthesis.getVoices();
            if (voices.length) {
                resolve(voices);
            } else {
                speechSynthesis.onvoiceschanged = () => {
                    resolve(speechSynthesis.getVoices());
                };
            }
        });
    },
    
    // Получение английского голоса
    getEnglishVoice: async function() {
        const voices = await this.getVoices();
        return voices.find(voice => 
            voice.lang.startsWith('en') || 
            voice.lang.includes('en-') ||
            voice.name.toLowerCase().includes('english')
        ) || voices[0];
    }
};

// Основная функция для произношения английского текста
async function speakEnglish(text, options = {}) {
    if (!AudioUtils.isSpeechSupported()) {
        console.warn("Web Speech API не поддерживается в этом браузере");
        return false;
    }
    
    // Останавливаем текущее произношение
    speechSynthesis.cancel();
    
    // Создаем новое высказывание
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Настройки по умолчанию
    utterance.lang = 'en-US';
    utterance.rate = options.rate || 0.8; // Скорость (0.5-2)
    utterance.pitch = options.pitch || 1; // Высота (0-2)
    utterance.volume = options.volume || 1; // Громкость (0-1)
    
    // Получаем английский голос
    try {
        const voice = await AudioUtils.getEnglishVoice();
        if (voice) {
            utterance.voice = voice;
        }
    } catch (error) {
        console.log("Используется голос по умолчанию");
    }
    
    // Обработчики событий
    utterance.onstart = () => {
        console.log("Начало произношения:", text);
        if (options.onStart) options.onStart();
    };
    
    utterance.onend = () => {
        console.log("Завершение произношения");
        if (options.onEnd) options.onEnd();
    };
    
    utterance.onerror = (event) => {
        console.error("Ошибка произношения:", event);
        if (options.onError) options.onError(event);
    };
    
    // Запускаем произношение
    speechSynthesis.speak(utterance);
    return true;
}

// Функция для произношения с паузами (для диалогов)
function speakWithPauses(phrases, pauseDuration = 1000) {
    phrases.forEach((phrase, index) => {
        setTimeout(() => {
            speakEnglish(phrase);
        }, index * (pauseDuration + 2000)); // Пауза между фразами
    });
}

// Функция для создания аудио плеера в интерфейсе
function createAudioPlayer(task, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const playerHTML = `
        <div class="audio-player" data-task-id="${task.id}">
            <button class="play-btn">
                <i class="fas fa-play"></i> Произнести
            </button>
            <button class="pause-btn" style="display: none;">
                <i class="fas fa-pause"></i> Пауза
            </button>
            <button class="stop-btn">
                <i class="fas fa-stop"></i> Стоп
            </button>
            <div class="speed-controls">
                <button class="speed-btn" data-speed="0.5">0.5x</button>
                <button class="speed-btn active" data-speed="0.8">0.8x</button>
                <button class="speed-btn" data-speed="1">1x</button>
                <button class="speed-btn" data-speed="1.2">1.2x</button>
            </div>
        </div>
    `;
    
    container.innerHTML += playerHTML;
    
    // Добавляем обработчики событий
    const playBtn = container.querySelector('.play-btn');
    const pauseBtn = container.querySelector('.pause-btn');
    const stopBtn = container.querySelector('.stop-btn');
    const speedBtns = container.querySelectorAll('.speed-btn');
    
    let currentSpeed = 0.8;
    
    playBtn.addEventListener('click', () => {
        if (task.speakText) {
            task.speakText();
        } else if (task.audioText) {
            speakEnglish(task.audioText, { rate: currentSpeed });
        }
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });
    
    pauseBtn.addEventListener('click', () => {
        speechSynthesis.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
    
    stopBtn.addEventListener('click', () => {
        speechSynthesis.cancel();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
    
    speedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            speedBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSpeed = parseFloat(btn.dataset.speed);
        });
    });
}

// Функция для инициализации всех аудио элементов на странице
function initializeAudioOnPage() {
    // Добавляем кнопки прослушивания для всех заданий
    document.querySelectorAll('.task[data-audio-text]').forEach(taskElement => {
        const audioText = taskElement.dataset.audioText;
        const button = document.createElement('button');
        button.className = 'speak-button';
        button.innerHTML = '<i class="fas fa-volume-up"></i>';
        button.onclick = () => speakEnglish(audioText);
        taskElement.appendChild(button);
    });
    
    // Добавляем обработчики для заданий типа matching
    document.querySelectorAll('.matching-pair').forEach(pair => {
        pair.addEventListener('click', () => {
            const englishText = pair.dataset.english;
            if (englishText) {
                speakEnglish(englishText);
            }
        });
    });
}

// Добавляем функции в глобальную область видимости
window.speakEnglish = speakEnglish;
window.initializeAudioOnPage = initializeAudioOnPage;
window.createAudioPlayer = createAudioPlayer;

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        assignmentsData,
        speakEnglish,
        AudioUtils,
        createAudioPlayer,
        initializeAudioOnPage
    };
}