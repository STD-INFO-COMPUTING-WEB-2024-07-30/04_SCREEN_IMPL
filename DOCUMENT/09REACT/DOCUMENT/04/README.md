# REACT 

|참고|
|-|
|-|

---
Props vs State
---
> Props
```

정의: 컴포넌트 간 데이터를 전달하기 위해 사용되는 읽기 전용 데이터.
특징:
  부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달.
  읽기 전용으로, 자식 컴포넌트에서 직접 수정할 수 없음.
  컴포넌트의 초기 설정이나 구성 요소로 자주 사용됨.
```

> State
```
정의: 컴포넌트 내부에서 관리되는 데이터로, 컴포넌트의 동적인 상태를 나타냄.
특징:
  컴포넌트 내부에서 선언되고, 해당 컴포넌트에서만 관리됨.
  동적으로 변경 가능하며, setState 또는 useState로 업데이트.
  컴포넌트의 렌더링과 상호작용을 관리.
```

> 공통점 / 차이점 <br>

| 항목        | props                          | state                           |
|-------------|--------------------------------|---------------------------------|
| **정의**    | 부모 컴포넌트로부터 전달되는 읽기 전용 데이터 | 컴포넌트 내부에서 관리되는 동적인 데이터 |
| **변경 가능 여부** | 불변 (읽기 전용)                    | 가변 (컴포넌트 내부에서 변경 가능) |
| **초기화 위치** | 부모 컴포넌트에서 설정               | 컴포넌트 자체에서 설정            |
| **목적**    | 컴포넌트 간 데이터 전달 및 구성 요소 설정  | 컴포넌트의 동적 상태 관리           |
| **수명 주기** | 부모 컴포넌트의 렌더링에 따라 갱신        | 컴포넌트의 수명 주기 동안 유지됨     |
| **접근 방식** | `this.props` 또는 `props`           | `this.state` 또는 `state`        |
| **업데이트 방식** | 부모 컴포넌트가 새로운 props를 전달       | `setState` 또는 `useState` 사용    |
| **사용 위치** | 함수형 및 클래스형 컴포넌트 모두 사용 가능   | 함수형 및 클래스형 컴포넌트 모두 사용 가능 |



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

    <!-- 
        F5
    -->
    <title>Document</title>
</head>
<body>

    <div id="root"></div>
    <hr>
    <div id="root2"></div>
    <hr>
    <div id="root3"></div>
    <hr>
    <div id="root4"></div>

    <script type="text/babel">
        
        //1 함수형 컴포넌트
        function Component(props){
            return (
                <div>
                    <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다.</h1>
                </div>
            );
        }
        //1 랜더링
        ReactDOM.render(
            <Component message="안녕하세요!!" />,
            document.querySelector("#root")
        )

        //2 클래스형 컴포넌트
        class Component2 extends React.Component{
            render(){
                return (
                <div>
                    <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                </div>
                );
            }
        }

        //2 랜더링(props.message 전달 )
        ReactDOM.render(
            <Component2 message="안녕하세요!!" />,
            document.querySelector("#root2")
        )

       // 3 함수형 컴포넌트 (useState 사용)
       function FunctionComponentWithState() {
            const [count, setCount] = React.useState(0);

            React.useEffect(() => {
                const interval = setInterval(() => {
                    setCount(prevCount => prevCount + 1);
                }, 1000);
                return () => clearInterval(interval); // Cleanup on unmount
            }, []);

            return (
                <div>
                    <h1>이것은 상태를 관리하는 함수형 컴포넌트입니다.</h1>
                    <p>Count : {count}</p>
                </div>
            );
        }

        // 3 랜더링
        ReactDOM.render(
            <FunctionComponentWithState />,
            document.querySelector("#root3")
        );

        //4 클래스형 컴포넌트
        class Component3 extends React.Component{
            constructor(props){
                super(props);               //props 초기화
                this.state = {count : 0};   //state 설정
            }
            //브라우저로 랜더링되는(표시되는) html코드 
            render(){
                return (
                    <div>
                        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                        <p>Count : {this.state.count}</p>
                    </div>
                );
            }
            //props 기본값 설정 
            static defaultProps={
                message:"기본값!!",
            }
            //컴포넌트가 렌더링된 후에 호출되는 생명주기 메소드
            componentDidMount(){
                //비동기 함수 1000m/s 뒤에 실행 
                setInterval(()=>{
                    //this.setState는 상위클래스에서 물려주는 비동기 함수
                    //state에 특정 값 주입에 사용됨.
                    this.setState({
                        count : this.state.count + 1,
                    })
                
                },1000);
                
            }
        }

        //4 랜더링(props.message 전달 )
        ReactDOM.render(
            <Component3 />,
            document.querySelector("#root4")
        )
    </script>
