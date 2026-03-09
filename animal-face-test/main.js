// Teachable Machine 모델 관련 로직
const URL = "https://teachablemachine.withgoogle.com/models/-5yud-afu/";
let model, webcam, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // 모델과 메타데이터 로드
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // 웹캠 설정
    const flip = true; // 웹캠 좌우 반전
    webcam = new tmImage.Webcam(300, 300, flip); // 너비, 높이, 좌우반전
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);

    // DOM에 웹캠 캔버스 추가
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    // 시작 버튼 숨기기
    document.querySelector(".start-btn").style.display = 'none';
    
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { 
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // 웹캠 프레임 업데이트
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let maxProbability = -1;
    let primaryPrediction = "";

    for (let i = 0; i < maxPredictions; i++) {
        const probability = prediction[i].probability;
        const className = prediction[i].className;
        
        let resultText = ``;
        if (className === "고양이상") {
            resultText = `🐱 고양이상일 확률: ${(probability * 100).toFixed(2)}%`;
        } else if (className === "강아지상") {
            resultText = `🐶 강아지상일 확률: ${(probability * 100).toFixed(2)}%`;
        }

        labelContainer.childNodes[i].innerHTML = resultText;

        if (probability > maxProbability) {
            maxProbability = probability;
            primaryPrediction = className;
        }
    }
    
    for (let i = 0; i < maxPredictions; i++) {
        if (labelContainer.childNodes[i].innerHTML.includes(primaryPrediction)) {
            labelContainer.childNodes[i].classList.add('primary');
        } else {
            labelContainer.childNodes[i].classList.remove('primary');
        }
    }
}
