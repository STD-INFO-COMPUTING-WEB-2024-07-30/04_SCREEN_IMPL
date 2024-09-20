# 비동기처리


|-|
|-|
|[참고]()|


## 
---
> 비동기 처리
```
자바스크립트에서 비동기 처리는 코드의 실행이 중단되지 않고, 시간이 오래 걸리는 작업(예: 네트워크 요청, 파일 읽기 등)이 완료되기를 기다리지 않고 다음 코드를 실행하는 방식입니다.
자바스크립트는 기본적으로 단일 스레드 환경에서 동작하기 때문에, 비동기 처리를 통해 응답성 있는 애플리케이션을 만들 수 있습니다.
```

> 자바스크립트 비동기 처리 종류
```
콜백 함수 (Callback Function)
프로미스 (Promise)
async와 await

```

## 1. 콜백 함수 (Callback Function)
---

```
정의:

콜백 함수는 다른 함수에 인수로 전달되어 특정 작업이 완료된 후 호출되는 함수입니다. 비동기 작업의 결과를 처리하기 위해 자주 사용됩니다.
하지만, 여러 콜백 함수가 중첩되면 "콜백 지옥"이 발생할 수 있습니다.
```

> CODE
```
function fetchData(callback) {
    console.log("Fetching data...");

    // 2초 후에 데이터를 받아오는 가정
    setTimeout(function() {
        const data = "Fetched Data";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data: " + data);
}

fetchData(processData);  // "Fetching data..." 출력 후 2초 뒤에 "Processing data: Fetched Data" 출력

```

## 2. 프로미스 (Promise)
---

```
프로미스는 비동기 작업이 성공했는지, 실패했는지에 따라 결과를 반환하는 객체입니다.
Promise 객체는 pending(대기), fulfilled(성공), rejected(실패)의 세 가지 상태를 가집니다.
.then()과 .catch()를 사용하여 비동기 작업의 결과를 처리합니다.
```

> CODE
```
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");
        
        setTimeout(function() {
            const success = true;  // 성공 여부를 가정

            if (success) {
                resolve("Fetched Data");
            } else {
                reject("Error: Data not fetched");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log("Processing data: " + data);
    })
    .catch(error => {
        console.error(error);
    });

```

## 3. async와 await
---

```
async 함수는 항상 프로미스를 반환하며, await는 프로미스가 해결될 때까지 비동기 작업을 기다립니다.
async와 await를 사용하면 비동기 코드를 동기적으로 작성하는 것처럼 보이게 만들어 코드의 가독성이 크게 향상됩니다.
```

> CODE
```
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(function() {
            const success = true;  // 성공 여부를 가정

            if (success) {
                resolve("Fetched Data");
            } else {
                reject("Error: Data not fetched");
            }
        }, 2000);
    });
}

async function processData() {
    try {
        const data = await fetchData();  // fetchData가 완료될 때까지 대기
        console.log("Processing data: " + data);
    } catch (error) {
        console.error(error);
    }
}

processData();

```
>설명
```
설명:

processData 함수는 async 함수로 선언되었고, 내부에서 await 키워드를 사용하여 fetchData 함수가 완료될 때까지 기다립니다.
try...catch 문을 사용해 비동기 작업의 성공과 실패를 처리합니다.

```

---
비동기 처리방식비교
---
```
콜백 함수는 간단한 비동기 작업에는 적합하지만, 콜백 함수가 여러 개 중첩될 경우 코드의 가독성이 떨어집니다.
프로미스는 콜백 함수보다 명확한 방식으로 비동기 작업을 처리할 수 있으며, then()과 catch()로 체인 방식의 에러 처리가 가능합니다.
**async/await**는 비동기 코드를 동기 코드처럼 작성할 수 있게 해주어 가독성이 매우 높아집니다. 프로미스의 간결한 문법입니다.
```


---
요약
---
```
콜백 함수는 비동기 작업의 결과를 처리하기 위해 함수 자체를 전달합니다.
프로미스는 비동기 작업의 성공 또는 실패 상태를 추적하며, then()과 catch()로 결과를 처리합니다.
**async/await**는 비동기 작업을 마치 동기적으로 처리하는 것처럼 보이게 해 코드 가독성을 높여줍니다.
```




