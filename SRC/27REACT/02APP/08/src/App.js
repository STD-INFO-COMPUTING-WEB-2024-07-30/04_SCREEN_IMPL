import logo from './logo.svg';
import './App.css';
//IN_LINE
import MyComponent1 from './Component/01InlineStyle';
import MyComponent2 from './Component/02ImportStyle';
import MyComponent3 from './Component/03ImportModuleStyle';

//StyledComponent
import Wrapper from  './CSSInJS/01Styled_Component'
import Button1 from  './CSSInJS/02Styled_Component'
import Buttons from  './CSSInJS/03Styled_Component'
import GlobalStyle from './CSSInJS/04Styled_Component'
import Button_Event from './CSSInJS/05Styled_Component_Event'

function App() {
  return (
    <>
    <GlobalStyle />
    {/* OLDER */}
    <div className="App">
       <MyComponent1 /> 
       <MyComponent2 /> 
       <MyComponent3 /> 
    </div>

    {/* CSSInJS */}
    <div className="CSS-In-JS Styled-component">
      <Wrapper />
      <Button1>버튼1</Button1>
      <Button1 primary='true'>버튼2</Button1>
      <hr/>
      <Buttons.SuperButton>부모버튼</Buttons.SuperButton>
      <Buttons.SubButton>자식버튼</Buttons.SubButton>
      <hr/>
      <Button_Event>이벤트버튼1</Button_Event>
      <Button_Event onClick={(e)=>{alert('onclicked..')}}>이벤트버튼2</Button_Event>
    </div>
    </>
  );
}
export default App;
