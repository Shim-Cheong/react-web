import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
// import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">수강심청이</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <LinkContainer to="/signup">
              <NavItem>Sign Up</NavItem>
            </LinkContainer> */}
            {/* <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar>
        <label for="college">대학분류</label>
        <select name="college" id="college">
          <option value="GIST대학">GIST대학</option>
        </select>
        <label for="major">개설부서</label>
        <select name="major" id="major">
          <option value="-전체-">-전체-</option>
          <option value="기초교육학부">기초교육학부</option>
          <option value="물리전공">물리전공</option>
          <option value="화학전공">화학전공</option>
          <option value="생명과학전공">생명과학전공</option>
          <option value="전기전자컴퓨터전공">전기전자컴퓨터전공</option>
          <option value="기계공학전공">기계공학전공</option>
          <option value="신소재공학전공">신소재공학전공</option>
          <option value="지구환경공학전공">지구환경공학전공</option>
          <option value="대학공통">대학공통</option>
          <option value="수학부전공">수학부전공</option>
          <option value="에너지부전공">에너지부전공</option>
          <option value="의생명공학 부전공">의생명공학 부전공</option>
          <option value="문화기술 부전공">문화기술 부전공</option>
          <option value="지능로봇 부전공">지능로봇 부전공</option>
          <option value="인문학, 사회과학 부전공">
            인문학, 사회과학 부전공
          </option>
          <option value="언어교육센터">언어교육센터</option>
          <option value="SW교육센터">SW교육센터</option>
        </select>
        <label for="semester">년도/학기</label>
        <input className="year" placeholder="연도" value="2020"></input>
        <select name="semester" id="semester">
          <option value="1학기">1학기</option>
          {/* <option value="여름학기">여름학기</option>
          <option value="2학기">2학기</option>
          <option value="겨울학기">겨울학기</option> */}
        </select>
        <Button variant="outline-secondary" className="search-button">
          검색
        </Button>
        <label for="required">이수구분</label>
        <select name="required" className="required" id="required">
          <option value="-전체-">-전체-</option>
          <option value="교양필수">교양필수</option>
          <option value="교양선택">교양선택</option>
          <option value="기초필수">기초필수</option>
          <option value="기초선택">기초선택</option>
          <option value="전공필수">전공필수</option>
          <option value="전공선택">전공선택</option>
          <option value="연구">연구</option>
          <option value="자유선택">자유선택</option>
        </select>
        <label for="research">교과연구</label>
        <select name="research" id="research">
          <option value="-전체-">-전체-</option>
          <option value="교과">교과</option>
          <option value="논문연구">논문연구</option>
          <option value="개별연구">개별연구</option>
          <option value="세미나">세미나</option>
        </select>
        <label for="type">과정구분</label>
        <select name="type" id="type">
          <option value="-전체-">-전체-</option>
          <option value="학사">학사</option>
        </select>
        <label for="nameofsubject">교과목명</label>
        <input className="nameofsubject"></input>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
