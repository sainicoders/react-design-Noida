
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import amazon from './Images/amazon.png';
import girl from './Images/image 65.png';
function Thirdcard() {
  return (
    <>
    <div className='dress'>
        <u style={{color:"red"}}>Coupon By Categories</u>
        <div id="mess">
            <div className="pess">
            <CardGroup>
      <Card>
        <Card.Body>
        <Card.Img variant="top" src={girl} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Fashion
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Food
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Beauty
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Toys
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Cloud
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Gaming
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Phones
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Travel
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card>
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"30px",width:"70px"}} />
          
          <Card.Text >
          Movies
          </Card.Text>
        </Card.Body>
       
      </Card>
      
    
    </CardGroup>

            </div>
            <div className='less'>
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

    </div>
      
    </>
  )
}

export default Thirdcard
