document.addEventListener('DOMContentLoaded', () => {
    // === CẤU TRÚC THEME (MAP) THEO LEVEL - PHIÊN BẢN 15 MAP ===
    const themes = [
        // Level 1-8 giữ nguyên
        { id: 'rabbit', level: 1, name: "Vườn Thỏ Ngọc", playerIcon: '🥕', character: '🐰', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã giải cứu Thỏ Ngọc!", gameMode: 'normal', colors: { '--bg-color': '#ffe5ec', '--primary-color': '#ff75a0', '--secondary-color': '#ffb3c6', '--text-color': '#c94b73', '--secondary-color-translucent': 'rgba(255, 117, 160, 0.85)', '--primary-color-dark': '#c94b73' } },
        { id: 'otter', level: 2, name: "Vịnh Rái Cá Vui Vẻ", playerIcon: '🐚', character: '🦦', winTitle: "KHÁM PHÁ THÀNH CÔNG!", winSubtitle: "Bé đã giúp Rái Cá tìm thấy kho báu!", gameMode: 'normal', colors: { '--bg-color': '#e0f7fa', '--primary-color': '#00796b', '--secondary-color': '#004d40', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(0, 121, 107, 0.8)', '--primary-color-dark': '#004d40' } },
        { id: 'sprout', level: 3, name: "Khu Rừng Mầm Cây", playerIcon: '💧', character: '🌱', winCharacter: '🌳', winTitle: "TUYỆT VỜI!", winSubtitle: "Nhờ bé, Mầm Cây đã thành cây đại thụ!", gameMode: 'normal', colors: { '--bg-color': '#e8f5e9', '--primary-color': '#4CAF50', '--secondary-color': '#81c784', '--text-color': '#2e7d32', '--secondary-color-translucent': 'rgba(76, 175, 80, 0.85)', '--primary-color-dark': '#2e7d32' } },
        { id: 'duck', level: 4, name: "Giải Cứu Vịt Con", playerIcon: '☂️', character: '🐥', winCharacter: '🦆', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã đưa Vịt Con về nhà an toàn!", gameMode: 'timed', colors: { '--bg-color': '#e3f2fd', '--primary-color': '#ffc107', '--secondary-color': '#42a5f5', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(66, 165, 245, 0.85)', '--primary-color-dark': '#c79100' } },
        { id: 'monkey', level: 5, name: "Giải mã Chú Khỉ Buồn", playerIcon: '❓', character: '🐒', winCharacter: '🐵', winTitle: "GIẢI MÃ THÀNH CÔNG!", winSubtitle: "Bé đã làm Chú Khỉ vui trở lại rồi!", gameMode: 'survival', colors: { '--bg-color': '#333', '--container-bg': '#1a1a1a', '--primary-color': '#f5f5f5', '--secondary-color': '#777', '--text-color': '#ccc', '--correct-color': '#a5d6a7', '--incorrect-color': '#ef9a9a', '--secondary-color-translucent': 'rgba(200, 200, 200, 0.5)', '--primary-color-dark': '#ccc' } },
        { id: 'astronaut', level: 6, name: "Phi hành gia lạc lối", playerIcon: '🚀', character: '🧑‍🚀', winTitle: "VỀ NHÀ THÀNH CÔNG!", winSubtitle: "Bé đã giúp phi hành gia tìm đường về Trái Đất!", gameMode: 'normal', colors: { '--bg-color': '#1a237e', '--primary-color': '#fbc02d', '--secondary-color': '#5c6bc0', '--text-color': '#e8eaf6', '--secondary-color-translucent': 'rgba(92, 107, 192, 0.8)', '--primary-color-dark': '#f9a825' } },
        { id: 'detective', level: 7, name: "Thám tử Nhí tìm đồ", playerIcon: '🔦', character: '🕵️', winTitle: "PHÁ ÁN THÀNH CÔNG!", winSubtitle: "Bé đã tìm ra tất cả các đồ vật bị mất!", gameMode: 'survival', colors: { '--bg-color': '#d7ccc8', '--primary-color': '#5d4037', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.8)', '--primary-color-dark': '#3e2723' } },
        { id: 'dragon', level: 8, name: "Kho báu Rồng Lửa", playerIcon: '💎', character: '🐲', winTitle: "CHINH PHỤC THÀNH CÔNG!", winSubtitle: "Bé đã vượt qua thử thách của Rồng Lửa!", gameMode: 'hardcore', colors: { '--bg-color': '#bf360c', '--primary-color': '#ffab00', '--secondary-color': '#dd2c00', '--text-color': '#ffeb3b', '--secondary-color-translucent': 'rgba(221, 44, 0, 0.8)', '--primary-color-dark': '#ff8f00' } },
        
        // Level 9 (MỚI)
        { id: 'fox', level: 9, name: "Tay Đua Cáo Con", playerIcon: '🏁', character: '🦊', winTitle: "VỀ ĐÍCH!", winSubtitle: "Một tay đua cừ khôi!", gameMode: 'timed', timePerQuestion: 150, // Nhanh hơn
          colors: { '--bg-color': '#fbe9e7', '--primary-color': '#ff5722', '--secondary-color': '#ff8a65', '--text-color': '#bf360c', '--secondary-color-translucent': 'rgba(255, 138, 101, 0.85)', '--primary-color-dark': '#e64a19' } },
        
        // Level 10 (MỚI)
        { id: 'lion', level: 10, name: "Mê Cung Sư Tử", playerIcon: '🧭', character: '🦁', winTitle: "THOÁT KHỎI MÊ CUNG!", winSubtitle: "Trí tuệ của bé thật đáng nể!", gameMode: 'survival',
          colors: { '--bg-color': '#fff3e0', '--primary-color': '#ffa000', '--secondary-color': '#ffb74d', '--text-color': '#e65100', '--secondary-color-translucent': 'rgba(255, 183, 77, 0.85)', '--primary-color-dark': '#f57c00' } },
        
        // Level 11 (MỚI)
        { id: 'panda', level: 11, name: "Xưởng Vẽ Gấu Trúc", playerIcon: '🎨', character: '🐼', winTitle: "HOÀN THÀNH BỨC TRANH!", winSubtitle: "Bé là một họa sĩ tài năng!", gameMode: 'normal',
          colors: { '--bg-color': '#eceff1', '--primary-color': '#607d8b', '--secondary-color': '#90a4ae', '--text-color': '#37474f', '--secondary-color-translucent': 'rgba(144, 164, 174, 0.85)', '--primary-color-dark': '#455a64' } },

        // Level 12 (MỚI)
        { id: 'cat', level: 12, name: "Buổi Hòa Nhạc của Mèo", playerIcon: '🎵', character: '🐱', winCharacter: '🎸', winTitle: "BUỔI DIỄN THÀNH CÔNG!", winSubtitle: "Những giai điệu tuyệt vời!", gameMode: 'normal',
          colors: { '--bg-color': '#f3e5f5', '--primary-color': '#8e24aa', '--secondary-color': '#ba68c8', '--text-color': '#4a148c', '--secondary-color-translucent': 'rgba(186, 104, 200, 0.85)', '--primary-color-dark': '#6a1b9a' } },

        // Level 13 (MỚI)
        { id: 'dolphin', level: 13, name: "Cá Heo Tìm Ngọc Trai", playerIcon: '🫧', character: '🐬', winTitle: "TÌM THẤY KHO BÁU!", winSubtitle: "Nhanh như một chú cá heo!", gameMode: 'timed', timePerQuestion: 180,
          colors: { '--bg-color': '#e1f5fe', '--primary-color': '#039be5', '--secondary-color': '#4fc3f7', '--text-color': '#01579b', '--secondary-color-translucent': 'rgba(79, 195, 247, 0.85)', '--primary-color-dark': '#0277bd' } },
        
        // Level 14 (MỚI)
        { id: 'unicorn', level: 14, name: "Kỳ Lân Canh Giữ Sao", playerIcon: '⭐', character: '🦄', winTitle: "BẢO VỆ THÀNH CÔNG!", winSubtitle: "Bé đã giúp Kỳ Lân giữ gìn các vì sao!", gameMode: 'survival',
          colors: { '--bg-color': '#ede7f6', '--primary-color': '#651fff', '--secondary-color': '#7c4dff', '--text-color': '#311b92', '--secondary-color-translucent': 'rgba(124, 77, 255, 0.85)', '--primary-color-dark': '#4527a0' } },
        
        // Level 15 (MỚI)
        { id: 'phoenix', level: 15, name: "Đối mặt Phượng Hoàng", playerIcon: '🔥', character: '🐦', winCharacter: '🔥', winTitle: "THỬ THÁCH CUỐI CÙNG!", winSubtitle: "Bé đã chinh phục Thế Giới Diệu Kỳ!", gameMode: 'hardcore', timePerQuestion: 150,
          colors: { '--bg-color': '#ffccbc', '--primary-color': '#d84315', '--secondary-color': '#ff7043', '--text-color': '#bf360c', '--secondary-color-translucent': 'rgba(255, 112, 67, 0.85)', '--primary-color-dark': '#bf360c' } }
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
        showScreen(authScreen);
    }
    
    function saveProgress() {
        if (!currentUser || currentUser.username === 'Admin') return;
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
            const button = document.createElement('button'); button.className = 'map-choice-btn'; button.dataset.themeId = theme.id;
            let content = `<div class="map-icon-wrapper"><div class="map-icon">${theme.character}</div></div><div class="map-name">${theme.name}</div>`;
            if (isLocked) { button.classList.add('locked'); content += `<div class="lock-icon">🔒</div>`; }
            button.innerHTML = content;
            mapChoicesContainer.appendChild(button);
        });
    }
    function applyTheme(themeId) {
        let themeToApply = themes.find(t => t.id === themeId);
        if (!themeToApply) themeToApply = themes[0];
        currentTheme = themeToApply;
        document.body.className = `theme-${currentTheme.id}`;
        const root = document.documentElement;
        for (const [key, value] of Object.entries(currentTheme.colors)) { root.style.setProperty(key, value); }
        if (playerIcon) playerIcon.textContent = currentTheme.playerIcon;
        if (finalGoal) finalGoal.textContent = currentTheme.character;
        if (document.getElementById('win-title')) document.getElementById('win-title').textContent = currentTheme.winTitle;
        if (document.getElementById('character-image-win')) document.getElementById('character-image-win').textContent = currentTheme.winCharacter || currentTheme.character;
        if (document.getElementById('win-subtitle')) document.getElementById('win-subtitle').textContent = currentTheme.winSubtitle;
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
        const timePerPercent = currentTheme.timePerQuestion || 200; // 200ms mặc định, có thể override
        const totalTime = timePerPercent * 100 / 1000; // Tổng thời gian tính bằng giây
        timerBar.style.transition = `width ${totalTime}s linear`;
        timerInterval = setInterval(() => {
            timeLeft -= 1;
            // timerBar.style.width = timeLeft + '%'; // Không cần nữa vì transition đã xử lý
            if (timeLeft <= 0) { clearInterval(timerInterval); gameOver('Hết giờ rồi!'); }
        }, timePerPercent);
        // Chạy ngay lập tức để thanh bắt đầu chạy
        setTimeout(() => { timerBar.style.width = '0%'; }, 10);
    }
    
    function resetTimer() {
        clearInterval(timerInterval);
        timeLeft = 100;
        timerBar.style.transition = 'none';
        timerBar.style.width = '100%';
        void timerBar.offsetWidth; // Force reflow
        startTimer(); // Bắt đầu lại timer với cài đặt mới
    }


    // --- CÁC HÀM XỬ LÝ TRÒ CHƠI ---
    async function loadQuestions() { if (fullQuestionBank.length > 0) return; try { const response = await fetch('data.txt'); const textData = await response.text(); fullQuestionBank = textData.trim().split('\n').filter(line => line && !line.startsWith('#')).map(line => { const parts = line.split('|'); return { question: parts[0], options: [parts[1], parts[2], parts[3], parts[4]], correct: parts[5].trim() }; }); } catch (error) { console.error("Lỗi tải file câu hỏi:", error); } }
    
    function startGame() {
        currentQuestionIndex = 0;
        heartContainer.classList.add('hidden'); timerContainer.classList.add('hidden');
        clearInterval(timerInterval);
        if (currentTheme.gameMode === 'survival') { playerHearts = 3; heartContainer.classList.remove('hidden'); updateHeartsDisplay(); }
        else if (currentTheme.gameMode === 'timed') { timerContainer.classList.remove('hidden'); startTimer(); }
        else if (currentTheme.gameMode === 'hardcore') { playerHearts = 1; heartContainer.classList.remove('hidden'); updateHeartsDisplay(); timerContainer.classList.remove('hidden'); startTimer(); }
        questionsForCurrentRound = fullQuestionBank.sort(() => 0.5 - Math.random()).slice(0, 10);
        createProgressMap(); updateProgressMap(); displayQuestion();
    }
    
    function displayQuestion() {
        if (currentQuestionIndex >= questionsForCurrentRound.length) { endGame(); return; }
        questionCounter.textContent = `Câu ${currentQuestionIndex + 1} / 10`;
        const currentQuestion = questionsForCurrentRound[currentQuestionIndex];
        questionText.textContent = currentQuestion.question; feedbackMessage.textContent = ''; answerButtonsContainer.innerHTML = '';
        const options = ['A', 'B', 'C', 'D'];
        currentQuestion.options.forEach((optionText, index) => { const button = document.createElement('button'); button.classList.add('answer-btn'); button.dataset.option = options[index]; button.textContent = `${options[index]}. ${optionText}`; button.addEventListener('click', handleAnswerSelection); answerButtonsContainer.appendChild(button); });
        
        // Reset timer cho mỗi câu hỏi nếu là chế độ timed/hardcore
        if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') {
            resetTimer();
        }
    }
    
    function handleAnswerSelection(event) {
        const allButtons = answerButtonsContainer.querySelectorAll('.answer-btn'); allButtons.forEach(btn => btn.disabled = true);
        const selectedOption = event.target.dataset.option; const currentQuestion = questionsForCurrentRound[currentQuestionIndex];
        
        // Dừng timer ngay khi trả lời
        if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') {
            clearInterval(timerInterval);
        }
        
        if (selectedOption === currentQuestion.correct) {
            if (!isMuted) correctSound.play();
            correctMessage.textContent = ["Chuẩn luôn!", "Bé giỏi quá!", "Siêu đấy!", "Đúng rồi nè!", "Tuyệt vời!"][Math.floor(Math.random() * 5)];
            correctOverlay.classList.remove('hidden');
            setTimeout(() => { correctOverlay.classList.add('hidden'); currentQuestionIndex++; updateProgressMap(); displayQuestion(); }, 1800);
        } else {
            if (!isMuted) wrongSound.play();
            if (currentTheme.gameMode === 'hardcore') { setTimeout(() => gameOver('Sai một câu là thua rồi! Cẩn thận hơn nhé!'), 1000); return; }
            if (currentTheme.gameMode === 'survival') { playerHearts--; updateHeartsDisplay(); if (playerHearts <= 0) { setTimeout(() => gameOver('Hết mạng rồi!'), 1000); return; } }
            feedbackMessage.textContent = 'Oops, sai mất rồi! Thử lại nhé!';
            setTimeout(() => { allButtons.forEach(btn => btn.disabled = false); feedbackMessage.textContent = ''; if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') { startTimer(); } }, 1500); // Bắt đầu lại timer khi cho thử lại
        }
    }
    
    function endGame() {
        clearInterval(timerInterval);
        const nextLevel = currentTheme.level + 1; const unlockMessageEl = document.getElementById('unlock-message');
        if (currentUser.username !== 'Admin' && nextLevel > currentUser.highestLevelUnlocked && themes.some(t => t.level === nextLevel)) {
            currentUser.highestLevelUnlocked = nextLevel;
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser)); saveProgress();
            const newMap = themes.find(t => t.level === nextLevel);
            unlockMessageEl.textContent = `🎉 Đã mở khóa: ${newMap.name}! 🎉`; unlockMessageEl.classList.remove('hidden');
        } else { unlockMessageEl.classList.add('hidden'); }
        showScreen(winScreen);
    }
    
    function gameOver(reason) { clearInterval(timerInterval); document.getElementById('game-over-text').textContent = reason || 'Đừng nản chí, thử lại nhé!'; showScreen(gameOverScreen); }
    
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
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[themes.length - 1].id;
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
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[themes.length - 1].id;
        applyTheme(initialThemeId);
    }
    
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
        applyTheme('rabbit');
        showScreen(authScreen);
        showLoginScreen();
    }
});