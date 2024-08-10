import React from 'react';
import { Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useContext } from "react";
import AppContext from "../../../GlobalState/Context";

const cx = classNames.bind(styles);
const Header = () => {
  const data = useContext(AppContext);
  const { classId , courseId} = useParams();
  const { subjects } = data;
  const subName = subjects.filter((sub) => sub.classId === +classId);
  console.log(subName);
  return (
    <div className={cx("header-default")}>
      <Breadcrumb>
        <Breadcrumb.Item href="/home">
          Home
        </Breadcrumb.Item>  
        {subName.map((name) => (
          <Breadcrumb.Item href={`/slotPage/${courseId}/${classId}`} style={{textDecorationLine: 'none'}}>
            <span style={{textDecorationLine:"none", color: "black"}}>
              {name.courseCode} - {name.title}
            </span>
          </Breadcrumb.Item>
        ))}
        {/* <Breadcrumb.Item style={{color: '#333'}} active></Breadcrumb.Item> */}
      </Breadcrumb>
    </div>
  );
};

export default Header;
