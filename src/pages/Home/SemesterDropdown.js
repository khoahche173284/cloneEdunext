// SemesterDropdown.js
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from './Home.module.scss';
import classNames from "classnames";
const cx = classNames.bind(styles);
const SemesterDropdown = ({ currentSemester, pastSemester, onClickSemester }) => {
  const style = {
    fontSize: "1.8rem",
    width: "190px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    fontWeight: '500',
  };

  return (
    <Dropdown className="d-inline mx-2">
      {currentSemester.map((item) => (
        <Dropdown.Toggle key={item.semesterName} style={style}>
          {item.semesterName}
        </Dropdown.Toggle>
      ))}
      <Dropdown.Menu style={style}>
        {pastSemester.map((item) => (
          <Dropdown.Item
            key={item.semesterName}
            className="drop-item"
            href="#"
            onClick={() => onClickSemester(item.semesterName)}
          >
            {item.semesterName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SemesterDropdown;
