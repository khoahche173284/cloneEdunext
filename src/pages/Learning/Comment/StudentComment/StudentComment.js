import React, { useContext, useState } from "react";
import styles from "./StudentComment.module.scss";
import images from "../../../../assets/image";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GroupContext from "../../../../components/GlobalState/StateGroupLearn/Context";
import { Pagination } from "react-bootstrap";

const cx = classNames.bind(styles);
const COMMENTS_PER_PAGE = 5;

function StudentComment() {
  const { commentStudent } = useContext(GroupContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginateComments = (comments) => {
    const indexOfLastComment = currentPage * COMMENTS_PER_PAGE;
    const indexOfFirstComment = indexOfLastComment - COMMENTS_PER_PAGE;
    return comments.slice(indexOfFirstComment, indexOfLastComment);
  };

  return (
    <div className={cx("student-comment")}>
      {commentStudent.length ? (
        commentStudent.map((group) => {
          const paginatedComments = paginateComments(group.listComment);
          const totalPages = Math.ceil(group.listComment.length / COMMENTS_PER_PAGE);
          return (
            <div className={cx("comment")} key={group.id}>
              {paginatedComments.map((comment) => (
                <div style={{ margin: "20px", display: "flex", gap: "10px" }} key={comment.id}>
                  <div className={cx("avatar-cmt")}>
                    <img src={images.avatar} alt="avatar" />
                  </div>
                  <div style={{ flex: "1" }}>
                    <p style={{ margin: "0", fontSize: "1.5rem" }}>
                      {comment.name} ({group.name})
                    </p>
                    <span
                      style={{
                        opacity: "0.7",
                        fontSize: "1rem",
                        fontStyle: "italic",
                      }}
                    >
                      {comment.dateTime}
                    </span>
                    <div className={cx("content-cmt")}>
                      {comment.comment}
                    </div>
                  </div>
                </div>
              ))}
              <Pagination className={cx("pagging")}>
                <Pagination.First onClick={() => handlePageChange(1)} />
                <Pagination.Prev
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} />
              </Pagination>
            </div>
          );
        })
      ) : (
        <div className={cx("not-comment")}>
          <FontAwesomeIcon icon={faEnvelope} />
          THERE ARE NO COMMENTS!
        </div>
      )}
    </div>
  );
}

export default StudentComment;
