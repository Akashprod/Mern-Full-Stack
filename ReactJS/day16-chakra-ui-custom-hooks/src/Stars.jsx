import { StarIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Stars = ({rating, reviewCount}) => {
  return (
    <Box display="flex" mt="2" alignItems="center">
        {new Array(5).fill("").map((_,i)=>(
            <StarIcon key={i} color={i<rating ? "green.500" : "gray.500"}/>
        ))}
        {reviewCount}reviews
    </Box>
  )
}

export default Stars