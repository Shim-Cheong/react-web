import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Header from "./components/Header";
import Selection from "./components/Selection";
import Data from "./components/Data";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [renderingData, setRenderingData] = useState([]);
  const [inputSubject, setInputSubject] = useState("");
  const [searchField, setSearchField] = useState({
    university: { value: "GIST대학", label: "GIST대학" },
    year: { value: "2020", label: "2020" },
    semester: { value: "1학기", label: "1학기" },
    department: [],
    division: [],
    type: [],
  });
  const [isAPISearched, setIsAPISearched] = useState(false);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      const response = await axios.get(
        "https://xo70baskzb.execute-api.ap-northeast-2.amazonaws.com/dev/api/course?year=2020&semester=SPRING&university=UNDERGRADUATE"
      );
      // console.log(response.data.courses);
      setData(response.data.courses);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isAPISearched) {
      setSearchField({
        ...searchField,
        department: [
          { value: "GS", label: "기초교육학부" },
          // { value: "PS", label: "물리전공" },
          // { value: "CH", label: "화학전공" },
          // { value: "BS", label: "생명과학전공" },
          // { value: "EC", label: "전기전자컴퓨터전공" },
          // { value: "MC", label: "기계공학전공" },
          // { value: "MA", label: "신소재공학전공" },
          // { value: "EV", label: "지구환경공학전공" },
          // { value: "UC", label: "대학공통" },
          // { value: "MM", label: "수학부전공" },
          // { value: "ET", label: "에너지부전공" },
          // { value: "MD", label: "의생명공학 부전공" },
          // { value: "CT", label: "문화기술 부전공" },
          // { value: "IR", label: "지능로봇 부전공" },
          // {
          //   value: "인문학, 사회과학 부전공",
          //   label: "인문학, 사회과학 부전공",
          // },
        ],
        division: [
          { value: "교양필수", label: "교양필수" },
          { value: "교양선택", label: "교양선택" },
          { value: "기초필수", label: "기초필수" },
          { value: "기초선택", label: "기초선택" },
          { value: "자유선택", label: "자유선택" },
          { value: "연구", label: "연구" },
          { value: "전공필수", label: "전공필수" },
          { value: "전공선택", label: "전공선택" },
        ],
        type: [
          { value: "교과", label: "교과" },
          { value: "논문연구", label: "논문연구" },
          { value: "개별연구", label: "개별연구" },
          { value: "세미나", label: "세미나" },
        ],
      });
    }
    // eslint-disable-next-line
  }, [isAPISearched]);

  const filteringSelection = (filteringData, filteringKey) => {
    const filteredByKey = filteringData.filter((data, index) =>
      searchField[filteringKey]
        .map((value) => value.value)
        .includes(data[filteringKey])
    );
    return filteredByKey;
  };

  // useEffect(() => {
  //   setIsChecked(
  //     renderingData.map((course, index) =>
  //       true ? { ...course, checked: true } : course
  //     )
  //   );
  // }, [renderingData]);

  // console.log(isChecked);

  const onToggle = (id) => {
    setRenderingData(
      renderingData.map((course) =>
        course.id === id ? { ...course, checked: !course.checked } : course
      )
    );
  };

  useEffect(() => {
    const index = filteringSelection(
      filteringSelection(data, "department"),
      "type"
    ).filter((course) => course.name.indexOf(inputSubject) !== -1);

    // setTimeout(() => {
    setRenderingData(
      index.map((course, index) =>
        true ? { ...course, checked: false, id: index + 1 } : course
      )
    );
    // }, 300);
    // eslint-disable-next-line
  }, [searchField, inputSubject]);

  return (
    <div className="App">
      {/* <Header /> */}
      <Selection
        searchField={searchField}
        setSearchField={setSearchField}
        isAPISearched={isAPISearched}
        setIsAPISearched={setIsAPISearched}
        setInputSubject={setInputSubject}
        data={renderingData}
      />
      {isAPISearched && (
        <Data
          data={renderingData}
          loading={loading}
          error={error}
          onToggle={onToggle}
        />
      )}
    </div>
  );
};

export default App;
