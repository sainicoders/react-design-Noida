import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import amazon from './Images/amazon.png';
function Verycardfour() {
  return (
    <>
    <div className='fourcard'>
        
           <u style={{color:"red"}}> Deals of the Day</u>


        <div className='copa'>
        <CardGroup>
      <Card>
    
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          <center>Amazon</center>
          <Card.Text style={{color:"green"}}>
          Flat 30% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      <Card>
      
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
        <center>Amazon</center>
          <Card.Text style={{color:"green"}}>
          Flat 30% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      
      <Card>
     
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
        <center>Amazon</center>
          <Card.Text style={{color:"green"}}>
          Flat 30% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
    
      <Card>
      
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
        <center>Amazon</center>
          <Card.Text style={{color:"green"}}>
          Flat 30% off
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
    </CardGroup>

        </div>

    </div>
      
    </>
  )
}

export default Verycardfour
