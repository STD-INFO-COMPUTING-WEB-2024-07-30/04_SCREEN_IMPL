import "../../styles/layout/Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.css";


import { Link } from "react-router-dom";

//전역 상태 받기
import {useEffect, useState , useContext} from "react";
import {LoginContext} from "../../contexts/GlobalContextProvider"; //contextAPI

//SERVICE 
import {requestRoot} from "../../services/HomeService"

const header = () => {
    
  const {logined} = useContext(LoginContext);// 로그인 상태정보
  console.log('header',logined)
  
  const [category,setCategory] = useState([])

  useEffect(()=>{
    
    const fetchCategoryData = async ()=>{
      const categoryData =  await requestRoot();
      setCategory(categoryData)
      console.log("header...",categoryData);
    }
    fetchCategoryData();

  },[])

  
  return (
    <header>
      <div className="top-header">
        <ul>
          { logined ? 
              <li> <Link to="/logout">로그아웃</Link> </li>
              :
              <li> <Link to="/login">로그인</Link> </li>  
          }
          <li> <Link to="">전체메뉴</Link> </li>
        </ul>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">홈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {
              category && (category.map(el=>{
                return <Nav.Link  key={el.categoryId} href={`/product/list/${el.categoryId}`} className="m-3">{el.category}</Nav.Link>
              }))
          
            }
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </header>
  );
};

export default header;
