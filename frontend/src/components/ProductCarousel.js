import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-transparent'>
      {/* {products.map((product) => ( */}
        <Carousel.Item >
          <Link to='/'>
            <Image src='/images/carusol1.jpg' fluid/>
            <Carousel.Caption className='carousel-caption'>
              <h2>
                 Books you want
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item >
          <Link to='/'>
            <Image src='/images/carusol3.jpg' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                VIEW Books
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to='/'>
            <Image src='/images/carusol4.jpg' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Search for Books
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item >
          <Link to='/'>
            <Image src='/images/carusol2.jpg' fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Add your Books
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      {/* ))} */}
    </Carousel>
  )
}

export default ProductCarousel
