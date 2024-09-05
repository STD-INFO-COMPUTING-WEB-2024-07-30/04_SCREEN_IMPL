

//Todo 만들기
const createTimer = (parentNode)=>{
    console.log("createTodo...")
    const newDiv = document.createElement('div');
    newDiv.classList.add('.timer-item')
   
    // const headDiv = document.createElement('div');
    
    // const addInput = document.createElement('input');
    // const addBtn = document.createElement('span');

    // const BodyDiv = document.createElement('div');


 
    // newDiv.appendChild(headDiv)
    // newDiv.appendChild(BodyDiv)


    parentNode.appendChild(newDiv);

    return newDiv;
}