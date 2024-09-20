# REACT 

|참고|
|-|
|-|

---
전체코드
---
> 부제목
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
    
    <script type="text/babel">
        //함수 컴포넌트 
        function Component(){
            return(
                <div>
                    <button onClick={()=>{
                        console.log("Clicked");
                    }}>
                    클릭
                    </button>
                </div>
            )
        }
        ReactDOM.render(<Component />,document.querySelector("#root"));

        //클래스 컴포넌트
        class Component2 extends React.Component {
            state={
                count : 0,
            }
            render(){
                return (
                <div>
                    <p>{this.state.count}</p>
                    <button onClick={this.click}>
                    클릭2
                    </button>
                </div>
                );
            }
            click=()=>{
                console.log("clickded");
                this.setState((state)=>({...state,count : state.count + 1,}));
                console.log(this.setState);
            }
        }
        ReactDOM.render(<Component2 />,document.querySelector("#root2"));
    </script>
</body>
</html>
```

---
부분확인
---
> 함수형 컴포넌드
```
        //함수 컴포넌트 
        function Component(){
            return(
                <div>
                    <button onClick={()=>{
                        console.log("Clicked");
                    }}>
                    클릭
                    </button>
                </div>
            )
        }
        ReactDOM.render(<Component />,document.querySelector("#root"));
```



> 클래스형 컴포넌드
```
        //클래스 컴포넌트
        class Component2 extends React.Component {
            state={
                count : 0,
            }
            render(){
                return (
                <div>
                    <p>{this.state.count}</p>
                    <button onClick={this.click}>
                    클릭2
                    </button>
                </div>
                );
            }
            click=()=>{
                console.log("clickded");
                this.setState((state)=>({...state,count : state.count + 1,}));
                console.log(this.setState);
            }
        }
        ReactDOM.render(<Component2 />,document.querySelector("#root2"));

        //전개연산자(...)
        //전개 연산자(spread operator)는 JavaScript에서 객체나 배열의 모든 요소를 개별적으로 복사하는 데 사용됩니다.
        //전개 연산자는 ...으로 표현됩니다
        //전개 연산자는 객체의 모든 속성을 복사하는 데 사용되며, 이를 통해 상태 객체를 쉽게 업데이트할 수 있습니다.

        //this.setState((state) => ({ ...state, count: state.count + 1 })) 문장은 현재 상태(state) 객체를 복사하고,
        //복사된 state의 속성중 count 속성의 값을 1 증가시켜 반환합니다.
        //이반환된 값으로 state를 다시 업데이트(this.setState)합니다.
       

```