</body>
</html>
```


---
Props
---
> 함수형
```
        //1 함수형 컴포넌트
        function Component(props){
            return (
                <div>
                    <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다.</h1>
                </div>
            );
        }
        //1 랜더링
        ReactDOM.render(
            <Component message="안녕하세요!!" />,
            document.querySelector("#root")
        )

```

> 클래스형
```
        //2 클래스형 컴포넌트
        class Component2 extends React.Component{
            render(){
                return (
                <div>
                    <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                </div>
                );
            }
        }

        //2 랜더링(props.message 전달 )
        ReactDOM.render(
            <Component2 message="안녕하세요!!" />,
            document.querySelector("#root2")
        )
```



---
State
---
> 함수형
```
       // 3 함수형 컴포넌트 (useState 사용)
       function FunctionComponentWithState() {
            // useState 훅을 사용하여 count 상태 변수를 선언하고 초기값을 0으로 설정합니다.
            const [count, setCount] = React.useState(0);

            // useEffect 훅을 사용하여 컴포넌트가 마운트된 후에 실행되는 효과를 정의합니다.
            React.useEffect(() => {  
                const interval = setInterval(() => {
                    setCount(prevCount => prevCount + 1);
                }, 1000);
                 // useEffect의 정리 함수로, 컴포넌트가 언마운트될 때 타이머를 정리합니다.
                return () => clearInterval(interval); // Cleanup on unmount
            }, []);
            // 컴포넌트의 렌더링 결과를 반환합니다.
            return (
                <div>
                    <h1>이것은 상태를 관리하는 함수형 컴포넌트입니다.</h1>
                    <p>Count : {count}</p>
                </div>
            );
        }

        // 3 랜더링
        ReactDOM.render(
            <FunctionComponentWithState />,
            document.querySelector("#root3")
        );

```
> 부분 설명
```
useState 훅:
    const [count, setCount] = React.useState(0);
    useState 훅을 사용하여 count라는 상태 변수와 이를 업데이트하는 함수 setCount를 선언합니다.
    초기 상태 값은 0으로 설정됩니다.

useEffect 훅:   
    React.useEffect(() => { ... }, []);
    useEffect 훅을 사용하여 컴포넌트가 마운트된 후에 실행되는 부수 효과를 정의합니다.
    첫 번째 인자로 주어진 함수는 컴포넌트가 마운트된 후에 실행됩니다.
    빈 배열 []을 두 번째 인자로 전달하여 이 효과가 컴포넌트의 마운트와 언마운트 시에만 실행되도록 합니다.

훅(Hook)이란
  React에서 Hook은 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 특별한 함수입니다.
  Hook을 사용하면 클래스형 컴포넌트를 작성할 필요 없이 함수형 컴포넌트만으로도 복잡한 상태 관리와 생명주기 메서드를 구현할 수 있습니다.

주요 훅 정리
  useState: 컴포넌트에서 상태를 관리.
  useEffect: 부수 효과를 처리 (데이터 가져오기, 구독 설정 등).
  useContext: 컨텍스트(Context) 값을 사용.
  useReducer: 복잡한 상태 관리를 위한 리듀서 사용.
  useCallback: 메모이제이션된 콜백 함수 생성.
  useMemo: 메모이제이션된 값을 생성.
  useRef: 변경 가능한 참조를 생성.
  useImperativeHandle: 부모 컴포넌트에서 자식 컴포넌트의 인스턴스를 참조.
  useLayoutEffect: DOM 업데이트 후 동기적으로 실행되는 효과.
  useDebugValue: 커스텀 Hook의 디버깅 정보를 표시.

의존성 배열( [] )
    의존성 배열( [] )은 useEffect 훅이 재실행될 조건을 정의합니다.
    빈 배열 []:  빈 배열을 전달하면, 이 효과는 컴포넌트가 처음으로 렌더링될 때(마운트) 한 번만 실행되고,
                컴포넌트가 언마운트될 때 정리(cleanup) 함수가 실행됩니다.
    특정 값 배열 [value1, value2]: 특정 값을 포함한 배열을 전달하면, 이 값들이 변경될 때마다 useEffect가 다시 실행됩니다.
    없음      : 의존성 배열을 생략하면, 컴포넌트가 렌더링될 때마다(상태나 props가 변경될 때마다) useEffect가 실행됩니다.

