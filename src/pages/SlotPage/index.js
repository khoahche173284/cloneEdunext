import { Dropdown, Accordion } from "react-bootstrap";
import classNames from "classnames/bind";
import Header from "../../components/Layout/DefaultLayout/Header";
import styles from "./Slotpage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleQuestion,
  faClock,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../components/GlobalState/Context";
const cx = classNames.bind(styles);
const styleCommon = {
  fontSize: "1.8rem",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  fontWeight: "500",
  height: "44px",
  color: "#666",
};
const style = {
  activities: {
    width: "220px",
    ...styleCommon,
  },
  slot: {
    ...styleCommon,
    width: "100px",
  },
  class: {
    ...styleCommon,
    width: "fit-content",
  },
  item: {
    fontSize: "1.8rem",
    height: "44px",
  },
};
function SlotPage() {
  const data = useContext(AppContext);
  const { dataLession, className } = data;
  let { courseId, classId } = useParams();
  const lession = dataLession.filter((les) => les.courseId === +courseId);
  const classChoose = className.filter((cla) => cla.id === +classId);
  const updatedLession = lession.map((item) => {
    // kiểm tra nếu question là string -> parse
    if (typeof item.questions === "string") {
      try {
        item.questions = JSON.parse(item.questions);
      } catch (e) {
        console.error("Error parsing questions:", e);
        item.questions = [];
      }
    }
    return item;
  });
  const quesList = updatedLession.map((item) => item.questions);
  return (
    <div className={cx("slotPage-default")}>
      <div className={cx("flex-left")}>
        <Header />
        <div className={cx("slot-header")}>
          <div className={cx("header-option")}>
            <Dropdown className="mx-2">
              <p>Filter activities</p>
              <Dropdown.Toggle style={style.activities}>
                <span>All Activities</span>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "100%" }}>
                <Dropdown.Item style={style.item}>All Activities</Dropdown.Item>
                <Dropdown.Item style={style.item}>On going</Dropdown.Item>
                <Dropdown.Item style={style.item}>Hidden</Dropdown.Item>
                <Dropdown.Item style={style.item}>Not Started</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-2">
              <p>Jump slot</p>
              <Dropdown.Toggle style={style.slot}>
                <span>Slot: 1</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {lession.map((_, index) => (
                  <Dropdown.Item key={index} style={style.item}>
                    Slot: {index + 1}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-2">
              <p>Class name</p>
              <Dropdown.Toggle style={style.class}>
                {classChoose.map((cla, index) => (
                  <span key={index}>
                    {cla.name}-{cla.campusCode}-{cla.semesterName}
                  </span>
                ))}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "100%", height: "30px" }}>
                <Dropdown.Item>SE1839-NJ-APHL-SUMMER2024</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a className={cx("link")} href="#">
              LEARNING MATERIAL
            </a>
            <a className={cx("link")} href="#">
              ASSIGMENTS
            </a>
          </div>
        </div>
        <div className={cx("slot-learn")}>
          <p>TEACHERS: DUONGTB@FPT.EDU.VN</p>
          {lession.map((less, index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ display: "block" }}>
                  <div style={{ whiteSpace: "pre-wrap", padding: "10px 0" }}>
                    <p
                      style={{
                        backgroundColor: "#377dff33",
                        color: "#0078d4",
                        fontWeight: "bold",
                        width: "fit-content",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      Slot: {index + 1}
                    </p>
                    <p style={{ fontSize: "1.3rem" }}>
                      <FontAwesomeIcon icon={faClock} /> {less.start_time} -{" "}
                      {less.end_time}
                    </p>
                    <h4>{less.sessionName}</h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                <p>Question</p>
                  {quesList[index] && quesList[index].length > 0 ? (
                    quesList[index].map((item, index) => (
                      <Link to={`/slotPage/learning/${courseId}/${classId}/${less.order}/${less.classroomSessionId}/${index}`}
                        key={index}
                        style={{
                          display: "block",
                          height: "40px",
                          lineHeight: "40px",
                          textDecorationLine: "none",
                          color: "black"
                        }}
                      >
                        <FontAwesomeIcon
                          style={{
                            color: "orange",
                            marginRight: "20px",
                            fontSize: "2rem",
                          }}
                          icon={faCircleQuestion}
                        />{" "}
                        {item.title ? (
                          `${item.content}`
                        ) : (
                          <h5>Title is empty!</h5>
                        )}
                      </Link>
                    ))
                  ) : (
                    <h5>This slot has no content</h5>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
      <div className={cx("flex-right")}>
        <p>APHL</p>
        <nav>
          <ul>
            <li>Online</li>
            <li>Students</li>
            <li>Slots</li>
            <li>Meet</li>
            <li>Activites</li>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li>
              <FontAwesomeIcon icon={faQuestion} />
            </li>
          </ul>
        </nav>
        <p style={{ position: "fixed" }}>Online: 9898</p>
      </div>
    </div>
  );
}

export default SlotPage;
