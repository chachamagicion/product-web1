document.addEventListener('DOMContentLoaded', () => {
    const menuResult = document.getElementById('menu-result');
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const additionalMenusContainer = document.querySelector('.additional-menus-container');
    const additionalMenuItems = document.querySelectorAll('.additional-menu-item');

    const menuOptions = [
        "치킨", "피자", "삼겹살", "된장찌개", "김치찌개", "떡볶이", "초밥", "파스타", 
        "햄버거", "부대찌개", "냉면", "비빔밥", "카레", "돈까스", "짜장면", "짬뽕", 
        "탕수육", "마라탕", "양꼬치", "족발", "보쌈", "청국장", "순두부찌개", "갈비탕", 
        "설렁탕", "곰탕", "육개장", "삼계탕", "추어탕", "매운탕", "알탕", "닭볶음탕", 
        "찜닭", "아구찜", "해물찜", "갈비찜", "김치찜", "제육볶음", "오징어볶음", 
        "닭갈비", "떡갈비", "불고기", "두루치기", "갈비", "곱창", "막창", "닭발", 
        "생선구이", "조림", "볶음밥", "김밥", "주먹밥", "덮밥", "국밥", "국수", 
        "칼국수", "수제비", "라면", "쫄면", "만두", "튀김", "전", "파전", "김치전", 
        "감자전", "백반", "오므라이스", "샌드위치", "리조또", "스테이크", "샐러드", 
        "회", "우동", "라멘", "소바", "깐풍기", "깐쇼새우", "마파두부", "양장피", 
        "쌀국수", "분짜", "반쎄오", "팟타이", "카오팟", "똠얌꿍", "푸팟퐁커리", 
        "탄두리치킨", "타코", "브리또", "케밥", "샥슈카", "훠궈", "규카츠", "규동", 
        "야끼우동", "김치볶음밥", "퀘사디아", "짜파게티", "샤브샤브", "낙곱새", 
        "곱창전골", "모듬초밥", "콩국수", "그릭요거트", "요아정", "차돌짬뽕", "라볶이", 
        "서브웨이", "감자탕", "고등어구이", "간장계란현미밥", "호박죽", "매운갈비찜", 
        "등갈비찜", "순대국밥", "콩나물국밥", "만두전골", "크림짬뽕", "오삼불고기", 
        "로제떡볶이", "오꼬노미야끼", "등촌칼국수", "바지락칼국수", "곱도리탕", 
        "육회비빔밥", "새우튀김덮밥", "제육덮밥", "마라샹궈", "꿔바로우", "비빔면", 
        "불닭볶음면", "쪽갈비", "제육삼밥", "꼬막비빔밥", "김치날치알밥", "엽기떡볶이", 
        "스키야키", "육쌈냉면", "감자수제비", "뚝배기불고기", "김치수제비", "마파두부밥", 
        "스팸마요덮밥", "닭강정", "불족발", "밀푀유나베", "짬뽕순두부", "목살필라프", 
        "두부김치", "차돌전골", "들깨수제비", "막국수", "통오징어숙회무침", 
        "명란파스타", "바질파스타", "전어회", "떡튀순", "미나리삼겹살", "쭈꾸미삼겹살", 
        "전주비빔밥", "포케"
    ];

    generateBtn.addEventListener('click', () => {
        additionalMenusContainer.style.display = 'none';
        const allMenuItems = [menuResult, ...additionalMenuItems];
        
        let dots = 1;
        const interval = setInterval(() => {
            const dotString = '.'.repeat(dots);
            allMenuItems.forEach(item => {
                item.textContent = dotString;
                item.classList.add('thinking');
            });
            dots = (dots % 3) + 1;
        }, 300);

        setTimeout(() => {
            clearInterval(interval);
            allMenuItems.forEach(item => item.classList.remove('thinking'));

            const shuffledMenus = [...menuOptions].sort(() => 0.5 - Math.random());
            const selectedMenus = shuffledMenus.slice(0, 4);

            menuResult.textContent = selectedMenus[0];

            additionalMenuItems.forEach((item, index) => {
                item.textContent = selectedMenus[index + 1];
            });
            
            additionalMenusContainer.style.display = 'block';

        }, 1500);
    });

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

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '라이트 모드';
    }
});
