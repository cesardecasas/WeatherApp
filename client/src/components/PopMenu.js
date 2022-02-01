import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { RiArrowDownSLine } from 'react-icons/ri'


const PopMenu = (changeCity) =>{

    const [show, setShow] = useState(false);
    const [zip, setZip] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RiArrowDownSLine onClick={()=>handleShow()}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" value={zip} onChange={(e)=>setZip(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={()=>{changeCity.changeCity(zip); handleClose()}}>Search</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopMenu