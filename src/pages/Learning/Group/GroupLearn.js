import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Group.module.scss";
import images from '../../../assets/image'
import GroupContext from "../../../components/GlobalState/StateGroupLearn/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function GroupLearn() {
  const dataGroup = useContext(GroupContext);
  const { listStudent } = dataGroup;
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [leader, setLeader] = useState("");
  const [loading, setLoading] = useState(true);
  let { classSessionId } = useParams();

  useEffect(() => {
    if (listStudent && listStudent.length > 0) {
      const studentLists = listStudent.filter(
        (student) => student.classroomSessionId == classSessionId
      );
      const filterStudents = studentLists.filter((item) =>
        item.name.includes("Group 3")
      );
      setLeader(filterStudents[0]?.groupLeaderId);
      setFilteredStudents(filterStudents);
      setLoading(false);
    }
  }, [listStudent, classSessionId]);
  if (loading) {
    return <div className="loading-overlay">Loading...</div>;
  }

  if (
    filteredStudents.length === 0 ||
    !filteredStudents[0].listStudentByGroups
  ) {
    return <div>No students found</div>;
  }

  return (
    <div>
      {filteredStudents[0].listStudentByGroups.map((student) => (
        <Accordion className={cx("listStudent")} key={student.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img src={images.student} alt="student"/>
              <p>
                {student.id === Number(leader) ? (
                  <>
                  <span>{student.rollNumber}  <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} /></span>
                   <span> {student.name} </span>
                    <span>{student.email}</span>
                  </>
                ) : (
                  <>
                    <span>{student.rollNumber}</span>
                   <span> {student.name} </span>
                    <span>{student.email}</span>
                  </>
                )}
              </p>
            </Accordion.Header>
            <Accordion.Body>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}

export default GroupLearn;
