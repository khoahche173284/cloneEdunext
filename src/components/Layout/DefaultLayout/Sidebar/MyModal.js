import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const styles = {
  color: "blue",
  display: "inline-block",
  marginLeft: "10px",
};

const MyModal = ({ show, handleClose, content }) => {
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa
  const [editedUser, setEditedUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  useEffect(() => {
    if (content && content.user) {
      setEditedUser({
        name: content.user.name,
        email: content.user.email,
        phone: content.user.phone,
        gender: content.user.gender,
      });
    }
  }, [content]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    // Xử lý lưu thay đổi vào content.user
    if (content && content.user) {
      content.user.name = editedUser.name;
      content.user.email = editedUser.email;
      content.user.phone = editedUser.phone;
      content.user.gender = editedUser.gender;
    }

    // Đóng chế độ chỉnh sửa
    setIsEditing(false);
    // Gọi hàm xử lý lưu thay đổi vào cơ sở dữ liệu ở đây nếu cần
  };

  let modalContent = null;

  if (content && content.user) {
    modalContent = (
      <div>
        <p>ID: <span style={styles}>{content.user.id}</span></p>
        <p>Name: {isEditing ? (
          <Form.Control
            style={{ fontSize: "2.4rem" }}
            type="text"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
        ) : (
          <span style={styles}>{content.user.name}</span>
        )}</p>
        <p>Email: {isEditing ? (
          <Form.Control
            style={{ fontSize: "2.4rem" }}
            type="email"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
        ) : (
          <span style={styles}>{content.user.email}</span>
        )}</p>
        <p>Phone number: {isEditing ? (
          <Form.Control
            style={{ fontSize: "2.4rem" }}
            min={0}
            type="number"
            max={10}
            value={editedUser.phone}
            onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
          />
        ) : (
          <span style={styles}>{content.user.phone}</span>
        )}</p>
        <p>Gender: {isEditing ? (
          <Form.Control
            style={{ fontSize: "2.4rem" }}
            as="select"
            value={editedUser.gender}
            onChange={(e) => setEditedUser({ ...editedUser, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        ) : (
          <span style={styles}>{content.user.gender}</span>
        )}</p>
      </div>
    );
  } else {
    modalContent = <p>No user data available.</p>;
  }

  return (
    <Modal style={{ fontSize: "2.4rem" }} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalContent}
      </Modal.Body>
      <Modal.Footer>
        {content && content.user && !isEditing && (
          <Button style={{ fontSize: "2rem" }} variant="primary" onClick={handleEditClick}>
            Edit Profile
          </Button>
        )}
        {isEditing && (
          <>
            <Button style={{ fontSize: "2rem" }} variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button style={{ fontSize: "2rem" }} variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
