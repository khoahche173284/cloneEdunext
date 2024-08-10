// SubjectCard.js
import React, { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import images from "../../assets/image";
import { Link } from "react-router-dom";
import AppContext from "../../components/GlobalState/Context";
const cx = classNames.bind(styles);

const SubjectCard = ({selectedSemesterName }) => {
  const {userStore, subjects} = useContext(AppContext);
  const filterSubject = subjects.filter((sub) => {
    const isSemesterMatch = sub.semesterName === selectedSemesterName;
    //  const isUserIdMatch = sub.userId == Number(userStore.user.id);
     return isSemesterMatch;
  });

  return (
    <div className={cx("page-content")}>
      {!filterSubject.length ? (
        <div className={cx("img-empty")}>
          <div>
            <img src={images.empty} />
          </div>
          <p>No data available.</p>
          <p>Please contact your school administration for more information.</p>
        </div>
      ) : (
        filterSubject.map((sub, index) => (
          <Card key={index} className={cx("card-content")}>
            <Card.Body> 
            <Card.Link className={cx("cart-title")}><Link to={`/slotPage/${sub.courseId}/${sub.classId}`}>({sub.courseCode}) {sub.title}</Link></Card.Link>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{sub.className}</ListGroup.Item>
              <ListGroup.Item>{sub.email}</ListGroup.Item>
              <ListGroup.Item>
                Number Of Student: {sub.numberOfStudent}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="/slotPage">
                <Link to={`/slotPage/${sub.courseId}/${sub.classId}`}>Go to course...</Link>
              </Card.Link>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default SubjectCard;
