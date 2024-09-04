document.addEventListener('DOMContentLoaded', function () {

    let items = []

    let isMoving = false;
    let offsetX, offsetY;
    let draggedElement = null;
    let cnt=0;
    // todo 
    const todoAdd = () => {
        // 기본 크기
        // 위치 확인
    }

    const todoEl = document.querySelector('#todo');
    
    // **추가된 부분**: 기본 드래그 앤 드롭 동작을 방지하여 드래그 미리보기가 나타나지 않도록 함
 
    const articleEl = document.querySelector('article');


    articleEl.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    articleEl.addEventListener('drop', (e) => {
        console.log('drop', e.target);

        // 좌표 계산 (e.clientX, Y : 마우스좌표 / rect.left: 요소의 x좌표)
        const rect = articleEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 새 div 생성
        const newDiv = document.createElement('div');
        newDiv.className = 'todo-item';
        newDiv.setAttribute('draggable', true);
        newDiv.setAttribute('style','position:relative')
        newDiv.textContent = ++cnt;  // 예시 텍스트 추가

        const cancelBtn = document.createElement('div')
        cancelBtn.innerHTML='x'
        cancelBtn.classList.add('cancelBtn');
        newDiv.appendChild(cancelBtn)

        cancelBtn.addEventListener('click',(e)=>{
            const item = cancelBtn.parentNode;
            const isdel = confirm('정말 삭제하시겠습니까?')
            if(isdel)
                item.remove();

            e.preventDefault();
        })


        // 마우스 버튼을 눌렀을 때 드래그 시작
        newDiv.addEventListener('click', (e) => {  

            if(!isMoving){
                isMoving = true;  // 드래그 상태 설정
                draggedElement = newDiv;  // 현재 드래그 중인 요소 저장
                offsetX = e.offsetX;  // 클릭 지점과 요소의 왼쪽 상단 사이의 X 거리
                offsetY = e.offsetY;  // 클릭 지점과 요소의 왼쪽 상단 사이의 Y 거리
                console.log("!")
                draggedElement.style.opacity=".7"
                startMoving();

            }else{
                isMoving = false;
                const articleRect = articleEl.getBoundingClientRect();
                const x = e.clientX - articleRect.left - offsetX;
                const y = e.clientY - articleRect.top - offsetY;
                draggedElement.style.position = 'absolute';
                draggedElement.style.left = `${x}px`;
                draggedElement.style.top = `${y}px`;
                draggedElement.style.opacity="1"


                stopMoving();
                
            }
           
        });
        
        // 테두리 근처로 갈때 마우스 포인터 변경
        articleEl.addEventListener('mousemove', (e) => {
            if (!isMoving && !draggedElement) {  // 드래그 중일 때만 실행
                    // 현재 마우스 위치에 따른 커서 변경
                    const rect = articleEl.getBoundingClientRect();
                    const offset = 10;  // 테두리 감지 거리

                    if (e.clientX > rect.left && e.clientX < rect.left + offset) {
                        // 왼쪽 테두리
                        articleEl.style.cursor = 'w-resize';
                        currentResizingEdge = 'left';
                    } else if (e.clientX < rect.right && e.clientX > rect.right - offset) {
                        // 오른쪽 테두리
                        articleEl.style.cursor = 'e-resize';
                        currentResizingEdge = 'right';
                    } else if (e.clientY > rect.top && e.clientY < rect.top + offset) {
                        // 상단 테두리
                        articleEl.style.cursor = 'n-resize';
                        currentResizingEdge = 'top';
                    } else if (e.clientY < rect.bottom && e.clientY > rect.bottom - offset) {
                        // 하단 테두리
                        articleEl.style.cursor = 's-resize';
                        currentResizingEdge = 'bottom';
                    } else {
                        // 커서 원래대로 되돌리기
                        articleEl.style.cursor = 'default';
                        currentResizingEdge = null;
                    }
            }
        });

        // 위치 지정
        newDiv.style.position = 'absolute';
        newDiv.style.left = `${x}px`;
        newDiv.style.top = `${y}px`;

        articleEl.appendChild(newDiv);

        e.preventDefault();


        //--------------------------
        // 위젯 옮기기
        //--------------------------
        function startMoving(){
            console.log("startMoving..")
            document.addEventListener('mousemove', moving);
        }
        function moving(e){
            console.log("moving..",e)
            if (isMoving && draggedElement) {  // 드래그 중일 때만 실행
                    const articleRect = articleEl.getBoundingClientRect();
                    const x = e.clientX - articleRect.left - offsetX;
                    const y = e.clientY - articleRect.top - offsetY;
    
                    draggedElement.style.position = 'absolute';
                    draggedElement.style.left = `${x}px`;
                    draggedElement.style.top = `${y}px`;
            }
        }
        function stopMoving() {
            console.log("stopMoving..")
            document.removeEventListener('mousemove', moving);
        }

        //--------------------------
        // 위젯 크기조절
        //--------------------------



    });
});
