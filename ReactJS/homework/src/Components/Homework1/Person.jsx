import React from 'react'

const Person = (props) => {

    const{avatar,first_name,last_name,address,karma,followers,posts,is_following} = props;

  return (
    <div>
        <img src={avatar}/>
        <h4>{first_name}</h4>
        <h4>{last_name}</h4>
        <p>{address}</p>
        <p>{karma}</p>
        <p>{followers}</p>
        <p>{posts}</p>
        <p>{is_following ? "Following" : "Not Following"}</p>


    </div>
  )
}

export default Person
