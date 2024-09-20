# 변수 / 자료형

---
변수
---
|-|
|-|
|-|

>변수 선언 예약어
```
JavaScript에서 변수와 상수는 var, let, const 키워드를 사용하여 선언할 수 있습니다.
각각의 키워드는 변수를 선언하는 방식과 스코프(Scope), 재할당 가능성 등에 차이가 있습니다.
```

## var
```
스코프(Scope): var로 선언된 변수는 함수 스코프(Function Scope)를 가집니다.
즉, 함수 내에서만 유효하며, 블록(예: { }) 내에서 선언되더라도 블록을 벗어나면 접근이 가능합니다.

호이스팅(Hoisting): var로 선언된 변수는 선언이 끌어올려지지만(hoisted),
초기화는 되지 않습니다. 선언 전에 변수에 접근하면 undefined를 반환합니다.

재할당 가능: var로 선언된 변수는 언제든지 재할당이 가능합니다.

```
>CODE
```

  function exampleVar() {
    if (true) {
      var x = 10; // var는 블록 스코프를 따르지 않음
    }
    console.log(x); // 10, 블록 외부에서도 접근 가능
  }
  exampleVar();
  console.log(y); // undefined, 호이스팅 발생
  var y = 5;
  console.log(y); // 5
```



## let
```
스코프(Scope): let으로 선언된 변수는 블록 스코프(Block Scope)를 가집니다.
블록 내에서만 유효하며, 블록을 벗어나면 접근할 수 없습니다.

호이스팅(Hoisting): let은 호이스팅되지만, 선언 전에 접근할 수 없으며, ReferenceError가 발생합니다.

재할당 가능: let으로 선언된 변수는 언제든지 재할당이 가능합니다.
```
>CODE
```
  function exampleLet() {
    if (true) {
      let x = 10; // let은 블록 스코프를 따름
      console.log(x); // 10
    }
    // console.log(x); // ReferenceError: x is not defined
  }
  
  exampleLet();
  
  console.log(z); // ReferenceError: z is not defined
  let z = 5;
  console.log(z); // 5
```


## const
```
스코프(Scope): const로 선언된 변수는 let과 마찬가지로 블록 스코프를 가집니다.
호이스팅(Hoisting): const도 호이스팅되지만, 선언 전에 접근할 수 없으며 ReferenceError가 발생합니다.
재할당 불가능: const로 선언된 변수는 재할당이 불가능합니다. 상수 값을 선언할 때 사용합니다.
값 변경 가능성: const로 선언된 객체(Object)나 배열(Array)은 참조값이 고정되기 때문에 재할당은 불가능하지만, 객체나 배열 내부의 속성은 변경할 수 있습니다.

```
>CODE
```
  function exampleConst() {
    const x = 10;
    // x = 20; // TypeError: Assignment to constant variable.
  
    const person = { name: "John" };
    person.name = "Doe"; // 객체의 속성은 변경 가능
    console.log(person.name); // "Doe"
  
    const numbers = [1, 2, 3];
    numbers.push(4); // 배열의 요소는 변경 가능
    console.log(numbers); // [1, 2, 3, 4]
  }
  
  exampleConst();
```

## 정리
```
var: 함수 스코프, 호이스팅됨, 재할당 가능.
let: 블록 스코프, 호이스팅됨(하지만 초기화 전에 접근 불가), 재할당 가능.
const: 블록 스코프, 호이스팅됨(하지만 초기화 전에 접근 불가), 재할당 불가능(하지만 객체/배열의 내부 변경 가능).
```


---
자료형
---
|-|
|-|
|-|

>원시 자료형(Primitive Data Types)
```
원시 자료형은 한 번 생성되면 그 값을 변경할 수 없는 자료형입니다.
JavaScript에는 총 7개의 원시 자료형이 있습니다.
```
>확인
```
Number: 숫자형을 나타내며, 정수와 실수를 포함합니다.
  let age = 25;
  let price = 99.99;

BigInt: 안전한 정수 범위를 벗어나는 큰 숫자를 나타내기 위해 사용됩니다. 일반 숫자(Number)보다 더 큰 정수를 다룰 수 있습니다.
  let bigNumber = 1234567890123456789012345678901234567890n;

String: 문자열을 나타내며, 텍스트 데이터를 다룹니다. 작은따옴표('), 큰따옴표("), 또는 백틱(`)으로 감쌀 수 있습니다.
  let name = "John";
  let greeting = 'Hello';
  let template = `Hello, ${name}`;

