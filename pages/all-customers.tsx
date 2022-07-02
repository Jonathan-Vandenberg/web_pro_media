import type { NextPage } from "next";
import { useGetAllCustomersQuery } from "../types";

const AllCustomers: NextPage = () => {
  const { data } = useGetAllCustomersQuery();
  return (
    <div>
      <main>
        {data?.getAllCustomers?.map((customer) => (
          <div key={customer?.id}>{customer?.name}</div>
        ))}
      </main>
    </div>
  );
};

export default AllCustomers;
