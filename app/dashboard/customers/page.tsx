import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";



const Customers = async({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) => {
    const customers = await fetchFilteredCustomers(query);

    return ( <div>
        <CustomersTable customers={customers}/>
    </div> );
}
 
export default Customers;