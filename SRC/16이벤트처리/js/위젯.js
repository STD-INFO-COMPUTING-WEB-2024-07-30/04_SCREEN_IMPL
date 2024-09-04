document.addEventListener('DOMContentLoaded', function () {
    let isDragging = false;
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
    todoEl.addEventListener('dragstart', (e) => {
        // e.preventDefault(); // 기본 동작 방지
    });

    const articleEl = document.querySelector('article');

    articleEl.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    articleEl.addEventListener('drop', (e) => {
        console.log('drop', e);

        // 좌표 계산 (e.clientX, Y : 마우스좌표 / rect.left: 요소의 x좌표)
        const rect = articleEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 새 div 생성
        const newDiv = document.createElement('div');
        newDiv.className = 'todo-item';
        newDiv.setAttribute('draggable', true);
        newDiv.textContent = ++cnt;  // 예시 텍스트 추가

        // 마우스 버튼을 눌렀을 때 드래그 시작
        newDiv.addEventListener('click', (e) => {  

            if(!isDragging){
                isDragging = true;  // 드래그 상태 설정
                draggedElement = newDiv;  // 현재 드래그 중인 요소 저장
                offsetX = e.offsetX;  // 클릭 지점과 요소의 왼쪽 상단 사이의 X 거리
                offsetY = e.offsetY;  // 클릭 지점과 요소의 왼쪽 상단 사이의 Y 거리
                console.log("!")
            }else if(draggedElement){
                console.log("!!")
                const articleRect = articleEl.getBoundingClientRect();
                const x = e.clientX - articleRect.left - offsetX;
                const y = e.clientY - articleRect.top - offsetY;

                draggedElement.style.position = 'absolute';
                draggedElement.style.left = `${x}px`;
                draggedElement.style.top = `${y}px`;

            }else{
                console.log("!!!")

                isDragging = false;  // 드래그 상태 해제
                draggedElement = null;  // 드래그 중인 요소 초기화
            }

        });

        // **추가된 부분**: 마우스 움직일 때 드래그 중인 요소를 이동
        document.addEventListener('mousemove', (e) => {
            if (isDragging && draggedElement) {  // 드래그 중일 때만 실행
                const articleRect = articleEl.getBoundingClientRect();
                const x = e.clientX - articleRect.left - offsetX;
                const y = e.clientY - articleRect.top - offsetY;

                draggedElement.style.position = 'absolute';
                draggedElement.style.left = `${x}px`;
                draggedElement.style.top = `${y}px`;
            }
        });

        // **추가된 부분**: 마우스 버튼을 뗄 때 드래그 종료
        document.addEventListener('mouseup', () => {
            isDragging = false;  // 드래그 상태 해제
            
            draggedElement = null;  // 드래그 중인 요소 초기화

        });

        // 위치 지정
        newDiv.style.position = 'absolute';
        newDiv.style.left = `${x}px`;
        newDiv.style.top = `${y}px`;

        articleEl.appendChild(newDiv);

        e.preventDefault();
    });
});
