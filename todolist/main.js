/* 
1. 유저가 값을 입력한다.
2. + 버튼을 클릭하면, 할일이 추가 된다.
3. delete버튼을 누르면 할일이 삭제된다.
4. check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
- 체크 버튼을 클릭하는 순간 true - false
- true이면 끝난걸로 간주하고 밑줄 보여주기
- false이면 안끝난걸로 간주하고 그대로
5. 진행중 끝남 탭을 누르면, 언더바가 이동한다.
6. 끝남탭은 끝난 아이템만, 진행중탭은 진행중인 아이탬만
7. 전체 탭을 누르면 다시 전체 아이템으로 돌아옴
*/

let taskList = [];
let filterList = [];
let mode = "all";

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");


// 이벤트
addButton.addEventListener("click", addTask);

// 필터
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

// 함수 : 리스트 담기
function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  }
  taskList.push(task);
  render();

  console.log(taskList);
}

// 함수 : 그리기
function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }

  let resultHTML = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task-done">${list[i].taskContent}</div>
      <div>
        <button onClick="toggleComplete('${list[i].id}')">Check</button>
        <button onClick="deleteTask('${list[i].id}')">Delete</button>
      </div>
    </div>`;
    } else {
      resultHTML += `<div class="task">
      <div>${list[i].taskContent}</div>
      <div>
        <button onClick="toggleComplete('${list[i].id}')">Check</button>
        <button onClick="deleteTask('${list[i].id}')">Delete</button>
      </div>
    </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

// 함수 : 완료 체크 버튼
// !taskList[i].isComplete; = 현재 값의 반대 값을 가져온다.
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if(taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}


function filter(event) {
  mode = event.target.id;
  filterList = [];
  
  document.getElementById("under-line").style.width = event.target.offsetWidth + "px";
  document.getElementById("under-line").style.top = event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("under-line").style.left = event.target.offsetLeft + "px";

  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}


// 함수 : 랜덤 아이디 생성
function randomIDGenerate() {
  return '_' + Math.random().toString(36).substring(2, 9);
}

// 함수 : 삭제
// 어레이에있는 리스트를 삭제한다.
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if(taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}