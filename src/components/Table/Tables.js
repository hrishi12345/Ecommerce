import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContextProvider from '../../store/context';
import { useContext } from 'react';

export default function Table(props) {
  const CartCtx=useContext(CartContextProvider)
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];
  const addToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };


  const items = productsArr.map((user) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.imageUrl} />
        <Card.Body>
          <Card.Title>{user.title}</Card.Title>
          <Card.Text>{user.price}</Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>Add To Cart</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      <Row>
        <Col md={6}>{items[0]}</Col>
        <Col md={6}>{items[1]}</Col>
      </Row>
      <Row>
        <Col md={6}>{items[2]}</Col>
        <Col md={6}>{items[3]}</Col>
      </Row>
    </Container>
  );
}
