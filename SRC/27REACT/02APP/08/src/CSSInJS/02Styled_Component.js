import styled from 'styled-components';

//02 props를 이용한 동적 스타일링
const Button = styled.button`
background-color: ${(props) => props.primary ? 'blue' : 'white'};
color: ${(props) => props.primary ? 'white' : 'blue'};
border: 2px solid blue;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
cursor:pointer;
`;

export default Button;


