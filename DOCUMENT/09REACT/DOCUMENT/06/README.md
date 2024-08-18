# REACT 

|참고|
|-|
|[클래스형 컴포넌트 생명주기 함수](https://velog.io/@wlwl99/React-%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0Lifecycle)|
|[함수형 컴포넌트 생명주기 함수](https://yooneeee.tistory.com/45)|

---

컴포넌트 생명주기 함수
---
> 클래스형 컴포넌트 LIFE CYCLE 함수들(현재는 권장하지 않음)
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
 
        class App extends React.Component{
            state ={
                age : 38,
            };
            
            interval = null;
            //
            constructor(props){
                super(props);
                console.log('constructor',props);
            }
            //
            render(){
                console.log("render");
                return (
                    <>
                    <h2>
                        Hello {this.props.name}-{this.state.age}
                    </h2>
                    <button onClick={this.componentWillUnmount}>중지</button>
                    </>
                );
            }
            //컴포넌트가 화면에 렌더링되기 전에 호출되는 메서드(비권장 - 생성자로 대체)
            componentWillMount(){
                console.log("ComponentWillMount");
            }
            // 컴포넌트가 화면에 처음으로 렌더링된 후에 호출
            componentDidMount(){
                console.log("ComponentDidMount");
                this.interval = setInterval(()=>{
                    console.log("setINterval")
                    this.setState((state)=>({...state, age : state.age+1,}))
                },1000)
            }
            //props를 새로 지정했을때 바로 호출
            //state의 변경에는 반응을 하지 않는다
            componentWillReceiveProps(nextProps){
                console.log("componentWillReceiveProps",nextProps);
            }
            //props만 변경되거나 ,state가 변경되거나
            //둘다 변경되어도 실행
            shouldComponentUpdate(nextProps,nextState){
                console.log("shouldComponentUpdate",nextProps,nextState);
                return true;
            }
            //컴포넌트가 재 랜더링 되기 직전에 실행
            //여기선 setState 사용하면 안됨 
            componentWillUpdate(nextProps,nextState){
                console.log("componentWillUpdate",nextProps,nextState);
            }
            //컴포넌트가 재랜더링을 마치면 실행 
            componentDidUpdate(prevProps,prevState){
                console.log("componentDidUpdate",prevProps,prevState);
            }
            //컴포넌트가 사라졌을때 마운트 걸린것도 해제 
            componentWillUnmount(){
                console.log('componentWillUnmount');
                clearInterval(this.interval);
            }

        }
        ReactDOM.render(<App name="Mark" />,document.querySelector("#root"));

    </script>
    

</body>
</html>
```
---
> 함수형 컴포넌트의 생명주기
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Functional Component</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const { useState, useEffect } = React;

        const App = (props) => {
            const [age, setAge] = useState(38);
            let interval;

            useEffect(() => {
                console.log("ComponentDidMount");
                interval = setInterval(() => {
                    console.log("setInterval");
                    setAge((prevAge) => prevAge + 1);
                }, 1000);

                return () => {
                    console.log('componentWillUnmount');
                    clearInterval(interval);
                };
            }, []);

            useEffect(() => {
                console.log("render");
            });

            const handleStop = () => {
                clearInterval(interval);
            };

            return (
                <>
                    <h2>
                        Hello {props.name}-{age}
                    </h2>
                    <button onClick={handleStop}>중지</button>
                </>
            );
        };

        ReactDOM.render(<App name="Mark" />, document.querySelector("#root"));
    </script>
</body>
</html>

```

```
useState와 useEffect를 사용하여 함수형 컴포넌트를 구현합니다.
useEffect는 componentDidMount, componentWillUnmount 라이프사이클 메서드를 대체하고 부수 효과를 처리합니다.
handleStop 함수는 버튼을 클릭할 때 interval을 중지합니다.
HTML 파일에 React와 ReactDOM 스크립트를 포함시켰습니다.
Babel을 사용하여 JSX를 변환합니다.
```
