document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const generateBtn = document.getElementById('generate-btn');
    const menuResultContainer = document.getElementById('menu-result');

    // 저녁 메뉴 리스트
    const dinnerMenus = [
        // 한식
        "김치찌개", "된장찌개", "부대찌개", "비빔밥", "불고기", "제육볶음",
        "삼겹살", "갈비찜", "닭갈비", "순두부찌개", "해물파전", "잡채",
        // 중식
        "짜장면", "짬뽕", "탕수육", "마파두부", "양장피", "깐풍기",
        // 일식
        "초밥", "라멘", "돈까스", "우동", "회덮밥", "가츠동",
        // 양식
        "피자", "파스타", "스테이크", "리조또", "햄버거", "시저 샐러드",
        // 분식
        "떡볶이", "순대", "튀김", "김밥", "라면", 
        // 기타
        "치킨", "족발", "보쌈", "곱창", "쌀국수", "카레"
    ];

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

    // 메뉴 추첨 기능
    generateBtn.addEventListener('click', () => {
        // 결과를 표시하기 전에 "추첨 중..." 메시지 표시
        menuResultContainer.innerHTML = '';
        const thinkingElement = document.createElement('div');
        thinkingElement.className = 'menu-item thinking';
        thinkingElement.textContent = '...';
        menuResultContainer.appendChild(thinkingElement);

        // 1초 후에 결과 표시
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            const selectedMenu = dinnerMenus[randomIndex];

            menuResultContainer.innerHTML = ''; // "추첨 중..." 메시지 삭제
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.textContent = selectedMenu;
            menuResultContainer.appendChild(menuItem);
        }, 1000); // 1초 지연
    });
});
