document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-btn');
    const checkButton = document.getElementById('check-btn');
    const questionCounterElement = document.getElementById('question-counter');
    const resultsElement = document.getElementById('results');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const questionImageElement = document.getElementById('question-image'); // Ссылка на элемент изображения

    let shuffledQuestions, currentQuestionIndex, score = 0;

    startGame(); 

    function startGame() {
        questionCounterElement.classList.remove('hide'); 
        questionContainerElement.classList.remove('hide'); 
        
        shuffledQuestions = getRandomQuestions(questions, 10);
        currentQuestionIndex = 0;
        score = 0;

        setNextQuestion();
    }

    function getRandomQuestions(questions, count) {
        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, questions.length));
    }

    function setNextQuestion() {
        resetState();
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(shuffledQuestions[currentQuestionIndex]);
            updateQuestionCounter();
        } else {
            concludeQuiz();
        }
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;

        if (question.image) {
            questionImageElement.src = question.image;
            questionImageElement.alt = question.alt || ''; 
            questionImageElement.classList.remove('hide');
        } else {
            questionImageElement.classList.add('hide');
        }

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

        if (question.multiple) {
            checkButton.classList.remove('hide');
        } else {
            checkButton.classList.add('hide');
        }
    }

    function resetState() {
        nextButton.classList.add('hide');
        checkButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        
        questionImageElement.classList.add('hide');
        questionImageElement.src = '';
        questionImageElement.alt = '';
    }

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

    checkButton.addEventListener('click', () => {
        handleMultipleChoiceAnswer();
    });

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });

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

    function updateQuestionCounter() {
        questionCounterElement.innerText = `Question ${currentQuestionIndex + 1} out of ${shuffledQuestions.length}`;
    }

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