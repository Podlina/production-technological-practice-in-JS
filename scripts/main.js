document.addEventListener('DOMContentLoaded', () => {
    /* ссылки на элементы страницы:
    - startButton переменная для кнопки начала квиза;
    -  nextButton переменная для кнопки перехода к следующему вопросу;
    - checkButton переменная для кнопки проверки ответа на вопрос, 
    который предпологает несколько вариантов ответа;
    - questionCounterElement переменная для отображения текущего вопроса и 
    всего количества вопросов;
    - resultsElement переменная для оотображения результатов квиза после его окончения;
    - questionContainerElement пересенная для хранения самих вопросов и вариантов ответа;
    - questionElement - для отображения текущего вопроса;
    - answerButtonsElement - для кнопок, содержащих возможные варианты ответа;
    */
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const checkButton = document.getElementById('check-btn');
    const questionCounterElement = document.getElementById('question-counter');
    const resultsElement = document.getElementById('results');

    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    /*
     Инициализация переменных:
    - для хранения массива вопросов (shuffledQuestions), 
    - текущего индекса вопроса в квизе (currentQuestionIndex),
    - для счетаправильных ответов пользователя (score), 
    */
    let shuffledQuestions, currentQuestionIndex, score = 0;

    // Добавление обработчка событий для кнопки "Start" 
    startButton.addEventListener('click', startGame);

    //Функция начала квиза
    function startGame() {

        /* Скрытие кнопки начала квиза и элемента, отображающего результат,
        показ счетчика вопросов и контейнер вопросов*/
        startButton.classList.add('hide');
        questionCounterElement.classList.remove('hide');
        questionContainerElement.classList.remove('hide');
        resultsElement.classList.add('hide');
        
        //Перемешивание вопросов и выбор 10-ти первых
        shuffledQuestions = getRandomQuestions(questions, 10);
        currentQuestionIndex = 0;
        score = 0;

        //
        setNextQuestion();
    }

    //Функция для получения случайных вопросов
    function getRandomQuestions(questions, count) {
        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, questions.length));
    }

    //Функция установки слкдующего вопроса
    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
            updateQuestionCounter();
        } else {
            concludeQuiz();
        }
    }

    //Функция показа вопроса
    function showQuestion(question) {
        questionElement.innerText = question.question;

        //Если вопрос предпологает изображение, то добавляем его
        if (question.image) {
            const imageElement = document.createElement('img');
            imageElement.src = question.image;
            imageElement.classList.add('question-image');
            questionElement.appendChild(imageElement);
        }

        //Создание кнопок с вариантами ответа на вопрос и добавление обработчика событий
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.dataset.correct = answer.correct;
            if (question.multiple) {
                button.classList.add('multiple-choice');
            }
            button.addEventListener('click', () => selectAnswer(button, question));
            answerButtonsElement.appendChild(button);
        });

        //Показ или скрытие кнопки проверки для вопросов с несколькими вариантами ответа
        if (question.multiple) {
            checkButton.classList.remove('hide');
        } else {
            checkButton.classList.add('hide');
        }
    }

    //Функция для сброса сосотяния текущего вопроса
    function resetState() {
        nextButton.classList.add('hide');
        checkButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        if (questionElement.querySelector('img')) {
            questionElement.querySelector('img').remove();
        }
    }

    //Функция выбора варианта ответа
    function selectAnswer(selectedButton, question) {
        if (question.multiple) {
            selectedButton.classList.toggle('selected');
            return;
        }

        Array.from(answerButtonsElement.children).forEach(button => {
            button.disabled = true;
            setStatusClass(button, button.dataset.correct === 'true');
        });

        const correct = selectedButton.dataset.correct === 'true';
        if (correct) score++;
        setStatusClass(selectedButton, correct);
        nextButton.classList.remove('hide');
    }

    //Добавление обработчика событий для кнопки, проверяющей ответы 
    checkButton.addEventListener('click', () => {
        handleMultipleChoiceAnswer();
    });

    //Добавление обработчика событий для кнопки переходя к следующему событию
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });

    //Функция обработки ответов на вопросы, предпологающие насколько вариантов ответа
    function handleMultipleChoiceAnswer() {
        const selectedButtons = document.querySelectorAll('.multiple-choice.selected');
        const allButtons = Array.from(answerButtonsElement.children);

        let correctAnswersCount = 0;
        selectedButtons.forEach(button => {
            const isCorrect = button.dataset.correct === 'true';
            setStatusClass(button, isCorrect);
            if (isCorrect) correctAnswersCount++;
        });

        allButtons.forEach(button => {
            button.disabled = true;
            setStatusClass(button, button.dataset.correct === 'true');
        });

        const correct = correctAnswersCount === selectedButtons.length && selectedButtons.length === allButtons.filter(button => button.dataset.correct === 'true').length;

        if (correct) score++;
        checkButton.classList.add('hide');
        nextButton.classList.remove('hide');
    }

    //// Функции для установки и очистки классов статуса ответа
    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
        element.classList.remove('selected');
    }

    //Функция обновления счётчика вопросов
    function updateQuestionCounter() {
        questionCounterElement.innerText = `Question ${currentQuestionIndex + 1} out of ${shuffledQuestions.length}`;
    }

    //Функция завершения квиза, показа результатов и повторного прохождения квиза
    function concludeQuiz() {
        questionContainerElement.classList.add('hide');
        nextButton.classList.add('hide');
        checkButton.classList.add('hide');
        questionCounterElement.classList.add('hide');
        resultsElement.classList.remove('hide');
        resultsElement.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your score: ${score} out of ${shuffledQuestions.length}</p>
            <button id="restart-btn">Restart Quiz</button>
        `;
        document.getElementById('restart-btn').addEventListener('click', () => {
            resultsElement.classList.add('hide');
            startGame();
        });
        questionElement.innerText = ''; 
    }
});
