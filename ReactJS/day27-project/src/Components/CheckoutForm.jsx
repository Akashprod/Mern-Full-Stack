import React from "react";
import { customFetch, formatPrice } from "../utils.js";
import { clearCart } from "../features/Cart/CartSlice";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { toast } from "react-toastify";

export const action =
  (store,queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;

    const { cartItem, orderTotal, numberOfItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems: cartItem,
      numItemsInCart: numberOfItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
        queryClient.removeQueries(["orders"])
        store.dispatch(clearCart());
    //   toast("Checkout successful");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error while placing the order";
      toast.error(errorMessage);
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col mx-auto gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput type="text" label="Name" name="name" />
      <FormInput type="text" label="Address" name="address" />
      <div className="mt-4">
        <SubmitBtn text="Please place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
