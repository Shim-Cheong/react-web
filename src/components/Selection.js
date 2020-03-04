import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./Selection.css";

const animatedComponents = makeAnimated();

const university = [
  { value: "GIST대학", label: "GIST대학" },
//   { value: "대학원", label: "대학원" }
];

const yaer = [{ value: "2020", label: "2020" }];

const semester = [{ value: "1학기", label: "1학기" }];

const department = [
  { value: "GS", label: "기초교육학부" },
  { value: "PS", label: "물리전공" },
  { value: "CH", label: "화학전공" },
  { value: "BS", label: "생명과학전공" },
  { value: "EC", label: "전기전자컴퓨터전공" },
  { value: "MC", label: "기계공학전공" },
  { value: "MA", label: "신소재공학전공" },
  { value: "EV", label: "지구환경공학전공" },
  { value: "UC", label: "대학공통" },
  { value: "MM", label: "수학부전공" },
  { value: "ET", label: "에너지부전공" },
  { value: "MD", label: "의생명공학 부전공" },
  { value: "CT", label: "문화기술 부전공" },
  { value: "IR", label: "지능로봇 부전공" },
  { value: "인문학, 사회과학 부전공", label: "인문학, 사회과학 부전공" }
];

const division = [
  { value: "교양필수", label: "교양필수" },
  { value: "교양선택", label: "교양선택" },
  { value: "기초필수", label: "기초필수" },
  { value: "기초선택", label: "기초선택" },
  { value: "자유선택", label: "자유선택" },
  { value: "연구", label: "연구" },
  { value: "전공필수", label: "전공필수" },
  { value: "전공선택", label: "전공선택" }
];

const type = [
  { value: "교과", label: "교과" },
  { value: "논문연구", label: "논문연구" },
  { value: "개별연구", label: "개별연구" },
  { value: "세미나", label: "세미나" }
];

const Selection = ({
  searchField,
  setSearchField,
  isAPISearched,
  setIsAPISearched
}) => {
  const onChange = (optionType, selectedOptions) => {
    setSearchField({
      ...searchField,
      [optionType]: selectedOptions || []
    });
  };

  const onClickButton = () => {
    setIsAPISearched(true);
  };

  return (
    <Navbar>
      <div>
        <label for="college">대학분류</label>
        <Select
          defaultValue={university[0]}
          components={animatedComponents}
          name="colors"
          options={university}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={selectedOptions =>
            onChange("university", selectedOptions)
          }
        />
      </div>
      <div>
        <label for="college">년도/학기</label>
        <Select
          defaultValue={yaer[0]}
          components={animatedComponents}
          name="colors"
          options={yaer}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={selectedOptions => onChange("year", selectedOptions)}
        />
        <Select
          defaultValue={semester[0]}
          components={animatedComponents}
          name="colors"
          options={semester}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={selectedOptions =>
            onChange("semester", selectedOptions)
          }
        />
      </div>
      <Button
        onClick={onClickButton}
        variant="outline-secondary"
        className="search-button"
      >
        검색
      </Button>

      {isAPISearched && (
        <>
          <div>
            <label for="college">학과</label>
            <Select
              defaultValue={[...department]}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              name="colors"
              options={department}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={selectedOptions =>
                onChange("department", selectedOptions)
              }
            />
          </div>

          <div>
            <label for="college">교과연구</label>
            <Select
              defaultValue={[...type]}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              name="colors"
              options={type}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={selectedOptions =>
                onChange("type", selectedOptions)
              }
            />
          </div>

          <label for="nameofsubject">교과목명</label>
          <input className="nameofsubject"></input>
        </>
      )}
    </Navbar>
  );
};

export default Selection;


{/* <div>
<label for="college">이수구분</label>
<Select
  defaultValue={[division[0], division[1]]}
  isMulti
  closeMenuOnSelect={false}
  components={animatedComponents}
  name="colors"
  options={division}
  className="basic-multi-select"
  classNamePrefix="select"
  onChange={(selectedOptions) => onChange("college", selectedOptions)}

/>
</div>  */}