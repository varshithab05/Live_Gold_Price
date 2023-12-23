import { useState } from 'react';
import './App.css';
import bg from './assets/bg.jpg';
import gold from './assets/img_main.png';
import calculatePrice from './goldPrice';
import {context} from './goldPrice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [val,setVal] = useState("checkPrice");
  const [metalType,setMetalType]=useState("");
  
  const onSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    calculatePrice(data);
    
    setTimeout(()=>{
      setVal(context);
    },1000);
  }

  return (
    <div className='body' style={{backgroundImage:`url(${bg})`}}>
      <Container className='infoBox'>
        <Row className='im'>
          <Col className='image'><img src={gold} alt="gold Image" /></Col>
        </Row>
        <Row>
          <Col className='info card_box'><span></span>
            <Form onSubmit={onSubmit}>
                <Form.Group className='metal'>
                  <Form.Label htmlFor="metal">Metal*</Form.Label>
                  <Form.Select size='lg' value={metalType} name="metal" id="metal" onChange={e=>{
                      setMetalType(e.target.value);
                    }}>
                    <option value="#" ></option>
                    <option value="XAU">Gold</option>
                    <option value="XAG">Silver</option>
                    <option value="PL">Platinum</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='currency'>
                  <Form.Label htmlFor="currency">Currency*</Form.Label>
                  <Form.Select size='lg' name="currency" id="currency" >
                    <option value="INR">INR Indian Rupee</option>
                    <option value="EUR">EUR	European Euro</option>
                    <option value="BTC">BTC	Bitcoin</option>
                    <option value="AUD">AUD	Australian Dollar</option>
                    <option value="USD">USD American Dollar</option>
                  </Form.Select>
                </Form.Group>
                {
                  metalType==="XAU" ?
                  <>
                    <Form.Group className='carat'>
                      <Form.Label htmlFor="carat">Carat*</Form.Label>
                      <Form.Select size='lg' name="carat" id="carat">
                        <option value="_24K">24 Carat</option>
                        <option value="_22K">22 Carat</option>
                        <option value="_21K">21 Carat</option>
                        <option value="_20K">20 Carat</option>
                      </Form.Select>
                    </Form.Group>
                  </> : null
                }
                {
                  metalType==="XAG" ?
                  <>
                    <Form.Group className='carat'>
                      <Form.Label htmlFor="carat">Carat*</Form.Label>
                      <Form.Select size='lg' name="carat" id="carat">
                        <option value="">Silver</option>
                        <option value="OPEN">Silver Open Price</option>
                      </Form.Select>
                    </Form.Group>
                  </> : null
                }
                <div className="input-container">
                  <div className='price'>{val}/g</div>
                  <button className="button" type='submit'>Check Price</button>
                </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
