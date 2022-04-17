import React from 'react'
import {Row,Col} from 'react-bootstrap';
export const Test = () => {
  return (
    <Row style={{backgroundColor:'purple',width:'100%'}}>
        <Col >
        <div style={{height:'70vh',width:'100%',backgroundColor:'yellow',margin:'3px'}}> 
        <img style={{height:'70vh',width:'100%',objectFit:'contain'}} src='/assets/img/category.png'/>
        </div>
        </Col>
        <Col>
        <div style={{height:'70vh',width:'100%',backgroundColor:'green',margin:'3px'}}> 
        <img style={{height:'70vh',width:'100%',objectFit:'contain'}} src='/assets/img/carcategory.png'/>
        </div>

        </Col>
        <Col>
        <div style={{height:'70vh',width:'100%',backgroundColor:'pink',margin:'3px'}}> 
        <img style={{height:'70vh',width:'100%',objectFit:'contain'}} src='/assets/img/watchcategory.png'/>
        </div>
        </Col>
        <Col>
        <div style={{height:'70vh',width:'100%',backgroundColor:'gray',margin:'3px'}}> 
        <img style={{height:'70vh',width:'100%',objectFit:'cover'}} src='/assets/img/nikeshoescategory.png'/>
        </div>
        </Col>
    </Row>
  )
}
