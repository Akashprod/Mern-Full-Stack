import React from 'react'
import day from "dayjs"
import { useLoaderData } from 'react-router-dom'

const OrdersList = () => {

const {orders,meta} =useLoaderData();

  return (
   <>
   <div className='mt-8'>
        <h4 className='mb-4 capitalize'>Total orders : {meta.pagination.total}</h4>

        <div className='overflow-x-auto'>
            <table className='table table-zebra'>
<thead>
    <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Products</th>
        <th>Cost</th>
        <th className='hidden sm:block'>Date</th>
    </tr>
</thead>

<tbody>
    {orders.map((order)=>{
        const id = order.id;
        const {name,address,numItemsInCart,orderTotal,createdAt} = order.attributes;
        const date = day(createdAt).format("hh:mm a - MMM DD,YYYY");
        return(
            <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{numItemsInCart}</td>
                <td>{orderTotal}</td>
                <td className='hidden sm:block'>{date}</td>
            </tr>
        )
    })}
</tbody>
            </table>
        </div>
   </div>
   </>
  )
}

export default OrdersList