let bestScore = 0;

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const favoriteColor = event.target.question1.value;
    const favoriteAnimal = event.target.question2.value;
    const hobbies = event.target.question3.value;

    let score = 0;
    if (favoriteColor === 'blue') {
        score += 25;
    }
    if (favoriteAnimal === 'dog') {
        score += 25;
    }
    if (hobbies) {
        score += 50;
    }

    if (score > bestScore) {
        bestScore = score;
        document.getElementById('bestScoreValue').innerText = bestScore;
    }

    document.getElementById('usernameResult').innerText = `Adınız: ${username}`;
    document.getElementById('scoreResult').innerText = `Skorunuz: ${score}%`;
    document.getElementById('bestScoreResult').innerText = `En İyi Skor: ${bestScore}%`;

    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}
