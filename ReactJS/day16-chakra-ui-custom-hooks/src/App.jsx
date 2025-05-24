import { StarIcon } from '@chakra-ui/icons'
import {  Box, Center, Flex, Grid, Heading, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import Stars from './Stars'
import Card from './Card'
import ToggleComponent from './Components/ToggleComponent'
import Fetching from './Components/Fetching'
import SearchComponent from './Components/searchComponent'

const App = () => {
  return (
    <>
    <Box pt={1}  >
      
  <Grid justifyContent="center">
  <Box  >
        <img  style={{ width: "400px", height: "300px",borderRadius:'10px' }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHajbnt_ZDTXufkMfH_v_2P1J04DPIZwcew&s" alt="" />
      </Box>
      <Box pt={5}>
      <Flex columnGap={4}	>
      <Tag colorScheme='green'>NEW</Tag>
      <Text> 3 BEDS . 2 BATHS</Text>
      </Flex>
      </Box >
      <Box py={2}>
        <Heading fontSize='l'>Modern home in the city center in heart of historic L...
        </Heading>
        <p>$1,900.00/wk</p>
      </Box>
      {/* <Box>
      <Flex columnGap={4}>
      <Box>
      <StarIcon color='green.500' /><StarIcon color='green.500'/>
      <StarIcon color='green.500'/> <StarIcon color='green.500'/> <StarIcon color="gray.400"/>    </Box>
      <Box> 
        <text>34 reviews</text>
      </Box>
      </Flex>
      </Box> */}
      <Stars rating="3" reviewCount="34"/>
  </Grid>
    </Box>

    <Card title="This is TITLE1" style={{backgroundColor :"blue" , color:"white"}}>
    This is first child
    </Card>
    <Card title="This is TITLE2" style={{backgroundColor :"white" , color:"blue"}}>
    This is first child
    </Card>

    {/* <Fetching/> */}

    <ToggleComponent/>
    <SearchComponent/>

     </>

  )
}

export default App