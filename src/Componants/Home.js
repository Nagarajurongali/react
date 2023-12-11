import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img123 from './images/img123.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <div>
      <div>
    <Carousel>
      <Carousel.Item>
        <img src={Img123} height={500} width={1400}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img123} height={500} width={1400} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img123} height={500} width={1400} />
      </Carousel.Item>
    </Carousel>
    </div><br/>
    <div className='container row'>
      <div className='col-sm-4'>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
      </div>
      <div className='col-sm-4'>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
      </div>
      <div className='col-sm-4'>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
      </div>
    
    </div>
    </div>

    
  );
  
}

export default Home;