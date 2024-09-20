# 함수


|-|
|-|
|[참고](https://velog.io/@younoah/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC)|


## 1. 기명 함수 (Named Function)
---

```
기명 함수는 함수에 이름을 붙여서 정의하는 함수입니다. 이 이름을 통해 함수를 호출할 수 있습니다.

정의:
함수에 이름을 지정하여 선언하고, 필요할 때 호출하여 실행합니다.
```

> CODE
```
function greet() {
    console.log("Hello, world!");
}
greet();  // "Hello, world!" 출력

```

## 2. 익명 함수 (Anonymous Function)
---

```
익명 함수는 이름이 없는 함수로, 주로 변수에 할당되거나 콜백 함수로 사용됩니다.

정의:

함수에 이름을 지정하지 않고, 변수에 할당하거나 즉시 실행할 수 있습니다.
```

> CODE
```
let greet = function() {
    console.log("Hello, world!");
};

greet();  // "Hello, world!" 출력

```

## 3. 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
---

```
즉시 실행 함수는 정의와 동시에 실행되는 함수입니다. 다른 코드와의 충돌을 방지하는 데 유용합니다.

정의:

함수가 정의되자마자 즉시 실행됩니다.
```

> CODE
```
(function() {
    console.log("This function runs immediately!");
})();

```

## 4. 화살표 함수 (Arrow Function)
---

```
화살표 함수는 간결하게 함수를 작성할 수 있는 방법으로, 특히 콜백 함수나 간단한 함수 표현에 자주 사용됩니다. this 바인딩이 기존 함수와 다릅니다.

정의:

간략한 함수 표현식으로, function 키워드 대신 =>를 사용합니다.
```

> CODE
```
let greet = () => {
    console.log("Hello, arrow function!");
};

greet();  // "Hello, arrow function!" 출력

```

## 5. 생성자 함수 (Constructor Function)
---

```
생성자 함수는 객체를 생성할 때 사용하는 함수입니다. 함수 이름의 첫 글자는 관례적으로 대문자로 시작하며, new 키워드를 사용해 호출합니다.

정의:

새로운 객체 인스턴스를 생성하는 데 사용됩니다.
```

> CODE
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 30);
console.log(person1.name);  // "John" 출력
console.log(person1.age);   // 30 출력

```

## 6. 재귀 함수 (Recursive Function)
---

```
재귀 함수는 함수 내에서 자신을 다시 호출하는 함수입니다. 주로 반복적인 작업을 처리하는 데 사용됩니다.

정의:

함수 내부에서 자기 자신을 호출하는 함수입니다.
```

> CODE
```
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120 출력

```

## 7. 고차 함수 (Higher-Order Function)
---

```
고차 함수는 다른 함수를 인수로 받거나, 함수를 반환하는 함수입니다. 자바스크립트에서는 함수도 객체로 취급되므로, 고차 함수로 다양한 패턴을 구현할 수 있습니다.

정의:

함수를 인수로 받거나 함수를 반환하는 함수입니다.
```

> CODE
```
function higherOrderFunction(func) {
    return func();
}

function sayHello() {
    return "Hello, world!";
}

console.log(higherOrderFunction(sayHello));  // "Hello, world!" 출력

```

## 8. 콜백 함수 (Callback Function)
---

```
콜백 함수는 다른 함수에 인수로 전달되어, 그 함수의 실행 흐름에 따라 호출되는 함수입니다. 비동기 작업에서 자주 사용됩니다.

정의:

다른 함수에 인수로 전달되어 그 함수가 실행되면서 호출되는 함수입니다.
```

> CODE
```
function processUserInput(callback) {
    let name = prompt("Please enter your name:");
    callback(name);
}

function greet(name) {
    console.log("Hello, " + name);
}

processUserInput(greet);  // 사용자가 입력한 이름을 통해 "Hello, [이름]" 출력

```

## 9. 매개변수 기본값 함수 (Default Parameters)
---

```
함수를 호출할 때 인수가 전달되지 않으면 기본값을 사용할 수 있는 함수입니다.

정의:

매개변수에 기본값을 지정하여 인수가 전달되지 않았을 때 기본값을 사용합니다.
```

> CODE
```
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet();  // "Hello, Guest" 출력
greet("Alice");  // "Hello, Alice" 출력

```

## 10 클로저 함수
---

```
클로저는 함수와 그 함수가 선언된 렉시컬 환경(Lexical Environment)의 조합을 말합니다.
즉, 클로저는 함수가 선언될 때의 스코프(변수 접근 범위)를 기억하고,
그 외부 스코프에 있는 변수를 함수가 끝난 후에도 계속 참조할 수 있게 해줍니다.

정의:

클로저는 함수가 생성될 때 외부 함수의 변수와 그 환경을 기억하는 함수입니다.
외부 함수가 종료된 이후에도, 클로저는 여전히 그 함수가 생성된 환경의 변수를 기억하고 접근할 수 있습니다.
```

> CODE
```
function outerFunction() {
    let outerVariable = "I'm from outer function!";
    
    function innerFunction() {
        console.log(outerVariable);  // 외부 함수의 변수에 접근 가능
    }

    return innerFunction;  // innerFunction을 반환
}

let closureFunction = outerFunction();  // outerFunction 실행
closureFunction();  // "I'm from outer function!" 출력

```
>CODE_2
```
function counter() {
    let count = 0;  // count는 외부 함수의 변수

    return function() {
        count++;  // count 변수에 접근하여 값을 증가시킴
        console.log(count);
    };
}

let increment = counter();  // counter 함수 실행, 클로저 반환
increment();  // 1 출력
increment();  // 2 출력
increment();  // 3 출력

```
