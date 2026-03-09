document.addEventListener('DOMContentLoaded', () => {
    const menuResult = document.getElementById('menu-result');
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');

    const menuOptions = [
        "치킨", "피자", "삼겹살", "된장찌개", "김치찌개", "떡볶이", "초밥", 
        "파스타", "햄버거", "부대찌개", "냉면", "비빔밥", "카레", "돈까스",
        "짜장면", "짬뽕", "탕수육", "마라탕", "양꼬치", "족발", "보쌈"
    ];

    generateBtn.addEventListener('click', () => {
        // 추첨 중 효과
        menuResult.textContent = '.';
        menuResult.classList.add('thinking');
        let dots = 1;
        const interval = setInterval(() => {
            menuResult.textContent = '.'.repeat(dots);
            dots = (dots % 3) + 1;
        }, 300);

        // 1.5초 후 결과 표시
        setTimeout(() => {
            clearInterval(interval);
            menuResult.classList.remove('thinking');
            const randomIndex = Math.floor(Math.random() * menuOptions.length);
            menuResult.textContent = menuOptions[randomIndex];
        }, 1500);
    });

    // 테마 변경 기능
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '다크 모드';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '라이트 모드';
            localStorage.setItem('theme', 'dark');
        }
    });

    // 페이지 로드 시 저장된 테마 적용
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '라이트 모드';
    }
});
