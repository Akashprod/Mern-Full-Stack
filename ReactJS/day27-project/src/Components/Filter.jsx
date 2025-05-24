import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-300 rounded-md px-8 py-4 grid  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center ">
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />

      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="Select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="Sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />

      <FormRange
        label="Select Price"
        name="price"
        size="range-sm"
        price={price}
      />

      <FormCheckBox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultChecked={shipping}
      />

      <button type="submit" className="btn btn-primary btn-sm ">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};

export default Filter;
