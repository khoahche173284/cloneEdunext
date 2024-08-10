import classNames from "classnames/bind";
import styles from "./Learning.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Layout/DefaultLayout/Header";
import { useContext } from "react";
import AppContext from "../../components/GlobalState/Context";
import { useParams } from "react-router-dom";
import { Card , Modal, Tab, Tabs} from "react-bootstrap";
import GroupLearn from "./Group/GroupLearn";
import Comment from "./Comment/Comment";
import ModalLearning from "./Modal/ModalLearning";
import ModalGrade from "./Modal/ModalGrade";

const cx = classNames.bind(styles);

function Learning() {
  const data = useContext(AppContext);
  let { courseId, index , orderId} = useParams();
  const { dataLession } = data;

  const course = dataLession.find((ques) => (ques.courseId === Number(courseId) && ques.order === Number(orderId)));
  
  let getQuestionOfCourse = course?.questions;
  if (typeof getQuestionOfCourse === "string") {
    try {
      getQuestionOfCourse = JSON.parse(getQuestionOfCourse);
    } catch (error) {
      console.error(error);
      getQuestionOfCourse = [];
    }
  }

  const question = getQuestionOfCourse && getQuestionOfCourse[index];

  return (
    <div style={{marginRight: "0"}} className={cx("learning-page", "row")}>
      {question ? (
        <>
          <div className={cx("question-right", "col-md-8")}>
            <Header/>
            <div className={cx("page-question")}>
              <h2>(Question) {question.title}</h2>
              <Card
                style={{
                  width: "100%",
                  background: "#00000008",
                  marginBottom: "20px",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "2.5rem" }}>
                    Content
                  </Card.Title>
                  <hr></hr>
                  <Card.Text>{question.content}</Card.Text>
                </Card.Body>
              </Card>
              <div className={cx('question-timeout')}>
                Discussion time has been started.
                <br /> Students can comment and vote for comments during this
                time.
                <br /> Current Timezone: You are currently in <span>Asia/Jakarta</span> time
                zone <span>(GMT+7)</span>
              </div>
            </div>
            <Tabs
              defaultActiveKey="group"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="group" title="GROUP">
                <GroupLearn/>
              </Tab>
              <Tab eventKey="discuss" title="DISCUSS">
                <Comment/>
              </Tab>
              <Tab style={{textAlign: "center", fontSize: "2.2rem", color: "gray"}}  eventKey="grade" title="GRADE">
              THERE ARE NO GRADE!
              </Tab>
              <Tab style={{textAlign: "center", fontSize: "2.2rem", color: "gray"}} eventKey="TEACHER'S MESSAGE" title="TEACHER'S MESSAGE">
                THERE ARE NO COMMENTS!
              </Tab>
            </Tabs>
          </div>
        </>
      ) : (
        <div className={cx("overlay")}>
          <h1>Loading...</h1>
        </div>
      )}
      <div style={{marginTop: "150px", height: "fit-content"}} className="col-md-4">
          <h3>Group meeting</h3>
          <p style={{color: "red"}}>No meeting video link, click the below button to update</p>
          <ModalLearning/>
          <h3>Individual grade</h3>
          <p style={{color: "red"}}>You need grade on groupmates to view your points</p>
          <ModalGrade/>
      </div>
    </div>
  );
}

export default Learning;
