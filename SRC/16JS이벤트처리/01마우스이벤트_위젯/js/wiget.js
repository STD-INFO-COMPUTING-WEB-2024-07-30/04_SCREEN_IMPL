document.addEventListener("DOMContentLoaded", function () {
  //전역
  let category = null;
  const todoList = [];
  const timerList = [];

  //타이머Interval 저장
  let timerId = 0;
  let TimerIntervalList = [];

  //시계Interval 저장
  let clockId = 0 ;
  let clockIntervalList = [];


  //ITEM 이동
  let isMoving = false;
  let isDelete = false;
  let offsetX, offsetY;
  let draggedElement = null;
  let cnt = 0;

  //사이즈 조절
  let resizable = null;
  let resizeDirection = "";
  let isResizing = false;
  let originalWidth, originalHeight, originalX, originalY;

  //-----------------------------------
  // ASIDE 클릭시
  //-----------------------------------
  const todoEl = document.querySelector("#todo");
  const timerEl = document.querySelector("#timer");
  const clockEl = document.querySelector("#clock");
  const calendarEl = document.querySelector("#calendar");

  //-----------------------------------
  //aside에서 Drag한 Item Category 확인
  //-----------------------------------
  todoEl.addEventListener("dragstart", (e) => {
    category = todoEl.getAttribute("data-category");
    console.log("cat", category);
  });
  timerEl.addEventListener("dragstart", (e) => {
    category = timerEl.getAttribute("data-category");
    console.log("cat", category);
  });
  clockEl.addEventListener("dragstart", (e) => {
    category = clockEl.getAttribute("data-category");
    console.log("cat", category);
  });
  calendarEl.addEventListener("dragstart", (e) => {
    category = calendarEl.getAttribute("data-category");
    console.log("cat", category);
  });


  //-----------------------------------


  const articleEl = document.querySelector("article");
  articleEl.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  articleEl.addEventListener("drop", (e) => {
    console.log("drop", e.target);

    // 좌표 계산 (e.clientX, Y : 마우스좌표 / rect.left: 요소의 x좌표)
    const rect = articleEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 새 div 생성
    let newDiv = null;

    // const newDiv = null;

    if (category === "todo") newDiv = createTodo(articleEl);
    else if (category === "timer") newDiv = createTimer(articleEl);
    else if (category === "clock") newDiv = createClock(articleEl);
    else if (category === "calendar") newDiv = createCalendar(articleEl);
 

    // 마우스 버튼을 눌렀을 때 드래그 시작
    newDiv.addEventListener("contextmenu", (e) => {
      if (!isMoving) {
        if (isDelete) {
          isDelete = false;
          return;
        }
        startMoving(newDiv, e);
      } else {
        isMoving = false;
        stopMoving(e);
      }
    });

    // 테두리 근처로 갈때 마우스 포인터 변경
    newDiv.addEventListener("mousemove", (e) => {
      const rect = newDiv.getBoundingClientRect();
      const offset = 30; // 테두리 감지 범위

      resizable = newDiv;

      // console.log("mousemove..사이즈조절위한 포인터 변경")
      // 마우스 위치에 따라 커서 모양과 크기 조정 방향 설정
      if (
        e.clientX >= rect.right - offset &&
        e.clientY >= rect.bottom - offset
      ) {
        newDiv.style.cursor = "se-resize"; // 오른쪽 아래 모서리
        console.log("se..");
        resizeDirection = "se";

        // else if (e.clientX >= rect.right - offset && e.clientY <= rect.top + offset) {
        //     newDiv.style.cursor = 'ne-resize'; // 오른쪽 위 모서리
        //     resizeDirection = 'ne';
        // }
        // else if (e.clientX <= rect.left + offset && e.clientY >= rect.bottom - offset) {
        //     newDiv.style.cursor = 'sw-resize'; // 왼쪽 아래 모서리
        //     resizeDirection = 'sw';
        // } else if (e.clientX <= rect.left + offset && e.clientY <= rect.top + offset) {
        //     newDiv.style.cursor = 'nw-resize'; // 왼쪽 위 모서리
        //     resizeDirection = 'nw';
        // } else if (e.clientX >= rect.right - offset) {
        //     newDiv.style.cursor = 'e-resize'; // 오른쪽 테두리
        //     resizeDirection = 'e';
        // } else if (e.clientX <= rect.left + offset) {
        //     newDiv.style.cursor = 'w-resize'; // 왼쪽 테두리
        //     resizeDirection = 'w';
        // } else if (e.clientY >= rect.bottom - offset) {
        //     newDiv.style.cursor = 's-resize'; // 아래쪽 테두리
        //     resizeDirection = 's';
        // } else if (e.clientY <= rect.top + offset) {
        //     newDiv.style.cursor = 'n-resize'; // 위쪽 테두리
        //     resizeDirection = 'n';
      } else {
        newDiv.style.cursor = "default";
        resizeDirection = "";
      }
    });

    //마우스버튼을 눌렀을때
    newDiv.addEventListener("mousedown", function (e) {
      if (resizeDirection) {
        console.log("mousemove..사이즈조절 처리위한 mousedown");
        isResizing = true;
        originalWidth = resizable.offsetWidth;
        originalHeight = resizable.offsetHeight;
        originalX = e.clientX;
        originalY = e.clientY;

        // 마우스 움직임 이벤트 리스너 추가
        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResize);
      }
    });

    // 위치 지정
    newDiv.style.position = "absolute";
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y}px`;

    articleEl.appendChild(newDiv);

    e.preventDefault();

    //--------------------------
    // 위젯 옮기기
    //--------------------------
    function startMoving(newDiv, e) {
      console.log("startMoving..");

      isMoving = true; // 드래그 상태 설정
      draggedElement = newDiv; // 현재 드래그 중인 요소 저장
      offsetX = e.offsetX; // 클릭 지점과 요소의 왼쪽 상단 사이의 X 거리
      offsetY = e.offsetY; // 클릭 지점과 요소의 왼쪽 상단 사이의 Y 거리
      console.log("!");
      draggedElement.style.opacity = ".7";

      document.addEventListener("mousemove", moving);
    }
    function moving(e) {
      //   console.log("moving..", e);
      if (isMoving && draggedElement) {
        // 드래그 중일 때만 실행
        const articleRect = articleEl.getBoundingClientRect();
        const x = e.clientX - articleRect.left - offsetX;
        const y = e.clientY - articleRect.top - offsetY;

        //
        draggedElement.style.position = "absolute";
        draggedElement.style.left = `${x}px`;
        draggedElement.style.top = `${y}px`;
      }
    }
    function stopMoving(e) {
      console.log("stopMoving..");
      const articleRect = articleEl.getBoundingClientRect();
      const x = e.clientX - articleRect.left - offsetX;
      const y = e.clientY - articleRect.top - offsetY;
      draggedElement.style.position = "absolute";
      draggedElement.style.left = `${x}px`;
      draggedElement.style.top = `${y}px`;
      draggedElement.style.opacity = "1";

      document.removeEventListener("mousemove", moving);
    }

    //--------------------------
    // 위젯 크기조절
    //--------------------------

    function resize(e) {
      if (!isResizing) return;
      if (resizeDirection === "e") {
        const width = originalWidth + (e.clientX - originalX);
        resizable.style.width = `${width}px`;
      } else if (resizeDirection === "w") {
        const width = originalWidth - (e.clientX - originalX);
        resizable.style.width = `${width}px`;
        resizable.style.left = `${e.clientX}px`;
      } else if (resizeDirection === "s") {
        const height = originalHeight + (e.clientY - originalY);
        resizable.style.height = `${height}px`;
      } else if (resizeDirection === "n") {
        const height = originalHeight - (e.clientY - originalY);
        resizable.style.height = `${height}px`;
        resizable.style.top = `${e.clientY}px`;
      } else if (resizeDirection === "se") {
        const width = originalWidth + (e.clientX - originalX);
        const height = originalHeight + (e.clientY - originalY);
        resizable.style.width = `${width}px`;
        resizable.style.height = `${height}px`;
      } else if (resizeDirection === "sw") {
        const width = originalWidth - (e.clientX - originalX);
        const height = originalHeight + (e.clientY - originalY);
        resizable.style.width = `${width}px`;
        resizable.style.height = `${height}px`;
        resizable.style.left = `${e.clientX}px`;
      } else if (resizeDirection === "ne") {
        const width = originalWidth + (e.clientX - originalX);
        const height = originalHeight - (e.clientY - originalY);
        resizable.style.width = `${width}px`;
        resizable.style.height = `${height}px`;
        resizable.style.top = `${e.clientY}px`;
      } else if (resizeDirection === "nw") {
        const width = originalWidth - (e.clientX - originalX);
        const height = originalHeight - (e.clientY - originalY);
        resizable.style.width = `${width}px`;
        resizable.style.height = `${height}px`;
        resizable.style.left = `${e.clientX}px`;
        resizable.style.top = `${e.clientY}px`;
      }
    }

    function stopResize() {
      isResizing = false;
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
    }

    //
  });

  //------------------------
  //Todo 만들기
  //------------------------
  const createTodo = (parentNode) => {
    console.log("createTodo...");
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.classList.add("todo-item");

    const headDiv = document.createElement("div");
    headDiv.setAttribute("style", "");
    headDiv.classList.add("head");

    //컨트롤 박스
    const controlBox = document.createElement("div");
    controlBox.setAttribute(
      "style",
      "color:black;font-weight:600;padding:5px 0;border-bottom:1px solid;padding:2px;display:flex;justify-content:right;align-items:center;background-color:#FFD67F;"
    );
    headDiv.appendChild(controlBox);

    //컨트롤 박스(제목)
    const title = document.createElement("span");
    title.classList.add("material-symbols-outlined");
    title.setAttribute(
      "style",
      "padding:5px 0px;font-size:.8rem;margin-right:5px;cursor:pointer;flex-grow:1;"
    );
    title.innerHTML = "제목없음";
    controlBox.appendChild(title);

    //컨트롤 박스(메뉴)
    const menuBtn = document.createElement("span");
    menuBtn.classList.add("material-symbols-outlined");
    menuBtn.setAttribute(
      "style",
      "font-size:.9rem;margin-right:5px;cursor:pointer"
    );
    menuBtn.innerHTML = "more_vert";
    controlBox.appendChild(menuBtn);
    menuBtn.addEventListener("click", (e) => {
      //메뉴창 활성화(저장-쿠키에 저장예정)
      console.log("clicked menu..");
    });

    //컨트롤 박스(취소)
    const cancelBtn = document.createElement("span");
    cancelBtn.classList.add("material-symbols-outlined");
    cancelBtn.innerHTML = "cancel";

    cancelBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
    controlBox.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", (e) => {
      const item = cancelBtn.parentNode.parentNode.parentNode;
      console.log(item);
      const isdel = confirm("정말 삭제하시겠습니까?");
      if (isdel) {
        isDelete = true;
        item.remove();
      }
      e.preventDefault();
    });

    const addInput = document.createElement("input");
    addInput.classList.add("form-control");
    addInput.setAttribute(
      "style",
      "border : 0;border-bottom:1px solid gray;height:30px;outline:none;border-radius:0;"
    );
    addInput.setAttribute("placeholder", "할일을 입력하세요.");
    headDiv.appendChild(addInput);

    //todo 추가버튼
    addInput.addEventListener("keydown", (e) => {
      console.log("clicked...");
      if (e.keyCode == 13) {
        const text = addInput.value;
        //ITEM단위
        const todoItem = document.createElement("div");
        todoItem.setAttribute(
          "style",
          "margin:0 auto;width:100%;border-bottom:1px solid gray;position:relative;"
        );
        const curDiv = todoList.filter((item) => item === newDiv)[0];
        console.log(curDiv);

        const bodyEl = curDiv.querySelector(".body");

        const tableEl = document.createElement("table");
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.setAttribute(
          "style",
          "border-right:1px solid gray;;margin-right:5px;width:35px;display:flex;height:35px;justify-content:center;align-items:center;"
        );
        const chk = document.createElement("input");
        chk.setAttribute("type", "checkbox");
        chk.setAttribute("style", "position:relative;z-index:5555");
        chk.addEventListener("change", (e) => {
          console.log("checked..");
          const parent = chk.parentNode.parentNode.parentNode.parentNode;
          if (e.target.checked) {
            const line = document.createElement("span");
            parent.appendChild(line);
            line.classList.add("todo-checker");
          } else {
            parent.querySelector(".todo-checker").remove();
          }

          console.log(parent);
        });
        td1.appendChild(chk);

        const td2 = document.createElement("td");
        const input = document.createElement("input");
        input.setAttribute(
          "style",
          "width:calc(100% - 70px);height:100%;background-color: white;border:0;outline:none"
        );
        input.readOnly = true;
        input.value = text;
        td2.appendChild(input);
        td2.setAttribute("style", "width:100%;");

        const td3 = document.createElement("td");
        td3.setAttribute(
          "style",
          "width:35px;hieght:100%display:flex;justify-content:center;align-items:center;flex-direction:column;"
        );

        const up = document.createElement("span");
        const down = document.createElement("span");
        up.setAttribute(
          "style",
          "width:15px;height:15px;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;z-index:5555"
        );
        down.setAttribute(
          "style",
          "width:15px;height:15px;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;z-index:5555"
        );
        up.classList.add("material-symbols-outlined");
        down.classList.add("material-symbols-outlined");
        up.innerHTML = "arrow_drop_up";
        down.innerHTML = "arrow_drop_down";

        up.addEventListener("click", function () {
          const tbodyEl =
            up.parentNode.parentNode.parentNode.parentNode.parentNode; //body
          const curItem = up.parentNode.parentNode.parentNode.parentNode;
          const itemsEl = Array.from(tbodyEl.querySelectorAll("&>div"));
          const idx = itemsEl.indexOf(curItem);
          console.log("idx", idx);

          if (idx != 0 && idx != itemsEl.length) {
            itemsEl[idx] = itemsEl[idx - 1];
            itemsEl[idx - 1] = curItem;
            console.log("itemsEl", itemsEl);
          }
          while (tbodyEl.firstChild) {
            tbodyEl.removeChild(tbodyEl.firstChild);
          }
          itemsEl.forEach((el) => {
            tbodyEl.appendChild(el);
          });
        });
        down.addEventListener("click", function () {
          const tbodyEl =
            down.parentNode.parentNode.parentNode.parentNode.parentNode; //body
          const curItem = down.parentNode.parentNode.parentNode.parentNode;
          const itemsEl = Array.from(tbodyEl.querySelectorAll("&>div"));
          const idx = itemsEl.indexOf(curItem);
          console.log("idx", idx);

          if (idx != itemsEl.length - 1) {
            itemsEl[idx] = itemsEl[idx + 1];
            itemsEl[idx + 1] = curItem;
            console.log("itemsEl", itemsEl);
          }
          while (tbodyEl.firstChild) {
            tbodyEl.removeChild(tbodyEl.firstChild);
          }
          itemsEl.forEach((el) => {
            tbodyEl.appendChild(el);
          });
        });

        const td4 = document.createElement("td");
        td4.setAttribute(
          "style",
          "width:25px;padding : 0 3px;display:flex;justify-content:center;align-items:center;"
        );
        const del = document.createElement("span");
        del.classList.add("material-symbols-outlined");
        del.innerHTML = "delete";
        del.setAttribute(
          "style",
          "cursor:pointer;font-size:1rem;position:relative;z-index:5555"
        );
        del.addEventListener("click", () => {
          console.log("clicked..");
          const isDel = confirm("정말 삭제 하시겠습니까?");
          if (isDel) del.parentNode.parentNode.parentNode.parentNode.remove();
        });

        td4.appendChild(del);

        td3.appendChild(up);
        td3.appendChild(down);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableEl.appendChild(tr);

        todoItem.appendChild(tableEl);

        bodyEl.prepend(todoItem);
        addInput.value = "";
      }
    });

    const BodyDiv = document.createElement("div");
    BodyDiv.classList.add("body");

    newDiv.appendChild(headDiv);
    newDiv.appendChild(BodyDiv);

    parentNode.appendChild(newDiv);

    todoList.push(newDiv);
    return newDiv;
  };

  //------------------------
  //Timer 만들기
  //------------------------
  const createTimer = (parentNode) => {
    timerId++;

    console.log("createTimer...");
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.classList.add("timer-item");
    newDiv.setAttribute("data-timer-id", timerId);

    const headDiv = document.createElement("div");
    headDiv.classList.add("head");

    //컨트롤박스
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("control");
    controlDiv.setAttribute(
      "style",
      "border-bottom:1px solid;display:flex;justify-content:right;align-items:center;gap:5px;height:20px;"
    );
    headDiv.appendChild(controlDiv);

    const title = document.createElement("span");
    title.innerHTML = "제목없음";
    title.setAttribute("style", "font-size:.9rem;flex-grow:1");
    title.addEventListener("click", () => {
      console.log("clicked...");
    });


    //시작버튼
    const startBtn = document.createElement("div");
    startBtn.classList.add("material-symbols-outlined");
    startBtn.innerHTML = "play_arrow";
    startBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");

    startBtn.addEventListener("click", () => {
      const parentNode = startBtn.parentNode.parentNode.parentNode;
      const timerId = parentNode.getAttribute("data-timer-id");
      console.log("clicked.", timerId, typeof nowId);

      let timeObject = TimerIntervalList.find((item) => item.id === timerId)

      if(timeObject===undefined){
        timeObject = {
            title: "제목없음",
            id: timerId,
            intervalId: null,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
          TimerIntervalList.push(timeObject);
       }

       if(timeObject['intervalId']!=null)
          return ;
       
      

      const intervalId = setInterval(() => {
        
        timeObject["seconds"]++;

        if (timeObject["seconds"] == 60) {
          timeObject["seconds"] = 0;
          timeObject["minutes"]++;
        }
        if (timeObject["minutes"] == 60) {
          timeObject["minutes"] == 0;
          timeObject["hours"]++;
        }
        // 두 자리 숫자로 맞추기
        const formattedHours = String(timeObject["hours"]).padStart(2, "0");
        const formattedMinutes = String(timeObject["minutes"]).padStart(2, "0");
        const formattedSeconds = String(timeObject["seconds"]).padStart(2, "0");
       
        const nowTimeEl = parentNode.querySelector(".nowTime");
        nowTimeEl.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
     
      }, 1000);
      
      timeObject["intervalId"] = intervalId;


      

      console.log('add',TimerIntervalList)
    });

    //정지버튼
    const stopBtn = document.createElement("div");
    stopBtn.classList.add("material-symbols-outlined");
    stopBtn.innerHTML = "stop";
    stopBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
    stopBtn.addEventListener("click", () => {
     
      const item = cancelBtn.parentNode.parentNode.parentNode;
      const timerId = item.getAttribute("data-timer-id");
      
      const timerEl =  TimerIntervalList.filter(item=>item.id==timerId)[0]

      console.log('stop btn ..timerEl',timerEl['intervalId'])
      clearInterval(timerEl['intervalId']);
      timerEl['intervalId'] = null


   
    });

    //취소버튼
    const cancelBtn = document.createElement("div");
    cancelBtn.classList.add("material-symbols-outlined");
    cancelBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
    cancelBtn.innerHTML = "cancel";
    newDiv.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", (e) => {
      const item = cancelBtn.parentNode.parentNode.parentNode;
      const timerId = item.getAttribute('data-timer-id')
      const isdel = confirm("정말 삭제하시겠습니까?");
      if (isdel) {
        isDelete = true;
        //타이머LIST에서 동작하는 타이머 제거

        TimerIntervalList = TimerIntervalList.filter(
          (item) => item.id !== timerId
        );

        item.remove();
      }
      e.preventDefault();
    });

    controlDiv.appendChild(title);
    controlDiv.appendChild(startBtn);
    controlDiv.appendChild(stopBtn);
    controlDiv.appendChild(cancelBtn);

    const BodyDiv = document.createElement("div");
    BodyDiv.setAttribute(
      "style",
      "width:100%;height:calc(100% - 20px);position:relative;"
    );
    BodyDiv.classList.add("body");

    const Timer = document.createElement("div");
    Timer.setAttribute(
      "style",
      "width:100%;height:100%;font-size:1.8rem;display:flex;justify-content:center;align-items:center;gap:5px;"
    );
    Timer.innerHTML = `<span class='nowTime'>00:00:00</span><span style="font-size:.9rem;position:absolute;top:0;right:0;">(HH:MM:SS)</<span>`;
    BodyDiv.appendChild(Timer);

    newDiv.appendChild(headDiv);
    newDiv.appendChild(BodyDiv);

    parentNode.appendChild(newDiv);
    return newDiv;
  };



  //------------------------
  //CLOCK - https://re-hwi.tistory.com/118
  //------------------------
  function createClock(parentNode) {

    console.log("createClock...");
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.classList.add("clock-item");

    const headDiv = document.createElement("div");
    headDiv.classList.add("head");

    //컨트롤박스
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("control");
    controlDiv.setAttribute(
      "style",
      "border-bottom:1px solid;display:flex;justify-content:right;align-items:center;gap:5px;height:20px;"
    );
    headDiv.appendChild(controlDiv);

    const title = document.createElement("span");
    title.innerHTML = "제목없음";
    title.setAttribute("style", "font-size:.9rem;flex-grow:1");
    title.addEventListener("click", () => {
      console.log("clicked...");
    });


    //아날로그 모드
    const analogBtn = document.createElement("div");
    analogBtn.classList.add("material-symbols-outlined");
    analogBtn.innerHTML = "watch";
    analogBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
    analogBtn.addEventListener("click", () => {
      console.log('아날로그..')
    }); 

    //디지털모드
    const digitalBtn = document.createElement("div");
      digitalBtn.classList.add("material-symbols-outlined");
      digitalBtn.innerHTML = "123";
      digitalBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
      digitalBtn.addEventListener("click", () => {
        console.log('digitalBtn')
      });

    //종료
    const cancelBtn = document.createElement("div");
    cancelBtn.classList.add("material-symbols-outlined");
    cancelBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
    cancelBtn.innerHTML = "cancel";
    newDiv.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", (e) => {
      const item = cancelBtn.parentNode.parentNode.parentNode;
      const isdel = confirm("정말 삭제하시겠습니까?");
      if (isdel) {
        item.remove();
      }
      e.preventDefault();
    });

    controlDiv.appendChild(title);
    controlDiv.appendChild(analogBtn);
    controlDiv.appendChild(digitalBtn);
    controlDiv.appendChild(cancelBtn);


    const BodyDiv = document.createElement("div");
    BodyDiv.classList.add("body");
    BodyDiv.setAttribute('style','height:calc(100% - 25px)')

    const clockDiv = document.createElement('div')
    clockDiv.classList.add('clock')
    clockDiv.setAttribute('style','position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;')
    
    const center = document.createElement('div')
    center.classList.add('center')
    center.setAttribute('style','')

    const hourEl = document.createElement('div')
    hourEl.classList.add('hour')


    const minEl = document.createElement('div')
    minEl.classList.add('min')
    minEl.setAttribute('style','')

    const secEl = document.createElement('div')
    secEl.classList.add('sec')
    secEl.setAttribute('style','')
    
    const infoEl = document.createElement('div')
    infoEl.classList.add('sec')
    infoEl.setAttribute('style','text-align:center;;position:absolute;left:0;right:0;bottom:5px;margin:auto;font-size:.8rem;')

    center.appendChild(hourEl)
    center.appendChild(minEl)
    center.appendChild(secEl)
   

    clockDiv.appendChild(center)
    
    BodyDiv.appendChild(clockDiv)
    BodyDiv.appendChild(infoEl)


    newDiv.appendChild(headDiv);
    newDiv.appendChild(BodyDiv);

    parentNode.appendChild(newDiv);


    //--------------------------------

    setInterval(() =>{
            // 현재 날짜 time에 할당
          const time =new Date()
          
          // time에서 시간만 추출 (시, 분, 초)
          let hour = time.getHours(); //0~23
          let min = time.getMinutes();//0~59
          let sec = time.getSeconds();//0~59
          
          // 화면상의 객체 선택
          const hh = hourEl
          const mm = minEl
          const ss = secEl
          const info = infoEl;
          console.log("hour",hour,"min",min,"sec",sec)
          if(hour<10)
             hour =`0${hour}`
          if(min<10)
            min =`0${min}`
          if(sec<10)
            sec =`0${sec}`

          info.innerHTML=`${hour} : ${min} : ${sec}`

          // 각도 선택
          if (hour >= 12){
            const DegHour = (hour - 12) * 30 + min * (360 / 12 / 60) // 분을 고려해서 시침이 한번에 움직이지 않게 하기 위함 
            const DegMin = min * 6
            const DegSec = sec * 6
            
            hh.setAttribute('style',`transform:rotate(${DegHour}deg);`)
            mm.setAttribute('style',`transform:rotate(${DegMin}deg);`)
            ss.setAttribute('style',`transform:rotate(${DegSec}deg);`)
            
            }
            else{
           
                const DegHour = (hour - 12) * 30 + min * (360 / 12 / 60)  // 0.5를 곱해 60분기준 30도를 추가 ex) 30분이라면 15도의 각도 추가
                const DegMin = min * 6
                const DegSec = sec * 6
                console.log("DegHour",DegHour,"DegMin",DegMin,"DegSec",DegSec)

                hh.setAttribute('style',`transform:rotate(${DegHour}deg);`)
                mm.setAttribute('style',`transform:rotate(${DegMin}deg);`)
                ss.setAttribute('style',`transform:rotate(${DegSec}deg);`)

            }
    },1000)
  //---------------------------------

    return newDiv;
  }



    //------------------------
  //CLOCK - https://re-hwi.tistory.com/118
  //------------------------
  function createCalendar(parentNode) {

        console.log("createClock...");
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.classList.add("calendar-item");

        const headDiv = document.createElement("div");
        headDiv.classList.add("head");

        //컨트롤박스
        const controlDiv = document.createElement("div");
        controlDiv.classList.add("control");
        controlDiv.setAttribute(
          "style",
          "border-bottom:1px solid;display:flex;justify-content:right;align-items:center;gap:5px;height:20px;"
        );
        headDiv.appendChild(controlDiv);

        const title = document.createElement("span");
        title.innerHTML = "제목없음";
        title.setAttribute("style", "font-size:.9rem;flex-grow:1");
        title.addEventListener("click", () => {
          console.log("clicked...");
        });

        //종료
        const cancelBtn = document.createElement("div");
        cancelBtn.classList.add("material-symbols-outlined");
        cancelBtn.setAttribute("style", "font-size:.9rem;cursor:pointer;");
        cancelBtn.innerHTML = "cancel";
        newDiv.appendChild(cancelBtn);

        cancelBtn.addEventListener("click", (e) => {
          const item = cancelBtn.parentNode.parentNode.parentNode;
          const isdel = confirm("정말 삭제하시겠습니까?");
          if (isdel) {
            item.remove();
          }
          e.preventDefault();
        });

        controlDiv.appendChild(title);
        controlDiv.appendChild(cancelBtn);


        const BodyDiv = document.createElement("div");
        BodyDiv.classList.add("body");
        BodyDiv.setAttribute('style','border :1px solid;height:calc(100% - 25px);')



        newDiv.appendChild(headDiv);
        newDiv.appendChild(BodyDiv);

        parentNode.appendChild(newDiv);

        //----------------------------------------------------------------------

        var calendar = new FullCalendar.Calendar(BodyDiv, {
          initialView: 'dayGridMonth',
          
          eventClick: function(info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            console.log('info',info)

          },
          

        });
        
        calendar.render();
        //----------------------------------------------------------------------        
        return newDiv;

  }


});
