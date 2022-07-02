import type { NextPage } from "next";
import { useState } from "react";
import { useGetCustomerQuery, useGetAllCustomersQuery } from "../types";

const Customer: NextPage = () => {
  const [customerId, setCustomerId] = useState("1");

  const { data } = useGetCustomerQuery({
    variables: { id: customerId },
  });

  const { data: allData } = useGetAllCustomersQuery();

  return <h1>HI</h1>;
};

export default Customer;
