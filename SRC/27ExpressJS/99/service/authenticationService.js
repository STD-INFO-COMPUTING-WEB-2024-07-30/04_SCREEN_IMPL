//세션의 만료시간 설정
const sessionExpiredTime = 1;

async function isvalid(userid,password){
    let message = null;
    // if(userid.trim()===''){
    //     return false;
    // }else if(password.trim()===''){
    //     return false;
    // }else if(false){
    //     //패스워드 정규표현식 확인(이건 ContextAPI를 통한 전역설정 / or 현재 파일에서 처리 중 선택)
    // }

    return true;

}
async function createSession(){

    return null;
}
async function login(userId,password,userData,sessionData){
    
    console.log('login func',userId,password)

    //아이디 일치여부 확인

    if(!isvalid){
        return false;
    }
    //암호화된 패스워드 일치여부확인(생략)
    //정책일치여부 확인(생략)

    //세션정보 생성
    // console.log(userData)

    const userInfo = userData.find(el=>el.userId==userId)
    
    if(userInfo){
        const sessionId = crypto.randomUUID();
        console.log('uuid : ',sessionId)

        const isUserExisted = sessionData.find(el=>el.userId==userInfo.userId)
        console.log('isUserExisted : ',isUserExisted)

        if(!isUserExisted){
            //현재날짜
            const createAt = Date.now();
            const now = new Date();
            const expiredAt = now.setHours(now.getHours() + sessionExpiredTime); 
            //만료날짜
            const session = {"sessionId":sessionId,"userId":userInfo.userId,"role":userInfo.role,"createAt" : createAt,"expiredAt" : expiredAt}
            console.log("session",session)
            sessionData.push(session);
            console.log(sessionData)
            return sessionId;   //세션정보 전달(세션쿠키)
        }else {
            return isUserExisted.sessionId;
        }
       
    }
    else
    {
        //일치하는 계정이 없는경우
        console.log("계정 없음")
        return ;
        
    }



}

//로그인 여부 확인
async function isAuthenticated(sessionId,sessionData){
    const isLogined = sessionData.find(item=>item.sessionId==sessionId)
    console.log('isAuthenticated...isLogined ',isLogined)
    if(isLogined)
        return false;
    return true;
}


async function logout(){
    console.log('logout...')
}

async function logout(){
    console.log('logout...')
}
async function findid(){
    console.log('findid...')
}
async function findpw(){
    console.log('logout...')
}

module.exports = {login,logout,findid,findpw}