import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function CardComponent(props) {
  const [threat,setThreat]=useState(false);
  useEffect(() => { 
    if(props.carNo === props.store){
      setThreat(true);
    }
    return () => {
    }
  }, [props.store, props.carNo])
  
  let btnStyle={
    border:'solid',
    color: "red",
  }
  let btnStyleFalse={
    border:'solid',
    color:'black'
  }


  return (
    <Card style={{ width: '19rem' , margin: '2rem' , display: 'inline-block'}}>
      <Card.Body className={threat ?'bg-danger' : 'bg-light'}>
        <Card.Title>{props.carNo}</Card.Title>
        <Card.Subtitle className="mb-2 ">{threat ?'Threat Detected' : 'No Threat Detected'}</Card.Subtitle>
        <Card.Text>
          The vehicle is in {props.location}.
        </Card.Text>
        {/* <Card.Link href="#" className='btn ' style={threat?btnStyle:btnStyleFalse}>Track Vehicle</Card.Link> */}
        <Button href="#" className='btn' variant="outline-secondary" style={threat?btnStyle:btnStyleFalse} >Track Vehicle</Button>
        {threat? <Card.Link href="tel:112" className='btn bg-light'> Call SOS </Card.Link> : ""}
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;