import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {

const error = useRouteError();
console.log(error);

if(error.status === 404){
  return(
    <main className='grid min-h-[100vh] place-items-center px-8'>
<div className='text-center'>
  <img className='mb-6 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIu9qKqs0_VMp5627wBcrrcE1Ks3vZilRmQ&s" alt="" />
  <p className='text-4xl font-semibold text-primary'>404</p>
<p className='mt-4 text-3xl font-bold tracking-tighter sm:text-2xl'>Page not found</p>
<p className='mt-6 text-lg leasing-7'>Sorry, we couldn't find the page you are looking for...</p>
<div className='mt-10'><Link className='btn btn-secondary'>Go Back Home</Link></div>
</div>
    </main>
  )
}

  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
<div className='text-center'>
    <p className='mt-6 text-lg leasing-7'>There was an error, please check...</p>
    </div>
    </main>
  )
}

export default Error