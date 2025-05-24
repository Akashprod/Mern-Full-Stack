import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "no",
  favColors: [
    { color: "Red", checked: false },
    { color: "Blue", checked: false },
    { color: "Green", checked: false },
  ],
};

const FormSubmission = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event,index) => {
    // console.log(event.target);
    const { name, value,checked } = event.target;
    // console.log(name, value);
    if(name==="favColors"){
      const newFavColors = [...formState.favColors];
      newFavColors[index].checked = checked;
      setFormState({...formState,favColors:newFavColors});
    }
    else{    setFormState({ ...formState, [name]: value });
  }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // setFormState(initialValue);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter userName"
          onChange={handleChange}
          name="userName"
          value={formState.userName}
        />
        <select
          onChange={handleChange}
          name="country"
          value={formState.country}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="usa">USA</option>
        </select>

        <label>
          <input
            type="radio"
            onChange={handleChange}
            value="yes"
            name="isMarried"
            checked={formState.isMarried === "yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            onChange={handleChange}
            value="no"
            name="isMarried"
            checked={formState.isMarried === "no"}
          />
          No
        </label>

        {formState.favColors.map((colorObj, index) => {
          return (
            <label key={index}>
              <input type="checkbox"
              name="favColors"
              checked={colorObj.checked}
              onChange={(event)=>{
                handleChange(event,index);
              }}
              />
              {colorObj.color}
            </label>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormSubmission;
