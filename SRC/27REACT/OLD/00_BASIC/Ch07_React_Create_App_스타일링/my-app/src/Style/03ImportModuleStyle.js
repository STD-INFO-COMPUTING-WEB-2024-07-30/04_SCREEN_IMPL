//[안됨!!]!!!CSS 모듈에서는 다음과 같이 CSS 클래스를 불러와 사용
import StyleTest from './common.module.css';

function MyComponent3() {
  return (
    <div className={StyleTest.test2}>Hello, world!</div>
  );
}
 
export default MyComponent3;
