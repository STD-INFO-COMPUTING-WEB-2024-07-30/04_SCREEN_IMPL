

//Todo 만들기
const createTodo = (parentNode)=>{
    console.log("createTodo...")
    const newDiv = document.createElement('div');
    newDiv.classList.add('.todo-item')
   
    // const headDiv = document.createElement('div');
    
    // const addInput = document.createElement('input');
    // const addBtn = document.createElement('span');

    // const BodyDiv = document.createElement('div');


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

    // newDiv.appendChild(headDiv)
    // newDiv.appendChild(BodyDiv)


    parentNode.appendChild(newDiv);

    return newDiv;
}