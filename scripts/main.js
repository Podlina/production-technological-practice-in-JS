document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-btn';
    submitButton.classList.add('hide');
    submitButton.innerText = 'Submit';
    document.body.appendChild(submitButton);

    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    let shuffledQuestions, currentQuestionIndex, score = 0;

    nextButton.classList.add('hide');

    startButton.addEventListener('click', startGame);
    submitButton.classList.add('hide'); 

    function startGame() {
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionElement.innerText = question.question;
        if (question.image) {
            const imageElement = document.createElement('img');
            imageElement.src = question.image;
            imageElement.classList.add('question-image');
            questionElement.appendChild(imageElement);
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
            submitButton.classList.remove('hide');
        } else {
            submitButton.classList.add('hide');
        }
    }

    function resetState() {
        nextButton.classList.add('hide');
        submitButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        if (questionElement.querySelector('img')) {
            questionElement.querySelector('img').remove();
        }
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

    submitButton.addEventListener('click', () => {
        handleMultipleChoiceAnswer();
    });

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            setNextQuestion();
        } else {
            concludeQuiz();
        }
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
        submitButton.classList.add('hide');
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

    function concludeQuiz() {
        questionContainerElement.classList.add('hide');
        nextButton.classList.add('hide');
        submitButton.classList.add('hide'); 
        const resultsElement = document.createElement('div');
        resultsElement.classList.add('results');
        resultsElement.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your score: ${score} out of ${shuffledQuestions.length}</p>
            <button id="restart-btn">Restart Quiz</button>
        `;
        document.body.appendChild(resultsElement);
        document.getElementById('restart-btn').addEventListener('click', () => {
            resultsElement.remove();
            startGame();
        });
    }
});