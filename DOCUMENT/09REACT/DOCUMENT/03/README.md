# REACT 

|참고|
|-|
|-|

---
JSX
---
> JSX
```
JSX(JavaScript XML)는 React에서 사용되는 자바스크립트의 확장 문법으로,
HTML과 비슷한 구문을 통해 React 컴포넌트를 정의하고 렌더링하는 데 사용됩니다.

JSX는 JavaScript 코드 안에서 HTML 같은 구문을 사용할 수 있게 해주며,
이를 통해 UI 요소를 선언적이고 직관적으로 작성할 수 있게 합니다.
```

>특징
```
HTML과 유사한 문법:
  JSX는 XML/HTML과 유사한 문법을 사용합니다. 예를 들어, <div>Hello, world!</div> 같은 구문을 JavaScript 코드 안에서 사용할 수 있습니다.
  이는 코드가 더 직관적이고 읽기 쉬워지게 만듭니다.

JavaScript 표현식 포함 가능:
  JSX 내부에서 중괄호 {}를 사용하여 JavaScript 표현식을 포함할 수 있습니다.
  예: <h1>{title}</h1> (여기서 title은 JavaScript 변수)

컴파일 필요:
  JSX는 브라우저가 직접 이해할 수 없으므로, Babel과 같은 도구를 사용하여 순수 JavaScript로 변환해야 합니다.
  변환된 코드는 React.createElement 호출로 이루어진 순수 JavaScript입니다.
```

---
코드확인
---
> 전체코드
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- babel 추가 -->
    <script src="https://unpkg.com/@babel/standalone@7.16.4/babel.min.js"></script>

    <title>Document</title>
</head>
<body>

    <div id="root"></div>
    <div id="root2"></div>
    <div id="root3"></div>

    <script type="text/babel">
        
        const title = "제목!";
        ReactDOM.render(
            <>
            <div a="a">
                <div>
                    <h1>{title}</h1>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
            <div a="a">
                <div>
                    <h1>{title}</h1>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
            </>,
            document.querySelector("#root")
        )
    </script>
</body>
</html>
```

---
부분확인
---
> JSX 코드
```
            <>
            <div a="a">
                <div>
                    <h1>{title}</h1>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
            <div a="a">
                <div>
                    <h1>{title}</h1>
                    <ul>
                        <li>React</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
            </>,

```

> <>  - </>
```
JSX 내에서 여러 요소를 포함할 때는 단일 루트 요소로 감싸야 합니다.
<></> 또는 <React.Fragment></React.Fragment>는 여러 요소를 감싸는 데 사용할 수 있는 빈 태그로,
DOM에 불필요한 추가 요소를 생성하지 않고 여러 요소를 그룹화할 수 있게 해줍니다.
```

 {title}
```
JSX 내부에서 JavaScript 표현식을 사용할 때는 중괄호 {}를 사용합니다.
이를 통해 변수, 함수 호출, 삼항 연산자 등 다양한 JavaScript 표현식을 JSX 내에서 사용할 수 있습니다.
```
