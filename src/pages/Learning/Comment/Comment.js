import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import styles from "./Comment.module.scss";
import images from "../../../assets/image";
import classNames from "classnames/bind";
import StudentComment from "./StudentComment/StudentComment";
import GroupContext from "../../../components/GlobalState/StateGroupLearn/Context";
import { Dropdown } from "react-bootstrap";

const cx = classNames.bind(styles);

function Comment() {
  const { commentStudent, setCommentStudent } = useContext(GroupContext);
  const [commentLeft, setCommentLeft] = useState("");
  const [commentRight, setCommentRight] = useState("");
  const [newComment, setNewComment] = useState({
    id: 1,
    email: "your-email@example.com",
    roleId: 4,
    groupId: 892666,
    dateTime: new Date().toLocaleString(),
    name: "Your Name",
    rollNumber: "HE123456",
    comment: "",
  });

  useEffect(() => {
    setNewComment((prevComment) => ({
      ...prevComment,
      comment: commentLeft,
      dateTime: new Date().toLocaleString(),
    }));
  }, [commentLeft]);

  const handleCommentLeftChange = (e) => {
    setNewComment({...newComment, comment: e.target.value})
    setCommentLeft(e.target.value);
    setCommentRight(e.target.value);
  };

  console.log(newComment);
  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      // // Cập nhật danh sách comment trong context
      const updatedCommentStudent = commentStudent.map((group) => {
        if (group.listGroupId === 892666) {
          return {
            ...group,
            listComment: [...group.listComment, newComment],
          };
        }
        return group;
      });

      setCommentStudent(updatedCommentStudent);
      setCommentLeft("");
      setCommentRight("");
    } catch (error) {
      console.error("There was an error adding the comment!", error);
    }
  };
  console.log(commentStudent);
  return (
    <div>
      <div className={cx("comment-list")}>
        <div className={cx("discuss")}>
          <Dropdown>
            <Dropdown.Toggle
              variant=""
              style={{ fontSize: "1.6rem", width: "200px" }}
              id="dropdown-basic"
            >
              Inside group
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ fontSize: "1.6rem", width: "200px" }}>
              <Dropdown.Item href="#/action-1">Voted</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={cx("comment-dis")}>
          <div className={cx("dis-img")}>
            <img src={images.comment} alt="comment" />
          </div>
          <div className={cx("form-container")}>
            <form onSubmit={handleAddComment} className={cx("comment-form")}>
              <textarea
                className={cx("comment-textarea")}
                placeholder="Enter your comment..."
                value={commentLeft}
                onChange={handleCommentLeftChange}
              />
              <textarea
                className={cx("comment-textarea")}
                value={commentRight}
              />
              <button
                type="submit"
                className={cx("btn", "btn-primary", "send-btn")}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <StudentComment />
      </div>
    </div>
  );
}

export default Comment;
