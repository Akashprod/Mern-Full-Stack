import React, { useRef, useState } from 'react'

const FormSubmission2 = () => {

    const [formData,setFormData] = useState(null);
    const formRef = useRef({
        name : null,
        place : null,
        gender : null
    });

const handleSubmit = (event)=>{
    event.preventDefault();
    // console.log(formRef);

    const nameValue = formRef.current.name.value;
    const placeValue = formRef.current.place.value;
    const genderValue = formRef.current.gender.value;

    setFormData({
        name : nameValue,
        place : placeValue,
        gender : genderValue
    });

    formRef.current.name.value = '';
    formRef.current.place.value = '';
    formRef.current.gender.value = '';
}

    console.log("render");
    console.log(formData);
  return (
    <form action="" onSubmit={handleSubmit}>
        <div>

<label>Name <input type='text' ref={(element)=>{
    formRef.current.name = element;
}}/></label>
</div>
<div>
<label>Place <input type='text' ref={(element)=>{
    formRef.current.place = element;
}}/></label>
</div>
<div>
<label>Gender 
    <select ref={(element)=>{
    formRef.current.gender = element;
}}>
        <option value="">Choose the gender</option>
        <option value="">Male</option>
        <option value="">Female</option>
        <option value="">Prefer not to say</option>
    </select>
</label>
<button type='Submit'>Submit</button>
</div>



    </form>
  )
}

export default FormSubmission2