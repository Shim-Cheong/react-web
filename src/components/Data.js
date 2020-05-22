import React from "react";
import "./Data.css";
import { Table } from "react-bootstrap";

function Data({ data, loading, error, onToggle }) {
  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!data) return null;

  function TypeOfDepartment(department) {
    const typeOfDepartment = {
      BS: "생명과학전공",
      CH: "화학전공",
      CT: "문화기술 부전공",
      EC: "전기전자컴퓨터전공",
      ET: "에너지부전공",
      EV: "지구환경공학전공",
      GS: "기초교육학부",
      IR: "지능로봇 부전공",
      MA: "신소재공학전공",
      MC: "기계공학전공",
      MD: "의생명공학 부전공",
      MM: "수학부전공",
      PS: "물리전공",
      UC: "대학공통",
    };

    return typeOfDepartment[department] || "";
  }

  return (
    <div className="table-wrapper">
      <Table responsive={true} striped bordered hover className="table">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "12%" }}>개설부서</th>
            <th style={{ width: "8%" }}>교과목-분반</th>
            <th style={{ width: "15%" }}>교과목명</th>
            <th style={{ width: "7%" }}>이수구분</th>
            <th style={{ width: "7%" }}>교과연구</th>
            <th style={{ width: "15%" }}>담당교수</th>
            <th style={{ width: "7%" }}>과정구분</th>
            <th style={{ width: "10%" }}>강의/실험/학점</th>
            <th style={{ width: "10%" }}>시간표</th>
            <th style={{ width: "4%" }}>선택</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{TypeOfDepartment(course.department)}</td>
              <td>
                {course.department}
                {course.code}-{course.classNumber}
              </td>
              <td>{course.name}</td>
              <td>{course.division}</td>
              <td>{course.type}</td>
              <td>{course.professors.join(", ")}</td>
              <td>{course.level}</td>
              <td>
                {course.credit.lecture}/{course.credit.experiment}/
                {course.credit.grades}
              </td>
              <td>
                {course.courseTime.map((time, index) => (
                  <div key={index}>
                    {time.day}:{time.startTime}~{time.endTime}
                  </div>
                ))}
              </td>
              <td>
                <div onClick={() => onToggle(course)}>
                  {course.checked ? <div>true</div> : <div>false</div>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Data;
