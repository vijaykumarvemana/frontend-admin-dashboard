


import { useEffect, useState } from "react";
import { Row, Col, Container, Card, ListGroup, Form,Button, Alert } from "react-bootstrap";

const Transaction = ({match}) => {
    const id = match.params.id;

    const [transaction, setTransaction] = useState([])
    const [loading, setLoading] = useState(true)
   

    const [upTransaction, setUpTransaction] = useState({
    customerName: "",
    productName: "",
    Status: "",
    Amount: "",
    Date: "",
    })

    useEffect(() => {
            
fetchtransaction()
    }, [])

    const fetchtransaction = async () => {
        const data = await fetch(`http://localhost:3001/transactions/${id}`)
        const transaction = await data.json()
        console.log(transaction)
        setTransaction(transaction)
        setUpTransaction({ 
            customerName: transaction.customer.name,
            productName: transaction.product.name,
            Status: transaction.Status,
            Amount: transaction.Amount,
            Date: transaction.Date,
    }   )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await fetch(`http://localhost:3001/transactions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(upTransaction)
        })
        const transaction = await data.json()
        
        window.location.reload()
        console.log(transaction)
    }


    
    return (
       <Container className="mt-4 d-flex justify-content-between">
           
           <Row>
                <Col>
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Header>Transaction Details:</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Cutomer Name: {((transaction.customer)|| {}).name}</ListGroup.Item>
                    <ListGroup.Item>Product Name: {((transaction.product)||{}).name}</ListGroup.Item>
                    <ListGroup.Item>Amount: {transaction.Amount}</ListGroup.Item>
                    <ListGroup.Item>Status:{transaction.Status === "Pending" ? <h6 style={{color:'orange'}}>Pending</h6> : transaction.Status === "Accepted" ? <h6 style={{color:'green'}}>Accepted </h6>: transaction.Status === "Rejected" ? <h6 style={{color:'red'}}>Rejected </h6> :<h6>no data</h6>}</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="mx-5">
                    
                    
                <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Custmoner Name</Form.Label>
    <Form.Control type="text"
    disabled
    value={upTransaction.customerName}
    onChange={(e) => setUpTransaction({...upTransaction, customerName: e.target.value})}
    placeholder="customer name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" 
    disabled
    value={upTransaction.productName}
    onChange={(e) => setUpTransaction({...upTransaction, productName: e.target.value})}
    placeholder="product name" />
  </Form.Group>
  <Form.Group>
                        <Form.Label>Tranx Status?</Form.Label>
                        <Form.Control
                            as="select"
                            value={upTransaction.Status}
                            onChange={(e) => setUpTransaction({...upTransaction, Status: e.target.value})}
                        >
                            <option>Pending</option>
                            <option>Accepted</option>
                            <option>Rejected</option>
                          
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="text" 
    value={upTransaction.Amount}
    onChange={(e) => setUpTransaction({...upTransaction, Amount: e.target.value})}
   
    placeholder="Amount..." />
  </Form.Group>  
  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date</Form.Label>
    <Form.Control type="datetime-local"  disabled
    value={transaction.Date}
    onChange={(e) => setUpTransaction({...upTransaction, Date: e.target.value})}
    placeholder="Date..." />
    </Form.Group> */}


  
    
      <Button variant="success" className="my-2" type="submit">
    Submit
  </Button> 

</Form>

                </Col>
           </Row>
           
         </Container>
    );
    }

    export default Transaction;