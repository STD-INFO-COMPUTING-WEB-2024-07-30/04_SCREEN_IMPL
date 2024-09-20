# 흐름제어문


|-|
|-|
|[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)|


## 1. if, else if, else 문
---

```
if: 주어진 조건이 true일 때 코드 블록을 실행합니다.
else if: 추가적인 조건을 검사하고, if가 false일 때 실행됩니다.
else: 위의 조건이 모두 false일 때 실행됩니다.
```

> CODE
```
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult.");
} else {
    console.log("You are an adult.");
}

```

## 2. switch 문
---

```
하나의 값을 여러 가지 가능한 경우와 비교하여, 그에 맞는 코드 블록을 실행합니다.
switch: 주어진 표현식의 결과와 case 값을 비교해 일치하는 경우 해당 코드 블록을 실행합니다.
default: case가 일치하지 않을 때 실행됩니다.
```

> CODE
```
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

```

## 3. for 문
---

```
특정 횟수만큼 반복 실행할 때 사용합니다.
for: 초기값, 조건식, 증감식을 사용해 코드 블록을 반복 실행합니다.
```

> CODE
```
for (let i = 0; i < 5; i++) {
    console.log("Iteration number " + i);
}

```

## 4. while 문
---

```
조건이 true인 동안 코드 블록을 반복 실행합니다.
while: 주어진 조건이 true인 동안 코드 블록을 계속 실행합니다.
```

> CODE
```
let i = 0;
while (i < 5) {
    console.log("Iteration number " + i);
    i++;
}

```

## 5. do...while 문
---

```
코드 블록을 최소 한 번 실행한 후, 조건이 true인 동안 반복 실행합니다.
do...while: 코드 블록을 먼저 실행하고, 조건이 true일 때 계속 실행합니다.
```

> CODE
```
let i = 0;
do {
    console.log("Iteration number " + i);
    i++;
} while (i < 5);

```

## 6. for...in 문
---

```
객체의 속성을 순회할 때 사용합니다.
for...in: 객체의 열거 가능한 속성을 순회합니다.
```

> CODE
```
let person = {name: "John", age: 30, city: "New York"};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

```

## 7. for...of 문
---

```
반복 가능한 객체(Array, Set, Map 등)를 순회할 때 사용합니다.
for...of: 배열이나 반복 가능한 객체의 값을 순회합니다.
```

> CODE
```
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

```

## 8. break 문
---

```
루프나 switch 문을 종료할 때 사용합니다.
break: 반복문 또는 switch문을 즉시 종료합니다.
```

> CODE
```
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // 반복문을 종료
    }
    console.log(i);
}

```

## 9. continue 문
---

```
현재 반복을 건너뛰고, 다음 반복으로 넘어갑니다.
continue: 반복문에서 현재 실행을 중단하고, 다음 반복을 시작합니다.
```

> CODE
```
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // 2는 출력하지 않고 건너뜁니다.
    }
    console.log(i);
}

```
