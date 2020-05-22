import React from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./Selection.css";
import chroma from "chroma-js";
import Autocomplete from "./AutoComplete";

const animatedComponents = makeAnimated();

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const university = [
  { value: "GIST대학", label: "GIST대학" },
  //   { value: "대학원", label: "대학원" }
];

const year = [{ value: "2020", label: "2020" }];

const semester = [{ value: "1학기", label: "1학기" }];

const department = [
  { value: "GS", label: "기초교육학부", color: "#212529" },
  { value: "PS", label: "물리전공", color: "#3498db" },
  { value: "CH", label: "화학전공", color: "#c0392b" },
  { value: "BS", label: "생명과학전공", color: "#009432" },
  { value: "EC", label: "전기전자컴퓨터전공", color: "#5352ed" },
  { value: "MC", label: "기계공학전공", color: "#1289A7" },
  { value: "MA", label: "신소재공학전공", color: "#ED4C67" },
  { value: "EV", label: "지구환경공학전공", color: "#F79F1F" },
  { value: "UC", label: "대학공통", color: "#4b4b4b" },
  { value: "MM", label: "수학부전공", color: "#5f27cd" },
  { value: "ET", label: "에너지부전공", color: "#f08c00" },
  { value: "MD", label: "의생명공학 부전공", color: "#5c940d" },
  { value: "CT", label: "문화기술 부전공", color: "#95a5a6" },
  { value: "IR", label: "지능로봇 부전공", color: "#1abc9c" },
  {
    value: "인문학, 사회과학 부전공",
    label: "인문학, 사회과학 부전공",
    color: "#1B1464",
  },
];

// eslint-disable-next-line
const division = [
  { value: "교양필수", label: "교양필수" },
  { value: "교양선택", label: "교양선택" },
  { value: "기초필수", label: "기초필수" },
  { value: "기초선택", label: "기초선택" },
  { value: "자유선택", label: "자유선택" },
  { value: "연구", label: "연구" },
  { value: "전공필수", label: "전공필수" },
  { value: "전공선택", label: "전공선택" },
];

const type = [
  { value: "교과", label: "교과", color: "#ff6b81" },
  { value: "논문연구", label: "논문연구", color: "#5352ed" },
  { value: "개별연구", label: "개별연구", color: "#ffa502" },
  { value: "세미나", label: "세미나", color: "#44bd32" },
];

const Selection = ({
  searchField,
  setSearchField,
  isAPISearched,
  setIsAPISearched,
  setInputSubject,
  data,
}) => {
  const onChange = (optionType, selectedOptions) => {
    setSearchField({
      ...searchField,
      [optionType]: selectedOptions || [],
    });
  };

  const onClickButton = () => {
    setIsAPISearched(true);
  };

  const courseName = data.map((course) => course.name);

  return (
    <>
      <div className="NavBar">
        <div className="select-wrapper">
          <div className="college-wrapper">
            <label htmlFor="college">대학분류</label>
            <Select
              defaultValue={university[0]}
              components={animatedComponents}
              name="colors"
              options={university}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(selectedOptions) =>
                onChange("university", selectedOptions)
              }
            />
          </div>
          <div className="year-wrapper">
            <label htmlFor="year">년도/학기</label>
            <div className="select-year-flex">
              <Select
                defaultValue={year[0]}
                components={animatedComponents}
                name="colors"
                options={year}
                className="basic-multi-select select-year"
                classNamePrefix="select"
                onChange={(selectedOptions) =>
                  onChange("year", selectedOptions)
                }
              />
              <Select
                defaultValue={semester[0]}
                components={animatedComponents}
                name="colors"
                options={semester}
                className="basic-multi-select select-semester"
                classNamePrefix="select"
                onChange={(selectedOptions) =>
                  onChange("semester", selectedOptions)
                }
              />
            </div>
          </div>
          <Button
            onClick={onClickButton}
            variant="outline-secondary"
            className="search-button"
          >
            검색
          </Button>
        </div>
      </div>

      {isAPISearched && (
        <div className="NavBar">
          <div className="department-wrapper">
            <div className="select-department">
              <label htmlFor="department">학과</label>
              <Select
                defaultValue={department[0]}
                isMulti
                styles={colourStyles}
                closeMenuOnSelect={false}
                components={animatedComponents}
                name="colors"
                options={department}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOptions) =>
                  onChange("department", selectedOptions)
                }
              />
            </div>
            <div className="type">
              <label htmlFor="type">교과연구</label>
              <Select
                defaultValue={[...type]}
                isMulti
                styles={colourStyles}
                closeMenuOnSelect={false}
                components={animatedComponents}
                name="colors"
                options={type}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selectedOptions) =>
                  onChange("type", selectedOptions)
                }
              />
            </div>
            <div className="subject-name">
              <label htmlFor="subject-name">교과목명</label>
              {/* <input
                className="subject-name-input"
                type="text"
                onChange={(e) => setInputSubject(e.target.value)}
              ></input> */}
              <Autocomplete
                suggestions={courseName}
                setInputSubject={setInputSubject}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Selection;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="division-wrapper">
            <label htmlFor="division">이수구분</label>
            <Select
              defaultValue={[...division]}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              name="colors"
              options={division}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(selectedOptions) =>
                onChange("division", selectedOptions)
              }
            />
          </div> */
}
// eslint-disable-next-line no-lone-blocks
{
  /* <div>
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
</div>  */
}
