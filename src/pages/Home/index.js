// index.js (Home component main entry point)
import React, { useContext, useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classNames from "classnames/bind";
import AppContext from "../../components/GlobalState/Context";
import styles from "./Home.module.scss";
import SemesterDropdown from "./SemesterDropdown";
import SubjectCard from "./SubjectCard";
import "./overlay.css";
import GroupProvider from "../../components/GlobalState/StateGroupLearn/GroupProvider";
const cx = classNames.bind(styles);

const Home = () => {
  const data = useContext(AppContext);
  const { semesters, setSemesters, subjects, isLoading } = data;
  const [currentSemester, setCurrentSemester] = useState([]);
  const [pastSemester, setPastSemester] = useState([]);
  const [selectedSemesterName, setSelectSemesterName] = useState("SUMMER2024");

  useEffect(() => {
    setCurrentSemester(semesters.filter((item) => item.current));
    setPastSemester(semesters.filter((item) => !item.current));
  }, [semesters]);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const filterSemester = (value) => {
    setSelectSemesterName(value);
  };

  const onClickSemester = (selectedSemesterName) => {
    const updatedSemesters = semesters.map((item) => ({
      ...item,
      current: item.semesterName === selectedSemesterName,
    }));
    setSemesters(updatedSemesters);
    setSelectSemesterName(selectedSemesterName);
  };
  return (
    <div className={cx("home-page")}>
      <div>
        <div className={cx("page-way")}>
          <Navbar>
            <Nav style={{ marginBottom: "20px" }} className={cx("me-auto")}>
              <Nav.Link
                style={{
                  color: "#0d6efd",
                  padding: "5px 10px",
                  borderBottom: " 2px solid #0d6efd",
                }}
                href="#"
              >
                COURSE
              </Nav.Link>
              <Nav.Link href="#">PROJECT</Nav.Link>
            </Nav>
          </Navbar>
          <SemesterDropdown
            currentSemester={currentSemester}
            pastSemester={pastSemester}
            onClickSemester={onClickSemester}
            filterSemester={filterSemester}
          />
        </div>
          <SubjectCard
            selectedSemesterName={selectedSemesterName}
          />
      </div>
    </div>
  );
};

export default Home;
