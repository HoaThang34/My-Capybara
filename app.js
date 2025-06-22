document.addEventListener('DOMContentLoaded', () => {
    // === Lấy các phần tử HTML ===
    const menuScreen = document.getElementById('menu-screen'), startBtn = document.getElementById('start-btn');
    const gameArea = document.getElementById('game-area'), winScreen = document.getElementById('win-screen');
    const progressMap = document.getElementById('progress-map'), playerIcon = document.getElementById('player-icon');
    const questionText = document.getElementById('question-text'), answerButtonsContainer = document.getElementById('answer-buttons');
    const feedbackMessage = document.getElementById('feedback-message'), playAgainBtn = document.getElementById('play-again-btn');
    const correctOverlay = document.getElementById('correct-overlay'), correctMessage = document.getElementById('correct-message');
    const soundControl = document.getElementById('sound-control');
    const bgMusic = document.getElementById('bg-music'), correctSound = document.getElementById('correct-sound'), wrongSound = document.getElementById('wrong-sound');
    bgMusic.volume = 0.2; // Giảm âm lượng nhạc nền xuống 20%
    // === Biến trạng thái trò chơi ===
    let fullQuestionBank = [], questions = [], currentQuestionIndex = 0, isMuted = false;
    const correctMessages = ["Chill phết!", "Bé giỏi quá!", "Siêu đấy!", "Đúng rồi nè!", "Tuyệt vời!"];

    // --- CÁC HÀM XỬ LÝ TRÒ CHƠI ---

    // 1. Tải và phân tích câu hỏi
    async function loadQuestions() {
        if (fullQuestionBank.length > 0) return;
        try {
            const response = await fetch('data.txt');
            const textData = await response.text();
            fullQuestionBank = textData.trim().split('\n').filter(line => line).map(line => {
                const parts = line.split('|');
                return { question: parts[0], options: [parts[1], parts[2], parts[3], parts[4]], correct: parts[5].trim() };
            });
        } catch (error) { console.error("Lỗi tải file câu hỏi:", error); questionText.textContent = 'Oops! Không tìm thấy câu hỏi.'; }
    }

    // 2. Tạo Lộ trình
    function createProgressMap() {
        progressMap.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const step = document.createElement('div');
            step.classList.add('map-step');
            progressMap.appendChild(step);
        }
    }

    // 3. Cập nhật vị trí trên Lộ trình
    function updateProgressMap() {
        const steps = progressMap.querySelectorAll('.map-step');
        steps.forEach((step, index) => {
            if (index < currentQuestionIndex) {
                step.classList.add('completed');
            } else {
                step.classList.remove('completed');
            }
        });
        const targetStep = steps[currentQuestionIndex] || steps[steps.length - 1];
        const mapRect = progressMap.getBoundingClientRect();
        const stepRect = targetStep.getBoundingClientRect();
        const newLeft = (stepRect.left - mapRect.left) + (stepRect.width / 2);
        playerIcon.style.left = `${newLeft}px`;
    }

    // 4. Hiển thị câu hỏi
    function displayQuestion() {
        if (currentQuestionIndex >= questions.length) { endGame(); return; }
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        feedbackMessage.textContent = '';
        answerButtonsContainer.innerHTML = '';
        const options = ['A', 'B', 'C', 'D'];
        currentQuestion.options.forEach((optionText, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.dataset.option = options[index];
            button.textContent = `${options[index]}. ${optionText}`;
            button.addEventListener('click', handleAnswerSelection);
            answerButtonsContainer.appendChild(button);
        });
    }

    // 5. Xử lý khi chọn đáp án
    function handleAnswerSelection(event) {
        const selectedOption = event.target.dataset.option;
        const currentQuestion = questions[currentQuestionIndex];
        const allButtons = answerButtonsContainer.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => btn.disabled = true);
        
        if (selectedOption === currentQuestion.correct) {
            if (!isMuted) correctSound.play();
            // Hiện màn ăn mừng "tung hoa"
            correctMessage.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
            correctOverlay.classList.remove('hidden');

            setTimeout(() => {
                correctOverlay.classList.add('hidden');
                currentQuestionIndex++;
                updateProgressMap();
                displayQuestion();
            }, 1800);
        } else {
            if (!isMuted) wrongSound.play();
            feedbackMessage.textContent = 'Oops, sai mất rồi! Thử lại nhé!';
            setTimeout(() => {
                feedbackMessage.textContent = '';
                allButtons.forEach(btn => btn.disabled = false);
            }, 1500);
        }
    }

    // 6. Kết thúc trò chơi
    function endGame() {
        gameArea.classList.add('hidden');
        winScreen.classList.remove('hidden');
    }

    // 7. Khởi tạo hoặc Chơi lại
    function initializeGame() {
        const shuffled = [...fullQuestionBank].sort(() => 0.5 - Math.random());
        questions = shuffled.slice(0, 10);
        currentQuestionIndex = 0;
        
        createProgressMap();
        updateProgressMap();
        displayQuestion();
    }

    // --- SỰ KIỆN KHỞI ĐỘNG VÀ ĐIỀU KHIỂN ---

    startBtn.addEventListener('click', async () => {
        menuScreen.classList.add('hidden');
        gameArea.classList.remove('hidden');
        if (!isMuted) bgMusic.play().catch(e => console.log("Trình duyệt chặn phát nhạc."));
        await loadQuestions();
        initializeGame();
    });

    playAgainBtn.addEventListener('click', () => {
        winScreen.classList.add('hidden');
        menuScreen.classList.remove('hidden'); // Quay lại màn hình menu
    });

    soundControl.addEventListener('click', () => {
        isMuted = !isMuted;
        soundControl.textContent = isMuted ? '🔇' : '🔊';
        bgMusic.muted = isMuted;
    });
});