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
                        audioFile: "/path/to/audio/file.mp3"
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
                        rows: 3
                    },
                    {
                        id: 3,
                        title: "Прослушайте диалог",
                        type: "audio",
                        description: "Прослушайте диалог знакомства и ответьте на вопросы",
                        icon: "fas fa-headphones",
                        difficulty: "Средне",
                        audioText: "- Hello! My name is John. What's your name? - Hi John! I'm Anna. Nice to meet you! - Nice to meet you too, Anna!",
                        question: "Как зовут девушку в диалоге?",
                        translation: "- Привет! Меня зовут Джон. Как тебя зовут? - Привет, Джон! Я Анна. Приятно познакомиться! - Мне тоже приятно, Анна!",
                        hint: "Обратите внимание на вопросительную форму What's your name?"

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
                        rows: 6
                    },
                    {
                        id: 5,
                        title: "Игра 'Найди пару'",
                        type: "matching",
                        description: "Сопоставьте русские приветствия с английскими переводами",
                        icon: "fas fa-gamepad",
                        difficulty: "Легко",
                        instruction: "Перетащите английские фразы к соответствующим русским переводам",
                        leftColumn: ["Привет!", "Доброе утро!", "Как дела?", "До свидания!", "Приятно познакомиться!"],
                        rightColumn: ["Hello!", "Good morning!", "How are you?", "Goodbye!", "Nice to meet you!"]
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
                        rows: 3
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
                        feedback: "В английском номера произносятся по одной цифре"
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
                        ]
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
                        rows: 2
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
                            { text: "three fifteen", correct: true },
                            { text: "fifteen past three", correct: true },
                            { text: "quarter past three", correct: true },
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
                        rows: 6
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
                        rows: 5
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
                        rows: 4
                    },
                    {
                        id: 4,
                        title: "Сопоставьте профессии",
                        type: "matching",
                        description: "Сопоставьте английские названия профессий с русскими",
                        icon: "fas fa-link",
                        difficulty: "Легко",
                        leftColumn: ["Doctor", "Teacher", "Engineer", "Driver", "Cook"],
                        rightColumn: ["Врач", "Учитель", "Инженер", "Водитель", "Повар"]
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
                        rows: 8
                    }
                ]
            },
            {
                id: 4,
                title: "Еда и напитки",
                description: "Названия продуктов, напитков и простые заказы",
                tasks: [
                    {
                        id: 1,
                        title: "Составьте список покупок",
                        type: "text",
                        description: "Напишите список продуктов на английском",
                        icon: "fas fa-utensils",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Назовите любимые напитки",
                        type: "text",
                        description: "Напишите о ваших любимых напитках",
                        icon: "fas fa-coffee",
                        difficulty: "Легко"
                    },
                    {
                        id: 3,
                        title: "Классифицируйте продукты",
                        type: "choice",
                        description: "Разделите продукты на категории",
                        icon: "fas fa-apple-alt",
                        difficulty: "Средне"
                    },
                    {
                        id: 4,
                        title: "Сделайте заказ в кафе",
                        type: "text",
                        description: "Составьте диалог для заказа в кафе",
                        icon: "fas fa-receipt",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Рецепт любимого блюда",
                        type: "text",
                        description: "Опишите рецепт простого блюда",
                        icon: "fas fa-utensil-spoon",
                        difficulty: "Сложно"
                    }
                ]
            },
            {
                id: 5,
                title: "В городе",
                description: "Места в городе и простые указания",
                tasks: [
                    {
                        id: 1,
                        title: "Отметьте места на карте",
                        type: "text",
                        description: "Опишите расположение мест в вашем городе",
                        icon: "fas fa-map-marker-alt",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Дайте указания как пройти",
                        type: "text",
                        description: "Объясните как дойти от точки А до точки Б",
                        icon: "fas fa-directions",
                        difficulty: "Средне"
                    },
                    {
                        id: 3,
                        title: "Составьте маршрут по городу",
                        type: "text",
                        description: "Спланируйте экскурсию по городу",
                        icon: "fas fa-bus",
                        difficulty: "Средне"
                    },
                    {
                        id: 4,
                        title: "Опишите свой район",
                        type: "text",
                        description: "Расскажите о районе, где вы живете",
                        icon: "fas fa-building",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Найдите места по описанию",
                        type: "choice",
                        description: "Угадайте место по описанию",
                        icon: "fas fa-search",
                        difficulty: "Легко"
                    }
                ]
            },
            {
                id: 6,
                title: "Хобби и увлечения",
                description: "Учимся рассказывать о своих интересах",
                tasks: [
                    {
                        id: 1,
                        title: "Опишите ваше хобби",
                        type: "text",
                        description: "Расскажите о вашем любимом занятии",
                        icon: "fas fa-gamepad",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Спросите о хобби друга",
                        type: "text",
                        description: "Составьте диалог о хобби",
                        icon: "fas fa-comments",
                        difficulty: "Средне"
                    },
                    {
                        id: 3,
                        title: "Популярные хобби в мире",
                        type: "choice",
                        description: "Выберите правильные переводы хобби",
                        icon: "fas fa-globe",
                        difficulty: "Легко"
                    },
                    {
                        id: 4,
                        title: "Планы на выходные",
                        type: "text",
                        description: "Расскажите, чем планируете заняться",
                        icon: "fas fa-calendar-week",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Приглашение на мероприятие",
                        type: "text",
                        description: "Напишите приглашение другу",
                        icon: "fas fa-envelope",
                        difficulty: "Сложно"
                    }
                ]
            },
            {
                id: 7,
                title: "Времена года и погода",
                description: "Учимся описывать погоду и времена года",
                tasks: [
                    {
                        id: 1,
                        title: "Опишите сегодняшнюю погоду",
                        type: "text",
                        description: "Напишите о погоде за окном",
                        icon: "fas fa-sun",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Ваше любимое время года",
                        type: "text",
                        description: "Расскажите о любимом времени года",
                        icon: "fas fa-leaf",
                        difficulty: "Легко"
                    },
                    {
                        id: 3,
                        title: "Сопоставьте погодные явления",
                        type: "matching",
                        description: "Сопоставьте английские и русские названия",
                        icon: "fas fa-cloud",
                        difficulty: "Легко"
                    },
                    {
                        id: 4,
                        title: "Планы в зависимости от погоды",
                        type: "text",
                        description: "Что вы делаете при разной погоде",
                        icon: "fas fa-umbrella",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Прогноз погоды",
                        type: "text",
                        description: "Напишите прогноз погоды на неделю",
                        icon: "fas fa-tv",
                        difficulty: "Сложно"
                    }
                ]
            },
            {
                id: 8,
                title: "Одежда и покупки",
                description: "Названия одежды и фразы для шоппинга",
                tasks: [
                    {
                        id: 1,
                        title: "Опишите свою одежду",
                        type: "text",
                        description: "Что вы носите сегодня",
                        icon: "fas fa-tshirt",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Диалог в магазине",
                        type: "text",
                        description: "Составьте диалог покупки одежды",
                        icon: "fas fa-shopping-bag",
                        difficulty: "Средне"
                    },
                    {
                        id: 3,
                        title: "Названия предметов одежды",
                        type: "choice",
                        description: "Выберите правильные переводы",
                        icon: "fas fa-vest",
                        difficulty: "Легко"
                    },
                    {
                        id: 4,
                        title: "Сезонная одежда",
                        type: "text",
                        description: "Какая одежда подходит для разных сезонов",
                        icon: "fas fa-snowflake",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Описание внешности",
                        type: "text",
                        description: "Опишите внешность человека",
                        icon: "fas fa-user",
                        difficulty: "Сложно"
                    }
                ]
            },
            {
                id: 9,
                title: "Дом и квартира",
                description: "Названия комнат и предметов мебели",
                tasks: [
                    {
                        id: 1,
                        title: "Опишите вашу комнату",
                        type: "text",
                        description: "Расскажите о вашей комнате",
                        icon: "fas fa-home",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Планировка квартиры",
                        type: "text",
                        description: "Опишите планировку вашей квартиры",
                        icon: "fas fa-door-closed",
                        difficulty: "Средне"
                    },
                    {
                        id: 3,
                        title: "Предметы мебели",
                        type: "matching",
                        description: "Сопоставьте названия мебели",
                        icon: "fas fa-couch",
                        difficulty: "Легко"
                    },
                    {
                        id: 4,
                        title: "Домашние обязанности",
                        type: "text",
                        description: "Кто что делает по дому",
                        icon: "fas fa-broom",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Идеальный дом",
                        type: "text",
                        description: "Опишите дом вашей мечты",
                        icon: "fas fa-dream",
                        difficulty: "Сложно"
                    }
                ]
            },
            {
                id: 10,
                title: "Повседневные действия",
                description: "Распорядок дня и ежедневные дела",
                tasks: [
                    {
                        id: 1,
                        title: "Мой распорядок дня",
                        type: "text",
                        description: "Опишите ваш обычный день",
                        icon: "fas fa-calendar-day",
                        difficulty: "Легко"
                    },
                    {
                        id: 2,
                        title: "Время для разных дел",
                        type: "text",
                        description: "Во сколько вы делаете разные дела",
                        icon: "fas fa-clock",
                        difficulty: "Легко"
                    },
                    {
                        id: 3,
                        title: "Частота действий",
                        type: "choice",
                        description: "Как часто вы делаете разные вещи",
                        icon: "fas fa-redo",
                        difficulty: "Средне"
                    },
                    {
                        id: 4,
                        title: "Диалог о привычках",
                        type: "text",
                        description: "Составьте диалог о ежедневных делах",
                        icon: "fas fa-comment-dots",
                        difficulty: "Средне"
                    },
                    {
                        id: 5,
                        title: "Сравнение распорядков",
                        type: "text",
                        description: "Сравните ваш день с днем друга",
                        icon: "fas fa-balance-scale",
                        difficulty: "Сложно"
                    }
                ]
            }
        ]
    },

    elementary: {
        title: "Курс среднего уровня",
        lessons: [
            {
                id: 1,
                title: "Прошедшее простое время",
                description: "Учимся рассказывать о событиях в прошлом",
                tasks: [
                    {
                        id: 1,
                        title: "Просклоняйте глаголы в Past Simple",
                        type: "text",
                        description: "Напишите вторую форму неправильных глаголов",
                        icon: "fas fa-history",
                        difficulty: "Легко",
                        instruction: "Напишите формы для: go, see, eat, write, take",
                        placeholder: "go - went\nsee - saw\n...",
                        rows: 5
                    },
                    {
                        id: 2,
                        title: "Расскажите о вчерашнем дне",
                        type: "text",
                        description: "Опишите что вы делали вчера",
                        icon: "fas fa-calendar-day",
                        difficulty: "Средне",
                        instruction: "Используйте Past Simple для описания вчерашнего дня",
                        hint: "Начинайте с Yesterday I...",
                        rows: 6
                    },
                    {
                        id: 3,
                        title: "Прочитайте текст и ответьте на вопросы",
                        type: "choice",
                        description: "Прочитайте текст в Past Simple и выберите правильные ответы",
                        icon: "fas fa-book",
                        difficulty: "Средне",
                        question: "What did John do last weekend? He...",
                        options: [
                            { text: "visited his grandparents", correct: true },
                            { text: "will visit his grandparents", correct: false },
                            { text: "visits his grandparents", correct: false },
                            { text: "is visiting his grandparents", correct: false }
                        ]
                    },
                    {
                        id: 4,
                        title: "Напишите рассказ 'Мое детство'",
                        type: "text",
                        description: "Напишите рассказ о вашем детстве",
                        icon: "fas fa-pen",
                        difficulty: "Сложно",
                        instruction: "Используйте Past Simple для рассказа о детстве (10-12 предложений)",
                        hint: "Используйте: When I was a child..., I used to..., I remember...",
                        rows: 10
                    },
                    {
                        id: 5,
                        title: "Тест на знание Past Simple",
                        type: "choice",
                        description: "Выберите правильную форму глагола",
                        icon: "fas fa-question-circle",
                        difficulty: "Средне",
                        question: "She _____ to London last year.",
                        options: [
                            { text: "goes", correct: false },
                            { text: "went", correct: true },
                            { text: "gone", correct: false },
                            { text: "going", correct: false }
                        ],
                        feedback: "Правильный ответ - 'went', так как это Past Simple от 'go'"
                    }
                ]
            },

        ]
    },

    advanced: {
        title: "ВИП-курс",
        lessons: [
            {
                id: 1,
                title: "Английские идиомы",
                description: "Изучаем популярные идиомы и их использование",
                tasks: [
                    {
                        id: 1,
                        title: "Изучите идиомы о времени",
                        type: "choice",
                        description: "Выберите правильное значение идиомы",
                        icon: "fas fa-lightbulb",
                        difficulty: "Средне",
                        question: "What does 'once in a blue moon' mean?",
                        options: [
                            { text: "very often", correct: false },
                            { text: "very rarely", correct: true },
                            { text: "at night", correct: false },
                            { text: "in winter", correct: false }
                        ],
                        feedback: "'Once in a blue moon' означает 'очень редко'"
                    },
                    {
                        id: 2,
                        title: "Объясните идиомы с животными",
                        type: "text",
                        description: "Объясните значение идиом с животными",
                        icon: "fas fa-paw",
                        difficulty: "Средне",
                        instruction: "Объясните значение: 'It's raining cats and dogs'",
                        placeholder: "Эта идиома означает...",
                        rows: 3
                    },
                    {
                        id: 3,
                        title: "Деловые идиомы в контексте",
                        type: "choice",
                        description: "Выберите правильное использование деловой идиомы",
                        icon: "fas fa-briefcase",
                        difficulty: "Сложно",
                        question: "Which sentence uses 'think outside the box' correctly?",
                        options: [
                            { text: "We need to think outside the box to solve this problem.", correct: true },
                            { text: "Put the documents outside the box.", correct: false },
                            { text: "The box is outside the office.", correct: false },
                            { text: "I'm thinking about the box.", correct: false }
                        ]
                    },
                    {
                        id: 4,
                        title: "Составьте диалог с идиомами",
                        type: "text",
                        description: "Составьте диалог используя 3-4 идиомы",
                        icon: "fas fa-comment-alt",
                        difficulty: "Сложно",
                        instruction: "Составьте диалог между двумя друзьями, используя идиомы",
                        hint: "Используйте: break the ice, piece of cake, hit the nail on the head",
                        rows: 8
                    },
                    {
                        id: 5,
                        title: "Тест на знание идиом",
                        type: "matching",
                        description: "Сопоставьте идиомы с их значениями",
                        icon: "fas fa-clipboard-list",
                        difficulty: "Средне",
                        leftColumn: ["Break a leg", "Bite the bullet", "Cost an arm and a leg", "Spill the beans"],
                        rightColumn: ["Good luck!", "Accept something difficult", "Very expensive", "Reveal a secret"]
                    }
                ]
            },
        ]
    }
};

// Добавлю функцию для обновления заданий
function updateAssignment(course, lesson, task, data) {
    if (assignmentsData[course] && 
        assignmentsData[course].lessons[lesson-1] && 
        assignmentsData[course].lessons[lesson-1].tasks[task-1]) {
        Object.assign(assignmentsData[course].lessons[lesson-1].tasks[task-1], data);
    }
}

// Функция для получения задания
function getAssignment(course, lesson, task) {
    return assignmentsData[course]?.lessons?.find(l => l.id === lesson)?.tasks?.find(t => t.id === task);
}