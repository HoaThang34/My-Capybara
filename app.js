document.addEventListener('DOMContentLoaded', () => {
    // === CẤU TRÚC THEME (MAP) THEO LEVEL - PHIÊN BẢN 8 MAP ===
    const themes = [
        { id: 'rabbit', level: 1, name: "Vườn Thỏ Ngọc", playerIcon: '🥕', character: '🐰', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã giải cứu Thỏ Ngọc!", gameMode: 'normal', colors: { '--bg-color': '#ffe5ec', '--primary-color': '#ff75a0', '--secondary-color': '#ffb3c6', '--text-color': '#c94b73', '--secondary-color-translucent': 'rgba(255, 117, 160, 0.85)', '--primary-color-dark': '#c94b73' } },
        { id: 'otter', level: 2, name: "Vịnh Rái Cá Vui Vẻ", playerIcon: '🐚', character: '🦦', winTitle: "KHÁM PHÁ THÀNH CÔNG!", winSubtitle: "Bé đã giúp Rái Cá tìm thấy kho báu!", gameMode: 'normal', colors: { '--bg-color': '#e0f7fa', '--primary-color': '#00796b', '--secondary-color': '#004d40', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(0, 121, 107, 0.8)', '--primary-color-dark': '#004d40' } },
        { id: 'sprout', level: 3, name: "Khu Rừng Mầm Cây", playerIcon: '💧', character: '🌱', winCharacter: '🌳', winTitle: "TUYỆT VỜI!", winSubtitle: "Nhờ bé, Mầm Cây đã thành cây đại thụ!", gameMode: 'normal', colors: { '--bg-color': '#e8f5e9', '--primary-color': '#4CAF50', '--secondary-color': '#81c784', '--text-color': '#2e7d32', '--secondary-color-translucent': 'rgba(76, 175, 80, 0.85)', '--primary-color-dark': '#2e7d32' } },
        { id: 'duck', level: 4, name: "Giải Cứu Vịt Con", playerIcon: '☂️', character: '🐥', winCharacter: '🦆', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã đưa Vịt Con về nhà an toàn!", gameMode: 'timed', colors: { '--bg-color': '#e3f2fd', '--primary-color': '#ffc107', '--secondary-color': '#42a5f5', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(66, 165, 245, 0.85)', '--primary-color-dark': '#c79100' } },
        { id: 'monkey', level: 5, name: "Giải mã Chú Khỉ Buồn", playerIcon: '❓', character: '🐒', winCharacter: '🐵', winTitle: "GIẢI MÃ THÀNH CÔNG!", winSubtitle: "Bé đã làm Chú Khỉ vui trở lại rồi!", gameMode: 'survival', colors: { '--bg-color': '#333', '--container-bg': '#1a1a1a', '--primary-color': '#f5f5f5', '--secondary-color': '#777', '--text-color': '#ccc', '--correct-color': '#a5d6a7', '--incorrect-color': '#ef9a9a', '--secondary-color-translucent': 'rgba(200, 200, 200, 0.5)', '--primary-color-dark': '#ccc' } },
        { id: 'astronaut', level: 6, name: "Phi hành gia lạc lối", playerIcon: '🚀', character: '🧑‍🚀', winTitle: "VỀ NHÀ THÀNH CÔNG!", winSubtitle: "Bé đã giúp phi hành gia tìm đường về Trái Đất!", gameMode: 'normal', colors: { '--bg-color': '#1a237e', '--primary-color': '#fbc02d', '--secondary-color': '#5c6bc0', '--text-color': '#e8eaf6', '--secondary-color-translucent': 'rgba(92, 107, 192, 0.8)', '--primary-color-dark': '#f9a825' } },
        { id: 'detective', level: 7, name: "Thám tử Nhí tìm đồ", playerIcon: '🔦', character: '🕵️', winTitle: "PHÁ ÁN THÀNH CÔNG!", winSubtitle: "Bé đã tìm ra tất cả các đồ vật bị mất!", gameMode: 'survival', colors: { '--bg-color': '#d7ccc8', '--primary-color': '#5d4037', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.8)', '--primary-color-dark': '#3e2723' } },
        { id: 'dragon', level: 8, name: "Kho báu Rồng Lửa", playerIcon: '💎', character: '🐲', winTitle: "CHINH PHỤC THÀNH CÔNG!", winSubtitle: "Bé đã vượt qua thử thách của Rồng Lửa!", gameMode: 'hardcore', colors: { '--bg-color': '#bf360c', '--primary-color': '#ffab00', '--secondary-color': '#dd2c00', '--text-color': '#ffeb3b', '--secondary-color-translucent': 'rgba(221, 44, 0, 0.8)', '--primary-color-dark': '#ff8f00' } }
    ];

    // === Lấy các phần tử HTML ===
    const authScreen = document.getElementById('auth-screen');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const authErrorEl = document.getElementById('auth-error');
    const userInfo = document.getElementById('user-info');
    const welcomeUserEl = document.getElementById('welcome-user');
    const logoutBtn = document.getElementById('logout-btn');
    const mapSelectionScreen = document.getElementById('map-selection-screen');
    const mapChoicesContainer = document.getElementById('map-choices');
    const snowContainer = document.getElementById('snow-container');
    const gameArea = document.getElementById('game-area'), winScreen = document.getElementById('win-screen');
    const heartContainer = document.getElementById('heart-container');
    const timerContainer = document.getElementById('timer-container'), timerBar = document.getElementById('timer-bar');
    const gameOverScreen = document.getElementById('game-over-screen'), retryBtn = document.getElementById('retry-btn');
    const playerIcon = document.getElementById('player-icon'), finalGoal = document.getElementById('final-goal');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text'), answerButtonsContainer = document.getElementById('answer-buttons');
    const feedbackMessage = document.getElementById('feedback-message');
    const playAgainBtn = document.getElementById('play-again-btn');
    const correctOverlay = document.getElementById('correct-overlay'), correctMessage = document.getElementById('correct-message');
    const soundControl = document.getElementById('sound-control');
    const bgMusic = document.getElementById('bg-music'), correctSound = document.getElementById('correct-sound'), wrongSound = document.getElementById('wrong-sound');
    
    bgMusic.volume = 0.2;

    // === Biến trạng thái trò chơi ===
    let currentUser = null, fullQuestionBank = [], questionsForCurrentRound = [], currentQuestionIndex = 0;
    let playerHearts = 3, timerInterval = null, timeLeft = 100;
    let isMuted = false;

    // --- HÀM QUẢN LÝ TÀI KHOẢN & TIẾN TRÌNH (LOCALSTORAGE) ---
    function getAccounts() { return JSON.parse(localStorage.getItem('gameAccounts_v2')) || []; }
    function saveAccounts(accounts) { localStorage.setItem('gameAccounts_v2', JSON.stringify(accounts)); }

    function handleRegister(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value.trim();
        if (!username || !password) { authErrorEl.textContent = 'Vui lòng nhập đủ thông tin.'; return; }
        
        let accounts = getAccounts();
        if (accounts.find(acc => acc.username.toLowerCase() === username.toLowerCase())) {
            authErrorEl.textContent = 'Tên tài khoản này đã có người dùng rồi.'; return;
        }
        
        accounts.push({ username, password, highestLevelUnlocked: 1 });
        saveAccounts(accounts);
        alert('Tạo tài khoản thành công! Giờ bé hãy đăng nhập nhé.');
        showLoginScreen();
        loginForm.reset();
        registerForm.reset();
    }

    function handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();
        let accounts = getAccounts();
        
        if (username.toLowerCase() === 'admin' && password === 'admin') {
            currentUser = { username: 'Admin', highestLevelUnlocked: 999 };
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            initializeApp();
            return;
        }

        const user = accounts.find(acc => acc.username.toLowerCase() === username.toLowerCase() && acc.password === password);
        if (user) {
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            initializeApp();
        } else {
            authErrorEl.textContent = 'Tên tài khoản hoặc mật khẩu không đúng.';
        }
    }
    
    function handleLogout() {
        currentUser = null;
        sessionStorage.removeItem('currentUser');
        userInfo.classList.add('hidden');
        showScreen(authScreen); // Chỉ hiển thị màn hình auth
    }
    
    function saveProgress() {
        if (!currentUser || currentUser.username === 'Admin') return; // Không lưu tiến trình cho admin
        let accounts = getAccounts();
        const userIndex = accounts.findIndex(acc => acc.username.toLowerCase() === currentUser.username.toLowerCase());
        if (userIndex !== -1) {
            accounts[userIndex].highestLevelUnlocked = currentUser.highestLevelUnlocked;
            saveAccounts(accounts);
        }
    }

    // --- HÀM QUẢN LÝ GIAO DIỆN ---
    function showScreen(screenToShow) {
        [authScreen, mapSelectionScreen, gameArea, winScreen, gameOverScreen].forEach(screen => {
            screen.classList.add('hidden');
        });
        screenToShow.classList.remove('hidden');
    }
    
    function showLoginScreen() {
        showScreen(authScreen);
        loginFormContainer.classList.remove('hidden');
        registerFormContainer.classList.add('hidden');
        authErrorEl.textContent = '';
    }

    function showRegisterScreen() {
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
        authErrorEl.textContent = '';
    }

    function updateMapSelectionScreen() {
        mapChoicesContainer.innerHTML = '';
        themes.forEach(theme => {
            const isLocked = theme.level > currentUser.highestLevelUnlocked;
            const button = document.createElement('button');
            button.className = 'map-choice-btn'; button.dataset.themeId = theme.id;
            let content = `<div class="map-icon-wrapper"><div class="map-icon">${theme.character}</div></div><div class="map-name">${theme.name}</div>`;
            if (isLocked) { button.classList.add('locked'); content += `<div class="lock-icon">🔒</div>`; }
            button.innerHTML = content;
            mapChoicesContainer.appendChild(button);
        });
    }

    function applyTheme(themeId) {
        let themeToApply = themes.find(t => t.id === themeId);
        if (!themeToApply) themeToApply = themes[0]; // Fallback
        
        currentTheme = themeToApply;
        document.body.className = `theme-${currentTheme.id}`;
        const root = document.documentElement;
        for (const [key, value] of Object.entries(currentTheme.colors)) { root.style.setProperty(key, value); }

        // Chỉ cập nhật các element nếu chúng tồn tại
        const elements = {
            playerIcon: document.getElementById('player-icon'),
            finalGoal: document.getElementById('final-goal'),
            winTitle: document.getElementById('win-title'),
            characterImageWin: document.getElementById('character-image-win'),
            winSubtitle: document.getElementById('win-subtitle')
        };

        if(elements.playerIcon) elements.playerIcon.textContent = currentTheme.playerIcon;
        if(elements.finalGoal) elements.finalGoal.textContent = currentTheme.character;
        if(elements.winTitle) elements.winTitle.textContent = currentTheme.winTitle;
        if(elements.characterImageWin) elements.characterImageWin.textContent = currentTheme.winCharacter || currentTheme.character;
        if(elements.winSubtitle) elements.winSubtitle.textContent = currentTheme.winSubtitle;
    }

    function createSnow() {
        snowContainer.innerHTML = ''; const snowCount = 100;
        for (let i = 0; i < snowCount; i++) {
            const snow = document.createElement('div'); snow.className = 'snow';
            const size = Math.random() * 5 + 3 + 'px'; snow.style.width = size; snow.style.height = size;
            snow.style.left = Math.random() * 100 + '%'; const fallDuration = Math.random() * 8 + 7;
            const swayDuration = Math.random() * 4 + 2; const delay = Math.random() * 5;
            snow.style.opacity = Math.random() * 0.4 + 0.6;
            snow.style.animation = `snowfall ${fallDuration}s linear ${delay}s infinite, sway ${swayDuration}s ease-in-out ${delay}s infinite alternate`;
            snowContainer.appendChild(snow);
        }
    }

    // Các hàm game khác giữ nguyên...
    function updateHeartsDisplay() {
        heartContainer.innerHTML = '';
        for (let i = 0; i < (currentTheme.gameMode === 'hardcore' ? 1 : 3); i++) {
            const heart = document.createElement('div'); heart.textContent = '❤️';
            heart.className = 'heart-icon'; if (i >= playerHearts) { heart.classList.add('lost'); }
            heartContainer.appendChild(heart);
        }
    }
    function startTimer() {
        clearInterval(timerInterval); timeLeft = 100; timerBar.style.width = '100%';
        timerBar.style.transition = 'width 1s linear';
        timerInterval = setInterval(() => { timeLeft -= 1; timerBar.style.width = timeLeft + '%'; if (timeLeft <= 0) { clearInterval(timerInterval); gameOver('Hết giờ rồi!'); } }, 150);
    }
    async function loadQuestions() {
        if (fullQuestionBank.length > 0) return;
        try { const response = await fetch('data.txt'); const textData = await response.text();
            fullQuestionBank = textData.trim().split('\n').filter(line => line && !line.startsWith('#')).map(line => {
                const parts = line.split('|');
                return { question: parts[0], options: [parts[1], parts[2], parts[3], parts[4]], correct: parts[5].trim() };
            });
        } catch (error) { console.error("Lỗi tải file câu hỏi:", error); }
    }
    function startGame() {
        currentQuestionIndex = 0;
        heartContainer.classList.add('hidden');
        timerContainer.classList.add('hidden');
        clearInterval(timerInterval);
        if (currentTheme.gameMode === 'survival') { playerHearts = 3; heartContainer.classList.remove('hidden'); updateHeartsDisplay(); }
        else if (currentTheme.gameMode === 'timed') { timerContainer.classList.remove('hidden'); startTimer(); }
        else if (currentTheme.gameMode === 'hardcore') { playerHearts = 1; heartContainer.classList.remove('hidden'); updateHeartsDisplay(); timerContainer.classList.remove('hidden'); startTimer(); }
        questionsForCurrentRound = fullQuestionBank.sort(() => 0.5 - Math.random()).slice(0, 10);
        createProgressMap();
        updateProgressMap();
        displayQuestion();
    }
    function displayQuestion() {
        if (currentQuestionIndex >= questionsForCurrentRound.length) { endGame(); return; }
        questionCounter.textContent = `Câu ${currentQuestionIndex + 1} / 10`;
        const currentQuestion = questionsForCurrentRound[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        feedbackMessage.textContent = '';
        answerButtonsContainer.innerHTML = '';
        const options = ['A', 'B', 'C', 'D'];
        currentQuestion.options.forEach((optionText, index) => {
            const button = document.createElement('button'); button.classList.add('answer-btn');
            button.dataset.option = options[index];
            button.textContent = `${options[index]}. ${optionText}`;
            button.addEventListener('click', handleAnswerSelection);
            answerButtonsContainer.appendChild(button);
        });
    }
    function handleAnswerSelection(event) {
        const allButtons = answerButtonsContainer.querySelectorAll('.answer-btn'); allButtons.forEach(btn => btn.disabled = true);
        const selectedOption = event.target.dataset.option;
        const currentQuestion = questionsForCurrentRound[currentQuestionIndex];
        if (selectedOption === currentQuestion.correct) {
            if (!isMuted) correctSound.play();
            if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') { timeLeft = Math.min(100, timeLeft + 15); timerBar.style.transition = 'width 0.2s ease-out'; timerBar.style.width = timeLeft + '%'; }
            correctMessage.textContent = ["Chuẩn luôn!", "Bé giỏi quá!", "Siêu đấy!", "Đúng rồi nè!", "Tuyệt vời!"][Math.floor(Math.random() * 5)];
            correctOverlay.classList.remove('hidden');
            setTimeout(() => {
                correctOverlay.classList.add('hidden');
                currentQuestionIndex++;
                updateProgressMap();
                displayQuestion();
            }, 1800);
        } else {
            if (!isMuted) wrongSound.play();
            if (currentTheme.gameMode === 'hardcore') { setTimeout(() => gameOver('Sai một câu là thua rồi! Cẩn thận hơn nhé!'), 1000); return; }
            if (currentTheme.gameMode === 'survival') { playerHearts--; updateHeartsDisplay(); if (playerHearts <= 0) { setTimeout(() => gameOver('Hết mạng rồi!'), 1000); return; } }
            feedbackMessage.textContent = 'Oops, sai mất rồi! Thử lại nhé!';
            setTimeout(() => { feedbackMessage.textContent = ''; allButtons.forEach(btn => btn.disabled = false); }, 1500);
        }
    }
    function endGame() {
        clearInterval(timerInterval);
        const nextLevel = currentTheme.level + 1;
        const unlockMessageEl = document.getElementById('unlock-message');
        if (currentUser.username !== 'Admin' && nextLevel > currentUser.highestLevelUnlocked && themes.some(t => t.level === nextLevel)) {
            currentUser.highestLevelUnlocked = nextLevel;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            saveProgress();
            const newMap = themes.find(t => t.level === nextLevel);
            unlockMessageEl.textContent = `🎉 Đã mở khóa: ${newMap.name}! 🎉`;
            unlockMessageEl.classList.remove('hidden');
        } else {
            unlockMessageEl.classList.add('hidden');
        }
        showScreen(winScreen);
    }
    function gameOver(reason) {
        clearInterval(timerInterval);
        document.getElementById('game-over-text').textContent = reason || 'Đừng nản chí, thử lại nhé!';
        showScreen(gameOverScreen);
    }
    function createProgressMap() { const progressMap = document.getElementById('progress-map'); progressMap.innerHTML = ''; for (let i = 0; i < 10; i++) { const step = document.createElement('div'); step.classList.add('map-step'); progressMap.appendChild(step); } }
    function updateProgressMap() { const progressMap = document.getElementById('progress-map'); const steps = progressMap.querySelectorAll('.map-step'); steps.forEach((step, index) => { step.classList.toggle('completed', index < currentQuestionIndex); }); const targetStep = steps[currentQuestionIndex] || steps[steps.length - 1]; if (!targetStep) return; const mapRect = progressMap.getBoundingClientRect(); const stepRect = targetStep.getBoundingClientRect(); const newLeft = (stepRect.left - mapRect.left) + (stepRect.width / 2); document.getElementById('player-icon').style.left = `${newLeft}px`; }

    // --- SỰ KIỆN KHỞI ĐỘNG VÀ ĐIỀU KHIỂN ---
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterScreen(); });
    showLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginScreen(); });
    logoutBtn.addEventListener('click', handleLogout);
    mapChoicesContainer.addEventListener('click', async (event) => {
        const choiceBtn = event.target.closest('.map-choice-btn'); if (!choiceBtn || choiceBtn.classList.contains('locked')) return;
        const themeId = choiceBtn.dataset.themeId;
        applyTheme(themeId);
        showScreen(gameArea);
        if (!isMuted) bgMusic.play().catch(e => console.log("Trình duyệt chặn phát nhạc."));
        await loadQuestions();
        startGame();
    });
    retryBtn.addEventListener('click', () => { showScreen(gameArea); startGame(); });
    playAgainBtn.addEventListener('click', () => {
        updateMapSelectionScreen();
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[0].id;
        applyTheme(initialThemeId);
        showScreen(mapSelectionScreen);
        createSnow();
    });
    soundControl.addEventListener('click', () => { isMuted = !isMuted; soundControl.textContent = isMuted ? '🔇' : '🔊'; bgMusic.muted = isMuted; });

    // --- KHỞI ĐỘNG BAN ĐẦU ---
    function initializeApp() {
        showScreen(mapSelectionScreen);
        userInfo.classList.remove('hidden');
        welcomeUserEl.textContent = `Xin chào, ${currentUser.username}!`;
        createSnow();
        updateMapSelectionScreen();
        // Áp dụng theme của map cao nhất đã mở khóa
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[themes.length - 1].id;
        applyTheme(initialThemeId);
    }
    
    // Kiểm tra phiên đăng nhập cũ
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        const accounts = getAccounts();
        const latestUserData = accounts.find(acc => acc.username.toLowerCase() === currentUser.username.toLowerCase());
        if(latestUserData) {
            currentUser.highestLevelUnlocked = latestUserData.highestLevelUnlocked;
        }
        initializeApp();
    } else {
        // Áp dụng theme mặc định cho màn hình đăng nhập
        applyTheme('rabbit');
        showScreen(authScreen);
        showLoginScreen();
    }
});