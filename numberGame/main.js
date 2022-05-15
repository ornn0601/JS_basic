/* 
1. 랜덤번호 지정
2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
4. 랜덤번호가 < 유저번호 : Down
5. 랜덤번호가 > 유저번호 : Up
6. Reset 버튼을 누르면 게임이 리셋된다.
7. 5번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
8. 유저가 1~100 범위 밖에 숫자를 입력하면, 알려준다. 기회를 깍지 않는다.
9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다. 
*/

/* 
Math.random()은 1~99까지(100에 가까운 99.999...) 적용된다. floor를 통해 소수점 아래 자리를 삭제하기 때문에 +1을 통해 100을 만들어준다.
*/


let computerNum = 0;
let chances = 5;
let gameOver = false;
let history = [];

let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

userInput.addEventListener("focus", function() {
  userInput.value = "";
});


// 랜덤 숫자 생성 1~100까지
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
pickRandomNum();

// 게임 시작
function play() {
  let userValue = userInput.value;

  // 유효성 검사
  if (userValue < 1 || userValue >100) {
    resultArea.textContent = "1과 100사이 숫자로를 입력해 주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }

  // 찬스 사용
  chances --;
  chanceArea.textContent = `남은 기회 : ${chances}번`

  // up / down 안내
  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
  } else {
    resultArea.textContent = "정답입니다!!!";
    gameOver = true;
  }

  // 히스토리 배열에 추가
  history.push(userValue);

  // chances 종료
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

// 초기화
function reset() {
  // user input이 깨끗하게 정리되고, 안내글도 처음글로 변경된다.
  userInput.value = "";
  resultArea.textContent = "결과가 나온다.";
  pickRandomNum(); // 새로운 랜덤 숫자 생성
}