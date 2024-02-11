import React from 'react'
import popu from './Images/Vector-1.png';
import end from './Images/Vector-2.png';
import late from  './Images/Vector-3.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import amazon from './Images/amazon.png';
import Button from 'react-bootstrap/Button';
function Verycard() {
  return (
    <>
    <div className='decard'>
        <div className='chcard'>
             <img src={popu} alt=""/><span style={{color:"red"}}>popular Coupons</span>
            <img src={end} alt=""/><span>Ending Soon</span>
            <img src={late} alt=""/><span>Latest Coupons</span>


        </div>
        <div className='incard'>
            <div className='fourcard'>
            <CardGroup>
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
    
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
    </CardGroup>

            </div>
            <div className='fourcard2'></div>
            <CardGroup>
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
      
      
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="danger" style={{width:"200px"}}>GRAB NOW</Button>{' '}
        </Card.Footer>
      </Card>
    
      <Card>
      <Card.Title style={{color:"green"}}>Upto 60% off on Appliances</Card.Title>
      
        <Card.Body>
        <Card.Img variant="top" src={amazon} style={{height:"40px",width:"150px"}} />
          
          <Card.Text>
          Upto 60% off on Summer Appliances
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

export default Verycard
