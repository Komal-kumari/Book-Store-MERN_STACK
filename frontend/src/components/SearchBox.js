import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Books...'
        className='mr-sm-2 ml-sm-5'
        style={{width:"18rem", height:"2rem"}}
      ></Form.Control>
      <Button type='submit' variant='outline-info' className='p-1'  >
      <i class="fas fa-search"> Search</i> 
        
      </Button>
    </Form>
  )
}

export default SearchBox