마운트 vs 언마운트
    마운트(Mount)
      마운트는 컴포넌트가 처음으로 DOM에 추가될 때 발생합니다. 컴포넌트가 렌더링되어 화면에 표시되기 시작하는 시점입니다.
      예시
        사용자가 웹 페이지를 처음 열 때 컴포넌트가 화면에 표시됨.
        조건에 따라 컴포넌트가 렌더링되어 화면에 나타날 때.
  
    언마운트(Unmount)
      언마운트는 컴포넌트가 DOM에서 제거될 때 발생합니다. 컴포넌트가 화면에서 사라지는 시점입니다.
      예시
        사용자가 페이지를 떠날 때 컴포넌트가 제거됨.
        조건이 변경되어 컴포넌트가 더 이상 렌더링되지 않을 때.

setInterval:
    const interval = setInterval(() => { setCount(prevCount => prevCount + 1); }, 1000);
    setInterval을 사용하여 1초마다 count 상태를 1씩 증가시키는 타이머를 설정합니다.
    setCount 함수는 이전 상태 값(prevCount)을 받아서 1씩 증가시킨 값을 설정합니다.

정리 함수:
    return () => clearInterval(interval);
    useEffect의 정리(cleanup) 함수로, 컴포넌트가 언마운트될 때 setInterval로 설정된 타이머를 정리합니다.

JSX 반환:
    return ( <div> ... </div> );
    함수형 컴포넌트의 렌더링 결과를 JSX로 반환합니다.
    <h1> 요소는 컴포넌트의 제목을 표시합니다.
    <p> 요소는 현재 count 상태 값을 표시합니다.
```

---

> 클래스
```
        //4 클래스형 컴포넌트
        class Component3 extends React.Component{
            //1) 생성자 함수: 컴포넌트의 초기 상태를 설정
            constructor(props){
                super(props);               // 부모 클래스의 생성자를 호출하여 props를 초기화
                this.state = {count : 0};   // state 설정: count라는 상태 변수를 0으로 초기화
            }
            //2)브라우저로 랜더링되는(표시되는) html코드 
            render(){
                return (
                    <div>
                        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                        <p>Count : {this.state.count}</p>
                    </div>
                );
            }
            //3) props 기본값 설정 
            static defaultProps={
                message:"기본값!!",
            }
            //4)  컴포넌트가 렌더링된 후에 호출되는 생명주기 메소드
            componentDidMount(){
                //비동기 함수 1000m/s 뒤에 실행 
                setInterval(()=>{
                    //this.setState는 상위클래스에서 물려주는 비동기 함수
                    //state에 특정 값 주입에 사용됨.
                    this.setState({
                        count : this.state.count + 1,
                    })
                
                },1000);
                
            }
        }

        //4 랜더링(props.message 전달 )
        ReactDOM.render(
            <Component3 />,
            document.querySelector("#root4")
        )

```
> 부분 설명
```
  1)
  constructor는 컴포넌트가 처음 생성될 때 호출됩니다.
  super(props)를 호출하여 부모 클래스(React.Component)의 생성자를 호출하고 props를 초기화합니다.
  this.state를 설정하여 초기 상태를 정의합니다. 여기서는 count 상태 변수를 0으로 초기화합니다.

  2)
  render 메서드는 컴포넌트가 렌더링될 때 호출되며, JSX를 반환합니다.
  this.props.message는 부모 컴포넌트로부터 전달된 message prop 값을 사용합니다.
  this.state.count는 현재 count 상태 변수를 표시합니다.

  3)
  defaultProps를 통해 message prop의 기본값을 설정합니다.
  부모 컴포넌트에서 message prop을 전달하지 않으면, 기본값인 "기본값!!"이 사용됩니다.

  4)
  생명주기 메서드: componentDidMount:
  componentDidMount 메서드는 컴포넌트가 처음으로 DOM에 렌더링된 후에 호출됩니다.
  setInterval을 사용하여 1초마다 count 상태 변수를 1씩 증가시키는 타이머를 설정합니다.
  this.setState는 React의 setState 메서드로, 상태를 업데이트하고 컴포넌트를 다시 렌더링합니다.
```