Boolean: 논리 자료형으로, true 또는 false의 두 가지 값만 가질 수 있습니다.
  let isStudent = true;
  let hasGraduated = false;

Undefined: 변수가 선언되었지만 초기화되지 않은 상태를 나타냅니다.
  let notAssigned;
  console.log(notAssigned); // undefined

Null: 의도적으로 "값이 없음" 또는 "비어 있음"을 나타냅니다.
  let emptyValue = null;

Symbol: 유일한 식별자를 만들기 위해 사용되는 자료형입니다. 주로 객체의 속성 키로 사용됩니다.
  let uniqueId = Symbol('id');
```


>참조 자료형 (Reference Data Types)
```
참조 자료형은 값이 아니라 메모리 주소를 참조하는 자료형입니다.
객체(Object), 배열(Array), 함수(Function) 등이 있습니다
```
>확인
```
Object: 다양한 속성을 가질 수 있는 복합 자료형입니다. 키-값 쌍의 집합으로 이루어져 있습니다.
  let person = {
    name: "John",
    age: 30,
    isStudent: false
  };

Array: 순서가 있는 리스트 형태의 자료형으로, 다양한 타입의 요소를 가질 수 있습니다.
  let colors = ['red', 'green', 'blue'];

Function: 실행 가능한 코드를 정의한 블록입니다. JavaScript에서는 함수를 일급 객체로 취급하므로 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다.
  function greet() {
    console.log("Hello!");
  }

Date: 날짜와 시간을 표현하기 위한 객체입니다.
  let now = new Date();

RegExp: 정규 표현식을 표현하기 위한 객체입니다.
  let pattern = /ab+c/;

Map, Set: 고유한 키와 값을 저장할 수 있는 자료 구조입니다.
  Map: 키-값 쌍의 집합으로, 키로 어떤 자료형이든 사용할 수 있습니다.
  Set: 유일한 값들의 집합으로, 중복된 값은 허용되지 않습니다.

  let map = new Map();
  map.set('key', 'value');

  let set = new Set();
  set.add(1);

```
>-
```
```

---
보간법
---
|-|
|-|
|-|

>보간법이란
```
JavaScript에서 "보간법"이란 주로 문자열 보간(String Interpolation)을 의미합니다.
문자열 보간은 문자열 내에 변수나 표현식을 삽입하여 더 쉽게 문자열을 구성하는 방법입니다.
ES6(ECMAScript 2015)에서는 템플릿 리터럴(Template Literal)을 사용하여 문자열 보간을 구현할 수 있습니다.
```
>문자열 보간이란
```
문자열 보간은 기존 문자열을 기반으로 변수나 표현식의 값을 동적으로 삽입하는 기법입니다.
 JavaScript에서는 템플릿 리터럴을 사용하여 이를 쉽게 구현할 수 있습니다.
```
>템플릿 리터털(Template Literal)
```
템플릿 리터럴은 백틱( ` )으로 감싸진 문자열을 의미하며, 내부에 ${...} 문법을 사용하여
변수를 삽입하거나 표현식을 계산하여 문자열에 포함시킬 수 있습니다.
이를 통해 가독성이 좋고 간결한 코드를 작성할 수 있습니다.
```

> ES6이전 예전 코드
```
const name = "Alice";
const age = 30;

// 전통적인 문자열 연결 방식
const greeting = "Hello, my name is " + name + " and I am " + age + " years old.";

console.log(greeting); // 출력: Hello, my name is Alice and I am 30 years old.

```

> 보간법 적용 예시코드
```
const name = "Alice";
const age = 30;

// 템플릿 리터럴을 사용한 문자열 보간
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // 출력: Hello, my name is Alice and I am 30 years old.

```
> 보간법 적용 예시코드
```
const a = 5;
const b = 10;

// 템플릿 리터럴에 표현식 사용
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // 출력: The sum of 5 and 10 is 15.

```

> 보간법 적용 예시코드
```
const message = `This is a message
that spans across
multiple lines.`;

console.log(message);
/* 출력:
This is a message
that spans across
multiple lines.
*/

```



