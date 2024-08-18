# REACT 

|참고|
|-|
|-|


---
전체코드
---
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

    <button id="btn_plus">btn</button>
    <script type="text/babel">
        //class Component 정의
        class ClassComponent extends React.Component{
            render(){
                return <div>HELLO</div>;
            }
        }
        //class Component 사용
        ReactDOM.render(
            <ClassComponent />,
            document.querySelector("#root")
        )

        //function Component 정의
        function FunctionComponent(){
            return <div>HELLO2</div>;
        }
        //function Component 사용
        ReactDOM.render(
            <FunctionComponent />,
            document.querySelector("#root2")
        )

         //function Component 정의
         const FunctionComponent2=()=>{
            return <div>HELLO3</div>;
        }
        //function Component 사용
        ReactDOM.render(
            <FunctionComponent2 />,
            document.querySelector("#root3")
        )       
    </script>
    
</body>
</html>
```

---
클래스형 COMPONENT
---
> 컴포넌트 정의
```
        //class Component 정의
        class ClassComponent extends React.Component{
            render(){
                return <div>HELLO</div>;
            }
        }

        //extends React.Component: React.Component를 상속합니다.
        //이를 통해 ClassComponent는 React 컴포넌트로서의 기능을 가지게 됩니다.
        //React.Component는 React에서 제공하는 기본 클래스이며, 이를 상속받으면 React 컴포넌트로 동작할 수 있습니다.

        //render(){} :이 메서드는 컴포넌트가 화면에 렌더링할 내용을 반환합니다.
        //render 메서드는 항상 JSX 또는 React.createElement 호출을 통해 React 요소를 반환해야 합니다.

        //return <div>HELLO</div> :render 메서드 내에서 반환하는 JSX 표현입니다.
        //<div>HELLO</div>는 단순한 JSX로, <div> 요소와 그 안에 텍스트 "HELLO"를 포함합니다.
        //이 JSX는 실제 DOM 요소로 변환되어 브라우저에 렌더링됩니다.

```

> 컴포넌트 렌더링
```
        //class Component 사용
        ReactDOM.render(
            <ClassComponent />,
            document.querySelector("#root")
        )
        //ClassComponent /> :  ClassComponent를 사용하여 생성된 React 요소입니다.
        //document.querySelector("#root") : React 요소가 렌더링될 실제 DOM 요소를 지정합니다.
```



---
함수형 COMPONENT
---
> 함수형 컴포넌트 정의
```
        //function Component 정의
        function FunctionComponent(){
            return <div>HELLO2</div>;
        }
        //function Component 정의
        const FunctionComponent2=()=>{
            return <div>HELLO3</div>;
        }
```
> 함수형 컴포넌트 렌더링
```
        //function Component 사용
        ReactDOM.render(
            <FunctionComponent />,
            document.querySelector("#root2")
        )
        //function Component 사용
        ReactDOM.render(
            <FunctionComponent2 />,
            document.querySelector("#root3")
        )  

