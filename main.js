document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    // 테마 변경 기능
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '다크 모드';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '라이트 모드';
        }
    });

    // 로또 번호 추첨 기능
    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = ''; // 이전 번호 삭제
        const numbers = generateLottoNumbers();
        numbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = 'lotto-ball';
            ball.textContent = number;
            lottoNumbersContainer.appendChild(ball);
        });
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }
});
