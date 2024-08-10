import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import images from "../../../../assets/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faHouse,
  faEnvelopeOpenText,
  faBell,
  faQuestion,
  faPhone,
  faPager,
  faArrowUp,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MyModal from "./MyModal"; // Import component modal mới tạo
import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook";
import AppContext from "../../../GlobalState/Context";

// Bind the styles with classNames
const cx = classNames.bind(styles);

function Sidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [showModal, setShowModal] = useState(false); // State để điều khiển hiển thị modal
  const [modalContent, setModalContent] = useState(""); // State để lưu trữ nội dung modal
  const {userStore} = useContext(AppContext);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleShowModal = (content) => {
    setModalContent(content); // Set nội dung modal dựa trên mục click
    setShowModal(true); // Mở modal khi click vào mục trong sidebar
  };

  const handleCloseModal = () => {
    setShowModal(false); // Đóng modal
  };

  return (
    <>
      <nav className={cx(`nav`, { collapsed })}>
        <ul className={cx("sub-nav")}>
          <div>
            <a>
              <img src={images.logo} alt="Logo" />
            </a>
          </div>
          <li className={cx("nav-icon")}>
            <a>
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li onClick={handleClick} className={cx("nav-icon")}>
            <a>
              <FontAwesomeIcon className="icon-common" icon={faBars} />
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal(userStore)}>
              <span>
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <span className={cx("text")}>Your profile</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Home content")}>
              <span>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className={cx("text")}>Home</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Assignments content")}>
              <span>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </span>
              <span className={cx("text")}>Assignments</span>
            </a>
          </li>
          {/* Các mục khác trong sidebar */}
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Upcoming slots content")}>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span className={cx("text")}>Upcoming slots</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Read user guide content")}>
              <span>
                <FontAwesomeIcon icon={faQuestion} />
              </span>
              <span className={cx("text")}>Read user guide</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Contact Support content")}>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className={cx("text")}>Contact Support</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a onClick={() => handleShowModal("Frequently Asked content")}>
              <span>
                <FontAwesomeIcon icon={faPager} />
              </span>
              <span className={cx("text")}>Frequently Asked</span>
            </a>
          </li>
          <li onClick={handleLogout} className={cx("nav-icon")}>
            <a>
              <span>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              <span className={cx("text")}>Logout</span>
            </a>
          </li>
          <li className={cx("nav-icon")}>
            <a href="#">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Modal sử dụng component MyModal */}
      <MyModal show={showModal} handleClose={handleCloseModal} content={modalContent} />
    </>
  );
}

export default Sidebar;
