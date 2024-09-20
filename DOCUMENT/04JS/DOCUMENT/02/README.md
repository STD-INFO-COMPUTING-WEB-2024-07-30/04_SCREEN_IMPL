# 연산자

---
연산자
---
|-|
|-|
|[참고](https://velog.io/@re_go/Javascript-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%B4%9D%EC%A0%95%EB%A6%AC-%EC%9B%90%EC%8B%9C-%ED%83%80%EC%9E%85%EC%9D%98-%EC%A0%95%EC%9D%98-%EB%B0%8F-%ED%8A%B9%EC%A7%95%EB%93%A4)|

>
```

```

## 1. 산술 연산자 (Arithmetic Operators)
---
```
숫자 간의 기본적인 산술 연산을 수행합니다.
```
> CODE
```
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000

```

## 2. 대입 연산자 (Assignment Operators)
---
```
값을 변수에 할당할 때 사용합니다.

= : 대입
+= : 더한 후 대입
-= : 뺀 후 대입
*= : 곱한 후 대입
/= : 나눈 후 대입
%= : 나머지를 구한 후 대입
```
> CODE
```
let x = 5;
x += 3;  // x = x + 3, 결과는 8
x -= 2;  // x = x - 2, 결과는 6
```

## 3. 비교 연산자 (Comparison Operators)
---
```
두 값을 비교하고 true 또는 false를 반환합니다.

== : 값이 같음
=== : 값과 자료형이 같음 (엄격한 비교)
!= : 값이 다름
!== : 값 또는 자료형이 다름
> : 크다
< : 작다
>= : 크거나 같다
<= : 작거나 같다
```
> CODE
```
console.log(5 == '5');   // true (값만 비교)
console.log(5 === '5');  // false (자료형도 비교)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true
console.log(10 > 5);     // true

```


## 4. 논리 연산자 (Logical Operators)
---
```
불리언 값들 간의 논리적 연산을 수행합니다.

&& : AND (모두 true일 때만 true)
|| : OR (하나라도 true면 true)
! : NOT (true를 false로, false를 true로 변환)
```
> CODE
```
let a = true;
let b = false;

console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false

```

## 5. 삼항 연산자 (Ternary Operator)
---
```
조건에 따라 두 값 중 하나를 반환합니다. 조건 ? 참일 때 값 : 거짓일 때 값
```
> CODE
```
let age = 18;
let canVote = (age >= 18) ? "You can vote" : "You cannot vote";

console.log(canVote);  // "You can vote"

```

## 6. 비트 연산자 (Bitwise Operators)
---
```
비트 단위로 연산을 수행합니다.

& : AND
| : OR
^ : XOR
~ : NOT
<< : 왼쪽 시프트
>> : 오른쪽 시프트
```
> CODE
```
let x = 5;  // 0101 in binary
let y = 3;  // 0011 in binary

console.log(x & y);  // 1 (0001 in binary)
console.log(x | y);  // 7 (0111 in binary)

```

## 7. 타입 연산자 (Type Operators)
---
```
자료형을 확인하거나 변경할 때 사용합니다.

typeof : 자료형을 반환
instanceof : 객체가 특정 클래스의 인스턴스인지 확인
```
> CODE
```
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log([] instanceof Array);  // true

```


