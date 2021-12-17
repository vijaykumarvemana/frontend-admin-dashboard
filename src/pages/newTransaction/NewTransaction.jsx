// import {useEffect, useState} from 'react';

// const NewTransaction = () => {
//     const BASE_URL = process.env.REACT_APP_API_URL;
//     const [customData, setCustomData] = useState([]);
//     const [product, setProduct] = useState([]);
// const [transaction, setTransaction] = useState({
//     customer: "",
//     product: "",
//     Amount: null,
//     Status: "",
//     revenue: null,
//     cost: null,
//     profit: null,
// })

//     useEffect(() => {
//         fetchCustomData();
//         fetchProduct();
//     }, []);

//     const fetchCustomData = async () => {
//         const response = await fetch(`${BASE_URL}/customers`);
//         const data = await response.json();
//         setCustomData(data);
//         console.log(data);
//     }

//     const fetchProduct = async () => {
//         const response = await fetch(`${BASE_URL}/products`);
//         const data = await response.json();
//         setProduct(data);
//         console.log(data);
//     }

    









//     return (
//         <Container >
//             <Row>
//                 <Col md={6}>

//                 <Form onSubmit={handleSubmit}>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Custmoner</Form.Label>
//     <Form.Control type="text"
//     disabled
//     value={upTransaction.customerName}
//     onChange={(e) => setUpTransaction({...upTransaction, customerName: e.target.value})}
//     placeholder="customer name" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Product</Form.Label>
//     <Form.Control type="text" 
//     disabled
//     value={upTransaction.productName}
//     onChange={(e) => setUpTransaction({...upTransaction, productName: e.target.value})}
//     placeholder="product name" />
//   </Form.Group>
//   <Form.Group>
//                         <Form.Label>Tranx Status?</Form.Label>
//                         <Form.Control
//                             as="select"
//                             value={upTransaction.Status}
//                             onChange={(e) => setUpTransaction({...upTransaction, Status: e.target.value})}
//                         >
//                             <option>Pending</option>
//                             <option>Accepted</option>
//                             <option>Rejected</option>
                          
//                         </Form.Control>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Amount</Form.Label>
//     <Form.Control type="text" 
//     value={upTransaction.Amount}
//     onChange={(e) => setUpTransaction({...upTransaction, Amount: e.target.value})}
   
//     placeholder="Amount..." />
//   </Form.Group>  
  


  
    
//       <Button variant="success" className="my-2" type="submit">
//     Submit
//   </Button> 

// </Form>

//                     </Col>
//                     </Row>
//         </Container>
//     );
//     }

//   export default NewTransaction;  