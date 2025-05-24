import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../Components/SectionTitle";
import { customFetch } from "../utils.js";
import OrdersList from "../Components/OrdersList.jsx";
import PaginationContainer from "../Components/PaginationContainer.jsx";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        headers: { Authorization: `Bearer ${user.token}` },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    if (!user) {
      toast.warn("You must login to check your orders");
      return redirect("/login");
    }

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error while placing the order";
      toast.error(errorMessage);
    }
  };

const Orders = () => {
  const data = useLoaderData();

  if (!data) {
    toast.error("No data available");
    return <SectionTitle text="No data available" />;
  }

  const { meta } = data;

  if (meta.pagination.total < 1) {
    return <SectionTitle title="Please make  an order" />;
  }

  return (
    <>
      <SectionTitle text="Here are your orders!!!" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};

export default Orders;
