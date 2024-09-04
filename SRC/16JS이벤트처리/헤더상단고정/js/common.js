document.addEventListener('scroll',()=>{
    
    const scroll=window.scrollY;
    console.log(scroll)

    const header=document.querySelector('header')
    if(scroll<=50){
        //스크롤의 값이 50보다 작은 경우
    }else{
        //스크롤의 값이 50보다 큰 경우

        header.classList.add('fixed')
    }


})