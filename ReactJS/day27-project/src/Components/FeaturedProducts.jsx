import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProducts = () => {
  return (
    <div className='pt-24 ml-2 lg:ml-4'>
<SectionTitle text="featured products"/>
<ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts