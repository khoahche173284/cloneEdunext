import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const style = {
    fonSize: "1.6rem"
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={style}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title style={style} id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={style}>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{fontSize: "1.6rem"}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalLearning() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{fontSize: "1.6rem", width: "100%"}} variant="primary" onClick={() => setModalShow(true)}>
        UDATE
      </Button>

      <MyVerticallyCenteredModal style={{fontSize: "1.6rem"}}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalLearning;