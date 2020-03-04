import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Data({data, loading, error}) {

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  // const test = data.map(courseTime => courseTime.courseTime);

  return (
    <div class="table">
      <Table responsive="xl" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{minWidth: 90}}>개설부서</th>
            <th style={{minWidth: 110}}>교과목-분반</th>
            <th>교과목명</th>
            <th style={{minWidth: 100}}>이수구분</th>
            <th style={{minWidth: 100}}>교과연구</th>
            <th style={{minWidth: 80}}>담당교수</th>
            <th style={{minWidth: 100}}>과정구분</th>
            <th style={{minWidth: 130}}>강의/실험/학점</th>
            <th style={{minWidth: 70}}>시간표</th>
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
