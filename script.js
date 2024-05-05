let totalScore = 0;
let num1, num2, correctAnswer;
const scoreDiv = document.getElementById('score');
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const resultDiv = document.getElementById('result');

resetGame();

function resetGame() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    questionDiv.textContent = ` ${num1} x ${num2} = ?`;
    optionsDiv.innerHTML = '';
    const answers = generateAnswers(correctAnswer);
    for (let i = 0; i < answers.length; i++) {
        const button = document.createElement('button');
        button.textContent = answers[i];
        button.addEventListener('click', checkAnswer);
        optionsDiv.appendChild(button);
    }
    resultDiv.textContent = '';
}

function generateAnswers(correctAnswer) {
    const answers = [correctAnswer];
    while (answers.length < 4) {
        const randomAnswer = Math.floor(Math.random() * 81) + 1;
        if (!answers.includes(randomAnswer)) {
            answers.push(randomAnswer);
        }
    }
    return shuffleArray(answers);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(event) {
    const userAnswer = parseInt(event.target.textContent);
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = 'Correct!';
        totalScore += 5;
        scoreDiv.textContent = `Score: ${totalScore}`;
        setTimeout(resetGame, 2000);
    } else {
        resultDiv.textContent = 'Wrong! Try again.';
        totalScore = 0;
        scoreDiv.textContent = `Score: ${totalScore}`;
    }
}