document.addEventListener('DOMContentLoaded',function(){

    let isDragging = false;
    let offsetX, offsetY;

    
    // todo 
    const todoAdd = ()=>{
        //기본 크기
        //위치 확인
    }

    const todoEl = document.querySelector('#todo')
    todoEl.addEventListener('dragstart',(e)=>{
        console.log(e.target)

    })
    


    const articleEl = document.querySelector('article')
    console.log(todo)

    
    articleEl.addEventListener('dragover',(e)=>{
        
        e.preventDefault();
    })
    articleEl.addEventListener('drop',(e)=>{
        console.log('drop',e)

        //좌표계산(e.clientX,Y : 마우스좌표 /  rect.left: 요소의 x좌표)
        const rect =  articleEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //new Div
        const newDiv = document.createElement('div')
        newDiv.className='todo-item'
        newDiv.setAttribute('draggable',true)
        // 마우스 버튼을 눌렀을 때
        newDiv.addEventListener('mousedown', (e) => {
            isDragging = true;
            // 요소의 현재 위치와 마우스의 위치 차이를 계산하여 드래그 중에 위치가 자연스럽게 보이도록 설정
            offsetX = e.clientX - draggable.getBoundingClientRect().left;
            offsetY = e.clientY - draggable.getBoundingClientRect().top;

            // 문서 전체에서 마우스 이동과 마우스 버튼 떼기 이벤트 리스너 추가
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });




        //위치 지정
        newDiv.style.left=`${x}px`;
        newDiv.style.top=`${y}px`;

        articleEl.appendChild(newDiv)


        e.preventDefault();
    })




    // 

    // 


    // 

    // 마우스 이동 시 호출되는 함수
    function handleMouseMove(e) {
        if (!isDragging) return;

        // 현재 마우스 위치와 드래그 시작 시의 위치 차이를 계산하여 요소의 위치를 업데이트
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    }

    // 마우스 버튼을 떼었을 때
    function handleMouseUp() {
        isDragging = false;

        // 이벤트 리스너 제거
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

})

