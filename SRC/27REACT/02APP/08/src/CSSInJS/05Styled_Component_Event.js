//05 Styled-component Event 추가
import React from 'react';
import styles from './Button.module.css';  //
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border: 2px solid blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    background-color: white;
    color: blue;
  }
  &:active {
    background-color : orange;
    color : black;
  }
`;

// 안됨..
function Button(props) {
  console.log("props.. : ",props);
  return <StyledButton className={styles.button} {...props} />;
}

export default Button;

//[참고]
// ...props는 spread operator라고 부르며, 
//객체나 배열을 전개할 때 사용됩니다.

// 여기서 props는 StyledButton 컴포넌트에 전달되는 
//모든 속성(property)을 담고 있는 객체입니다. 
//따라서 ...props를 사용하면 StyledButton에 
//전달된 모든 속성을 StyledButton의 props로 전달할 수 있습니다.

// 즉, StyledButton의 props 속성 중에서 className 속성을 
//styles.button으로 지정하고, 
//나머지 속성은 그대로 StyledButton에 전달하는 것입니다.
