document.addEventListener("DOMContentLoaded", function () {
  
  //전역
  let category=null;
  const todoList = [];
  const timerList = [];


  //ITEM 이동
  let isMoving = false;
  let isDelete = false;
  let offsetX, offsetY;
  let draggedElement = null;
  let cnt = 0;

  //사이즈 조절
  let resizable = null;
  let resizeDirection = '';
  let isResizing = false;
  let originalWidth, originalHeight, originalX, originalY;


 
  const todoEl = document.querySelector("#todo");
  const timerEl = document.querySelector("#timer");

  //-----------------------------------
  //aside에서 Drag한 Item Category 확인
  //-----------------------------------
  todoEl.addEventListener('dragstart',(e)=>{
    category =  todoEl.getAttribute('data-category')
    console.log('cat',category)
  })
  timerEl.addEventListener('dragstart',(e)=>{
    category =  timerEl.getAttribute('data-category')
    console.log('cat',category)
  })



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

    if(category==='todo')
      newDiv = createTodo(articleEl)
    else if(category==='timer')
      newDiv = createTimer(articleEl)

    

    // newDiv.setAttribute("draggable", true);
    
    // newDiv.setAttribute("style", "position:relative");
    // newDiv.textContent = ++cnt; // 예시 텍스트 추가

    // const cancelBtn = document.createElement("div");
    // cancelBtn.innerHTML = "x";
    // cancelBtn.classList.add("cancelBtn");
    // newDiv.appendChild(cancelBtn);

    // cancelBtn.addEventListener("click", (e) => {
    //   const item = cancelBtn.parentNode;
    //   const isdel = confirm("정말 삭제하시겠습니까?");
    //   if (isdel) {
    //     isDelete = true;
    //     item.remove();
    //   }
    //   e.preventDefault();
    // });

 
    // 마우스 버튼을 눌렀을 때 드래그 시작
    newDiv.addEventListener("contextmenu", (e) => {
      if (!isMoving) {
        if (isDelete) {
          isDelete = false;
          return;
        }
        startMoving(newDiv,e);
        
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
        if (e.clientX >= rect.right - offset && e.clientY >= rect.bottom - offset) {
            newDiv.style.cursor = 'se-resize'; // 오른쪽 아래 모서리
            console.log('se..')
            resizeDirection = 'se';
      
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
            newDiv.style.cursor = 'default';
            resizeDirection = '';
        }

    });


     //마우스버튼을 눌렀을때
    newDiv.addEventListener('mousedown', function(e) {
       
        if (resizeDirection) {
            console.log("mousemove..사이즈조절 처리위한 mousedown")
            isResizing = true;
            originalWidth = resizable.offsetWidth;
            originalHeight = resizable.offsetHeight;
            originalX = e.clientX;
            originalY = e.clientY;

            // 마우스 움직임 이벤트 리스너 추가
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
            
          
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
    function startMoving(newDiv,e) {
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
        if (resizeDirection === 'e') {
            const width = originalWidth + (e.clientX - originalX);
            resizable.style.width = `${width}px`;
        } else if (resizeDirection === 'w') {
            const width = originalWidth - (e.clientX - originalX);
            resizable.style.width = `${width}px`;
            resizable.style.left = `${e.clientX}px`;
        } else if (resizeDirection === 's') {
            const height = originalHeight + (e.clientY - originalY);
            resizable.style.height = `${height}px`;
        } else if (resizeDirection === 'n') {
            const height = originalHeight - (e.clientY - originalY);
            resizable.style.height = `${height}px`;
            resizable.style.top = `${e.clientY}px`;
        } else if (resizeDirection === 'se') {
            const width = originalWidth + (e.clientX - originalX);
            const height = originalHeight + (e.clientY - originalY);
            resizable.style.width = `${width}px`;
            resizable.style.height = `${height}px`;
        } else if (resizeDirection === 'sw') {
            const width = originalWidth - (e.clientX - originalX);
            const height = originalHeight + (e.clientY - originalY);
            resizable.style.width = `${width}px`;
            resizable.style.height = `${height}px`;
            resizable.style.left = `${e.clientX}px`;
        } else if (resizeDirection === 'ne') {
            const width = originalWidth + (e.clientX - originalX);
            const height = originalHeight - (e.clientY - originalY);
            resizable.style.width = `${width}px`;
            resizable.style.height = `${height}px`;
            resizable.style.top = `${e.clientY}px`;
        } else if (resizeDirection === 'nw') {
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
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }

  //
  });


//------------------------
//Todo 만들기
//------------------------
  const createTodo = (parentNode) => {

    console.log("createTodo..."); 
    const newDiv = document.createElement('div');
    newDiv.classList.add('item')
    newDiv.classList.add('todo-item')
    
    const headDiv = document.createElement('div');
    headDiv.setAttribute('style','')
    headDiv.classList.add('head')

    //컨트롤 박스
    const controlBox = document.createElement("div");
    controlBox.setAttribute('style','color:white;padding:5px 0;border-bottom:1px solid;padding:2px;display:flex;justify-content:right;align-items:center;background-color: black')
    headDiv.appendChild(controlBox)

    //컨트롤 박스(제목)
    const title = document.createElement("span");
    title.classList.add('material-symbols-outlined')
    title.setAttribute('style','padding:5px 0px;font-size:.8rem;margin-right:5px;cursor:pointer;flex-grow:1;')
    title.innerHTML = "제목없음";
    controlBox.appendChild(title);    
    
    //컨트롤 박스(메뉴)
    const menuBtn = document.createElement("span");
    menuBtn.classList.add('material-symbols-outlined')
    menuBtn.setAttribute('style','font-size:.9rem;margin-right:5px;cursor:pointer')
    menuBtn.innerHTML = "more_vert";
    controlBox.appendChild(menuBtn);
    menuBtn.addEventListener("click", (e) => {
      //메뉴창 활성화(저장-쿠키에 저장예정)
      console.log('clicked menu..')
    });
    

   //컨트롤 박스(취소)
    const cancelBtn = document.createElement("span");
    cancelBtn.classList.add('material-symbols-outlined')
    cancelBtn.innerHTML = "cancel";
    
    cancelBtn.setAttribute('style','font-size:.9rem;cursor:pointer;')
    controlBox.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", (e) => {
      const item = cancelBtn.parentNode.parentNode.parentNode;
      console.log(item)
      const isdel = confirm("정말 삭제하시겠습니까?");
      if (isdel) {
        isDelete = true;
        item.remove();
      }
      e.preventDefault();
    });
    
    const addInput = document.createElement('input');
    addInput.classList.add('form-control')
    addInput.setAttribute('style','border : 0;border-bottom:1px solid gray;height:30px;outline:none;border-radius:0;')
    addInput.setAttribute('placeholder','할일을 입력하세요.')
    headDiv.appendChild(addInput)

    
    //todo 추가버튼 
    addInput.addEventListener('keydown',(e)=>{
      console.log('clicked...')
      if(e.keyCode==13){

        const text = addInput.value;
        //ITEM단위
        const todoItem = document.createElement('div');;
        todoItem.setAttribute('style','margin:0 auto;width:100%;border-bottom:1px solid gray;position:relative;')
        const curDiv =  todoList.filter((item)=>item===newDiv)[0];
        console.log(curDiv)

        const bodyEl =  curDiv.querySelector('.body')


        const tableEl = document.createElement('table')
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        td1.setAttribute('style','border-right:1px solid gray;;margin-right:5px;width:35px;display:flex;height:35px;justify-content:center;align-items:center;')
        const chk = document.createElement('input')
        chk.setAttribute('type','checkbox')
        chk.setAttribute('style','position:relative;z-index:5555')
        chk.addEventListener('change',(e)=>{
          console.log('checked..')
          const parent = chk.parentNode.parentNode.parentNode.parentNode;
          if(e.target.checked){
            const line = document.createElement('span')
            parent.appendChild(line);
            line.classList.add('todo-checker')
          }else{
            parent.querySelector('.todo-checker').remove();
          }
          
          console.log(parent);
        })
        td1.appendChild(chk)

        const td2 = document.createElement('td')
        const input = document.createElement('input')
        input.setAttribute('style',"width:calc(100% - 70px);height:100%;background-color: white;border:0;outline:none")
        input.readOnly=true
        input.value=text
        td2.appendChild(input)
        td2.setAttribute('style',"width:100%;")

        const td3 = document.createElement('td')
        td3.setAttribute('style','width:35px;hieght:100%display:flex;justify-content:center;align-items:center;flex-direction:column;')
        
        const up = document.createElement('span')
        const down = document.createElement('span')
        up.setAttribute('style','width:15px;height:15px;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;z-index:5555')
        down.setAttribute('style','width:15px;height:15px;display:flex;justify-content:center;align-items:center;cursor:pointer;position:relative;z-index:5555')
        up.classList.add('material-symbols-outlined');
        down.classList.add('material-symbols-outlined');
        up.innerHTML='arrow_drop_up'
        down.innerHTML='arrow_drop_down'

        up.addEventListener('click',function(){
          const tbodyEl = up.parentNode.parentNode.parentNode.parentNode.parentNode; //body
          const curItem = up.parentNode.parentNode.parentNode.parentNode;
          const itemsEl =  Array.from(tbodyEl.querySelectorAll('&>div'));
          const idx = itemsEl.indexOf(curItem)
          console.log('idx',idx);
        
          if(idx!=0 && idx!=itemsEl.length){
            itemsEl[idx] = itemsEl[idx-1];
            itemsEl[idx-1] =curItem; 
            console.log('itemsEl',itemsEl);
          }
          while(tbodyEl.firstChild){
            tbodyEl.removeChild(tbodyEl.firstChild);
          }
          itemsEl.forEach(el=>{
            tbodyEl.appendChild(el)
          })

        })
        down.addEventListener('click',function(){
          const tbodyEl = down.parentNode.parentNode.parentNode.parentNode.parentNode; //body
          const curItem = down.parentNode.parentNode.parentNode.parentNode;
          const itemsEl =  Array.from(tbodyEl.querySelectorAll('&>div'));
          const idx = itemsEl.indexOf(curItem)
          console.log('idx',idx);
        
          if(idx!=itemsEl.length-1){
            itemsEl[idx] = itemsEl[idx+1];
            itemsEl[idx+1] =curItem; 
            console.log('itemsEl',itemsEl);
          }
          while(tbodyEl.firstChild){
            tbodyEl.removeChild(tbodyEl.firstChild);
          }
          itemsEl.forEach(el=>{
            tbodyEl.appendChild(el)
          })


        })

        const td4 = document.createElement('td')
        td4.setAttribute('style','width:25px;padding : 0 3px;display:flex;justify-content:center;align-items:center;')
        const del = document.createElement('span')
        del.classList.add('material-symbols-outlined')
        del.innerHTML='delete'
        del.setAttribute('style','cursor:pointer;font-size:1rem;position:relative;z-index:5555')
        del.addEventListener('click',()=>{
          console.log("clicked..")
          const isDel = confirm("정말 삭제 하시겠습니까?")
          if(isDel)
            del.parentNode.parentNode.parentNode.parentNode.remove();

          
        })

        td4.appendChild(del)

        td3.appendChild(up)
        td3.appendChild(down)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tableEl.appendChild(tr)

        todoItem.appendChild(tableEl)


        bodyEl.prepend(todoItem)
        addInput.value='';



        
      }
     

    })

    const BodyDiv = document.createElement('div');
    BodyDiv.classList.add('body')
    

    newDiv.appendChild(headDiv)
    newDiv.appendChild(BodyDiv)


    parentNode.appendChild(newDiv);

    todoList.push(newDiv)
    return newDiv;

  }

  //------------------------
  //Timer 만들기
  //------------------------
  const createTimer = (parentNode) => {
    console.log("createTimer...");
    const newDiv = document.createElement('div');
    newDiv.classList.add('item')
    newDiv.classList.add('timer-item')
    
    const headDiv = document.createElement('div');
    headDiv.classList.add('head')
    const addInput = document.createElement('input');
    const addBtn = document.createElement('span');

    const BodyDiv = document.createElement('div');
    BodyDiv.classList.add('body')


    //취소버튼
    const cancelBtn = document.createElement("div");
    cancelBtn.innerHTML = "x";
    newDiv.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", (e) => {
      const item = cancelBtn.parentNode;
      const isdel = confirm("정말 삭제하시겠습니까?");
      if (isdel) {
        isDelete = true;
        item.remove();
      }
      e.preventDefault();
    });

    newDiv.appendChild(headDiv)
    newDiv.appendChild(BodyDiv)


    parentNode.appendChild(newDiv);
    return newDiv;

  }
//
});


