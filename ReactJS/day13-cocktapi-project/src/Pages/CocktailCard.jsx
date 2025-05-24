import React from 'react'
import { Link } from 'react-router'
import Wrapper from '../Wrappers/CocktailCard'

const CocktailCard = ({id,image,name,info,glass}) => {
  return (
    <Wrapper>
        <div className='img-container'>
            <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link className='btn' to={`/cocktail/${id}`}>Details</Link>
    </Wrapper>
  )
}

export default CocktailCard