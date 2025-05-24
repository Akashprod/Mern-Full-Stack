import React from 'react'
import { Form, useNavigation } from 'react-router'

const SearchForm = () => {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
        <Form action="" className='form' style={{display:"grid", gridTemplateColumns:"1fr auto"}}>
        <input type="text" name='search' className='form-input' defaultValue="margarita"/>
        <button type='submit' className='btn' disabled={isSubmitting}>
            {isSubmitting ? "Searching" : "Search"}
        </button>
        </Form>
       
    </div>
  )
}

export default SearchForm