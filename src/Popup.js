import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import popup from "./popup.css";



function Popup (){

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [show, setShow] = useState(false);

  const openChange = () => {
    setShow(true);
  };

  const CloseChange = () => {
    setShow(false);
  };

  return (
    <>
    <div className='popup'>
    <div className='container mt-5  '>
      <div className='row'>
        <div className='col-md-6'>
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Expense</Card.Title>
              <Card.Text>
              {/* <form id="form" method="POST">
          <div>
            <div>
              <label for="type">Select Your income/expense type</label>
              <select id="type" name="type" required>
                <option value="">Select Your income/expense type</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            
            <div>
              <label for="income">Income in INR</label>
              <input type="number" id="income" name="income" disabled />
            </div>
            
            <div>
              <label for="expense">Expense in INR</label>
              <input type="number" id="expense" name="expense" required />
            </div>
            
            <div>
              <label for="category">Select Your Category</label>
              <select id="category" name="category" required>
                <option value="">Select Your Category</option>
                <option value="Fuel">Fuel</option>
                <option value="Movie">Movie</option>
                <option value="Food">Food</option>
                <option value="Loan">Loan</option>
                <option value="Medical Expense">Medical Expense</option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div>
              <label for="description">Description</label>
              <input type="text" id="description" name="description" required />
            </div>
            
            <div>
              <label for="date">Date</label>
              <input type="date" id="date" name="date" required />
            </div>
            
            <div>
              <label for="time">Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            
            <div>
              <input type="submit" value="Submit" />
            
      
              <button type="button" onclick="addExpense()">Add New Expense</button>
            </div>
          </div>
        </form> */}
              </Card.Text>
              <Button variant="primary" onClick={handleClick}>Open Modal</Button>
            </Card.Body>
          </Card>
        </Col>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="form" method="POST">
          <div>
            <div>
              <label for="type">Select Your income/expense type</label>
              <select id="type" name="type" required>
                <option value="">Select Your income/expense type</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            
            <div>
              <label for="income">Income in INR</label>
              <input type="number" id="income" name="income" disabled />
            </div>
            
            <div>
              <label for="expense">Expense in INR</label>
              <input type="number" id="expense" name="expense" required />
            </div>
            
            <div>
              <label for="category">Select Your Category</label>
              <select id="category" name="category" required>
                <option value="">Select Your Category</option>
                <option value="Fuel">Fuel</option>
                <option value="Movie">Movie</option>
                <option value="Food">Food</option>
                <option value="Loan">Loan</option>
                <option value="Medical Expense">Medical Expense</option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div>
              <label for="description">Description</label>
              <input type="text" id="description" name="description" required />
            </div>
            
            <div>
              <label for="date">Date</label>
              <input type="date" id="date" name="date" required />
            </div>
            
            <div>
              <label for="time">Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            
            <div>
              <input type="submit" value="Submit" />
            
      
              <button type="button" onclick="addExpense()">Add New Income</button>
            </div>
          </div>
        </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
        </Row>
        </Container>
        </div>
          <div className='col-md-6'>
             <Container>
              
             <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Income</Card.Title>
                      <Card.Text>
           
                      </Card.Text>
                      <Button variant="primary" onClick={openChange}>Open Modal</Button>
                    </Card.Body>
                  </Card>
                  <Modal show={show} onHide={CloseChange}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form id="form" method="POST">
            <div>
              <div>
                <label for="type">Select Your income/expense type</label>
                <select id="type" name="type" required>
                  <option value="">Select Your income/expense type</option>
                  <option value="Office">Office</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
              
              <div>
                <label for="income">Income in INR</label>
                <input type="number" id="income" name="income" required />
              </div>
              
              <div>
                <label for="expense">Expense in INR</label>
                <input type="number" id="expense" name="expense" disabled />
              </div>
              
              <div>
                <label for="category">Select Your Category</label>
                <select id="category" name="category" required>
                  <option value="">Select Your Category</option>
                  <option value="Fuel">Fuel</option>
                  <option value="Movie">Movie</option>
                  <option value="Food">Food</option>
                  <option value="Loan">Loan</option>
                  <option value="Medical Expense">Medical Expense</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              
              <div>
                <label for="description">Description</label>
                <input type="text" id="description" name="description" required />
              </div>
              
              <div>
                <label for="date">Date</label>
                <input type="date" id="date" name="date" required />
              </div>
              
              <div>
                <label for="time">Time</label>
                <input type="time" id="time" name="time" required />
              </div>
              
              <div>
                <input type="submit" value="Submit" />
              
        
                <button type="button" onclick="addExpense()">Add New Income</button>
              </div>
            </div>
          </form> 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={CloseChange}>Close</Button>
                  <Button variant="primary" onClick={CloseChange}>Save Changes</Button>
                </Modal.Footer>
              </Modal>
                </Col>
                </Row>
            </Container>
            </div>
            </div>
            </div>
            </div>
            
            
            
            
              </>
             
        
   
  );
}
export default Popup;