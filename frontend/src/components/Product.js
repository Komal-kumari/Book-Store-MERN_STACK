import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


const Product = ({ product }) => {
  return (
    <div >
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={{height:"22rem", padding:"2rem"}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <h5>{product.name}</h5>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <p></p>
        <Card.Text as='h4'>Rs. {product.price}</Card.Text>

        <p></p>
        <a class="btn btn-primary" href={`/product/${product._id}`} style={{width:"100%"}}><b>View Details</b></a>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product
