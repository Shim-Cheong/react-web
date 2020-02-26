import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
        const response = await axios.get(
          "https://xo70baskzb.execute-api.ap-northeast-2.amazonaws.com/dev/api/course?year=2020&semester=SPRING&university=UNDERGRADUATE"
        );
        setData(response.data.courses);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  console.log(data);

  const test = data.map(courseTime => courseTime.courseTime);
  console.log(test);

  return (
    <div class="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>개설부서</th>
            <th>교과목-분반</th>
            <th>교과목명</th>
            <th>이수구분</th>
            <th>교과연구</th>
            <th>담당교수</th>
            <th>과정구분</th>
            <th>강의/실험/학점</th>
            <th>시간표</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, index) => (
            <tr>
              <td>{index + 1}</td>
              <td></td>
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
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Data;
